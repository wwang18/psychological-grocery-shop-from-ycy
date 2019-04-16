import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  AppRegistry,
  Button,
  StatusBar,
  Alert,
  TouchableWithoutFeedback
} from "react-native";

import RNExitApp from "react-native-exit-app";

class PageExitPage_e extends Component {
  _onPressExit() {
    return RNExitApp.exitApp();
  }

  componentDidMount() {
    setTimeout(function() {
      return RNExitApp.exitApp();
    }, 11000);
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
        <TouchableWithoutFeedback onPress={() => this._onPressExit()}>
          <ImageBackground
            resizeMode="stretch"
            style={styles.container}
            source={require("./../img/e_page.webp")}
          />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 60 : 0
  }
});

export default PageExitPage_e;
