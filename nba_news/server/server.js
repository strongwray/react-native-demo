'use strict'
const express = require('express'),
      app = express();

app.get('/api/news',function(req,res){

    res.send({success:true,datas:[
      {title:"1米75吻篮圈"},
      {title:"詹宁斯笑称:杜德利2k值不该比我高"},
    ]})
})

app.listen(7086,function(){
    console.log('nba_news服务器已经启动')
})
