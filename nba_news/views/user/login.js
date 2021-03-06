//登录界面
import Util from '../../util';
import LocalStorage from '../../util/local_storage';
import Service from '../../config';
import UserInfor from '../user/user_infor';
import Register from './register';
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  AlertIOS
} from 'react-native';

class Login extends Component {

  constructor(props){
    super(props)
    this.localStorage = new LocalStorage();
  }

  state = {
    name:'',
    password:''
  }

  _routerRegister(navigator){
    navigator.push({
      id:'register',
      component: Register
    })
  }

  _getName(val){
    this.setState({
      name: val
    });
  }

  _getPassword(val){
    this.setState({
      password: val
    });
  }

  _login(navigator){
    let self = this,postData = {},path = Service.host + Service.login; //登录
        postData.name = this.state.name;
        postData.password = this.state.password;
        Util.post(path,postData,function(data){
          if(data.success){
            self.localStorage.addLocalData('user',data.data) //存储返回的数据到本地app
            navigator.replace({
                id:'userInfor',
                component: UserInfor
             })
          } else {
            AlertIOS.alert('登录失败',data.errMsg);
          }
        })
  }

  render(){
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.logo} source={require('../../img/nba_logo.jpg')}></Image>
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.labelText}>用户名</Text><TextInput style={styles.input} onChangeText={this._getName.bind(this)} placeholder="请输入用户名"/>
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.labelText}>密码</Text><TextInput style={styles.input} onChangeText={this._getPassword.bind(this)} placeholder="请输入密码" password={true}/>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity underlayColor="#fff" style={styles.btn} onPress={this._login.bind(this,this.props.navigator)}>
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
