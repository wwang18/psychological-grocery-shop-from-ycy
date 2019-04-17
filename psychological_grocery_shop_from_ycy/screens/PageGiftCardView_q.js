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
  Image,
  TouchableOpacity
} from "react-native";

class PageGiftCardView_p extends Component {
  constructor(props) {
    super();
    this.param = props.navigation.getParam("data") || {};
  }
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
          resizeMode="contain"
          style={styles.container}
          source={this.param.big}
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1200 }} />
            <View style={{ flex: 85 }}>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{ flex: 683 }} />
                <View style={{ flex: 38 }}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => this._onPressButton_back()}
                  >
                    <Image
                      style={styles.button}
                      resizeMode="contain"
                      source={require("../img/PQS/back.png")}
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
    width: "100%",
    height: "100%",
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 60 : 0
  },
  button: {
    width: null,
    height: null,
    flex: 1
  }
});

export default PageGiftCardView_p;
