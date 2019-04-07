import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';
import { scale } from 'react-native-size-matters';

import { WawaText } from '../../components/WawaText';
import { pageIds } from '../InStore/InStoreConfig';

export const F16 = (props) => {
  const gotoNextPage = () => {
    props.funcs.redirectTo(pageIds.F17);
  };

  const skipSteps = () => {
    props.funcs.redirectTo(pageIds.M1);
  };

  return (
    <ImageBackground
      resizeMode="stretch"
      style={styles.fullScreen}
      source={require("../../img/instore/F16.jpg")}>
      <View style={styles.topPlaceholder}></View>
      <TouchableOpacity
        onPress={gotoNextPage}
        activeOpacity={.7}
        style={[styles.button, styles.mainButton]}>
        <ImageBackground
          resizeMode="stretch"
          style={styles.buttonBackgournd}
          source={require("../../img/instore/BtnLgInactive.png")}>
          <WawaText style={styles.buttonText}>
            与超越一起抓
          </WawaText>
        </ImageBackground>
      </TouchableOpacity>
      <View style={styles.buttonGap}></View>
      <TouchableOpacity
        onPress={skipSteps}
        activeOpacity={.7}
        style={[styles.button, styles.backButton]}>
        <ImageBackground
          resizeMode="stretch"
          style={styles.buttonBackgournd}
          source={require("../../img/instore/BtnLgInactive.png")}>
          <WawaText style={styles.buttonText}>
            看超越抓
          </WawaText>
        </ImageBackground>
      </TouchableOpacity>
      <View style={styles.bottomPlaceholder}></View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  topPlaceholder: {
    flex: 560,
  },
  bottomPlaceholder: {
    flex: 30,
  },
  buttonGap: {
    flex: 5,
  },
  button: {
    flex: 80,
    marginHorizontal: '25%',
  },
  buttonText: {
    width: '100%',
    height: '100%',
    color: 'white',
    fontSize: scale(16),
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  mainButton: {
  },
  backButton: {
  },
  buttonBackgournd: {
    width: '100%',
    height: '100%',
  },
});

export default F16;