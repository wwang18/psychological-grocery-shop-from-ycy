import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Alert } from 'react-native';

import { InStoreView } from '../InStoreView';

export const M2 = (props) => {
  props.navigation.dismiss();

  const saveImage = () => {
    Alert.alert('save');
  };

  const shareImage = () => {
    Alert.alert('share');
  };

  const backToHome = () => {
    props.navigation.push('InStore');
  };

  return (
    <InStoreView backgroundImage={require("../../img/instore/M2.jpg")}>
      <View style={styles.topPlaceholder}>
      </View>
      <View style={styles.buttonArea}>
        <View style={styles.buttonPadding}></View>
        <TouchableOpacity
          onPress={saveImage}
          style={[styles.button, styles.saveButton]}>
        </TouchableOpacity>
        <View style={styles.buttonPadding}></View>
        <TouchableOpacity
          onPress={shareImage}
          style={[styles.button, styles.shareButton]}>
        </TouchableOpacity>
        <View style={styles.buttonGap}></View>
        <TouchableOpacity
          onPress={backToHome}
          style={[styles.button, styles.backButton]}>
        </TouchableOpacity>
        <View style={styles.buttonPadding}></View>
      </View>
      <View style={styles.buttomPlaceHolder}>
      </View>
    </InStoreView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topPlaceholder: {
    flex: 626,
  },
  buttonArea: {
    flex: 90,
    flexDirection: 'row',
  },
  buttomPlaceHolder: {
    flex: 34,
  },
  buttonPadding: {
    flex: 76,
  },
  buttonGap: {
    flex: 521,
  },
  button: {
    flex: 195,
  },
  saveButton: {
    backgroundColor: 'rgba(220, 120, 120, 0.5)',
  },
  shareButton: {
    backgroundColor: 'rgba(120, 220, 120, 0.5)',
  },
  backButton: {
    backgroundColor: 'rgba(120, 120, 220, 0.5)',
  },
});

export default M2;