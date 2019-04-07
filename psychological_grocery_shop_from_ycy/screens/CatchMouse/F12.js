import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

import { WawaButton } from '../../components/WawaButton';
import { pageIds } from '../InStore/InStoreConfig';

export const F12 = (props) => {

  const gotoNextPage = () => {
    props.funcs.redirectTo(pageIds.F13);
  };

  const backToHome = () => {
    props.funcs.redirectTo(pageIds.storeMain);
  };

  return (
    <ImageBackground
      resizeMode="stretch"
      style={styles.fullScreen}
      source={require("../../img/instore/FWithButton.jpg")}>
      <View style={styles.topPlaceholder}></View>
      <WawaButton
        size={"lg"}
        style={styles.button}
        text={"大叫“超越，你打工迟到了！”"}
        onPress={gotoNextPage}></WawaButton>
      <WawaButton
        size={"lg"}
        style={styles.button}
        text={"只好离开"}
        onPress={backToHome}></WawaButton>
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
  buttonBackgournd: {
    width: '100%',
    height: '100%',
  },
});

export default F12;