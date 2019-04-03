import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const InStore = (props) => {
  const gotoPage = (pageName) => {
    props.navigation.popToTop();
    props.navigation.navigate(pageName);
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
              onPress={() => gotoPage('F11')}
              style={styles.button}>
            </TouchableOpacity>
          </View>
          <View style={styles.minisMachineButtonArea}>
            <TouchableOpacity
              onPress={() => gotoPage('MinisMachine')}
              style={styles.button}>
            </TouchableOpacity>
          </View>
          <View style={styles.phonographButtonArea}>
            <TouchableOpacity
              onPress={() => gotoPage('Phonograph')}
              style={styles.button}>
            </TouchableOpacity>
          </View>
          <View style={styles.debugButtonArea}>
            <TouchableOpacity
              onPress={() => gotoPage('F17')}
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