import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Alert } from 'react-native';

import { InStoreView } from '../InStoreView';
import { WawaText } from '../../components/WawaText';

export const F16 = (props) => {
  const gotoNextPage = () => {
    props.navigation.popToTop();
    props.navigation.navigate('F17');
  };

  const skipSteps = () => {
    props.navigation.popToTop();
    props.navigation.navigate("M1");
  };

  return (
    <InStoreView backgroundImage={require("../../img/instore/F16.jpg")}>
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
    </InStoreView>
  )
}

const styles = StyleSheet.create({
  topPlaceholder: {
    flex: 560,
    backgroundColor: 'rgba(220, 120, 220, 0.5)',
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
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  mainButton: {
    backgroundColor: 'rgba(220, 120, 120, 0.5)',
  },
  backButton: {
    backgroundColor: 'rgba(120, 220, 120, 0.5)',
  },
  buttonBackgournd: {
    width: '100%',
    height: '100%',
  },
});

export default F16;