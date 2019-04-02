import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Alert } from 'react-native';


export const F13 = (props) => {
  const gotoNextPage = () => {
    props.navigation.popToTop();
    props.navigation.navigate('F14');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="stretch"
        style={styles.container}
        source={require("../../img/mouse/F13.jpg")}>
        <View style={styles.container}>
          <View style={styles.topPlaceholder}></View>
          <View style={styles.buttonArea}>
            <View style={styles.buttonPadding}></View>
            <TouchableOpacity
              onPress={gotoNextPage}
              style={styles.button}>
            </TouchableOpacity>
            <View style={styles.buttonPadding}></View>
          </View>
          <View style={styles.buttomPlaceHolder}></View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topPlaceholder: {
    flex: 147,
  },
  buttonArea: {
    flex: 390,
    flexDirection: 'row',
  },
  buttomPlaceHolder: {
    flex: 213,
  },
  buttonPadding: {
    flex: 472,
  },
  button: {
    // Display as circle, touch area is still square.
    flex: 390,
    borderRadius: 3000,
    backgroundColor: 'rgba(220, 120, 120, 0.5)',
  },
});

export default F13;