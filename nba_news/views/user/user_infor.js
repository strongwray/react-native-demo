//用户信息界面
import Util from '../../util';
import LocalStorage from '../../util/local_storage';
import Service from '../../config';
import About from '../about';
import Login from './login';
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';


class UserInfor extends Component {

  constructor(props){
    super(props)
    this.localStorage = new LocalStorage();
  }

  state = {
    userInfor:''
  }

  componentDidMount(){
    let self = this;
    this.localStorage.getLocalData('user',function(data){
        self.setState({userInfor:data})
    })
  }

  _routerToAbout(navigator){
    navigator.push({
      name:'about',
      component:About
    })
  }

  _loginOut(navigator){
    this.localStorage.removeLocalData('user')
  }

  render(){
    return (
      <View>
          <View style={styles.navTitle}>
            <Text style={styles.navTitleText}>我的信息</Text>
          </View>
          <View>
            <View style={styles.item}>
                <Text style={styles.text}>用户名:</Text>
                <Text style={styles.text}>{this.state.userInfor.userName}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>喜爱球队:</Text>
                <Text style={styles.text}>{this.state.userInfor.likeTeam}</Text>
            </View>
            <TouchableOpacity underlayColor="#fff"  onPress={this._routerToAbout.bind(this,this.props.navigator)}>
                <View style={styles.item}>
                      <Text style={styles.aboutAppText}>关于我们</Text>
                </View>
            </TouchableOpacity>
            <View style={{alignItems:'center'}}>
              <TouchableOpacity underlayColor="#fff" style={styles.loginOutBtn} onPress={this._loginOut.bind(this,this.props.navigator)}>
                <Text style={styles.loginOutBtnText}>退出登录</Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  navTitle:{
    width:Util.size.width,
    height:70,
    backgroundColor:'#8e0d12',
    alignItems:'center',
  },
  navTitleText:{
    fontSize:18,
    color:'#fff',
    marginTop:40
  },
  item:{
    flexDirection:'row',
    borderBottomWidth:2,
    borderColor:'#eee',
    alignItems:'center',
    padding:10
  },
  text:{
    fontSize:16,
    color:'#555'
  },
  aboutAppText:{
    fontSize:16,
    color:'#8e0d12'
  },
  loginOutBtn:{
    width:200,
    height:40,
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#8e0d12',
    marginTop:30
  },
  loginOutBtnText:{
    fontSize:18,
    color:'#fff'
  }
})

module.exports = UserInfor
