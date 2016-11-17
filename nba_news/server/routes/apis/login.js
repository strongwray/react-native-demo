'use strict'
const express = require('express'),
      router = express.Router(); //构建路由

//dao层进行数据处理
const loginDao = require('../../dao/login/loginDao');

//注册
router.post('/api/register',function(req, res, next) {
	loginDao.register(req, res, next);
})

//登录
router.post('/api/login',function(req, res, next) {
	loginDao.login(req, res, next);
})


module.exports = router
