import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';
import { scale } from 'react-native-size-matters';

// import { InStoreView } from '../InStore/InStoreView';
import { WawaText } from '../../components/WawaText';
import { pageIds } from '../InStore/InStoreConfig';

export const F11 = (props) => {
  const gotoNextPage = () => {
    props.funcs.redirectTo(pageIds.F12);
  };

  return (
    <ImageBackground
      resizeMode="stretch"
      style={styles.fullScreen}
      source={require("../../img/instore/FWithButton.jpg")}>
      <View style={styles.topPlaceholder}>
      </View>
      <View style={styles.buttonArea}>
        <TouchableOpacity
          onPress={gotoNextPage}
          style={styles.textContainer}>
          <WawaText style={styles.displayText}>
            铺里没有人，但是员工表上写着杨超越当班。
          </WawaText>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  topPlaceholder: {
    flex: 500,
  },
  buttonArea: {
    flex: 250,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 80,
    paddingVertical: 30,
  },
  displayText: {
    color: 'white',
    fontSize: scale(18),
  },
});

export default F11;