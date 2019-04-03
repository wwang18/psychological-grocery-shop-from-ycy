import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';


export const U2 = (props) => {
  const tryAgainPage = () => {
    props.navigation.popToTop();
    props.navigation.navigate('MinisMachine');
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
        source={require("../../img/instore/U2.jpg")}>
        <View style={styles.container}>
          <View style={styles.tryAgainButtonArea}>
            <TouchableOpacity
              onPress={tryAgainPage}
              style={styles.button}>
            </TouchableOpacity>
          </View>
          <View style={styles.returnButtonArea}>
            <TouchableOpacity
              onPress={backToHome}
              style={styles.button}>
            </TouchableOpacity>
          </View>

          <View style={styles.topPlaceholder}></View>
          <View style={styles.midArea}>
            <View style={styles.leftRightPadding}></View>
            <View style={styles.picArea}></View>
            <View style={styles.leftRightPadding}></View>
          </View>
          <View style={styles.bottomPlaceholder}></View>
        </View>
      </ImageBackground>
    </View>
  )
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topPlaceholder: {
    flex: 105,
  },
  midArea: {
    flex: 577,
    flexDirection: 'row',
  },
  bottomPlaceholder: {
    flex: 68,
  },
  leftRightPadding: {
    flex: 378,
  },
  picArea: {
    flex: 577,
    backgroundColor: 'rgba(120, 120, 220, 0.5)',
  },
  returnButtonArea: {
    position: 'absolute',
    right: width * 0.05,
    bottom: height * 0.05,
    width: width * 0.15,
    height: height * 0.15,
  },
  tryAgainButtonArea: {
    position: 'absolute',
    left: width * 0.05,
    bottom: height * 0.05,
    width: width * 0.15,
    height: height * 0.15,
  },
  button: {
    flex: 1,
    backgroundColor: 'rgba(220, 120, 120, 0.5)',
  },
});

export default U2;