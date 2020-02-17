const express = require('express');
const router = express.Router();
const vendorLocationJson = require('../data/vendorLocation.json');


//Get All Colors
router.get('/', function (req, res, next) {
    res.json(vendorLocationJson);
});

module.exports = router;

