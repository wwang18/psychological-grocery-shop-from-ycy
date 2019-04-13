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

class PageGiftCardView_p extends Component {
  _onPressButton_back() {
    this.props.navigation.goBack();
  }

  componentWillMount() {
    let { navigation } = this.props;
    this.itemId = navigation.getParam("itemId");
    let mail_cards = {
      0: require("./../img/personalCards/personalCard/Image01.webp"),
      1: require("./../img/personalCards/personalCard/Image05.webp"),
      2: require("./../img/personalCards/personalCard/Image09.webp"),
      3: require("./../img/personalCards/personalCard/Image13.webp"),
      4: require("./../img/personalCards/personalCard/Image17.webp"),
      5: require("./../img/personalCards/personalCard/Image21.webp"),
      6: require("./../img/personalCards/personalCard/Image25.webp"),
      7: require("./../img/personalCards/personalCard/Image29.webp"),
      8: require("./../img/personalCards/personalCard/Image33.webp"),
      9: require("./../img/personalCards/personalCard/Image37.webp"),
      10: require("./../img/personalCards/personalCard/Image41.webp"),
      11: require("./../img/personalCards/personalCard/Image45.webp"),
      12: require("./../img/personalCards/personalCard/Image49.webp"),
      13: require("./../img/personalCards/personalCard/Image53.webp"),
      14: require("./../img/personalCards/personalCard/Image57.webp"),
      15: require("./../img/personalCards/personalCard/Image61.webp"),
      16: require("./../img/personalCards/personalCard/Image65.webp"),
      17: require("./../img/personalCards/personalCard/Image69.webp"),
      18: require("./../img/personalCards/personalCard/Image73.webp"),
      19: require("./../img/personalCards/personalCard/Image77.webp"),
      20: require("./../img/personalCards/personalCard/Image81.webp"),
      21: require("./../img/personalCards/personalCard/Image85.webp")
    };
    this.image = mail_cards[this.itemId]
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
                  />
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
    width: '100%',
    height: '100%',
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 60 : 0
  }
});

export default PageGiftCardView_p;
