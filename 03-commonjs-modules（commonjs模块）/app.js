/*
* @Author: caijw
* @Date:   2017-07-29 22:20:17
* @Last Modified by:   caijw
* @Last Modified time: 2017-07-29 22:30:00
*/

'use strict';

var math = require('./math');

console.log(math);//{ add: [Function], sub: [Function], mul: [Function] }
var command = process.argv[2];
var a = Number(process.argv[3]);
var b = Number([process.argv[4]]);
var value = math[command](a, b);
console.log(value);//node app.js mul 1 2 结果为2

