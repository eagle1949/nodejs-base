/*
* @Author: caijw
* @Date:   2017-08-04 14:48:10
* @Last Modified by:   caijw
* @Last Modified time: 2017-08-07 14:23:16
*/

'use strict';

const express = require('express');
//引入express
const app = express();

app
  .use((req, res, next) => {
  	var profile = {name: "will"};
  	req.profile =  profile;
  	next();
  })
  .get("/", (req, res) => {
  	res.send(req.profile);
  })

app.listen(3000);
console.log('listen 3000');