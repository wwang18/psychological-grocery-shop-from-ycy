import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, AppRegistry, Button, Alert, TouchableOpacity} from 'react-native';
import Orientation from 'react-native-orientation';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../app'

class PageWriteLetter extends React.Component {
  	_onPressButton_back() {
      	this.props.navigation.goBack();
      }

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

      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <View style={{flex: 1}} />
        <View style={{flex: 1}}>
              <View style={{
                flex: 1,
                flexDirection: 'row'
              }}>
                <View style={{flex: 66}}>
                      <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end'}}>
                        <TouchableOpacity style={{ height: 60, width:60, marginTop: 10 }} onPress={() => this._onPressButton_back()}>
                        </TouchableOpacity>
                        </View>
                </View>
                <View style={{flex: 93, backgroundColor: 'skyblue'}} />
                <View style={{flex: 153}} />
              </View>
        </View>
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
