import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { scale } from 'react-native-size-matters';

import { InStoreView } from '../InStoreView';
import { WawaText } from '../../components/WawaText';

export const M2 = (props) => {
  props.navigation.dismiss();

  const saveImage = () => {
    Alert.alert('啊还没做完！');
  };

  const shareImage = () => {
    Alert.alert('啊也还没做完！');
  };

  const backToHome = () => {
    props.navigation.push('InStore');
  };

  return (
    <InStoreView backgroundImage={require("../../img/instore/M2.jpg")}>
      <TouchableOpacity
        activeOpacity={.7}
        onPress={saveImage}
        style={[styles.button, styles.saveButton]}>
        <ImageBackground
          resizeMode="stretch"
          style={styles.buttonBackgournd}
          source={require("../../img/instore/BtnMdInactive.png")}>
          <WawaText style={styles.buttonText}>
            保存
          </WawaText>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={.7}
        onPress={shareImage}
        style={[styles.button, styles.shareButton]}>
        <ImageBackground
          resizeMode="stretch"
          style={styles.buttonBackgournd}
          source={require("../../img/instore/BtnMdInactive.png")}>
          <WawaText style={styles.buttonText}>
            分享
          </WawaText>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={.7}
        onPress={backToHome}
        style={[styles.button, styles.backButton]}>
        <ImageBackground
          resizeMode="stretch"
          style={styles.buttonBackgournd}
          source={require("../../img/instore/BtnMdInactive.png")}>
          <WawaText style={styles.buttonText}>
            回到店铺
          </WawaText>
        </ImageBackground>
      </TouchableOpacity>
    </InStoreView>
  )
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    width: 120,
    height: 50,
  },
  buttonText: {
    width: '100%',
    height: '100%',
    color: 'white',
    fontSize: scale(16),
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  buttonBackgournd: {
    width: '100%',
    height: '100%',
  },
  saveButton: {
    left: 20,
    bottom: 10,
  },
  shareButton: {
    left: 150,
    bottom: 10,
  },
  backButton: {
    right: 20,
    bottom: 10,
  },
});

export default M2;