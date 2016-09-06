import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  PickerIOS
} from 'react-native';

let PickerItemIOS = PickerIOS.Item;

var CAR_MAKES_AND_MODELS = {
  amc: {
    name: 'AMC',
    models: ['AMX', 'Concord', 'Eagle', 'Gremlin', 'Matador', 'Pacer'],
  },
  alfa: {
    name: 'Alfa-Romeo',
    models: ['159', '4C', 'Alfasud', 'Brera', 'GTV6', 'Giulia', 'MiTo', 'Spider'],
  },
  aston: {
    name: 'Aston Martin',
    models: ['DB5', 'DB9', 'DBS', 'Rapide', 'Vanquish', 'Vantage'],
  },
  audi: {
    name: 'Audi',
    models: ['90', '4000', '5000', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q5', 'Q7'],
  },
  austin: {
    name: 'Austin',
    models: ['America', 'Maestro', 'Maxi', 'Mini', 'Montego', 'Princess'],
  },
  borgward: {
    name: 'Borgward',
    models: ['Hansa', 'Isabella', 'P100'],
  },
  buick: {
    name: 'Buick',
    models: ['Electra', 'LaCrosse', 'LeSabre', 'Park Avenue', 'Regal',
             'Roadmaster', 'Skylark'],
  },
  cadillac: {
    name: 'Cadillac',
    models: ['Catera', 'Cimarron', 'Eldorado', 'Fleetwood', 'Sedan de Ville'],
  },
  chevrolet: {
    name: 'Chevrolet',
    models: ['Astro', 'Aveo', 'Bel Air', 'Captiva', 'Cavalier', 'Chevelle',
             'Corvair', 'Corvette', 'Cruze', 'Nova', 'SS', 'Vega', 'Volt'],
  },
};

class PickerExample extends Component {
  state =  {
      carMake: 'cadillac',
      modelIndex: 3,
    }

  _cancel(){

  }

  render() {
    var make = CAR_MAKES_AND_MODELS[this.state.carMake];
    var selectionString = make.name + ' ' + make.models[this.state.modelIndex];
    return (
      <View style={{width:Util.size.width}}>
          <View style={{flexDirection:'row',padding:10}}>
            <TouchableOpacity underlayColor="#fff" style={{flex:1}} onPress={this._cancel}>
              <Text style={[styles.pickerBtn,styles.left]}>取消</Text>
            </TouchableOpacity>
            <TouchableOpacity underlayColor="#fff" style={{flex:1}} onPress={this._sure}>
              <Text style={[styles.pickerBtn,styles.right]}>确定</Text>
            </TouchableOpacity>
          </View>

          <PickerIOS
            selectedValue={this.state.carMake}
            onValueChange={(carMake) => this.setState({carMake, modelIndex: 0})}>
            {Object.keys(CAR_MAKES_AND_MODELS).map((carMake) => (
              <PickerItemIOS
                key={carMake}
                value={carMake}
                label={CAR_MAKES_AND_MODELS[carMake].name}
              />
            ))}
          </PickerIOS>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  pickerBtn:{
    fontSize:16,
    color:'#8e0d12'
  },
  left:{
    alignSelf:'flex-start'
  },
  right:{
    alignSelf:'flex-end'
  }
});

module.exports = PickerExample
