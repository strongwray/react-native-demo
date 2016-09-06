'use strict'
const mysql = require('mysql'),
			Pool = require('generic-pool').Pool; //创建线程池
//创建一个远程连接到mysql(运用连接池)
var pool = new Pool({
    name     : 'mysql',
    create   : function(callback) {
        var c = mysql.createConnection({
						host:'127.0.0.1',
						user:'root',
						password:'Wu314159',
						database:'nba_news'
        })
        callback(null, c);
    },
    destroy  : function(client) { client.end(); },
    max      : 10,
    min      : 2,
    idleTimeoutMillis : 30000,
    log : false
});

module.exports = pool
