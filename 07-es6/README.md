#### es6写法
1.下载babel-register
```
npm install babel-register -S
```
2.下载babel-preset-es2015
```
npm install babel-preset-es2015 --save-dev
```
main.js
```
require('babel-register');
require('./src/server');
```
server.js
```
import http from 'http';
import { homepage, notFound } from './handlers';

const server = http.createServer((request, response) =>{
	homepage(request, response);
});

server.listen(3000);
console.log('listen 3000');
```
handlers.js
```
export function homepage(request, response){
	response.setHeader("Content-Type", "text/html");
    response.end("hello world");
}

export function notFound(request, response){
	response.setHeader("Content-Type", "text/html");
    response.end("404");
}
```
