'use strict'
const async = require('async'),
      pool = require('../db/db_config'),
      util = require('../util');

exports.api = function(app){
    app.post('/api/login',function(req,res){ //用户登录
      let bodyData = req.body;
      bodyData.password = util.md5(bodyData.password)
      pool.acquire(function(err, client){
        if (err) {
              if (err) throw err;
          } else {
            async.waterfall([
             function(callback){
               let sql = 'SELECT * FROM user WHERE user_name = ? AND password = ?';
               client.query(sql,[bodyData.name,bodyData.password], function(err,rows) {
                 if (err) throw err;
                  if(rows.length == 0){
                      res.send({success:false,errMsg:"账户不存在,快去注册吧",data:[]})
                      pool.release(client);
                  } else {
                    callback(null,rows[0])
                  }
                })
             },function(user,callback){
                let sql = 'UPDATE  user SET token =? WHERE user_id = ?',
                    token = util.createToken(),userInfor = {};
                    userInfor.userId = user.user_id;
                    userInfor.userName = user.user_name;
                    userInfor.likeTeam = user.like_team;
                client.query(sql,[token,user.user_id], function(err,rows) {
                    if (err) throw err;
                    userInfor.token = token;
                    res.send({data:userInfor,success:true,errMsg:"登录成功"})
                    pool.release(client);
                })
             }

            ],function(err,result){
          			if(err) throw err
          	})
          }
      })
    })

    app.post('/api/register',function(req,res){ //用户注册
      let bodyData = req.body,
          createTime = new Date().getTime();//生成创建时间
      pool.acquire(function(err, client){
        let sql = 'INSERT INTO user (user_name,like_team,password,create_time) VALUES (?,?,?,?)'
        if (err) {
              if (err) throw err;
          } else {
             client.query(sql,[bodyData.name,bodyData.team,util.md5(bodyData.password),createTime], function(err,rows) {
                if (err) throw err;
                res.send({success:true})
                pool.release(client);
            })
          }
      })
    })

}
