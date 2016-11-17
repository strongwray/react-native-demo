'use strict'
const request = require('request'),
      cheerio = require('cheerio');

module.exports = {
  //获取新闻列表
  getNews:function(req, res, next){
    let basicUrl = 'https://m.hupu.com/nba/news/',//虎扑新闻页面(现在从手机版获取)
        resData = {success:true,datas:[]};
      request(basicUrl,function (error, response, body){
        if (!error && response.statusCode == 200) {
          let $ = cheerio.load(body);
          $('.news-list ul').children().each(function(index,element){
              let news = {},reg = /\d+/;
              news.id = Number(reg.exec($(element).find('.news-link').attr('href')));
              news.title = $(element).find('.news-wrap .news-txt h3').text().trim(); //标题(trim去除字符串中的空格)
              // news.imageUrl = $(element).find('.img-wrap').css()[background-image];//获取当前的imageUrl
              // news.imageUrl = news.imageUrl.slice(4,news.imageUrl.length -1); //切割字符串
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
  },
  //获取新闻详情页
  getNewsDetail:function(req, res, next){
    let newsId = req.body.newsId,
        basicUrl = 'https://m.hupu.com/nba/news/'+newsId+'.html',//虎扑新闻页面详情
        resData = {success:true,datas:{}};
    request(basicUrl,function (error, response, body){
        if (!error && response.statusCode == 200) {
            let $ = cheerio.load(body),newsDetail = {},article = '';
            resData.datas.title = $('.detail-content').find('.artical-title h1').text();
            resData.datas.media = $('.detail-content').find('.artical-title .artical-info').children('.author-name').children('.media').text();
            resData.datas.times = $('.detail-content').find('.artical-title .artical-info').children('.times').text();
            resData.datas.articleImg = $('.article-content img').attr('src');
            $('.article-content').find('p').each(function(index,element){ //获取当前文章内容
                article += $(element).text();
            })
            resData.datas.content = article;
          res.send(resData)
        } else { //请求失败
          resData.success = false;
          res.send(resData)
        }
    })
  }
}
