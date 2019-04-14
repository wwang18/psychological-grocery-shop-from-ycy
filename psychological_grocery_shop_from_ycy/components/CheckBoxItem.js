import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

const CheckBoxItem = (props) => {
  const { value=true, onChange=()=>{}, style={} } = props;

  return(
      <TouchableOpacity
        activeOpacity={.7}
        onPress={onChange}
        style={[style, styles.container]}>
        { value ? <Image source={require('../img/instore/check.png')}/> : <Image source={require('../img/instore/uncheck.png')}/> }
      </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 32
  }
})

export default CheckBoxItem;