import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, AppRegistry, Button, Alert} from 'react-native';
import Orientation from 'react-native-orientation';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../app'

class PageWriteLetter extends React.Component {
  render() {
    return (
    < ImageBackground
    			style = {
    					styles.container
    			}
    			source = {
    				require("./../img/background2.jpg")
    			}
    			 >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>PageWriteLetter</Text>
      </View>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 60 : 80,
  }
});

//const AppNavigator = createStackNavigator(
//  {
//    Home: HomeScreen,
//    PageWriteLetter: PageWriteLetter
//  }
//);

export default PageWriteLetter;
