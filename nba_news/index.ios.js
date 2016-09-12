/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import NewLists from './views/home/new_lists';
import NewDetail from './views/home/news_detail';
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
  Text,
  View,
  Image,
} from 'react-native';

//tabbar
class MainTabBar extends Component {
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
          <NewLists navigator={this.props.navigator}/>
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


class nba_news extends Component {
  renderScene(route, navigator) {
    switch (route.id) {
      case 'tabar':
        return <MainTabBar {...route.params} navigator={navigator} />;
        break;
      case 'detail': //新闻详情页
        return <NewDetail {...route.params} navigator={navigator}/>;
    }
  }
  render() {
    return (
      <Navigator
        ref="navigator"
    		initialRoute={{id:'tabar'}}
				configureScene={(route) => {
      		return Navigator.SceneConfigs.PushFromRight
        }}
        renderScene={this.renderScene}
			/>
    )
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
