//球队介绍
import Util from '../util';
import Service from '../config';
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  AlertIOS,
  ScrollView,
  Image
} from 'react-native';

//新闻模块
class Teams extends Component {

  state = { teams:[] };

  componentWillMount(){
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

  createItems(item,i){
    return (
      <View key={i} style={styles.teamItem}>
        <Image source={{uri:item.teamIcon}} style={styles.teamIcon}/>
        <Text>{item.teamName}</Text>
        <Text>{item.teamRecord}</Text>
      </View>
    )
  }

  render(){
    return (
      <ScrollView style={{width:Util.size.height,flexDirection:'column'}}>
        {this.state.teams.map(this.createItems)}
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  teamItem:{
  },
  teamIcon:{
    width:70,
    height:70
  }
})

module.exports = Teams
