import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Dimensions, Image, Alert } from 'react-native';

import { WawaText } from '../components/WawaText';


function getScreenDimensions() {
  const { height, width } = Dimensions.get('window');
  return height > width ? [height, width] : [width, height];
}

const [WIDTH, HEIGHT] = getScreenDimensions();

export const InStoreView = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="stretch"
        style={styles.container}
        source={props.backgroundImage}>
        <View style={styles.gearButtonArea}>
          <TouchableOpacity
            onPress={() => Alert.alert('Settings')}
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
        {props.children}
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flex: 1,
    backgroundColor: 'rgba(220, 120, 120, 0.5)',
  },
  buttonBackgournd: {
    width: '100%',
    height: '100%',
  },
  numberContainer: {
    flex: 1,
    backgroundColor: 'rgba(120, 220, 120, 0.5)',
    paddingStart: 45,
    paddingVertical: 15,
  },
  numberDisplay: {
    fontSize: 18,
    color: 'white',
  },
  gearButtonArea: {
    position: 'absolute',
    left: WIDTH * 0.0,
    top: HEIGHT * 0.0,
    width: WIDTH * 0.1,
    height: HEIGHT * 0.2,
  },
  heartButtonArea: {
    position: 'absolute',
    right: WIDTH * 0.01,
    top: HEIGHT * 0.01,
    width: WIDTH * 0.22,
    height: HEIGHT * 0.12,
  },
  coinButtonArea: {
    position: 'absolute',
    right: WIDTH * 0.01,
    top: HEIGHT * 0.11,
    width: WIDTH * 0.22,
    height: HEIGHT * 0.12,
  },
});

export default InStoreView;