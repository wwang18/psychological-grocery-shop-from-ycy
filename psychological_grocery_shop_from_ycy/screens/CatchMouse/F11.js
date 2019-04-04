import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Alert } from 'react-native';


export const F11 = (props) => {
  const gotoNextPage = () => {
    props.navigation.popToTop();
    props.navigation.navigate('F12');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="stretch"
        style={styles.container}
        source={require("../../img/instore/FWithButton.jpg")}>
        <View style={styles.container}>
          <View style={styles.topPlaceholder}>
          </View>
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
  topPlaceholder: {
    flex: 480,
  },
  buttonArea: {
    flex: 270,
  },
  button: {
    flex: 1,
    backgroundColor: 'rgba(220, 120, 120, 0.5)',
  },
});

export default F11;