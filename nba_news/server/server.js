'use strict'
const express = require('express'),
      bodyParser = require('body-parser'),
      routers = require('./routers'),
      app = express();
      
//请求主体解析
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//请求接口入口地址
routers.apis(app)

app.listen(7086,function(){
    console.log('nba_news服务器已经启动')
})
