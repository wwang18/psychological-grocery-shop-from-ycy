import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const InStore = (props) => {
  const gotoCatchMouse = () => {
    props.navigation.popToTop();
    props.navigation.navigate('F11');
  };

  const gotoMinisMachine = () => {
    props.navigation.popToTop();
    props.navigation.navigate('MinisMachine');
  };

  const gotoDebugPage = () => {
    props.navigation.popToTop();
    props.navigation.navigate('F17');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="stretch"
        style={styles.container}
        source={require("../img/instore/F.jpg")}>
        <View style={styles.container}>
          <View style={styles.catchMouseButtonArea}>
            <TouchableOpacity
              onPress={gotoCatchMouse}
              style={styles.button}>
            </TouchableOpacity>
          </View>
          <View style={styles.minisMachineButtonArea}>
            <TouchableOpacity
              onPress={gotoMinisMachine}
              style={styles.button}>
            </TouchableOpacity>
          </View>
          <View style={styles.debugButtonArea}>
            <TouchableOpacity
              onPress={gotoDebugPage}
              style={styles.button}>
            </TouchableOpacity>
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
  button: {
    flex: 1,
    backgroundColor: 'rgba(220, 120, 120, 0.5)',
  },
  catchMouseButtonArea: {
    position: 'absolute',
    left: width * 0.305,
    top: height * 0.358,
    width: width * 0.12,
    height: height * 0.175,
  },
  minisMachineButtonArea: {
    position: 'absolute',
    left: width * 0.28,
    top: height * 0.66,
    width: width * 0.15,
    height: height * 0.31,
  },
  phonographButtonArea: {
    position: 'absolute',
    left: width * 0.485,
    top: height * 0.39,
    width: width * 0.187,
    height: height * 0.295,
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