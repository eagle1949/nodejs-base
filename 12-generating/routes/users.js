/*
* @Author: caijw
* @Date:   2017-08-06 22:21:18
* @Last Modified by:   caijw
* @Last Modified time: 2017-08-06 22:22:12
*/

'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;