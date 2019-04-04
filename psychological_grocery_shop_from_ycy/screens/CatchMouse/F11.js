import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Alert } from 'react-native';

import { InStoreView } from '../InStoreView';
import { WawaText } from '../../components/WawaText';

export const F11 = (props) => {
  const gotoNextPage = () => {
    props.navigation.popToTop();
    props.navigation.navigate('F12');
  };

  return (
    <InStoreView backgroundImage={require("../../img/instore/FWithButton.jpg")}>
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
    </InStoreView>
  )
}

const styles = StyleSheet.create({
  topPlaceholder: {
    flex: 500,
  },
  buttonArea: {
    flex: 250,
  },
  textContainer: {
    flex: 1,
    backgroundColor: 'rgba(120, 120, 220, 0.5)',
    paddingHorizontal: 80,
    paddingVertical: 30,
  },
  displayText: {
    color: 'white',
    fontSize: 24,
  },
});

export default F11;