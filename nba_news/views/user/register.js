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
} from 'react-native';


class Register extends Component {

  _register(){

  }

  render(){
    return (
      <View style={styles.container}>
          <View style={styles.inputRow}>
            <Text style={styles.labelText}>用户名</Text><TextInput style={styles.input} placeholder="请输入用户名"/>
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.labelText}>支持球队</Text><TextInput style={styles.input}  placeholder="请输入你喜欢的球队"/>
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.labelText}>密码</Text><TextInput style={styles.input} placeholder="请输入密码" password={true}/>
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.labelText}>确认密码</Text><TextInput style={styles.input} placeholder="请再次输入密码" password={true}/>
          </View>
          <TouchableOpacity underlayColor="#fff" style={styles.btn} onPress={this._register.bind(this)}>
            <Text style={styles.btnText}>注册</Text>
          </TouchableOpacity>
      </View>
    )
  }
}


var styles = StyleSheet.create({
  container:{
    marginTop:100,
    alignItems:'center',
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
