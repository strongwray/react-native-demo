'use strict'
const pool = require('../db/db_config');

exports.api = function(app){
    app.post('/api/login',function(req,res){ //用户登录
      let bodyData = req.body;
      res.send({success:true})
    })

    app.post('/api/register',function(req,res){ //用户注册
      let bodyData = req.body;
      res.send({success:true})
    })

}
