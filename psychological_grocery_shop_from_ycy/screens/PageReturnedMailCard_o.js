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
  TouchableOpacity,
  TouchableHighlight,
  Image
} from "react-native";
import RNFS from 'react-native-fs';

class PageReturnedMailCard_o extends Component {
  constructor(props) {
    super(props);
    this.param = props.navigation.getParam("data") || {};
  }
  _onPressButton_back() {
    this.props.navigation.goBack();
  }

  _handleButtonClick = topic => {
    this.props.navigation.navigate(topic);
  };

  _handleButtonBackPage = () => {
    this.props.navigation.push("BackPage_o3", { data: this.param });
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
          source={this.param.big}
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 84 }} />
            <View style={{ flex: 140 }}>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{ flex: 341 }} />
                <View style={{ flex: 140 }}>
                  <TouchableHighlight
                    underlayColor="transparent"
                    style={styles.btnWrapper}
                    onPress={() => this._handleButtonClick("CharacterCard_o1")}
                  >
                    <Image
                      style={styles.button}
                      resizeMode="contain"
                      source={require("../img/O/PersonCard.png")}
                    />
                  </TouchableHighlight>
                </View>
                <View style={{ flex: 48 }} />
                <View style={{ flex: 140 }}>
                  <TouchableHighlight
                    underlayColor="transparent"
                    style={styles.btnWrapper}
                    onPress={() => this._handleButtonClick("GiftCard_o2")}
                  >
                    <Image
                      style={styles.button}
                      resizeMode="contain"
                      source={require("../img/O/giftCard.png")}
                    />
                  </TouchableHighlight>
                </View>
                <View style={{ flex: 81 }} />
              </View>
            </View>
            <View style={{ flex: 876 }} />
            <View style={{ flex: 194 }}>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{ flex: 440 }} />
                <View style={{ flex: 64 }}>
                  <TouchableHighlight
                    underlayColor="transparent"
                    style={styles.btnWrapper}
                    onPress={this._handleButtonBackPage}
                  >
                    <Image
                      style={styles.button}
                      resizeMode="contain"
                      source={require("../img/O/backpage.png")}
                    />
                  </TouchableHighlight>
                </View>
                <View style={{ flex: 32 }} />
                <View style={{ flex: 64 }}>
                  <TouchableHighlight
                    underlayColor="transparent"
                    style={styles.btnWrapper}
                    //TODO:
                    onPress={() => this._handleButtonClick("StoredLetter_o4")}
                  >
                    <Image
                      style={styles.button}
                      resizeMode="contain"
                      source={require("../img/O/myWritten.png")}
                    />
                  </TouchableHighlight>
                </View>
                <View style={{ flex: 90 }} />
                <View style={{ flex: 45 }}>
                  <TouchableHighlight
                    underlayColor="transparent"
                    style={styles.btnWrapper}
                    onPress={() => this._onPressButton_back()}
                  >
                    <Image
                      style={styles.backButton}
                      resizeMode="contain"
                      source={require("../img/O/goBack.png")}
                    />
                  </TouchableHighlight>
                </View>
                <View style={{ flex: 15 }} />
              </View>
            </View>
            <View style={{ flex: 40 }} />
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
  },
  backButton: {
    width: null,
    height: null,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end"
  },
});

export default PageReturnedMailCard_o;
