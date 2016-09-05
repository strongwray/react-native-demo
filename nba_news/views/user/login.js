//登录界面
import Util from '../../util';
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

class Login extends Component {

  _login(){

  }

  render(){
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.logo} source={require('../../img/nba_logo.jpg')}></Image>
        </View>

        <View style={styles.inputRow}>
          <Text>用户名</Text><TextInput style={styles.input} placeholder="请输入邮箱"/>
        </View>
        <View style={styles.inputRow}>
          <Text>密码</Text><TextInput style={styles.input} placeholder="请输入密码" password={true}/>
        </View>
        <View>
          <TouchableOpacity underlayColor="#fff" style={styles.btn} onPress={this._login}>
            <Text style={{fontSize:16,color:'#fff'}}>登录</Text>
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
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
    marginBottom:10,
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
  }
});


module.exports = Login
