###跑nodejs文件
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