//注册界面
import Util from '../../util';
import Service from '../../config';
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


class Register extends Component {
  state = {
    name:'',
    team:'',
    password:'',
    confirmPass:''
  }
//注册校验
  _registerValidate(data,callback){
    if(data.name==''||data.team==''||data.password==''||data.confirmPass==''){
      AlertIOS.alert('','请填写用户信息');
    } else if(data.password!=data.confirmPass){
      AlertIOS.alert('','两次输入的密码不相同');
    } else {
      delete data.confirmPass;
      callback()
    }
  }

  _register(){
    let postData = {},path = Service.host + Service.register,self = this; //注册
    postData.name = this.state.name;
    postData.team = this.state.team;
    postData.password = this.state.password;
    postData.confirmPass = this.state.confirmPass;
    self._registerValidate(postData,function(){
        Util.post(path,postData,function(data){
          if(data.success){
            self.props.navigator.pop()
          } else {
            AlertIOS.alert('注册失败','请重新填写用户信息');
          }
        })
    })
  }

  _getName(val){
    this.setState({
      name: val
    });
  }

  _getTeam(val){
    this.setState({
      team: val
    });
  }
  _getPassword(val){
    this.setState({
      password: val
    });
  }
  _getConfirmPass(val){
    this.setState({
      confirmPass: val
    });
  }
  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity underlayColor="#fff" onPress={() => this.props.navigator.pop()}>
          <Text style={styles.navBackText}>返回</Text>
        </TouchableOpacity>
          <View style={styles.inputRow}>
            <Text style={styles.labelText}>用户名</Text><TextInput style={styles.input} onChangeText={this._getName.bind(this)} placeholder="请输入用户名"/>
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.labelText}>支持球队</Text><TextInput style={styles.input} onChangeText={this._getTeam.bind(this)} placeholder="请输入你喜欢的球队"/>
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.labelText}>密码</Text><TextInput style={styles.input} onChangeText={this._getPassword.bind(this)} placeholder="请输入密码" password={true}/>
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.labelText}>确认密码</Text><TextInput style={styles.input} onChangeText={this._getConfirmPass.bind(this)} placeholder="请再次输入密码" password={true}/>
          </View>
          <View style={{alignItems:'center'}}>
          <TouchableOpacity underlayColor="#fff" style={styles.btn} onPress={this._register.bind(this)}>
            <Text style={styles.btnText}>注册</Text>
          </TouchableOpacity>
          </View>
      </View>
    )
  }
}


var styles = StyleSheet.create({
  navBackText:{
    fontSize:16,
    marginLeft:20,
    marginBottom:20,
    borderBottomColor:'#eee',
    borderBottomWidth:1,
  },
  container:{
    marginTop:50,
  },
  inputRow:{
    width:Util.size.width,
    borderBottomWidth:1,
    borderBottomColor:'#eee',
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:20,
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

module.exports = Register
