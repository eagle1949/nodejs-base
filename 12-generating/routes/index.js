/*
* @Author: caijw
* @Date:   2017-08-06 22:21:11
* @Last Modified by:   caijw
* @Last Modified time: 2017-08-06 22:22:00
*/

'use strict';

var express = require('express');

var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;