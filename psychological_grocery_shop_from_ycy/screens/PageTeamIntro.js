import React, { Component } from "react";
import {
  StyleSheet,
  Platform,
  View,
  ImageBackground,
  TouchableHighlight,
  Image,
  StatusBar,
  Alert
} from "react-native";


class PageTeamIntro extends Component {
  _onPressButton_back() {
    this.props.navigation.goBack();
  }

  componentWillMount() {
    this.image = require("./../img/H.jpg");
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
          source={this.image}
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 76 }} />
            <View style={{ flex: 325 }}>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{ flex: 610 }} />
                <View style={{ flex: 85 }}>
                  <TouchableHighlight
                    underlayColor="transparent"
                    style={styles.btnWrapper}
                    onPress={() => this._onPressButton_back()}
                  >
                    <Image
                      style={styles.button}
                      resizeMode="contain"
                      source={require("../img/H_leave.png")}
                    />
                  </TouchableHighlight>
                </View>
                <View style={{ flex: 55 }} />
              </View>
            </View>
            <View style={{ flex: 933 }} />
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

  btnWrapper: {
    flex: 1
  },
  button: {
    width: null,
    height: null,
    flex: 1
  }
});

export default PageTeamIntro;
