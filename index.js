var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res) {
    console.log('hit index.js');
    res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

module.exports = router;
