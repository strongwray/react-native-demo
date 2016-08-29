//新闻组件
import Util from '../../util';
import Service from '../../config';
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  AlertIOS,
  ScrollView,
  TouchableOpacity
} from 'react-native';

//新闻模块
class NewLists extends Component {

  state = { news:[] };
  renderItems = [];

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
            <View>
              <Text style={styles.title}>{element.title}</Text>
                <View style={{flexDirection:'row'}}>
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
        <Text style={styles.mainTitle}>新闻首页</Text>
        {this.state.news.map(this.createItem)}
      </ScrollView>
    )
  }

}


const styles = StyleSheet.create({
  mainTitle:{
    fontSize:25,
    color:'#10ade2',
  },
  item:{
    flex:1,
    borderBottomWidth:1,
    padding:15,
    borderColor:"#eee"
  },
  title:{
    fontSize:18,
    color:'#555',
    alignSelf:'flex-start',
    marginBottom:5
  },
  newsLabel:{
    fontSize:16,
    marginRight:5,
    color:'#999',
  }
});

module.exports = NewLists
