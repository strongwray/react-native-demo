//loading加载
import React, { Component } from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet
} from 'react-native';

class WLoading extends Component {

  state =  { animating: true }

  render() {
    text = this.props.text;
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          animating={this.state.animating}
          style={[styles.centering, {height: 50}]}
          size="large"
        />
        <Text style={styles.loadingText}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loadingContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  loadingText:{
    fontSize:16,
    color:'#555',
    textAlign:'center'
  }
})


module.exports = WLoading
