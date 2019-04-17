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
import { connect } from "react-redux";

class PageGiftCard_q extends Component {

  _handleButtonClick = (item, index) => {
    const { navigation, dispatch } = this.props;
    navigation.push("GiftCardView_q", { data: item });
    if(item.isNew) {
      dispatch({
        type: 'mailBox/changeCardsState',
        params: {key: 'giftCards', id: index, isNew: false}
      })
    }
  }
  _onPressButton_back() {
    this.props.navigation.goBack();
  }

  _renderItem = ({ item, index }) => (
    <View style={{ flex: 1, flexDirection: "column", margin: 10 }}>
    {
      item.isNull == undefined &&
      <TouchableWithoutFeedback
        onPress={item.unlocked ? () => { this._handleButtonClick(item, index) } : null}
      >
        <View style={{position: 'relative'}}>
          <Image
            style={styles.imageThumbnail}
            resizeMode="contain"
            source={item.unlocked ? item.small : this.props.lockedImg}
          />
          {item.isNew && <Image style={styles.newSty} source={require('../img/O/NEW.png')}/>}
        </View>
      </TouchableWithoutFeedback>
    }
    </View>
  );

  render() {
    const { giftCards } = this.props;
    if(giftCards.length > 0 && giftCards.length%3 !== 0) { //维持最后一行的样式
      for(let i=0; i<giftCards.length%3; i++) giftCards.push({isNull: true})
    } 
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
                source={require('./../img/PQS/title_GiftCard.png')}
              />
            </View>
            <View style={{ flex: 30 }} />
            <View style={{ flex: 490 }}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 250 }} />
                <View style={{ flex: 830, justifyContent: 'center' }}>
                  <FlatList
                    data={giftCards}
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
    alignSelf: "center",
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
  },
  newSty: {
    width: 50, 
    height: 30, 
    position: 'absolute',
    top: 0,
    left: 0
  }
});

export default connect(({mailBox}) => {
  return{
    giftCards: mailBox.giftCards,
    lockedImg: mailBox.lockedImg,
  }
})(PageGiftCard_q);
