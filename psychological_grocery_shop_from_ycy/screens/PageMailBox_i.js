import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  AppRegistry,
  Button,
  Alert,
  TouchableOpacity
} from "react-native";

class PageMailBox_i extends Component {
  _onPressButton_back() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require("./../img/i_page.gif")}
      >
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 60 : 80
  }
});

export default PageMailBox_i;