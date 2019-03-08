/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, AppRegistry, Button, Alert} from 'react-native';
import Orientation from 'react-native-orientation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
componentWillMount() {
       Orientation.lockToLandscape();
}

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
            <ImageBackground
                style={{
              	flex: 1
              	}}
              source={require("./img/ycy_open.jpg")}>

      <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between'}}>
      <View style={{flex: 5}}/>
      <View style={{
              flex: 3,
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'space-between'}}>
        <View style={{flex: 1,width: 50}} />
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
        <View style={{flex: 1,width: 50}} />
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
        <View style={{flex: 1,width: 50}} />
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
        <View style={{flex: 1,width: 50}} />
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
        <View style={{flex: 1,width: 50,}} />
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
        <View style={{flex: 1,width: 50}} />
      </View>
      <View style={{flex: 1}}/>
      </View>
       </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
