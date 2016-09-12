//新闻详情
import Util from '../../util';
import Service from '../../config';
import React, { Component } from 'react';
import {
  AlertIOS,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';


//新闻详情
class Detail extends Component {
  state = { detail:{} };
  componentDidMount(){
    var  path = Service.host + Service.getNewsDetail, //获取新闻列表
         self = this;
    Util.post(path,{newsId:this.props.newsId},function(data){
      if(data.success){
        self.setState({detail:data.datas})
      } else {
        AlertIOS.alert('失败','获取新闻详情页失败');
      }
    })
  }
  render(){
    let detail = this.state.detail;
    return (
      <View>
        <View style={styles.navTitle}>
          <TouchableOpacity underlayColor="#fff" onPress={() => this.props.navigator.pop()}>
            <Text style={styles.navBackText}>返回</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{flexDirection:'column',height:Util.size.height}}>
            <Text style={styles.articleTitle}>{detail.title}</Text>
            <View style={{padding:10}}>
              <Image source={{uri:detail.articleImg}} style={styles.img}/>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.detailLabel}>{detail.media}</Text>
              <Text style={styles.detailLabel}>{detail.times}</Text>
            </View>
            <Text style={styles.contents}>{detail.content}</Text>
        </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  navTitle:{
    width:Util.size.width,
    height:70,
    backgroundColor:'#8e0d12',
  },
  navBackText:{
    fontSize:18,
    color:'#fff',
    marginTop:30,
    marginLeft:20
  },
  backContainer:{
    padding:20,
    borderBottomWidth:1,
    borderBottomColor:'#fcfcfc',
    backgroundColor:'#eee'
  },
  buttonText:{
    fontSize:18,
    color:'#333'
  },
  articleTitle:{
    fontSize:18,
    color:'#555',
    marginTop:10,
    marginBottom:10,
    paddingLeft:15,
  },
  img:{
    width:Util.size.width - 20,
    height:200,
  },
  detailLabel:{
    fontSize:16,
    color:'#555',
    marginRight:5,
    paddingTop:15,
    paddingLeft:15
  },
  contents:{
    fontSize:16,
    padding:15,
    color:'#555',
    marginBottom:40
  }
});


module.exports = Detail
