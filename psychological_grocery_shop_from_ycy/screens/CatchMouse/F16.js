import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

import { WawaButton } from '../../components/WawaButton';
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
      <WawaButton
        size={"lg"}
        style={styles.button}
        text={"与超越一起抓"}
        onPress={gotoNextPage}></WawaButton>
      <View style={styles.buttonGap}></View>
      <WawaButton
        size={"lg"}
        style={styles.button}
        text={"看超越抓"}
        onPress={skipSteps}></WawaButton>
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

export default F16;