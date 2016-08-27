//新闻组件
import Util from '../../util';
import Service from '../../config';
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  AlertIOS,
} from 'react-native';

//新闻模块
class NewLists extends Component {

  state = { news:[] };

  componentDidMount(){
    var  path = Service.host + Service.getNews, //获取新闻列表
         self = this;
    Util.get(path,function(data){
      if(data.success){
        self.setState({news:data.datas})
      } else {
        AlertIOS.alert('失败','获取新闻列表失败');
      }
    })
  }

  render() {
    var createItem = function(item) {
      return (
        <View>
          <Text style={styles.title}>
            {item.title}
          </Text>
        </View>
      )
    }
    return (
      <View>
        <Text style={styles.title}>马刺新闻首页</Text>
        {this.state.news.map(createItem)}
      </View>
    )
  }

}


const styles = StyleSheet.create({
  title:{
    fontSize:18,
    color:'#555'
  },
  newItemTitle:{
    fontSize:14,
    color:'#10ade2'
  }
});

module.exports = NewLists
