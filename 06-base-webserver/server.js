/*
* @Author: caijw
* @Date:   2017-08-01 21:45:22
* @Last Modified by:   caijw
* @Last Modified time: 2017-08-01 21:56:16
*/

'use strict';
//http模块
var http = require('http');
//封装的方法
var handlers = require('./handlers');

//创建服务
var server = http.createServer(function(request, response) {
	//url地址
	var url = request.url;

	if(url === '/'){
		handlers.homepage(request, response);
	}else if (url === "/profile") {
	    handlers.profile(request, response);
	} else {
	    handlers.notFound(request, response);
	}
});
//端口3000
server.listen(3000);
console.log('start 3000');