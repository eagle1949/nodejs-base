/*
* @Author: caijw
* @Date:   2017-08-04 16:21:44
* @Last Modified by:   caijw
* @Last Modified time: 2017-08-04 16:58:54
*/

'use strict';

const express = require('express');
const favicon = require('serve-favicon');

const app = express();
//静态文件
const staticAssets = __dirname + '/public';
//ico地址
const faviconPath = __dirname + '/public/favicon.ico';

app
  .use(express.static(staticAssets))
  .use(favicon(faviconPath))
  .get('/api/profile', (req, res) => {
  	var profile = {name: 'will'};
  	res.send(profile);
  });

app.listen(3000);