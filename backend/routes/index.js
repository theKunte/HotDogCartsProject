var express = require('express');
var router = express.Router();
var User = require('../data/user');

const user = new User();

/* GET index page. */
router.get('/', function(req, res, next) {
  let user = req.session.user;
  if(user) {
    res.redirect('/home');
    return;
  }
});

// get the home page
router.get('/home', function(req, res, next) {
  let user = req.session.user;
  if(user) {
    res.render('home', {opp:req.session.opp, firstname:user.firstname, lastname: user.lastname});
    return;
  }
  res.redirect('/');
});


router.post('/',(req, res) => {
  let data = {firstname: req.body.name, lastname: req.body.lastname, email: req.body.email, password: req.body.password, usertype: req.body.usertype};
  let sql = "INSERT INTO user SET ?";
  let query = db.query(sql, data,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });

// get the sign up page
router.get('/registerpage', (req, res, next) => {
  res.send('Sign up')
});

// post login page data
router.post('/loginPage', (req, res, next) => {
  user.login(req.body.email, req.body.password, (result) => {
    if(result) {

      req.session.user = result;
      req.session.opp = 1;
      res.redirect('/home');
    } else {
      res.send('email/password incorrect!')
    }
  })
});

// post register data
router.post('/registerPage', (req, res, next) => {
    let userInput = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password
    };

    user.create(userInput, function(lastUserID) {
      if(lastUserID) {
        user.find(lastUserID, function(result) {
          req.session.user = result;
          req.session.opp = 0;
          res.redirect('/loginPage')
        })
      } else {
        console.log('Error creating a new user ...')
      }
    })
})



});
module.exports = router;
