import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Alert } from 'react-native';


const WAIT_TIME = 6000;  // ms

export const F15 = (props) => {
  const gotoNextPage = () => {
    props.navigation.popToTop();
    props.navigation.navigate('F16');
  };

  const interval = setTimeout(gotoNextPage, WAIT_TIME);

  const touchScreen = () => {
    clearInterval(interval);
    gotoNextPage();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="stretch"
        style={styles.container}
        source={require("../../img/instore/F15.jpg")}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={touchScreen}
            style={styles.button}>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
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
});

export default F15;