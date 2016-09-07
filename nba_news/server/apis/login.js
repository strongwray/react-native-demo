'use strict'
const pool = require('../db/db_config'),
      sha1 = require('sha1');

exports.api = function(app){
    app.post('/api/login',function(req,res){ //用户登录
      let bodyData = req.body;
      console.log(bodyData)
      res.send({success:true})
    })

    app.post('/api/register',function(req,res){ //用户注册
      let bodyData = req.body,
          createTime = new Date().getTime();//生成创建时间
      pool.acquire(function(err, client){
        let sql = 'INSERT INTO user (user_name,like_team,password,create_time) VALUES (?,?,?,?)'
        if (err) {
              if(err) console.error('出现了错误！！',err);
          } else {
             client.query(sql,[bodyData.name,bodyData.team,sha1(bodyData.password),createTime], function(err,rows) {
                if(err) console.error('出现了错误！！',err);
                res.send({success:true})
                pool.release(client);
            })
          }
      })
    })

}
