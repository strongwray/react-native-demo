//新闻详情
import Util from '../../util';
import Service from '../../config';
import React, { Component } from 'react';
import {
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  Navigator,
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

//返回首页(导航栏)
class NavigatorBack extends Component {
  onPress(){
  const  navigator  = this.props.nav;
      if(navigator) {
          navigator.pop();
      }
  }
  render() {
    return (
      <View style={styles.backContainer}>
         <TouchableHighlight
          underlayColor="#eee"
          onPress={this.onPress.bind(this)}>
          <Text style={styles.buttonText}>返回</Text>
         </TouchableHighlight>
      </View>
    )
  }
}

//新闻详情
class Detail extends Component {
  state = { detail:{} };
  componentDidMount(){
    var  path = Service.host + Service.getNewsDetail, //获取新闻列表
         self = this;
    Util.post(path,{newsId:this.props.id},function(data){
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
      <ScrollView style={{flexDirection:'column',height:Util.size.height}}>
          <NavigatorBack nav={this.props.navigator}/>
          <Text style={styles.articleTitle}>{detail.title}</Text>
          <Image source={{uri:detail.articleImg}} style={styles.img}/>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.detailLabel}>{detail.media}</Text>
            <Text style={styles.detailLabel}>{detail.times}</Text>
          </View>
          <Text style={styles.contents}>{detail.content}</Text>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
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
    width:Util.size.width,
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
