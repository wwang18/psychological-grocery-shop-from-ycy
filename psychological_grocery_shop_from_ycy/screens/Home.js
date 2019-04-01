import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableHighlight,
  Image,
  StatusBar,
  Alert
} from "react-native";
import RNExitApp from "react-native-exit-app";
import SplashScreen from "react-native-splash-screen";

type Props = {};

class Home extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  _handleButtonClick = btn => {
    switch(btn) {
      case 'letter':
        return this.props.navigation.push("MailBox_i");
      case 'exit':
        return RNExitApp.exitApp();
      default:
        return Alert.alert(btn);
    }
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
          style={{
            flex: 1
          }}
          source={require("../img/bg/home.jpg")}
        >
          <View style={styles.container}>
            <View style={styles.btnContainer}>
              <View style={styles.btns}>
                <TouchableHighlight style={styles.btnWrapper} onPress={() => this._handleButtonClick('letter')}>
                  <Image
                    style={styles.button}
                    resizeMode="contain"
                    source={require('../img/btns/home_letter.png')}
                  />
                </TouchableHighlight>
                <TouchableHighlight style={styles.btnWrapper} onPress={() => this._handleButtonClick('store')}>
                  <Image
                    style={styles.button}
                    resizeMode="contain"
                    source={require('../img/btns/home_store.png')}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.btns}>
                <TouchableHighlight style={styles.btnWrapper} onPress={() => this._handleButtonClick('team')}>
                  <Image
                    style={styles.button}
                    resizeMode="contain"
                    source={require('../img/btns/home_team.png')}
                  />
                </TouchableHighlight>
                <TouchableHighlight style={styles.btnWrapper} onPress={() => this._handleButtonClick('exit')}>
                  <Image
                    style={styles.button}
                    resizeMode="contain"
                    source={require('../img/btns/home_exit.png')}
                  />
                </TouchableHighlight>
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
    justifyContent: "center",
    alignItems: "center"
  },
  btnContainer: {
    height: '50%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  btns: {
    flex: 0.3,
    justifyContent: "space-between",
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

export default Home;
