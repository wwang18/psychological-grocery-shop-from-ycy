import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

import { WawaButton } from '../../components/WawaButton';
import { pageIds } from '../InStore/InStoreConfig';

export const Phonograph = (props) => {
  const backToHome = () => {
    props.funcs.redirectTo(pageIds.storeMain);
  };


  return (
    <ImageBackground
      resizeMode="stretch"
      style={styles.fullScreen}
      source={require("../../img/instore/V.jpg")}>
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
  backButton: {
    position: 'absolute',
    width: 120,
    height: 50,
    right: 20,
    bottom: 10,
  },
});

export default Phonograph;