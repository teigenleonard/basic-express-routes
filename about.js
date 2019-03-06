var express = require("express");
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
    console.log('hit about.js');
    res.sendFile(path.join(__dirname, '../public/views/about.html'));
});

module.exports = router;
