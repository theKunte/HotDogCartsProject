var express = require("express");
var mysql = require("mysql");
var util = require('util');


var db = mysql.createConnection({
  host: "localhost",
  user: "root",
<<<<<<< HEAD
  password: "28Jun2008#",
=======
  password: "password",
>>>>>>> 22f1cc557b550564c289583b6a0d5b4d023f5eae
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
