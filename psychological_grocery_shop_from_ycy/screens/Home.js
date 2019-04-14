import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableHighlight,
  Image,
  StatusBar,
  Alert,
  PermissionsAndroid, 
  Dimensions,
  Animated,
  Easing,
  TouchableOpacity
} from "react-native";
import SplashScreen from "react-native-splash-screen";
import { initCardStore } from '../components/CardStore';

async function requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}

// type Props = {};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openingShow: true
    }
    this.spinValue = new Animated.Value(0);
    this.spinValue2 = new Animated.Value(0)
  }
  componentDidMount() {
    initCardStore();
    SplashScreen.hide();
    requestCameraPermission();
    this.spin();
    this.spin2();
  }
  spin = () => {
    this.spinValue.setValue(0);
    Animated.sequence([
      Animated.timing(this.spinValue,{
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }),
      Animated.timing(this.spinValue,{
        toValue: 0,
        duration: 2000,
        easing: Easing.linear
      })
    ]).start(() => this.spin());
  }
  spin2 = () => {
    this.spinValue2.setValue(0);
    Animated.sequence([
      Animated.timing(this.spinValue2,{
        toValue: 1,
        duration: 5000,
        easing: Easing.linear
      }),
    ]).start();
  }

  _handleButtonClick = btn => {
    switch (btn) {
      case 'letter':
        return this.props.navigation.push("MailBox_i");
      case 'store':
        return this.props.navigation.push("InStore");
        //TODO:
      case 'team':
        return this.props.navigation.push("TeamIntro");
      case 'exit':
        return this.props.navigation.push("ExitPage_e");
        //return RNExitApp.exitApp();
      default:
        return Alert.alert(btn);
    }
  }
  open = () => {
    this.setState({
      openingShow: false
    })
  }
  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['-10deg', '0deg']
    });
    const spin2 = this.spinValue2.interpolate({
      inputRange: [0, 1],
      outputRange: ['10deg', '-10deg']
    });
    let screenWidth = Dimensions.get('window').width;
    let screenHeight = Dimensions.get('window').height;
    return (
      <View style={{ flex: 1}}>
        <TouchableOpacity onPress={this.open}>
          <ImageBackground
            source={require('../img/opening-bg.png')}
            style={{  display: this.state.openingShow ? 'flex': 'none',width: '100%', height: '100%'}}
          >
            <View style={{ flex: 1, opacity: 1, width: '100%', height: '100%' }}>
              <Image
                source={require('../img/feather.png')}
                resizeMode='contain'
                style={[{ position: "absolute", left: 0, width: '100%', height: '100%' }]}
              />
              <Animated.Image
                source={require('../img/opening-figure.png')}
                resizeMode='contain'
                style={[
                  {position: "absolute", left: 100, width: '100%', height: '100%'},
                  {transform: [ { rotate: spin2 }]}
                ]}
              />
              <Animated.Image
                source={require('../img/opening-logo.png')}
                resizeMode='contain'
                style={[
                  {position: "absolute", top: '-20%', width: '60%'},
                  {transform: [ { rotate: spin }]}
                ]}
              />
            </View>
          </ImageBackground>
        </TouchableOpacity>
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
                  <TouchableHighlight underlayColor='transparent' style={styles.btnWrapper}
                    onPress={() => this._handleButtonClick('letter')}>
                    <Image
                      style={styles.button}
                      resizeMode="contain"
                      source={require('../img/btns/home_letter.png')}
                    />
                  </TouchableHighlight>
                  <TouchableHighlight underlayColor='transparent' style={styles.btnWrapper}
                    onPress={() => this._handleButtonClick('store')}>
                    <Image
                      style={styles.button}
                      resizeMode="contain"
                      source={require('../img/btns/home_store.png')}
                    />
                  </TouchableHighlight>
                </View>
                <View style={styles.btns}>
                  <TouchableHighlight underlayColor='transparent' style={styles.btnWrapper}
                    onPress={() => this._handleButtonClick('team')}>
                    <Image
                      style={styles.button}
                      resizeMode="contain"
                      source={require('../img/btns/home_team.png')}
                    />
                  </TouchableHighlight>
                  <TouchableHighlight underlayColor='transparent' style={styles.btnWrapper}
                    onPress={() => this._handleButtonClick('exit')}>
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
