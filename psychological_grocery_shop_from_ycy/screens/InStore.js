import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Alert } from 'react-native';


export const InStore = (props) => {
  const gotoNextPage = () => {
    props.navigation.navigate("F11");
  };

  const gotoDebugPage = () => {
    props.navigation.navigate("F17");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="stretch"
        style={styles.container}
        source={require("../img/mouse/F.jpg")}>
        <View style={styles.container}>
          <View style={styles.buttonArea}>
            <TouchableOpacity
              onPress={gotoNextPage}
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
  buttonArea: {
    position: 'absolute',
    top: '35.8%',
    left: '30.5%',
    width: '12%',
    height: '17.5%',
  },
  button: {
    flex: 1,
    backgroundColor: 'rgba(220, 120, 120, 0.5)',
  },
  debugButtonArea: {
    position: 'absolute',
    top: '10.8%',
    left: '10.5%',
    width: '12%',
    height: '17.5%',
  },
});

export default InStore;