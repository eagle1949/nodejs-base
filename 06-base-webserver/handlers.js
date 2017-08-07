/*
* @Author: caijw
* @Date:   2017-08-01 21:45:09
* @Last Modified by:   caijw
* @Last Modified time: 2017-08-01 21:54:56
*/

'use strict';
//首页
exports.homepage = function(request, response){
	response.setHeader('Content-Type', 'text/html');
	response.end('<h1>helloworld</h1>')
}
//一个接口
exports.profile = function(request, response){
	var profile = {
		name : 'will',
		age : 35
	}
	response.setHeader('Content-Type','application/json');
	response.end(JSON.stringify(profile));
}

//404
exports.notFound = function(request, response) {
  response.statusCode = 404;
  response.setHeader("Content-Type", "text/html");
  response.end("<h1>404 Not Found!</h1>");
}