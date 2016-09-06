//登录界面
import Util from '../../util';
import Register from './register';
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';

class Login extends Component {

  _login(){

  }

  _routerRegister(navigator){
    navigator.push({
      title:'注册',
      component: Register
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.logo} source={require('../../img/nba_logo.jpg')}></Image>
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.labelText}>用户名</Text><TextInput style={styles.input} placeholder="请输入用户名"/>
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.labelText}>密码</Text><TextInput style={styles.input} placeholder="请输入密码" password={true}/>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity underlayColor="#fff" style={styles.btn} onPress={this._login}>
            <Text style={styles.btnText}>登录</Text>
          </TouchableOpacity>
          <TouchableOpacity underlayColor="#fff" style={styles.btn} onPress={this._routerRegister.bind(this,this.props.navigator)}>
            <Text style={styles.btnText}>注册</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


var styles = StyleSheet.create({
  container:{
    marginTop:200,
    alignItems:'center',
  },
  logo:{
    width:100,
    height:100,
    resizeMode: Image.resizeMode.contain,
    marginBottom:20
  },
  inputRow:{
    width:Util.size.width,
    borderBottomWidth:1,
    borderBottomColor:'#eee',
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
    marginBottom:10,
  },
  labelText:{
    fontSize:18,
    color:'#555'
  },
  input:{
    marginLeft:10,
    width:220,
    height:35,
    paddingLeft:8,
    borderRadius:5,
    borderBottomWidth:2,
    borderColor:'#eee'
  },
  btn:{
    marginTop:10,
    width:80,
    height:35,
    backgroundColor:'#8e0d12',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 4,
    marginRight:10
  },
  btnText:{
    fontSize:16,
    color:'#fff'
  }
});


module.exports = Login
