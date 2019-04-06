import React from 'react';
import Video from 'react-native-video';
import { StyleSheet, View, Alert, TouchableOpacity, Dimensions, Image } from 'react-native';

import { InStoreView } from './InStoreView';


const backgroundMusic = require('../../audio/ThinkWild.mp3');

export const InStore = (props) => {
  props.navigation.dismiss();

  const gotoPage = (pageName) => {
    props.navigation.navigate(pageName);
  };

  const notFinished = () => {
    Alert.alert('还没做完，敬请期待！');
  };

  return (
    <InStoreView backgroundImage={require("../img/instore/F.jpg")}>
      <Video source={backgroundMusic}
        ref={(ref) => {
          this.player = ref
        }}
        audioOnly={true}
        rate={1}
        repeat={true} />
      <View style={styles.catchMouseButtonArea}>
        <TouchableOpacity
          onPress={() => gotoPage('F11')}
          style={styles.button}>
          <Image
            style={styles.buttonBackgournd}
            source={require("../img/instore/FBtnClickme.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.minisMachineButtonArea}>
        <TouchableOpacity
          onPress={() => gotoPage('MinisMachine')}
          style={styles.button}>
          <Image
            style={styles.buttonBackgournd}
            source={require("../img/instore/FBtnMinis.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.mailBoxButtonArea}>
        <TouchableOpacity
          onPress={() => gotoPage('MailBox_i')}
          style={styles.button}>
          <Image
            style={styles.buttonBackgournd}
            source={require("../img/instore/FBtnMailbox.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.phonographButtonArea}>
        <TouchableOpacity
          onPress={() => gotoPage('Phonograph')}
          style={styles.button}>
          <Image
            style={styles.buttonBackgournd}
            source={require("../img/instore/FBtnPhonograph.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.btnGallery}>
        <TouchableOpacity
          onPress={() => notFinished()}
          style={styles.button}>
          <Image
            style={styles.buttonBackgournd}
            source={require("../img/instore/FBtnGallery.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.btnFriends}>
        <TouchableOpacity
          onPress={() => notFinished()}
          style={styles.button}>
          <Image
            style={styles.buttonBackgournd}
            source={require("../img/instore/FBtnFriends.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.btnMission}>
        <TouchableOpacity
          onPress={() => notFinished()}
          style={styles.button}>
          <Image
            style={styles.buttonBackgournd}
            source={require("../img/instore/FBtnMission.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.btnReturn}>
        <TouchableOpacity
          onPress={() => notFinished()}
          style={styles.button}>
          <Image
            style={styles.buttonBackgournd}
            source={require("../img/instore/FBtnReturn.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.btnBackyard}>
        <TouchableOpacity
          onPress={() => notFinished()}
          style={styles.button}>
          <Image
            style={styles.buttonBackgournd}
            source={require("../img/instore/FBtnBackyard.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.debugButtonArea}>
        <TouchableOpacity
          onPress={() => gotoPage('M2')}
          style={styles.button}>
        </TouchableOpacity>
      </View>
    </InStoreView>
  )
}

// 683 * 411
const styles = StyleSheet.create({
  container: {
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