'use strict'
const request = require('request'),
      cheerio = require('cheerio');
exports.api = function(app){
  //获取虎扑新闻
  app.get('/api/news',function(req,res){
    let basicUrl = 'https://m.hupu.com/nba/news/',//虎扑新闻页面(现在从手机版获取)
        resData = {success:true,datas:[]};
      request(basicUrl,function (error, response, body){
        if (!error && response.statusCode == 200) {
          let $ = cheerio.load(body);
          $('.news-list ul').children().each(function(index,element){
              let news = {};
              news.imageUrl = $(element).find('.news-wrap .img-wrap').css()['background-image'];//获取当前的imageUrl
              news.imageUrl = news.imageUrl.slice(4,news.imageUrl.length -1); //切割字符串
              news.title = $(element).find('.news-wrap .news-txt h3').text().trim(); //标题(trim去除字符串中的空格)
              news.createTime = $(element).find('.news-txt .news-status-bar .news-info > .news-time').text(); //创建时间
              news.comeFrom = $(element).find('.news-txt .news-status-bar .news-info > .news-source').text(); //消息来源
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
