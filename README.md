# React-Native-App

 用nodejs搭建服务器后台。

react-native的第一个项目做nba新闻的app，这里的新闻数据都是通过nodejs服务器从虎扑上面抓取下来。(暂时只有ios版本，Android会在以后更新)

启动项目的方式

1.在当前目录下安装react-native依赖包

npm install

2.切换到 server文件夹下面，安装node_module

npm install

然后启动 node app.js （如果有nodemon，直接热启动）

3.启动react-native项目， 进入ios目录，通过xcode打开nba_news.xcodeproj。

通过command+ R启动 app项目。



  1.这是新闻首页


<img src="https://github.com/strongwray/react-native-demo/blob/master/introImg/intro1.jpg" width="300" />

2.这是新闻详情页


<img src="https://github.com/strongwray/react-native-demo/blob/master/introImg/intro2.jpg" width="300" />


###新版本更新
    重新调整对mysql的操作接口，然后在构建nodejs服务器的时候能够可以分离数据源。利用仓库
  mysql-crud的方法来分层。
