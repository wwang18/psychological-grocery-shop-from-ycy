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
  _onPressButton_back() {
    this.props.navigation.goBack();
  }

  componentWillMount() {
    let { navigation } = this.props;
    this.itemId = navigation.getParam("itemId");
    let mail_cards = {
      0: require("./../img/giftcards/giftCards/Image01.webp"),
      1: require("./../img/giftcards/giftCards/Image02.webp"),
      2: require("./../img/giftcards/giftCards/Image03.webp"),
      3: require("./../img/giftcards/giftCards/Image04.webp"),
      4: require("./../img/giftcards/giftCards/Image05.webp"),
      5: require("./../img/giftcards/giftCards/Image06.webp"),
      6: require("./../img/giftcards/giftCards/Image07.webp"),
      7: require("./../img/giftcards/giftCards/Image08.webp"),
      8: require("./../img/giftcards/giftCards/Image09.webp"),
      9: require("./../img/giftcards/giftCards/Image10.webp"),
      10: require("./../img/giftcards/giftCards/Image11.webp"),
      11: require("./../img/giftcards/giftCards/Image12.webp"),
      12: require("./../img/giftcards/giftCards/Image13.webp"),
      13: require("./../img/giftcards/giftCards/Image14.webp"),
      14: require("./../img/giftcards/giftCards/Image15.webp"),
      15: require("./../img/giftcards/giftCards/Image16.webp")
    };
    this.image = mail_cards[this.itemId];
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
