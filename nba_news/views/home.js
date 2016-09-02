//首页
import NewLists from './home/newlists';
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Navigator,
  TouchableHighlight
} from 'react-native';

class Home extends Component {


  render() {
    return (
        <Navigator
            initialRoute= {{
              component: NewLists,
              name:'新闻列表'
            }}
            configureScene={() => {
                return Navigator.SceneConfigs.HorizontalSwipeJump;
            }}
            renderScene={(route, navigator) => {
              let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
            }} />
    )
  }
}


module.exports = Home
