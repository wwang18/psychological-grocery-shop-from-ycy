import React from 'react';
import { StyleSheet, ImageBackground, Alert } from 'react-native';

import { WawaButton } from '../../components/WawaButton';
import { pageIds } from '../InStore/InStoreConfig';

export const MinisMachine = (props) => {
  const { redirectTo, getState, modState } = props.funcs;

  const playMinis = () => {
    const { coins } = getState();
    if (coins >= 10) {
      modState(0, -10);
      redirectTo(pageIds.U1);
    } else {
      Alert.alert('你没有足够的金币！');
    }
  };

  const backToHome = () => {
    redirectTo(pageIds.storeMain);
  };

  return (
    <ImageBackground
      resizeMode="stretch"
      style={styles.fullScreen}
      source={require("../../img/instore/U.jpg")}>
      <WawaButton
        size={"sm"}
        style={styles.playButton}
        text={"抽一次"}
        onPress={playMinis}></WawaButton>
      <WawaButton
        size={"sm"}
        style={styles.backButton}
        text={"返回"}
        onPress={backToHome}></WawaButton>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  playButton: {
    position: 'absolute',
    width: 120,
    height: 50,
    left: 170,
    bottom: 10,
  },
  backButton: {
    position: 'absolute',
    width: 120,
    height: 50,
    right: 50,
    bottom: 10,
  },
});

export default MinisMachine;