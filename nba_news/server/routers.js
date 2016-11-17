'use strict'
const loginRouter = require('./routes/apis/login'),
      newsRouter = require('.//routes/apis/news'),
      team = require('./routes/apis/team');

exports.apis = function(app){
  // let apiName = [login,news,team];
  // apiName.forEach(function(value,i){
  //     value.api(app)
  // })
  app.use('/',loginRouter)
  app.use('/',newsRouter)
  team.api(app)
}
