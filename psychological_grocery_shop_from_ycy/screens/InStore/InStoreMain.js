import React from 'react';
import { StyleSheet, View, Alert, TouchableOpacity, ImageBackground, Image } from 'react-native';

import { pageIds } from './InStoreConfig';

export const InStore = (props) => {

  const gotoPage = (pageName) => {
    props.funcs.redirectTo(pageName);
  };

  const notFinished = () => {
    Alert.alert('还没做完，敬请期待！');
  };

  return (
    <ImageBackground
      resizeMode="stretch"
      style={styles.fullScreen}
      source={require("../../img/instore/F.jpg")}>
      <View style={styles.catchMouseButtonArea}>
        <TouchableOpacity
          activeOpacity={.7}
          onPress={() => gotoPage(pageIds.F11)}
          style={styles.button}>
          <Image
            style={styles.buttonBackgournd}
            source={require("../../img/instore/FBtnClickme.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.minisMachineButtonArea}>
        <TouchableOpacity
          activeOpacity={.7}
          onPress={() => gotoPage(pageIds.minisMachine)}
          style={styles.button}>
          <Image
            style={styles.buttonBackgournd}
            source={require("../../img/instore/FBtnMinis.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.mailBoxButtonArea}>
        <TouchableOpacity
          activeOpacity={.7}
          onPress={() => gotoPage(pageIds.mailBox)}
          style={styles.button}>
          <Image
            style={styles.buttonBackgournd}
            source={require("../../img/instore/FBtnMailbox.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.phonographButtonArea}>
        <TouchableOpacity
          activeOpacity={.7}
          onPress={() => gotoPage(pageIds.phonograph)}
          style={styles.button}>
          <Image
            style={styles.buttonBackgournd}
            source={require("../../img/instore/FBtnPhonograph.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.btnGallery}>
        <TouchableOpacity
          activeOpacity={.7}
          onPress={() => notFinished()}
          style={styles.button}>
          <Image
            style={styles.buttonBackgournd}
            source={require("../../img/instore/FBtnGallery.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.btnFriends}>
        <TouchableOpacity
          activeOpacity={.7}
          onPress={() => notFinished()}
          style={styles.button}>
          <Image
            style={styles.buttonBackgournd}
            source={require("../../img/instore/FBtnFriends.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.btnMission}>
        <TouchableOpacity
          activeOpacity={.7}
          onPress={() => notFinished()}
          style={styles.button}>
          <Image
            activeOpacity={.7}
            style={styles.buttonBackgournd}
            source={require("../../img/instore/FBtnMission.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.btnReturn}>
        <TouchableOpacity
          activeOpacity={.7}
          onPress={() => notFinished()}
          style={styles.button}>
          <Image
            activeOpacity={.7}
            style={styles.buttonBackgournd}
            source={require("../../img/instore/FBtnReturn.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.btnBackyard}>
        <TouchableOpacity
          activeOpacity={.7}
          onPress={() => notFinished()}
          style={styles.button}>
          <Image
            style={styles.buttonBackgournd}
            source={require("../../img/instore/FBtnBackyard.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.debugButtonArea}>
        <TouchableOpacity
          onPress={() => gotoPage(pageIds.F18)}
          style={styles.button}>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

// 683 * 411
const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  button: {
    flex: 1,
  },
  buttonBackgournd: {
    width: '100%',
    height: '100%',
  },
  catchMouseButtonArea: {
    position: 'absolute',
    left: 89,
    top: 125,
    width: 205,
    height: 136,
  },
  phonographButtonArea: {
    position: 'absolute',
    left: 300,
    top: 156,
    width: 117,
    height: 127,
  },
  mailBoxButtonArea: {
    position: 'absolute',
    left: 34,
    bottom: 10,
    width: 102,
    height: 127,
  },
  minisMachineButtonArea: {
    position: 'absolute',
    left: 150,
    bottom: 10,
    width: 102,
    height: 127,
  },
  btnGallery: {
    position: 'absolute',
    left: 270,
    bottom: 10,
    width: 60,
    height: 64,
  },
  btnFriends: {
    position: 'absolute',
    left: 335,
    bottom: 10,
    width: 60,
    height: 64,
  },
  btnMission: {
    position: 'absolute',
    left: 400,
    bottom: 10,
    width: 60,
    height: 64,
  },
  btnReturn: {
    position: 'absolute',
    left: 465,
    bottom: 10,
    width: 60,
    height: 64,
  },
  btnBackyard: {
    position: 'absolute',
    right: 0,
    top: 110,
    width: 136,
    height: 145,
  },
  debugButtonArea: {
    position: 'absolute',
    left: 165,
    top: 0,
    width: 82,
    height: 90,
  },
});

export default InStore;