import React from 'react';
import { StyleSheet, View, ImageBackground, Alert } from 'react-native';

import { WawaButton } from '../../components/WawaButton';
import { pageIds } from '../InStore/InStoreConfig';
import { Giftcard, getRandomGiftcard } from '../../components/Giftcard';

export const U2 = (props) => {
  const { redirectTo, getState, modState } = props.funcs;

  const { rarity, cardId } = getRandomGiftcard();

  const playAgain = () => {
    const { coins } = getState();
    if (coins >= 10) {
      modState(0, -10);
      redirectTo(pageIds.U1);
    } else {
      Alert.alert('你没有足够的金币！');
    }
  };

  const backToHome = () => {
    props.funcs.redirectTo(pageIds.storeMain);
  };

  return (
    <ImageBackground
      resizeMode="stretch"
      style={styles.fullScreen}
      source={require("../../img/instore/U2.jpg")}>
      <WawaButton
        size={"sm"}
        style={styles.replayButton}
        text={"再抽一次"}
        onPress={playAgain}
      />
      <WawaButton
        size={"sm"}
        style={styles.backButton}
        text={"回到店铺"}
        onPress={backToHome}
      />
      <View style={styles.topPlaceholder}></View>
      <View style={styles.midArea}>
        <View style={styles.leftRightPadding}></View>
        <View style={styles.picArea}>
          <Giftcard rarity={rarity} cardId={cardId} style={styles.pic}></Giftcard>
        </View>
        <View style={styles.leftRightPadding}></View>
      </View>
      <View style={styles.bottomPlaceholder}></View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  topPlaceholder: {
    flex: 105,
  },
  midArea: {
    flex: 577,
    flexDirection: 'row',
  },
  bottomPlaceholder: {
    flex: 68,
  },
  leftRightPadding: {
    flex: 378,
  },
  picArea: {
    flex: 577,
    backgroundColor: 'rgba(120, 120, 220, 0.5)',
  },
  pic: {
    width: '100%',
    height: '100%',
  },
  replayButton: {
    position: 'absolute',
    left: 20,
    bottom: 10,
    width: 120,
    height: 50,
    zIndex: 99
  },
  backButton: {
    position: 'absolute',
    right: 20,
    bottom: 10,
    width: 120,
    height: 50,
    zIndex: 99
  },
});

export default U2;