var express = require("express");
var router = express.Router();
let logJson = require("../data/log.json");
let vendorsJson = require("../data/vendor.json");
let ordersJson = require("../data/incomingOrders.json");
let menuitemsJson = require("../data/menuitems.json");
let db = require("../data/db");

//Send back the Cart vendors when admin goes to cart locations
router.get("/vendors", function(req, res, next) {
  let sql = "Call ShowLocation";
  db.query(sql, (err, rows) => {
    if (err) throw err;
    else {
      console.log(rows[0].length);
    }
    res.send(rows[0]);
  });
});

//We have to do something with input from add cart
router.get("/addcart", function(req, res, next) {
  res.send("You should be able to type something in and send it to databse");
  //send cart to database
});

//We have to do something with input from add cart
router.get("/removecart", function(req, res, next) {
  var vendors = JSON.stringify(vendorsJson);
  var vendorsAndComment = vendors.concat(
    "\n They should also be able to toggle availability which will be reflected in the database."
  );
  res.send(vendorsAndComment);
});

//Get logs when admin goes to logs
router.get("/log", function(req, res, next) {
  let sql = "Call ShowLog";
  db.query(sql, (err, rows) => {
    if (err) throw err;
    else {
      console.log(rows[0].length);
    }
    res.send(rows[0]);
  });
});

//Send back the orders when the admin selects incoming orders
router.get("/orders", function(req, res, next) {
  let sql = "Call ShowOrder";
  db.query(sql, (err, rows) => {
    if (err) throw err;
    else {
      console.log(rows[0].length);
    }
    res.send(rows[0]);
  });
});

router.get("/menu", function(req, res, next) {
  let sql = "Call ShowMenu";
  db.query(sql, (err, rows) => {
    if (err) throw err;
    else {
      console.log(rows[0].length);
    }
    res.send(rows[0]);
  });
});

module.exports = router;
