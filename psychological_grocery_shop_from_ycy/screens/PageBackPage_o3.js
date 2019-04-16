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

class PageBackPage_o3 extends Component {
  constructor(props) {
    super(props);
    this.param = props.navigation.getParam("data") || {};
  }
  _onPressButton_back() {
    this.props.navigation.goBack();
  }

  // componentWillMount() {
  //   let { navigation } = this.props;
  //   this.itemId = navigation.getParam("itemId");
  //   let mail_cards = {
  //     0: require("./../img/O/returnedMailCard/Image02.webp"),
  //     1: require("./../img/O/returnedMailCard/Image04.webp"),
  //     2: require("./../img/O/returnedMailCard/Image06.webp"),
  //     3: require("./../img/O/returnedMailCard/Image08.webp"),
  //     4: require("./../img/O/returnedMailCard/Image10.webp"),
  //     5: require("./../img/O/returnedMailCard/Image12.webp"),
  //     6: require("./../img/O/returnedMailCard/Image14.webp"),
  //     7: require("./../img/O/returnedMailCard/Image16.webp"),
  //     8: require("./../img/O/returnedMailCard/Image18.webp"),
  //     9: require("./../img/O/returnedMailCard/Image20.webp"),
  //     10: require("./../img/O/returnedMailCard/Image22.webp"),
  //     11: require("./../img/O/returnedMailCard/Image24.webp"),
  //     12: require("./../img/O/returnedMailCard/Image26.webp"),
  //     13: require("./../img/O/returnedMailCard/Image28.webp"),
  //     14: require("./../img/O/returnedMailCard/Image30.webp"),
  //     15: require("./../img/O/returnedMailCard/Image32.webp"),
  //     16: require("./../img/O/returnedMailCard/Image34.webp"),
  //     17: require("./../img/O/returnedMailCard/Image36.webp"),
  //     18: require("./../img/O/returnedMailCard/Image38.webp"),
  //     19: require("./../img/O/returnedMailCard/Image40.webp"),
  //     20: require("./../img/O/returnedMailCard/Image42.webp"),
  //     21: require("./../img/O/returnedMailCard/Image44.webp"),
  //     22: require("./../img/O/returnedMailCard/Image46.webp"),
  //     23: require("./../img/O/returnedMailCard/Image48.webp"),
  //     24: require("./../img/O/returnedMailCard/Image50.webp"),
  //     25: require("./../img/O/returnedMailCard/Image52.webp"),
  //     26: require("./../img/O/returnedMailCard/Image54.webp"),
  //     27: require("./../img/O/returnedMailCard/Image56.webp"),
  //     28: require("./../img/O/returnedMailCard/Image58.webp")
  //   };
  //   this.image = mail_cards[this.itemId]
  // }

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
          source={this.param.back}
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
    alignItems: 'flex-end'
  }
});

export default PageBackPage_o3;
