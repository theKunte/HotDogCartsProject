var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

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

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/vendor", vendorRouter);
app.use("/incomingOrders", incomingOrdersRouter);
app.use("/vendorLocation", vendorLocationRouter);
app.use("/admin", adminRouter);

module.exports = app;
