/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

class nba_news extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.pic} source={{uri: 'https://gdc.hupucdn.com/gdc/nba/team/logo/SAS.png'}}/>
        <Text style={styles.teamName}>
            圣安东尼奥马刺
        </Text>
        <Text style={styles.instructions}>
            圣安东尼奥马刺是NBA现有30支球队之一，成立于1967年并加入ABA，1976年从ABA合并进入NBA，马刺队是西部联盟西南分区的球队。
        </Text>
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

AppRegistry.registerComponent('nba_news', () => nba_news);
