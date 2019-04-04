import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import RNSoundLevel from 'react-native-sound-level';

import { InStoreView } from '../InStoreView';
import { WawaText } from '../../components/WawaText';

export const F13 = (props) => {
  const gotoNextPage = () => {
    props.navigation.popToTop();
    props.navigation.navigate('F14');
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
    <InStoreView backgroundImage={require("../../img/instore/FWithButton.jpg")}>
      <View style={styles.topArea}>
        <View style={styles.roundButtonPlaceHolder}></View>
        <TouchableOpacity
          onPressIn={startMeasuring}
          onPressOut={stopMeasuring}
          style={[styles.button, styles.roundButton]}>
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
      <View style={styles.skipButtonArea}>
        <TouchableOpacity
          onPress={gotoNextPage}
          style={styles.button}>
        </TouchableOpacity>
      </View>
    </InStoreView>
  )
}

const styles = StyleSheet.create({
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
  button: {
    // Display as circle, touch area is still square.
    flex: 1,
    backgroundColor: 'rgba(220, 120, 120, 0.5)',
  },
  skipButtonArea: {
    position: 'absolute',
    bottom: '5%',
    right: '5%',
    width: '15%',
    height: '15%',
  },
  buttonBackgournd: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 1,
    backgroundColor: 'rgba(120, 120, 220, 0.5)',
    paddingHorizontal: 80,
    paddingVertical: 30,
  },
  displayText: {
    color: 'white',
    fontSize: 24,
  },
});

export default F13;