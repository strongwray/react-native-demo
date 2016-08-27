//首页
import NewLists from './home/newlists';
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={styles.cover}>
          <Text style={styles.homeTitle}>这里是首页</Text>
          <NewLists/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cover:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff',
  },
  homeTitle:{
    fontSize:20,
    color:'#555'
  }
})


module.exports = Home
