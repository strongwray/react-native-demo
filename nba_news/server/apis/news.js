'use strict'
const request = require('request'),
      cheerio = require('cheerio');
exports.api = function(app){
  //获取虎扑新闻
  app.get('/api/news',function(req,res){
    let basicUrl = 'http://voice.hupu.com/nba'; //虎扑新闻页面
      request(basicUrl,function (error, response, body){
        if (!error && response.statusCode == 200) {
          let $ = cheerio.load(body),resData = {success:true,datas:[]};
          $('.news-list ul').children().each(function(index,element){
            let news = {};
              news.title = $(element).find('.list-hd h4>a').text(); //标题
              news.des = $(element).find('.list-content .J_share_title').text(); //简单内容
              news.createTime = $(element).find('.otherInfo .other-left > a').text(); //创建时间
              news.comeFrom = $(element).find('.otherInfo .other-left > .comeFrom a').text(); //消息来源
              resData.datas.push(news)
          })
          res.send(resData)
        } else { //请求失败
          resData.success = false;
          res.send(resData)
        }
      })
  })

}
