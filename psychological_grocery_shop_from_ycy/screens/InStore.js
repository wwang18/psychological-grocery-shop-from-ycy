import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Dimensions, Image } from 'react-native';

import { InStoreView } from './InStoreView';

const { height, width } = Dimensions.get('window');

export const InStore = (props) => {
  const gotoPage = (pageName) => {
    props.navigation.popToTop();
    props.navigation.navigate(pageName);
  };

  return (
    <InStoreView backgroundImage={require("../img/instore/F.jpg")}>
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
      <View style={styles.debugButtonArea}>
        <TouchableOpacity
          onPress={() => gotoPage('F17')}
          style={styles.button}>
        </TouchableOpacity>
      </View>
    </InStoreView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flex: 1,
    backgroundColor: 'rgba(220, 120, 120, 0.5)',
  },
  buttonBackgournd: {
    width: '100%',
    height: '100%',
  },
  catchMouseButtonArea: {
    position: 'absolute',
    left: width * 0.13,
    top: height * 0.303,
    width: width * 0.3,
    height: height * 0.33,
  },
  minisMachineButtonArea: {
    position: 'absolute',
    left: width * 0.22,
    top: height * 0.66,
    width: width * 0.15,
    height: height * 0.31,
  },
  phonographButtonArea: {
    position: 'absolute',
    left: width * 0.44,
    top: height * 0.38,
    width: width * 0.2,
    height: height * 0.31,
  },
  mailBoxButtonArea: {
    position: 'absolute',
    left: width * 0.05,
    top: height * 0.66,
    width: width * 0.15,
    height: height * 0.31,
  },
  debugButtonArea: {
    position: 'absolute',
    left: width * 0.1,
    top: height * 0.1,
    width: width * 0.12,
    height: height * 0.12,
  },
});

export default InStore;