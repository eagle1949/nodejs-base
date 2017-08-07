/*
* @Author: caijw
* @Date:   2017-07-30 11:28:04
* @Last Modified by:   caijw
* @Last Modified time: 2017-07-30 11:37:08
*/

'use strict';

var assert = require('assert');

var math = require('./math');

assert(math.add(3, 4) === 7);
assert(math.subtract(3, 4) === -1);
assert(math.multiply(3, 4) === 12);

console.log("all tests passed!");
