/*
* @Author: caijw
* @Date:   2017-08-04 15:14:21
* @Last Modified by:   caijw
* @Last Modified time: 2017-08-04 15:17:04
*/

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const app = express();

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: false}))
  .use('/users', users);

app.listen(3000);