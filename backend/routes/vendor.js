var express = require("express");
var router = express.Router();
let vendorJson = require("../data/vendor.json");
let orderJson = require("../data/incomingOrders.json");
let menuitemsJson = require("../data/menuitems.json");
let db = require("../data/db");

//shows cartlocation of vendor
router.get("vendors", function(req, res, next) {
  let sql = "Call ShowLocation";
  db.query(sql, (err, rows) => {
    if (err) throw err;
    else {
      console.log(rows[0].length);
    }
    res.send(rows[0]);
  });
});

// This should send bacl orders when vendor selects incoming orders
router.get("/orders", function(req, res, next) {
  let sql = "Call ShowOrder";
  db.query(sql, (err, rows) => {
    if (err) throw err;
    else {
      console.lof(rows[0].length);
    }
    res.send(rows[0]);
  });
});

//Get All Vendor
router.get("/", function(req, res) {
  res.json(vendorJson);
});

//Get All vendor Locations

router.get("/", function(req, res) {
  res.json(vendorLocationJson);
});

//Get All vendor MenuItems
router.get("/", function(req, res) {
  res.json(incomingOrderJson);
});

router.get("/menu", function(req, res, next) {
  let sql = "Call ShowMenu";
  db.query(sql, (err, rows) => {
    if (err) throw err;
    else {
      console.log(rows[0]);
    }
    res.send(rows[0]);
  });
});

router.get("/vendorusers", function(req, res, next) {
  let sql = "SELECT firstname, lastname FROM USER;";
  db.query(sql, (err, rows) => {
    if (err) throw err;
    else {
      console.log(rows);
    }
    res.send(rows);
  });
});

//We have to do something with input from add Item
router.get("/removeItem", function(req, res, next) {
  var vendors = JSON.stringify(vendorsJson);
  var vendorsAndComment = vendors.concat(
    "\n They should also be able to toggle availability which will be reflected in the database."
  );
  res.send(vendorsAndComment);
});
module.exports = router;
