import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { scale } from 'react-native-size-matters';

import WawaText from './WawaText'

function getBackGroundImage(size) {
  if (size === 'sm' || size === 'small') {
    return require('../img/instore/BtnSmInactive.png')
  } else if (size === 'md' || size === 'medium') {
    return require('../img/instore/BtnMdInactive.png')
  } else if (size === 'lg' || size === 'large') {
    return require('../img/instore/BtnLgInactive.png')
  } else {
    return null;
  }
}


export const WawaButton = (props) => {

  return (
    <TouchableOpacity
      activeOpacity={.7}
      onPress={props.onPress}
      style={props.style}>
      <ImageBackground
        resizeMode="stretch"
        style={styles.buttonBackgournd}
        source={getBackGroundImage(props.size)}>
        <WawaText style={styles.buttonText}>{props.text}</WawaText>
      </ImageBackground>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonText: {
    width: '100%',
    height: '100%',
    color: 'white',
    fontSize: scale(16),
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  buttonBackgournd: {
    width: '100%',
    height: '100%',
  },
});

export default WawaButton;