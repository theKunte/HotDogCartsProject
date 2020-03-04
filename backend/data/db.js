var express = require("express");
var mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Castle27",
  database: "HotDogDatabase"
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log("Database Connected");
});

module.exports = db;
