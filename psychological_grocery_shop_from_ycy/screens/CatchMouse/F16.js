import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Alert } from 'react-native';


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
    <View style={styles.container}>
      <ImageBackground
        resizeMode="stretch"
        style={styles.container}
        source={require("../../img/instore/F16.jpg")}>
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
              onPress={skipSteps}
              style={[styles.button, styles.secButton]}>
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
    flex: 576,
  },
  buttonArea: {
    flex: 140,
    flexDirection: 'row',
  },
  buttomPlaceHolder: {
    flex: 34,
  },
  buttonPadding: {
    flex: 77,
  },
  buttonGap: {
    flex: 108,
  },
  button: {
  },
  mainButton: {
    backgroundColor: 'rgba(220, 120, 120, 0.5)',
    flex: 536,
  },
  secButton: {
    backgroundColor: 'rgba(120, 220, 120, 0.5)',
    flex: 536,
  },
});

export default F16;