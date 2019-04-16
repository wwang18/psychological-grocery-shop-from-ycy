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
  TouchableOpacity,
  TouchableHighlight
} from "react-native";

class PageStoredLetter_o4 extends Component {
  _onPressButton_back() {
    this.props.navigation.goBack();
  }
  _onPressButton_LastLetter() {

  }
  _onPressButton_NextLetter() {

  }

  readLetter() {
       const path = RNFS.DocumentDirectoryPath + '/test.txt';
          return RNFS.readFile(path)
            .then((result) => {
              console.log(result);

              this.setState({
                text: result,
              })
            })
            .catch((err) => {
              console.log(err.message);
            });
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
          source={require("./../img/bg/letter_paper.jpg")}
        >
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ flex: 630 }} />
            <View style={{ flex: 67 }}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 140 }} />
                <View style={{ flex: 193 }}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => this._onPressButton_LastLetter()}
                  />
                    <Image
                      style={styles.btn}
                      resizeMode="contain"
                      source={require("../img/btns/o__LastLetter.png")}
                    />
                </View>
                <View style={{ flex: 578 }} />
                <View style={{ flex: 193 }}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => this._onPressButton_NextLetter()}
                  />
                    <Image
                      style={styles.btn}
                      resizeMode="contain"
                      source={require("../img/btns/o_NextLetter.png")}
                    />
                </View>
                <View style={{ flex: 240 }} />
              </View>
            </View>
            <View style={{ flex: 53 }}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1200 }} />
                <View style={{ flex: 85 }}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => this._onPressButton_back()}
                  />
                    <Image
                      style={styles.btn}
                      resizeMode="contain"
                      source={require("../img/btns/n_Return.png")}
                    />
                </View>
                <View style={{ flex: 59 }}/>
              </View>
            </View>
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
  textContainer: {
    flex: 5,
    flexDirection: "row"
  },
  btnWrapper: {
    flex: 1,
    flexDirection: 'column-reverse'
  },
  btn: {
    flex: 1,

  }
});

export default PageStoredLetter_o4;
