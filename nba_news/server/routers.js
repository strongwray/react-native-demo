'use strict'
const news = require('./apis/news'),
      team = require('./apis/team');

exports.apis = function(app){
  news.api(app) //请求新闻数据
  team.api(app) //请求新闻数据
}
