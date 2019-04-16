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
import HOC from './ListHOC';

class PageReturnedMailCard_s extends Component {
  _onPressButton_back() {
    this.props.navigation.goBack();
  }
  
  _handleButtonClick = (item, index) => {
    this.props.navigation.push("ReturnedMailCard_o", { data: item });
    Storage.load({
      key: 'letterCards'
    }).then(res => {
      if(res) {
        let list = [...res];
        list[index].isNew = false; // 关闭new提示
        Storage.save({key: 'letterCards', data: list})
      }
    })
  };

  _renderItem = ({ item, index }) => (
    <View style={{ flex: 1, margin: 10, flexDirection: "column" }}>
      <TouchableWithoutFeedback onPress={item.unlocked ? () => { this._handleButtonClick(item, index) } : null} >
        <View style={{position: 'relative'}}>
          <Image
            style={styles.imageThumbnail}
            resizeMode="stretch"
            source={item.unlocked ? item.small : this.props.lockedImg}
          />
          {item.isNew && <Image style={styles.newSty} source={require('../img/O/NEW.png')}/>}
        </View>
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
                    data={this.props.dataSource}
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
    alignSelf: "center",
    width: 150,
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
  },
  newSty: {
    width: 50, 
    height: 30, 
    position: 'absolute',
    top: 0,
    left: 0
  }
});

export default HOC(PageReturnedMailCard_s, 'letter');
