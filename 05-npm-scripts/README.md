###npm scripts
####简单介绍
scripts里面的
"start": "node app"
npm run start 相当于 node app
```
{
  "name": "5-npm-scripts",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "dependencies": {},
  "devDependencies": {
    "nodemon": "^1.9.2"
  },
  "scripts": {
    "start": "node app",
    "dev": "nodemon app",
    "test": "node test",
    "test-watch": "nodemon test"
  },
  "author": "",
  "license": "ISC"
}

```
####更加详细的介绍，建议看阮一峰的scripts介绍
<a href="http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html" target="_blank">npm scripts 使用指南</a>
####nodemon
这个可以监控js变化
####eg
app.js
```
'use strict';
var math = require('./math');
var value = math.add(5, 6);
console.log(value);
```
math.js
```
exports.add = function(a, b) {
  return a + b;
}

exports.subtract = function(a, b) {
  return a - b;
}

exports.multiply = function(a, b) {
  return a * b;
}

```
test.js
```
'use strict';

var assert = require('assert');

var math = require('./math');

assert(math.add(3, 4) === 7);
assert(math.subtract(3, 4) === -1);
assert(math.multiply(3, 4) === 12);

console.log("all tests passed!");
```

