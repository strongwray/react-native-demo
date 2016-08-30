//关于我们的页面
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';


class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.pic} source={{uri: 'https://avatars1.githubusercontent.com/u/11511939?v=3&s=460'}}/>
        <Text style={styles.teamName}>wray v1.0.0</Text>
        <Text style={styles.instructions}>用实力让情怀落地</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  teamName: {
    fontSize: 25,
    color: '#555',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  pic: {
    width:110,
    height:110,
  }
});

module.exports = About
