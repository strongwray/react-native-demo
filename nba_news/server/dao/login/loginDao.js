'use strict'
const mysql = require('mysql'),
      async = require('async'),
      util = require('../../util'),
      dbConf = require('../../conf/db'),
      sql = require('./loginSqlMapping');

let pool  = mysql.createPool(dbConf.mysql); //创建连接池

module.exports = {
  //注册
   register:function(req, res, next){
     let param = req.body,
         createTime = new Date().getTime();//生成创建时间
    pool.getConnection(function(err, connection) {
     			// 建立连接，向表中插入值
     			connection.query(sql.insert,[param.name,param.team,util.md5(param.password),createTime],function(err,result) {
                  if (err) throw err;
                  res.send({success:true,code: 200,msg:'注册成功'})
                 // 释放连接
                 connection.release();
     			})
     	})
   },
  //登录
   login:function(req, res, next){
     let param = req.body;
         param.password = util.md5(param.password);
    pool.getConnection(function(err, connection) {
             async.waterfall([
               function(callback){
               connection.query(sql.getUser,[param.name,param.password],function(err,result) {
                      console.log(result)
                       if(result.length == 0){
                           res.send({success:false,errMsg:"账户不存在,快去注册吧",data:[]})
                           connection.release();
                       } else {
                         callback(null,result[0])
                       }
                 })
              },function(user,callback){
                      let token = util.createToken(),userInfor = {};
                      userInfor.userId = user.user_id;
                      userInfor.userName = user.user_name;
                      userInfor.likeTeam = user.like_team;
                  connection.query(sql.updateToken,[token,user.user_id], function(err,result) {
                      userInfor.token = token;
                      res.send({data:userInfor,success:true,errMsg:"登录成功"})
                      // 释放连接
                      connection.release();
                  })
              }
           ])
     })
   }
}
