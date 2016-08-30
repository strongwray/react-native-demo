//球队介绍
import Util from '../util';
import Service from '../config';
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  AlertIOS
} from 'react-native';

//新闻模块
class Teams extends Component {
  state = {
    teams:[]
  }
  componentDidMount(){
    var  path = Service.host + Service.getTeams, //获取NBA球队
         self = this;
    Util.get(path,function(data){
      if(data.success){
        self.setState({teams:data.datas})
      } else {
        AlertIOS.alert('失败','获取球队列表失败');
      }
    })
  }

  render(){

  }

}

module.exports = Teams
