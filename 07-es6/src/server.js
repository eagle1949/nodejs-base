/*
* @Author: caijw
* @Date:   2017-08-03 16:42:21
* @Last Modified by:   caijw
* @Last Modified time: 2017-08-03 16:50:52
*/

'use strict';

import http from 'http';
import { homepage, notFound } from './handlers';

const server = http.createServer((request, response) =>{
	homepage(request, response);
});

server.listen(3000);
console.log('listen 3000');