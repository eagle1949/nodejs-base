### 最简单的服务
创建server.js
```
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
```
handlers.js
```
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
```
