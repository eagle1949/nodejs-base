/*
* @Author: caijw
* @Date:   2017-07-29 21:56:35
* @Last Modified by:   caijw
* @Last Modified time: 2017-07-29 21:59:34
*/

'use strict';

var command = process.argv[2];
var a = Number(process.argv[3]);
var b = Number(process.argv[4]);

if (command === 'add') {
	console.log(a+b);
} else if (command === 'sub'){
	console.log(a-b);
} else if (command === 'mul'){
	console.log(a*b);
}