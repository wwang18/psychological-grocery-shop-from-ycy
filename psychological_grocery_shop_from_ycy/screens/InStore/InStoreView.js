import React from 'react';
import Video from 'react-native-video';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Dimensions, Image, Alert } from 'react-native';
import { scale } from 'react-native-size-matters';

import { WawaText } from '../components/WawaText';

const backgroundMusic = require('../audio/2017-04-14_-_Happy_Dreams_-_David_Fesliyan.mp3');

export class InStoreView extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          resizeMode="stretch"
          style={styles.container}
          source={this.props.backgroundImage}>
          <View style={styles.gearButtonArea}>
            <TouchableOpacity
              onPress={() => Alert.alert('这个设置还没做好。。')}
              style={styles.button}>
              <Image
                style={styles.buttonBackgournd}
                source={require("../img/instore/BtnSettings.png")} />
            </TouchableOpacity>
          </View>
          <View style={styles.heartButtonArea}>
            <ImageBackground
              style={styles.numberContainer}
              source={require("../img/instore/Heart.png")}>
              <WawaText style={styles.numberDisplay}>1000000</WawaText>
            </ImageBackground>
          </View>
          <View style={styles.coinButtonArea}>
            <ImageBackground
              style={styles.numberContainer}
              source={require("../img/instore/Coin.png")}>
              <WawaText style={styles.numberDisplay}>1000000</WawaText>
            </ImageBackground>
          </View>
          {this.props.children}
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flex: 1,
  },
  buttonBackgournd: {
    width: '100%',
    height: '100%',
  },
  numberContainer: {
    flex: 1,
    paddingStart: 45,
    paddingVertical: 15,
  },
  numberDisplay: {
    fontSize: scale(14),
    color: 'white',
  },
  gearButtonArea: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 71,
    height: 76,
  },
  heartButtonArea: {
    position: 'absolute',
    right: 20,
    top: 2,
    width: 135,
    height: 45,
  },
  coinButtonArea: {
    position: 'absolute',
    right: 20,
    top: 38,
    width: 135,
    height: 45,
  },
});

export default InStoreView;