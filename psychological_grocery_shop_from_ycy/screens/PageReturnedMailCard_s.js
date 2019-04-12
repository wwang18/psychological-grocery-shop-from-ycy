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
  Image,
  FlatList,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback
} from "react-native";

class PageReturnedMailCard_s extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: {}
    };
  }

  _onPressButton_back() {
    this.props.navigation.goBack();
  }

  _handleButtonClick = item => {
    if (item.id <= 28) {
      this.props.navigation.push("ReturnedMailCard_o", { itemId: item.id });
    }
  };

  componentWillMount() {
    var that = this;
    let first_card = [
      { id: 0, src: require("./../img/returnedMailCards/returnedMailCard_small/Image03.webp") },
      { id: 1, src: require("./../img/returnedMailCards/returnedMailCard_small/Image05.webp") },
      { id: 2, src: require("./../img/returnedMailCards/returnedMailCard_small/Image07.webp") },
      { id: 3, src: require("./../img/returnedMailCards/returnedMailCard_small/Image09.webp") },
      { id: 4, src: require("./../img/returnedMailCards/returnedMailCard_small/Image11.webp") },
      { id: 5, src: require("./../img/returnedMailCards/returnedMailCard_small/Image13.webp") },
      { id: 6, src: require("./../img/returnedMailCards/returnedMailCard_small/Image15.webp") },
      { id: 7, src: require("./../img/returnedMailCards/returnedMailCard_small/Image17.webp") },
      { id: 8, src: require("./../img/returnedMailCards/returnedMailCard_small/Image19.webp") },
      { id: 9, src: require("./../img/returnedMailCards/returnedMailCard_small/Image21.webp") },
      {
        id: 10,
        src: require("./../img/returnedMailCards/returnedMailCard_small/Image23.webp")
      },
      {
        id: 11,
        src: require("./../img/returnedMailCards/returnedMailCard_small/Image25.webp")
      },
      {
        id: 12,
        src: require("./../img/returnedMailCards/returnedMailCard_small/Image27.webp")
      },
      {
        id: 13,
        src: require("./../img/returnedMailCards/returnedMailCard_small/Image29.webp")
      },
      {
        id: 14,
        src: require("./../img/returnedMailCards/returnedMailCard_small/Image31.webp")
      },
      {
        id: 15,
        src: require("./../img/returnedMailCards/returnedMailCard_small/Image33.webp")
      },
      {
        id: 16,
        src: require("./../img/returnedMailCards/returnedMailCard_small/Image35.webp")
      },
      {
        id: 17,
        src: require("./../img/returnedMailCards/returnedMailCard_small/Image37.webp")
      },
      {
        id: 18,
        src: require("./../img/returnedMailCards/returnedMailCard_small/Image39.webp")
      },
      {
        id: 19,
        src: require("./../img/returnedMailCards/returnedMailCard_small/Image41.webp")
      },
      {
        id: 20,
        src: require("./../img/returnedMailCards/returnedMailCard_small/Image43.webp")
      },
      {
        id: 21,
        src: require("./../img/returnedMailCards/returnedMailCard_small/Image45.webp")
      },
      {
        id: 22,
        src: require("./../img/returnedMailCards/returnedMailCard_small/Image47.webp")
      },
      {
        id: 23,
        src: require("./../img/returnedMailCards/returnedMailCard_small/Image49.webp")
      },
      {
        id: 24,
        src: require("./../img/returnedMailCards/returnedMailCard_small/Image51.webp")
      },
      {
        id: 25,
        src: require("./../img/returnedMailCards/returnedMailCard_small/Image53.webp")
      },
      {
        id: 26,
        src: require("./../img/returnedMailCards/returnedMailCard_small/Image55.webp")
      },
      {
        id: 27,
        src: require("./../img/returnedMailCards/returnedMailCard_small/Image57.webp")
      },
      { id: 28, src: require("./../img/returnedMailCards/returnedMailCard_small/Image59.webp") }
    ];
    that.setState({
      dataSource: first_card
    });
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
                source={require("./../img/PQS/title_ReturnedMailCard.png")}
              />
            </View>
            <View style={{ flex: 30 }} />
            <View style={{ flex: 490 }}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 250 }} />
                <View style={{ flex: 830, justifyContent: "center" }}>
                  <FlatList
                    data={this.state.dataSource}
                    renderItem={this._renderItem}
                    initialNumToRender={9}
                    //Setting the number of column
                    numColumns={3}
                    keyExtractor={(item, index) => index}
                  />
                </View>
                <View style={{ flex: 254 }} />
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
    flex: 810
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 80
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

export default PageReturnedMailCard_s;
