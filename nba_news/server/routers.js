'use strict'
const login = require('./apis/login'),
      news = require('./apis/news'),
      team = require('./apis/team');

exports.apis = function(app){
  let apiName = [login,news,team];
  apiName.forEach(function(value,i){
      value.api(app)
  })
}
