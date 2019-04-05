import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { scale } from 'react-native-size-matters';

import { InStoreView } from '../InStoreView';
import { WawaText } from '../../components/WawaText';

export const F12 = (props) => {
  props.navigation.dismiss();

  const gotoNextPage = () => {
    props.navigation.push('F13');
  };

  const backToHome = () => {
    props.navigation.push('InStore');
  };

  return (
    <InStoreView backgroundImage={require("../../img/instore/FWithButton.jpg")}>
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
            大叫“超越，你打工迟到了！”
          </WawaText>
        </ImageBackground>
      </TouchableOpacity>
      <View style={styles.buttonGap}></View>
      <TouchableOpacity
        onPress={backToHome}
        activeOpacity={.7}
        style={[styles.button, styles.backButton]}>
        <ImageBackground
          resizeMode="stretch"
          style={styles.buttonBackgournd}
          source={require("../../img/instore/BtnLgInactive.png")}>
          <WawaText style={styles.buttonText}>
            只好离开
          </WawaText>
        </ImageBackground>
      </TouchableOpacity>
      <View style={styles.bottomPlaceholder}></View>
    </InStoreView>
  )
}

const styles = StyleSheet.create({
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

export default F12;