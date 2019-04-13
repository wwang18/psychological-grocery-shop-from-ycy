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
  _onPressButton_back() {
    this.props.navigation.goBack();
  }

  _handleButtonClick = topic => {
    this.props.navigation.navigate(topic);
  };



  _handleButtonBackPage = itemId => {
    this.props.navigation.push("BackPage_o3", { itemId: itemId });
  }

  componentWillMount() {
    let { navigation } = this.props;
    this.itemId = navigation.getParam("itemId");
    let mail_cards = {
      0: require("./../img/returnedMailCards/returnedMailCard/Image03.webp"),
      1: require("./../img/returnedMailCards/returnedMailCard/Image05.webp"),
      2: require("./../img/returnedMailCards/returnedMailCard/Image07.webp"),
      3: require("./../img/returnedMailCards/returnedMailCard/Image09.webp"),
      4: require("./../img/returnedMailCards/returnedMailCard/Image11.webp"),
      5: require("./../img/returnedMailCards/returnedMailCard/Image13.webp"),
      6: require("./../img/returnedMailCards/returnedMailCard/Image15.webp"),
      7: require("./../img/returnedMailCards/returnedMailCard/Image17.webp"),
      8: require("./../img/returnedMailCards/returnedMailCard/Image19.webp"),
      9: require("./../img/returnedMailCards/returnedMailCard/Image21.webp"),
      10: require("./../img/returnedMailCards/returnedMailCard/Image23.webp"),
      11: require("./../img/returnedMailCards/returnedMailCard/Image25.webp"),
      12: require("./../img/returnedMailCards/returnedMailCard/Image27.webp"),
      13: require("./../img/returnedMailCards/returnedMailCard/Image29.webp"),
      14: require("./../img/returnedMailCards/returnedMailCard/Image31.webp"),
      15: require("./../img/returnedMailCards/returnedMailCard/Image33.webp"),
      16: require("./../img/returnedMailCards/returnedMailCard/Image35.webp"),
      17: require("./../img/returnedMailCards/returnedMailCard/Image37.webp"),
      18: require("./../img/returnedMailCards/returnedMailCard/Image39.webp"),
      19: require("./../img/returnedMailCards/returnedMailCard/Image41.webp"),
      20: require("./../img/returnedMailCards/returnedMailCard/Image43.webp"),
      21: require("./../img/returnedMailCards/returnedMailCard/Image45.webp"),
      22: require("./../img/returnedMailCards/returnedMailCard/Image47.webp"),
      23: require("./../img/returnedMailCards/returnedMailCard/Image49.webp"),
      24: require("./../img/returnedMailCards/returnedMailCard/Image51.webp"),
      25: require("./../img/returnedMailCards/returnedMailCard/Image53.webp"),
      26: require("./../img/returnedMailCards/returnedMailCard/Image55.webp"),
      27: require("./../img/returnedMailCards/returnedMailCard/Image57.webp"),
      28: require("./../img/returnedMailCards/returnedMailCard/Image59.webp")
    };
    this.image = mail_cards[this.itemId]
//>>>>>>> f9d8e0b40fd05a2ece00a2291455db1956sc141ed
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
                    onPress={() => this._handleButtonBackPage(this.itemId)}
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
