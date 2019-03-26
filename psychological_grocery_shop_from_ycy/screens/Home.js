import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  AppRegistry,
  Button,
  StatusBar,
  Alert
} from "react-native";
import RNExitApp from "react-native-exit-app";
import SplashScreen from "react-native-splash-screen";

type Props = {};

class Home extends Component {
  _onPressButton_introduction() {
    Alert.alert("团队介绍.");
  }

  _onPressButton_enter_shore() {
    Alert.alert("进店看看");
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  _onPressButton_exit() {
    RNExitApp.exitApp();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="#ff0000"
          translucent={true}
          hidden={true}
          animated={true}
        />
        <ImageBackground
          resizeMode="stretch"
          style={{
            flex: 1
          }}
          source={require("../img/ycy_open.gif")}
        >
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ flex: 350 }} />
            <View style={{ flex: 140 }}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 90 }} />
                <View style={{ flex: 460 }}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => this.props.navigation.push("MailBox_i")}
                  />
                </View>
                <View style={{ flex: 810 }} />
                <View style={{ flex: 460 }}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => this._onPressButton_introduction()}
                  />
                </View>
                <View style={{ flex: 90 }} />
              </View>
            </View>
            <View style={{ flex: 60 }} />
            <View style={{ flex: 150 }}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 90 }} />
                <View style={{ flex: 460 }}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => this._onPressButton_enter_shore()}
                  />
                </View>
                <View style={{ flex: 810 }} />
                <View style={{ flex: 460 }}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => this._onPressButton_exit()}
                  />
                </View>
                <View style={{ flex: 90 }} />
              </View>
            </View>
            <View style={{ flex: 380 }} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default Home;
