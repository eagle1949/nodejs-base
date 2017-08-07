/*
* @Author: caijw
* @Date:   2017-08-07 10:58:36
* @Last Modified by:   caijw
* @Last Modified time: 2017-08-07 15:08:32
*/

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');

const db = knex({
	client: 'mysql',
	connection: {
		host: '127.0.0.1',
		user: 'root',
		database: 'test_node',
		password: 'mm.1234'
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