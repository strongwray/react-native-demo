'use strict'
const crypto = require('crypto');

module.exports = {
    createToken:function(){
      return Math.random().toString(36).substr(2,15) //生成签名的随机串
    },
    md5: function(pass){ //md5加密
    var md5 = crypto.createHash('md5');
    var salt = 'strongwray';
    var newPwd = md5.update(pass + salt).digest('hex');
    return newPwd;
  }
}
