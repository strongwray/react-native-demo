/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import NewLists from './views/home/new_lists';
import Teams from './views/teams';
import About from './views/about';
import Login from './views/user/login';
import UserInfor from './views/user/user_infor';
import LocalStorage from './util/local_storage';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  Navigator,
  NavigatorIOS,
  Text,
  View,
  Image,
} from 'react-native';


class nba_news extends Component {

  constructor(props){
    super(props)
    this.localStorage = new LocalStorage();
  }

  state = {
    selectedTab:'home',
    isLogin:false
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

  _addCommonNavigator(component,name){
    return (
        <Navigator
          initialRoute={{ name: name, component: component }}
          configureScene={(route) => {
            return Navigator.SceneConfigs.VerticalDownSwipeJump;
          }}
          renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
          }} />
    );
  }

  isLogin(state){
    if(state){
      return  this._addCommonNavigator(UserInfor,'userInfor')
    } else {
      return  this._addCommonNavigator(Login,'login')
    }
  }

  componentDidMount(){
    let self = this;
    this.localStorage.getLocalData('user',function(data){
      if(data) {
        self.setState({isLogin:true})
      } else {
        self.setState({isLogin:false})
      }
    })
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
          renderAsOriginal
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
          selected={this.state.selectedTab === 'login'}
          onPress={ this._selectTab.bind(this,'login')}>
          {this.isLogin(this.state.isLogin)}
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
