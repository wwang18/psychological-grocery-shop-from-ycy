import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Alert } from 'react-native';


export const M2 = (props) => {
  const saveImage = () => {
    Alert.alert('save');
  };

  const shareImage = () => {
    Alert.alert('share');
  };

  const backToHome = () => {
    props.navigation.popToTop();
    props.navigation.navigate('InStore');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="stretch"
        style={styles.container}
        source={require("../../img/mouse/M2.jpg")}>
        <View style={styles.container}>
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
        </View>
      </ImageBackground>
    </View>
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