import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Alert } from 'react-native';


export const MinisMachine = (props) => {
  const gotoNextPage = () => {
    props.navigation.popToTop();
    props.navigation.navigate('U1');
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
        source={require("../../img/instore/U.jpg")}>
        <View style={styles.container}>
          <View style={styles.topPlaceholder}>
          </View>
          <View style={styles.buttonArea}>
            <View style={styles.buttonLeftPadding}></View>
            <View style={styles.nextButtonArea}>
              <TouchableOpacity
                onPress={gotoNextPage}
                style={styles.nextButton}>
              </TouchableOpacity></View>
            <View style={styles.buttonGap}></View>
            <View style={styles.cancelButtonArea}>
              <TouchableOpacity
                onPress={backToHome}
                style={styles.cancelButton}>
              </TouchableOpacity></View>
            <View style={styles.buttonRightPadding}></View>
          </View>
          <View style={styles.bottomPlaceholder}>
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
  bottomPlaceholder: {
    flex: 34,
  },
  buttonArea: {
    flex: 90,
    flexDirection: 'row',
  },
  buttonLeftPadding: {
    flex: 268,
  },
  buttonRightPadding: {
    flex: 76,
  },
  buttonGap: {
    flex: 445,
  },
  nextButtonArea: {
    flex: 350,
  },
  cancelButtonArea: {
    flex: 195,
  },
  nextButton: {
    flex: 1,
    backgroundColor: 'rgba(220, 120, 120, 0.5)',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: 'rgba(120, 220, 120, 0.5)',
  },
});

export default MinisMachine;