const express = require('express');
const router = express.Router();
const vendorJson = require('../data/vendor.json');

//Get All VendorLocations
router.get('/', function (req, res) {
    res.json(vendorJson);
});

module.exports = router;