var express = require("express");
var router = express.Router();
var path = require('path');

router.get("/",function(req,res){
  console.log('hit contact.js');
  res.sendFile(path.join(__dirname, '../public/views/contact.html'));});

module.exports = router;
