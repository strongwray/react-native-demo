//新闻组件
import Util from '../../util';
import Service from '../../config';
import Detail from './news_detail';
import WLoading from '../components/w_loading';
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


//多条新闻
class NewLists extends Component {

  state = { news:null };

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

//创建单条新闻
  render() {
    var renderItems = [],news = this.state.news;
    if(news==null){
      return (
        <WLoading text={"新闻加载中..."}/>
      )
    }
    for(let i=0;i<news.length;i++){
      renderItems.push(
        <NewItem key={i} item={news[i]} id={news[i].id} nav={this.props.navigator}/>
      )
    }
    return (
      <View>
        <View style={styles.navTitle}>
          <Text style={styles.navTitleText}>新闻</Text>
        </View>
        <ScrollView style={{height:Util.size.height}}>
          {renderItems}
        </ScrollView>
      </View>
     )
  }
}

//单条新闻
class NewItem extends Component {

  _loadDetail(){
    const  navigator  = this.props.nav;
    if(navigator){
      navigator.push({
        id: 'detail',
        params:{
          newsId:this.props.id
        }
      })
    }
  }

  render(){
    let item = this.props.item;
    return (
      <TouchableOpacity onPress={this._loadDetail.bind(this)} >
        <View style={styles.item}>
            <View style={{flex:1,marginRight:10}}>
              <Image source={{uri:item.imageUrl}} style={styles.img}/>
            </View>
            <View style={{flexDirection:'column',flex:4}}>
              <View>
                <Text numberOfLines={5} style={styles.title}>{item.title}</Text>
              </View>
              <View style={{flexDirection:'row',marginTop:10}}>
                  <Text style={styles.newsLabel}>
                      {item.comeFrom}
                  </Text>
                  <Text style={styles.newsLabel}>
                      {item.createTime}
                  </Text>
              </View>
            </View>
        </View>
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
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
