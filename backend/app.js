var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var session = require('express-session');

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var vendorRouter = require("./routes/vendor");
var incomingOrdersRouter = require("./routes/incomingOrders");
var vendorLocationRouter = require("./routes/vendorLocation");
var adminRouter = require("./routes/admin");
var app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// errors
app.use((req, res, next) => {
    var err = new Error('Page no found');
    err.status = 404;
    next(err);
});

// handling errors
app.use((err, req, res, next) => {
res.status(err.status || 500);
res.send(err.message);
});


app.use("/", indexRouter);
app.use("/users", usersRouter);
//app.use("/register", registerRouter);
app.use("/vendor", vendorRouter);
app.use("/incomingOrders", incomingOrdersRouter);
app.use("/vendorLocation", vendorLocationRouter);
app.use("/admin", adminRouter);


app.set('frontend', path.join(__dirname, 'frontend'));
app.set('frontend engine', 'react');

// session
app.use(session ({
    secret: 'HotDogCart',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 1000 * 30
    }
}));


app.listen(3000, () => {
    console.log('Server is running on port 3000...');
})


module.exports = app;
