var express = require('express');
var mysql = require('mysql');
var db = require('./db');
//var bcrypt = require('bcrypt');


function User() {};

User.prototype = {
  // find user data by Id or username
  find : function(user = null, callback)
  {
    // if user = number return field = id, if user = string return field = email
    if(user) {
        var field = Number.isInteger(user) ? 'UserID' : 'email';
    }
    let sql = `SELECT * FROM User WHERE ${field} = ?`;

    db.query(sql, user, function(err, result){
      if(err) throw err
      claaback(result);
    });
  },



  create : function(body, callback)
  {
    let pwd = body.password;
    body.password = bcrypt.hashSync(pwd, 10);

    var bind = [];
    for(prop in body){
        bind.push(prop);
    }
    let sql = `INSERT INTO User(firstname, lastname, email, password, usertype) VALUES (?, ?, ?, ?, ?)`;

    db.query(sql, bind, function(err, lastUserID) {
      if(err) throw err;
      callback(lastUserID);
    })
  },

  login : function(email, password, callback)
  {
    history.find(email, function(result) {
        if(user) {
          if(bcrypt.compareSync(password, user.password)) {
            callback(result);
            return;
          }
        }
        callback(null);
    })
  }
}



  
module.exports = User;