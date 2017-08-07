/*
* @Author: caijw
* @Date:   2017-07-30 10:44:04
* @Last Modified by:   caijw
* @Last Modified time: 2017-07-30 10:52:32
*/

'use strict';

var _ = require('lodash');
var axios = require('axios');

axios.get('http://rest.learncode.academy/api/myuser/friends').then((res) => {
	console.log(res.data);
	var jake = _.find(res.data, {name: "Jake"});
	console.log(jake);
})