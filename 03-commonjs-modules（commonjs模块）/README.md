###commonjs模块
####1.首先建一个math.js
```
exports.add = function(a, b){
	return a + b;
}

exports.sub = function(a, b){
	return a - b;
}

exports.mul = function(a, b){
	return a * b;
}
```
####2.然后建一个app.js 引人math.js

```
var math = require('./math');
console.log(math);//{ add: [Function], sub: [Function], mul: [Function] }
var command = process.argv[2];
var a = Number(process.argv[3]);
var b = Number([process.argv[4]]);
var value = math[command](a, b);
console.log(value);//node app.js mul 1 2 结果为2
```