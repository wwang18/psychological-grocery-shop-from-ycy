import React from 'react';
import { StyleSheet, View, ImageBackground, Alert } from 'react-native';

import { WawaButton } from '../../components/WawaButton';
import { pageIds } from '../InStore/InStoreConfig';

export const M2 = (props) => {
  const saveImage = () => {
    Alert.alert('啊还没做完！');
  };

  const shareImage = () => {
    Alert.alert('啊也还没做完！');
  };

  const backToHome = () => {
    props.funcs.redirectTo(pageIds.storeMain);
  };

  return (
    <ImageBackground
      resizeMode="stretch"
      style={styles.fullScreen}
      source={require("../../img/instore/M2.jpg")}>
      <WawaButton
        size={"sm"}
        style={[styles.button, styles.saveButton]}
        text={"保存"}
        onPress={saveImage}></WawaButton>
      <WawaButton
        size={"sm"}
        style={[styles.button, styles.shareButton]}
        text={"分享"}
        onPress={shareImage}></WawaButton>
      <WawaButton
        size={"sm"}
        style={[styles.button, styles.backButton]}
        text={"回到店铺"}
        onPress={backToHome}></WawaButton>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    width: 120,
    height: 50,
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