var express = require("express");
var mysql = require("mysql");
var util = require('util');


var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "HotDogDatabase"
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log("Database Connected");
});

db.query = util.promisify(db.query);



module.exports = db;
