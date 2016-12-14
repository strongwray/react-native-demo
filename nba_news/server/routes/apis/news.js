'use strict'
const express = require('express'),
      router = express.Router(); //构建路由

//dao层进行数据处理
const newsDao = require('../../dao/news/newsDao');

//获取虎扑新闻列表
router.get('/api/news',function(req, res, next) {
	newsDao.getNews(req, res, next);
})

//获取虎扑详情页
router.post('/api/news/detail',function(req, res, next) {
	newsDao.getNewsDetail(req, res, next);
})


module.exports = router;
