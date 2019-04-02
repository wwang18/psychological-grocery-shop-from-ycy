import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Alert } from 'react-native';


export const F12 = (props) => {
  const gotoNextPage = () => {
    props.navigation.popToTop();
    props.navigation.navigate('F13');
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
        source={require("../../img/mouse/F12.jpg")}>
        <View style={styles.container}>
          <View style={styles.topPlaceholder}>
          </View>
          <View style={styles.buttonArea}>
            <View style={styles.buttonPadding}></View>
            <TouchableOpacity
              onPress={gotoNextPage}
              style={[styles.button, styles.mainButton]}>
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
    flex: 463,
  },
  buttonArea: {
    flex: 207,
    flexDirection: 'row',
  },
  buttomPlaceHolder: {
    flex: 80,
  },
  buttonPadding: {
    flex: 120,
  },
  buttonGap: {
    flex: 64,
  },
  button: {
  },
  mainButton: {
    backgroundColor: 'rgba(220, 120, 120, 0.5)',
    flex: 570,
  },
  backButton: {
    backgroundColor: 'rgba(120, 220, 120, 0.5)',
    flex: 460,
  },
});

export default F12;