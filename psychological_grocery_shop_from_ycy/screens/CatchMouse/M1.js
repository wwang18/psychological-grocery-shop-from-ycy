import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Alert } from 'react-native';


export const M1 = (props) => {
  const gotoNextPage = () => {
    props.navigation.popToTop();
    props.navigation.navigate('M2');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="stretch"
        style={styles.container}
        source={require("../../img/mouse/M1.jpg")}>
        <View style={styles.container}>
          <View style={styles.buttonArea}>
            <TouchableOpacity
              onPress={gotoNextPage}
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
    bottom: '5%',
    right: '5%',
    width: '15%',
    height: '15%',
  },
  button: {
    flex: 1,
    backgroundColor: 'rgba(220, 120, 120, 0.5)',
  },
});

export default M1;