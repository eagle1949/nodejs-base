/*
* @Author: caijw
* @Date:   2017-08-06 22:10:43
* @Last Modified by:   caijw
* @Last Modified time: 2017-08-06 23:00:24
*/

'use strict';

var app = require('./app');
var debug = require('debug')('app:production');
var devDebug = require('debug')('app:dev');
var http = require('http');

//端口
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
//创建服务
var server = http.createServer(app);
//监听端口，和接口
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}


function onError(error){
	if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  devDebug("starting server");
  debug('Listening on ' + bind);
  devDebug("server started");
}
