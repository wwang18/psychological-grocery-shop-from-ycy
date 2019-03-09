import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, AppRegistry, Button, Alert} from 'react-native';
import Orientation from 'react-native-orientation';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../app'

class PageWriteLetter extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>PageWriteLetter</Text>
      </View>
    );
  }
}

//const AppNavigator = createStackNavigator(
//  {
//    Home: HomeScreen,
//    PageWriteLetter: PageWriteLetter
//  }
//);

export default PageWriteLetter;
