import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Dimensions, Image } from 'react-native';

import { InStoreView } from './InStoreView';

function getScreenDimensions() {
  const { height, width } = Dimensions.get('window');
  return height > width ? [height, width] : [width, height];
}

const [WIDTH, HEIGHT] = getScreenDimensions();

export const InStore = (props) => {
  props.navigation.dismiss();

  const gotoPage = (pageName) => {
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
    backgroundColor: 'rgba(220, 120, 220, 0.5)',
  },
  buttonBackgournd: {
    width: '100%',
    height: '100%',
  },
  catchMouseButtonArea: {
    position: 'absolute',
    left: WIDTH * 0.13,
    top: HEIGHT * 0.303,
    width: WIDTH * 0.3,
    height: HEIGHT * 0.33,
  },
  minisMachineButtonArea: {
    position: 'absolute',
    left: WIDTH * 0.22,
    top: HEIGHT * 0.66,
    width: WIDTH * 0.15,
    height: HEIGHT * 0.31,
  },
  phonographButtonArea: {
    position: 'absolute',
    left: WIDTH * 0.44,
    top: HEIGHT * 0.38,
    width: WIDTH * 0.2,
    height: HEIGHT * 0.31,
  },
  mailBoxButtonArea: {
    position: 'absolute',
    left: WIDTH * 0.05,
    top: HEIGHT * 0.66,
    width: WIDTH * 0.15,
    height: HEIGHT * 0.31,
  },
  debugButtonArea: {
    position: 'absolute',
    left: WIDTH * 0.2,
    top: HEIGHT * 0.1,
    width: WIDTH * 0.12,
    height: HEIGHT * 0.12,
  },
});

export default InStore;