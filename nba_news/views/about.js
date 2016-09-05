//关于我们的页面
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  WebView,
  TouchableOpacity
} from 'react-native';

//创建一个WebView
class AboutWebView extends Component {
  render(){
    return (
      <View style={{flex:1, marginBottom: 64}}>
        <WebView source={{uri:this.props.source}} style={{backgroundColor:'#555',height: 200}}/>
      </View>
    )
  }
}

class About extends Component {
  _openWebView(source){
    this.props.navigator.push({
      title:'我的github项目地址',
      component: AboutWebView,
      passProps:{
        source: source
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.pic} source={{uri: 'https://avatars1.githubusercontent.com/u/11511939?v=3&s=460'}}/>
        <Text style={styles.teamName}>wray v1.0.0</Text>
        <Text style={styles.instructions}>用实力让情怀落地</Text>
        <TouchableOpacity onPress={this._openWebView.bind(this,'https://github.com/strongwray')}>
              <Image style={styles.img} source={require('../img/github.png')}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  teamName: {
    fontSize: 25,
    color: '#555',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  pic: {
    width:110,
    height:110,
  },
  img:{
    width:20,
    height:20,
    marginRight:5,
  }
});

module.exports = About
