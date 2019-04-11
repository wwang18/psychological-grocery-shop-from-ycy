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

class PageMailToChaoYue_j extends Component {
  _onPressButton_back() {
    this.props.navigation.goBack();
  }

  _onPressButton_topic = topic => {
    this.props.navigation.push("SubTopic", topic);
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
          source={require("./../img/j_page.webp")}
        >
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ flex: 80 }} />
            <View style={{ flex: 132 }} />
            <View style={{ flex: 71 }} />
            <View style={{ flex: 110 }}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 316 }} />
                <View style={{ flex: 260 }}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => this._onPressButton_topic("family")}
                  />
                </View>
                <View style={{ flex: 182 }} />
                <View style={{ flex: 260 }}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => this._onPressButton_topic("career")}
                  />
                </View>
                <View style={{ flex: 316 }} />
              </View>
            </View>
            <View style={{ flex: 30 }} />
            <View style={{ flex: 110 }}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 316 }} />
                <View style={{ flex: 260 }}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => this._onPressButton_topic("love")}
                  />
                </View>
                <View style={{ flex: 182 }} />
                <View style={{ flex: 260 }}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => this._onPressButton_topic("social")}
                  />
                </View>
                <View style={{ flex: 316 }} />
              </View>
            </View>
            <View style={{ flex: 60 }} />
            <View style={{ flex: 110 }}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 378 }} />
                <View style={{ flex: 578 }}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => this._onPressButton_topic("idol")}
                  />
                </View>
                <View style={{ flex: 378 }} />
              </View>
            </View>
            <View style={{ flex: 47 }} />
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

export default PageMailToChaoYue_j;
