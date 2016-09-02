//测试组件页面
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Navigator,
  TouchableHighlight
} from 'react-native';

class Test extends Component {
  render() {
    return (
      <Navigator
          style= {styles.container}
          initialRoute= {{
            component: firstScene,
            name:'first'
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

//第一个页面
class firstScene extends Component {

  onPress(event){
    const { navigator } = this.props;
    if(navigator){
        navigator.push({
            name: 'second',
            component: SecondScene,
            params:{
                id:this.props.id
            }
         })
    }
  }

  render(){
    return (
      <TouchableHighlight onPress={this.onPress.bind(this)} >
      <View style={styles.home}>
            <Text>第一个页面</Text>
      </View>
        </TouchableHighlight>
    )
  }
}

//第二个页面
var SecondScene = React.createClass({
  render() {
    return (
      <View style={styles.home}>
        <TouchableHighlight onPress={this.onPress}>
          <Text>第二个页面 {this.props.id}</Text>
        </TouchableHighlight>
      </View>
    );
  },
  onPress() {
    const navigator = this.props.navigator;
    if(navigator) {
      navigator.pop();
    }
  }
});




/*布局样式*/
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  home: {
    paddingTop:74,
  },
});

module.exports = Test
