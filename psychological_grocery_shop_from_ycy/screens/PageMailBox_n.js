import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  ImageBackground,
  StatusBar,
  Image,
  TouchableOpacity
} from "react-native";
import { connect } from 'react-redux';
import { initCardStore } from '../components/CardStore';

class PageMailBox_n extends Component {

  componentDidMount() {
    initCardStore(this.props); // 初始化数据
  }

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
          source={require("./../img/N.jpg")}
        >
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ flex: 326 }} />
            <View style={{ flex: 100 }}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 185 }} />
                <View style={{ flex: 355 }}>
                  <TouchableOpacity
                  style={styles.btnWrapper}
                    onPress={() => this._onPressButton_topic("ReturnedMailCard_s")}
                  >
                  <Image
                    style={styles.button}
                    resizeMode="contain"
                    source={require('../img/btns/n_ReturnedMailCard.png')}
                  />
                  </TouchableOpacity>

                </View>
                <View style={{ flex: 254 }} />
                <View style={{ flex: 355 }}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => this._onPressButton_topic("PersonCard_p")}
                  >
                  <Image
                    style={styles.button}
                    resizeMode="contain"
                    source={require('../img/btns/n_PersonalCard.png')}
                  />
                  </TouchableOpacity>
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
                  >
                  <Image
                    style={styles.button}
                    resizeMode="contain"
                    source={require('../img/btns/n_GiftCard.png')}
                  />
                  </TouchableOpacity>
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
                      >
                      <Image
                        style={styles.button}
                        resizeMode="contain"
                        source={require('../img/btns/n_Return.png')}
                      />
                      </TouchableOpacity>
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
  },
  btnWrapper: {
    flex: 1,
  },
  button: {
    width: null,
    height: null,
    flex: 1,
  }
});

export default connect()(PageMailBox_n);
