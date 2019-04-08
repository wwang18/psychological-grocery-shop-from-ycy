import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { scale } from 'react-native-size-matters';
import RNSoundLevel from 'react-native-sound-level';

import { WawaText } from '../../components/WawaText';
import { WawaButton } from '../../components/WawaButton';
import { pageIds } from '../InStore/InStoreConfig';

export const F13 = (props) => {
  const gotoNextPage = () => {
    props.funcs.redirectTo(pageIds.F14);
  };

  const startMeasuring = () => {
    console.log('Start Sound!');
    RNSoundLevel.start()
    RNSoundLevel.onNewFrame = (data) => {
      // see "Returned data" section below
      if (data.rawValue !== 0) {
        Alert.alert(`Sound level: ${data.value}, raw: ${data.rawValue}`);
        stopMeasuring();
        gotoNextPage();
      }
    };
  };

  const stopMeasuring = () => {
    RNSoundLevel.stop();
  };

  return (
    <ImageBackground
      resizeMode="stretch"
      style={styles.fullScreen}
      source={require("../../img/instore/FWithButton.jpg")}>
      <View style={styles.topArea}>
        <View style={styles.roundButtonPlaceHolder}></View>
        <TouchableOpacity
          onPressIn={startMeasuring}
          onPressOut={stopMeasuring}
          style={styles.roundButton}>
          <ImageBackground
            resizeMode="stretch"
            style={styles.buttonBackgournd}
            source={require("../../img/instore/BtnRecord.png")}>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomArea}>
        <View style={styles.textContainer}>
          <WawaText style={styles.displayText}>
            请按着中心圆键，并大声叫“超越，你打工迟到了！”（温馨提示：小声就感应不到哦）
          </WawaText>
        </View>
      </View>
      <WawaButton
        size={"sm"}
        style={styles.skipButton}
        text={"跳过"}
        onPress={gotoNextPage}></WawaButton>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  topArea: {
    flex: 500,
    alignItems: 'center',
  },
  bottomArea: {
    flex: 250,
  },
  roundButtonPlaceHolder: {
    flex: 100,
  },
  roundButton: {
    flex: 200,
    width: 200,
    borderRadius: 3000,
  },
  buttonBackgournd: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 80,
    paddingVertical: 30,
  },
  displayText: {
    color: 'white',
    fontSize: scale(18),
  },
  skipButton: {
    position: 'absolute',
    width: 120,
    height: 50,
    right: 30,
    bottom: 10,
  },
});

export default F13;