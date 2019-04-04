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

class PageMailBox_n extends Component {
  _onPressButton_back() {
    this.props.navigation.goBack();
  }

  _onPressButton_topic = topic => {
    this.props.navigation.push(topic);
  };

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
          source={require("./../img/N.png")}
        >
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ flex: 326 }} />
            <View style={{ flex: 100 }}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 185 }} />
                <View style={{ flex: 355 }}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    //onPress={() => this._onPressButton_topic("ReturnedMailCard_s")}
                    onPress={() => this._onPressButton_topic("ReturnedMailCard_s")}
                  />
                </View>
                <View style={{ flex: 254 }} />
                <View style={{ flex: 355 }}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => this._onPressButton_topic("PersonCard_p")}
                  />
                </View>
                <View style={{ flex: 185 }} />
              </View>
            </View>
            <View style={{ flex: 54 }} />
            <View style={{ flex: 100 }}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 794 }} />
                <View style={{ flex: 355 }}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => this._onPressButton_topic("GiftCard_q")}
                  />
                </View>
                <View style={{ flex: 185 }} />
              </View>
            </View>
            <View style={{ flex: 170 }}>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{ flex: 101 }} />
                <View style={{ flex: 43 }}>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ flex: 1200 }} />
                    <View style={{ flex: 86 }}>
                      <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => this._onPressButton_back()}
                      />
                    </View>
                    <View style={{ flex: 48 }} />
                  </View>
                </View>
                <View style={{ flex: 26 }} />
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
  }
});

export default PageMailBox_n;
