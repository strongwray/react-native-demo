'use strict'
const login = {
  getUser:'SELECT * FROM user WHERE user_name = ? AND password = ?',
  insert:'insert into user (user_name,like_team,password,create_time) values (?,?,?,?)',
  updateToken:'UPDATE  user SET token =? WHERE user_id = ?'
}

module.exports = login;
