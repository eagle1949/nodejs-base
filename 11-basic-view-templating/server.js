/*
* @Author: caijw
* @Date:   2017-08-04 16:31:26
* @Last Modified by:   caijw
* @Last Modified time: 2017-08-04 17:21:22
*/

'use strict';
const express = require('express');
const favicon = require('serve-favicon');

const app = express();
const staticAssets = __dirname + '/public';
//const faviconPath = __dirname + '/public/favicon.ico';

app
  .set("views", __dirname + "/views")
  .set('view engine', 'hjs')
  .use(express.static(staticAssets))
  //.use(favicon(faviconPath))
  .get('/', (req, res) => {
  	var title = "still another title";
  	var tweets = [ 
  	  "my first tweet",
      "other tweet",
      "yet another tweet",
    ];
    res.render('index', {
    	title: title,
    	tweets: tweets,
    	showTweets: true,
      //模板替換，公用的
    	partials: {header: "header", tweets: "tweets"}
    })
  });
app.listen(3000);
console.log('listen 3000');