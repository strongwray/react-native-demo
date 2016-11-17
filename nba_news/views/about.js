//关于我们的页面
import Util from '../util';
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
      <WebView source={{uri:this.props.source}}/>
    )
  }
}

class About extends Component {

  _openWebView(source){
    this.props.navigator.push({
      id:'webview',
      component: AboutWebView,
      params:{
        source: source
      }
    })
  }

  render() {
    return (
      <View style={styles.aboutContainer}>
          <View style={styles.navTitle}>
            <TouchableOpacity underlayColor="#fff" onPress={() => this.props.navigator.pop()}>
              <Text style={styles.navBackText}>返回</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <Image style={styles.pic} source={require('../img/my_head.png')}/>
            <Text style={styles.teamName}>wray v1.0.0</Text>
            <Text style={styles.instructions}>用实力让情怀落地</Text>
            <TouchableOpacity onPress={this._openWebView.bind(this,'https://github.com/strongwray')}>
                  <Image style={styles.img} source={require('../img/github.png')}/>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navTitle:{
    width:Util.size.width,
    height:70,
    backgroundColor:'#8e0d12',
  },
  navBackText:{
    fontSize:16,
    color:'#fff',
    marginTop:30,
    marginLeft:20,
    marginBottom:20,
    borderBottomColor:'#eee',
    borderBottomWidth:1,
  },
  container: {
    marginTop:150,
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
