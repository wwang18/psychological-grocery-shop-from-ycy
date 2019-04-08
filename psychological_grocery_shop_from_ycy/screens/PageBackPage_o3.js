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
  TouchableOpacity
} from "react-native";

class PageBackPage_o3 extends Component {
  _onPressButton_back() {
    this.props.navigation.goBack();
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
          style={styles.container}
          source={require("./../img/O/o1_back.png")}
        >
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1200 }} />
          <View style={{ flex: 85 }}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <View style={{ flex: 683 }} />
              <View style={{ flex: 38}}>
                <TouchableOpacity
                  style={{ flex: 1 }}
                  onPress={() => this._onPressButton_back()}
                >
                <Image
                  style={styles.backButton}
                  resizeMode="contain"
                  source={require("../img/O/goBack.png")}
                />
                </TouchableOpacity>
              </View>
              <View style={{ flex: 29 }} />
            </View>
          </View>
          <View style={{ flex: 49 }} />
        </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 60 : 0
  },
  backButton: {
    width: null,
    height: null,
    flex: 1,
    flexDirection: "row",
    alignItems:'flex-end'
  }
});

export default PageBackPage_o3;
