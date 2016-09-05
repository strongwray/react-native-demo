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


//单只球队(图标内容)
class Team extends Component {
  render(){
    let item = this.props.item;
    return (
      <View style={styles.teamItem}>
        <Image source={{uri:item.teamIcon}} style={styles.teamIcon}/>
        <Text>{item.teamName}</Text>
        <Text>{item.teamRecord}</Text>
      </View>
    )
  }
}


//球队模块
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


  render(){
    var renderItems = [],teams = this.state.teams;
    for(let i=0;i<teams.length;i++){
      renderItems.push(
        <Team key={i} item={teams[i]}/>
      )
    }
    return (
      <ScrollView style={styles.scrollContainer}>
           {renderItems}
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  scrollContainer:{
    flexDirection:'column',
    height:Util.size.height,
  },
  teamItem:{
    flex:3,
  },
  teamIcon:{
    width:70,
    height:70
  }
})

module.exports = Teams
