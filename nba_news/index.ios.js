/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import NewLists from './views/home/newlists';
import Teams from './views/teams';
import About from './views/about';
import Login from './views/user/login';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  NavigatorIOS,
  Text,
  View,
  Image,
} from 'react-native';


class nba_news extends Component {

  state = {
    selectedTab:'login',
  }

  _selectTab(tabName){
    this.setState({
      selectedTab: tabName
    })
  }


  _addIosNavigator(component,title){
    var data = null;
    return <NavigatorIOS
      style={{flex:1}}
      barTintColor='#8e0d12'
      titleTextColor="#fff"
      tintColor="#fff"
      translucent={true}
      initialRoute={{
          component: component,
          title: title,
          passProps:{
            data: data
          }
        }} />
  }


  render() {
    return (
      <TabBarIOS
        unselectedTintColor="#555"
        tintColor="#555"
        barTintColor="#fff">
        <TabBarIOS.Item
          icon={require('./img/news.png')}
          renderAsOriginal
          selectedIcon={require('./img/news_select.png')}
          selected={this.state.selectedTab === 'home'}
          onPress={this._selectTab.bind(this, 'home')}>
          {this._addIosNavigator(NewLists, '新闻')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./img/basketball.png')}
          selected={this.state.selectedTab === 'team'}
          onPress={this._selectTab.bind(this, 'team')}>
          {this._addIosNavigator(Teams, '球队')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./img/about.png')}
          selectedIcon={require('./img/about_select.png')}
          renderAsOriginal
          selected={this.state.selectedTab === 'login'}
          onPress={ this._selectTab.bind(this, 'login')}>
          {this._addIosNavigator(Login, '登录')}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});


AppRegistry.registerComponent('nba_news', () => nba_news);
