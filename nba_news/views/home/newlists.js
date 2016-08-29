//新闻组件
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

//新闻模块
class NewLists extends Component {

  state = { news:[] };

  componentDidMount(){
    var  path = Service.host + Service.getNews, //获取新闻列表
         self = this;
    Util.get(path,function(data){
      if(data.success){
        self.setState({news:data.datas})
      } else {
        AlertIOS.alert('失败','获取新闻列表失败');
      }
    })
  }

  loadDetail(){
    console.log('这里是详情页')
  }

//创建单挑新闻
  createItem(element){
    return (
      <TouchableOpacity onPress={this.loadDetail}>
        <View style={styles.item}>
            <View style={{flex:1,marginRight:10}}>
              <Image source={{uri:element.imageUrl}} style={styles.img}/>
            </View>
            <View style={{flexDirection:'column',flex:4}}>
              <View>
                <Text numberOfLines={5} style={styles.title}>{element.title}</Text>
              </View>
              <View style={{flexDirection:'row',marginTop:10}}>
                  <Text style={styles.newsLabel}>
                      {element.createTime}
                  </Text>
                  <Text style={styles.newsLabel}>
                      {element.comeFrom}
                  </Text>
              </View>
            </View>
        </View>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <ScrollView style={{height:1000}}>
        {this.state.news.map(this.createItem)}
      </ScrollView>
    )
  }

}


const styles = StyleSheet.create({
  item:{
    flexDirection:'row',
    width:Util.size.width,
    padding:10,
    borderBottomWidth:1,
    borderColor:"#eee",
  },
  img:{
    width:70,
    height:70,
  },
  title:{
    fontSize:18,
    fontFamily: 'Cochin',
    color:'#555',
    marginBottom:5,
  },
  newsLabel:{
    fontSize:16,
    marginRight:5,
    color:'#999',
  }
});

module.exports = NewLists
