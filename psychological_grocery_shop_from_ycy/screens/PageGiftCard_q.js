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
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";

class PageGiftCard_p extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: {}
    };
  }

  _handleButtonClick = item => {
      this.props.navigation.push("GiftCardView_q", { itemId: item.id });
  };

  _onPressButton_back() {
    this.props.navigation.goBack();
  }

  componentWillMount() {
    var that = this;
    let first_card = [
      { id: 0, src: require("./../img/giftcards/giftCardsSmall/Image01.webp") },
      { id: 1, src: require("./../img/giftcards/giftCardsSmall/Image02.webp") },
      { id: 2, src: require("./../img/giftcards/giftCardsSmall/Image03.webp") },
      { id: 3, src: require("./../img/giftcards/giftCardsSmall/Image04.webp") },
      { id: 4, src: require("./../img/giftcards/giftCardsSmall/Image05.webp") },
      { id: 5, src: require("./../img/giftcards/giftCardsSmall/Image06.webp") },
      { id: 6, src: require("./../img/giftcards/giftCardsSmall/Image07.webp") },
      { id: 7, src: require("./../img/giftcards/giftCardsSmall/Image08.webp") },
      { id: 8, src: require("./../img/giftcards/giftCardsSmall/Image09.webp") },
      { id: 9, src: require("./../img/giftcards/giftCardsSmall/Image10.webp") },
      { id: 10, src: require("./../img/giftcards/giftCardsSmall/Image11.webp") },
      { id: 11, src: require("./../img/giftcards/giftCardsSmall/Image12.webp") },
      { id: 12, src: require("./../img/giftcards/giftCardsSmall/Image13.webp") },
      { id: 13, src: require("./../img/giftcards/giftCardsSmall/Image14.webp") },
      { id: 14, src: require("./../img/giftcards/giftCardsSmall/Image15.webp") },
      { id: 15, src: require("./../img/giftcards/giftCardsSmall/Image16.webp") }
    ];
    this.image = first_card;
    // that.setState({
    //   dataSource: first_card
    // });
  }

  _renderItem = ({ item }) => (
    <View style={{ flex: 1, flexDirection: "column", margin: 10 }}>
      <TouchableWithoutFeedback onPress={() => this._handleButtonClick(item)}>
        <Image
          style={styles.imageThumbnail}
          resizeMode="contain"
          source={item.src}
        />
      </TouchableWithoutFeedback>
    </View>
  );

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
          source={require("./../img/PQS/PQS_background.png")}
        >
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ flex: 150 }}>
              <Image
                style={styles.header}
                resizeMode="contain"
                source={require("./../img/PQS/title_GiftCard.png")}
              />
            </View>
            <View style={{ flex: 30 }} />
            <View style={{ flex: 490 }}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 250 }} />
                <View style={{ flex: 830, justifyContent: "center" }}>
                  <FlatList
                    data={this.image}
                    renderItem={this._renderItem}
                    initialNumToRender={9}
                    //Setting the number of column
                    numColumns={3}
                    keyExtractor={(item, index) => index}
                  />
                </View>
                <View style={{ flex: 250 }} />
              </View>
            </View>
            <View style={{ flex: 80 }}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1210 }} />
                <View style={{ flex: 124 }}>
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
  MainContainer: {
    justifyContent: "center",
    flex: 300
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 100
  },
  header: {
    alignItems: "center",
    height: "100%",
    width: "100%"
  },
  button: {
    width: null,
    height: null,
    flex: 1
  }
});

export default PageGiftCard_p;
