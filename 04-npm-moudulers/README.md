###npm模块使用
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


