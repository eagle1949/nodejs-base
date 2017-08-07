## 01-nodejs介绍
####1.什么是nodejs
```
1.（javascript跑在机器端，服务端）Javascript on the machine  
2.（跑在谷歌v8引擎上）A runtime for Google Chrome's V8 Javascript engine
```
####2.nodejs的使用
```
1.构建工具（gulp，webpack都要依赖nodejs）Build Tools and Utilities
2.（web应用，web服务端）Web Applications / Web Services
```
####3.nodejs擅长做什么
```
1.轻量级到大型应用 Lightweight Applications all the way up to very large
2.高并发性 High Concurrency
3.异步 Asyncronous Actions/Requests/non-blocking
4.实时 Realtime Communication
5.同构应用Isomorphic Applications - shared code between server and client 
```

## 02rounning-files
####1.安装
app.js
```
'use strict';
//process.argv 接受变量
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
```
CMD运行
```
node app.js add 1 2 //3
node app.js sub 1 2 //-1
node app.js mul 1 2 //2
```

## 03-commonjs-moudules
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

## 04-npm-moudulers
####建立package.json
```
npm init
```
####下载包
```
npm install axios
npm install lodash
```
####下载包，并加到package里面
```
npm install axios -S
npm install lodash -S
```
###axios使用介绍<a href="https://github.com/mzabriskie/axios">传送门</a>
###lodash使用介绍<a href="http://lodashjs.com/docs/">传送门</a>
###建app.js
```
var _ = require('lodash');
var axios = require('axios');

axios.get('http://rest.learncode.academy/api/myuser/friends').then((res) => {
  console.log(res.data);
  var jake = _.find(res.data, {name: "Jake"});
  console.log(jake);//{ name: 'Jake', age: '32', id: '57766a9a4a9cb90100bf16ec' }
})
```

## 05-npm script
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



## 06-base-webserver
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


## 07-es6
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



## 08-express
<a href="https://expressjs.com/" target="_blank">express官网传送门</a>
####express 简单介绍
下载express
```
npm install express -S
```
简单的例子
```
const express = require('express');
//引入express
const app = express();
//链式结构，中间件，必须要有next才能执行下一步
app
  .use((req, res, next) => {
  	var profile = {name: "will"};
  	req.profile =  profile;
  	next();
  })
  .get("/", (req, res) => {
  	res.send(req.profile);
  })
//监听端口3000
app.listen(3000);
console.log('listen 3000');
```

## 09-routes的使用
新建一个users.js,然后app.use使用这个中间件
```
const users = require('./routes/users');
app.use('/users', users);
```
users.js
```
const express = require('express');
const router = express.Router();

router
  .get("/", (req, res) => {
    res.send(users);
  })
  .get("/:id", (req, res) => {
  	const { id } = req.params;
  	const user = users.find(user => user.id == id)

  	if (user) {
  		res.send(user);
  	} else {
  		res.status(404).send(`User ${id} does not exist`);
  	}
  })
  .delete('/:id', (req, res) => {
  	const { id } = req.params;
  	const index = users.findIndex(user => user.id == id);

  	if (index > -1){
  		users.splice(index, 1);
  		res.sendStatus(200);
  	} else　{
  		res.status(404).send(`User ${id} does not exist`);
  	}
  });

module.exports = router;

var users = [{
  "id": 1,
  "first_name": "Gregory",
  "last_name": "Garcia",
  "email": "ggarcia0@list-manage.com",
  "gender": "Male",
  "ip_address": "23.180.99.244"
}]
```

## 10-static静态文件
下载serve-favicon
```
npm install serve-favicon -S
```
静态文件
```
const staticAssets = __dirname + '/public';
```
ico地址
```
const favicon = require('serve-favicon');
const faviconPath = __dirname + '/public/favicon.ico';
```
使用
```
app
  .use(express.static(staticAssets))
  .use(favicon(faviconPath))
```
完整代码
```
const express = require('express');
const favicon = require('serve-favicon');
const app = express();
//静态文件
const staticAssets = __dirname + '/public';
//ico地址
const faviconPath = __dirname + '/public/favicon.ico';
app
  .use(express.static(staticAssets))
  .use(favicon(faviconPath))
  .get('/api/profile', (req, res) => {
    var profile = {name: 'will'};
    res.send(profile);
  });
app.listen(3000);
```

## 11-hjs模板引入
下载hjs
```
npm install hjs -S
```
express中引入
```
app
.set("views", __dirname + "/views")
.set('view engine', 'hjs')
```
渲染
```
var title = "still another title";
  var tweets = [ 
    "my first tweet",
    "other tweet",
    "yet another tweet",
  ];
res.render('index', {
      title: title,
      tweets: tweets,
      showTweets: true,
      //模板替換，公用的
      partials: {header: "header", tweets: "tweets"}
    })
```
views/header.hjs
```
<h1>title</h1>
```
views/tweets.hjs
```
<ul>
  {{#tweets}}
    <li>{{.}}</li>
  {{/tweets}}
</ul>
```
views/index.hjs
```
<html>
  <head>
    <link rel="stylesheet" href="/css/main.css">
  </head>
  <body>
    {{> header}}
    {{#showTweets}}
      {{> tweets}}
    {{/showTweets}}
    <script src="/js/main.js"></script>
  </body>
</html>
```
server.js完整代码
```
'use strict';
const express = require('express');
const favicon = require('serve-favicon');

const app = express();
const staticAssets = __dirname + '/public';
//const faviconPath = __dirname + '/public/favicon.ico';

app
  .set("views", __dirname + "/views")
  .set('view engine', 'hjs')
  .use(express.static(staticAssets))
  //.use(favicon(faviconPath))
  .get('/', (req, res) => {
    var title = "still another title";
    var tweets = [ 
      "my first tweet",
      "other tweet",
      "yet another tweet",
    ];
    res.render('index', {
      title: title,
      tweets: tweets,
      showTweets: true,
      //模板替換，公用的
      partials: {header: "header", tweets: "tweets"}
    })
  });
app.listen(3000);
console.log('listen 3000');
```

## 12-mysql
####连接mysql数据库，终于到了这步。
mysql 下载
```
npm install mysql -S
```
knex下載 <a href="https://github.com/tgriesser/knex" target="_balnk">knex传送门</a>
```
npm install knex -S
```

链接mysql
```
const db = knex({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    database: 'test_node',
    password: 'youpassword'
  }
})
```
完整代码
```
const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');

const db = knex({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    database: 'test_node',
    password: 'youpassword'
  }
})

// GET /users 获取所有用户
// GET /user/:id 获取id
// POST /users 创建用户
// PUT /users/:id 更新用户
// DELETE /users/:id 删除用户
express()
  .use(bodyParser.json())
  .get('/users', (req, res, next) => {
    db('users').then((users) => {
      res.send(users);
    }, next)
  })
  .post('/users', (req, res, next) => {
    db('users')
      .insert(req.body)
      .then((userIds) =>{
        res.send(userIds)
      }, next)
  })
  .get('/users/:id', (req, res, next) => {
    const { id } = req.params;

    db('users')
      .where('id', id)
      .first()
      .then((users)=>{
        if(!users){
          return res.send(400);
        }
        res.send(users)
      }, next)
  })
  .put('/users/:id', (req, res, next) => {
    const { id } = req.params;

    db('users')
      .where('id', id)
      .update(req.body)
      .then((result) => {
        if(result === 0){
          return res.send(400)
        }
        res.send(200)
      }, next)
  })
  .delete('/users/:id', (req, res, next) => {
    const { id } = req.params;

    db('users')
      .where('id', id)
      .delete()
      .then((result) => {
        if(result === 0){
          return res.send(400)
        }
        res.send(200)
      }, next)
  })
  .listen(3000)
console.log('listen 3000');
```


