const express = require('express');
const router = express.Router();
const vendorJson = require('../data/vendor.json');
const vendorLocationJson = require('../data/vendorLocation.json');


//Get All Vendor
router.get('/', function (req, res) {
    res.json(vendorJson);
});



//Get All vendor Locations

router.get('/',function(req, res){
    res.json(vendorLocationJson);

});

//Get All vendor MenuItems
router.get('/',function(req,res){
    res.json(incomingOrderJson);
})


module.exports = router;