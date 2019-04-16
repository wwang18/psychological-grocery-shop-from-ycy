import React from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  TouchableOpacity
} from "react-native";

import { WawaButton } from "../../components/WawaButton";
import { pageIds } from "../InStore/InStoreConfig";

export const Phonograph = props => {
  const backToHome = () => {
    props.funcs.updateSettings({ backgroundMusic: true });
    props.funcs.redirectTo(pageIds.storeMain);
  };

  const chooseMusic = music => {
    props.funcs.updatePhonograph(music);
    props.funcs.updateSettings({ backgroundMusic: true });
  };

  return (
    <ImageBackground
      resizeMode="stretch"
      style={styles.fullScreen}
      source={require("../../img/instore/V.jpg")}
    >
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 438 }} />
        <View style={{ flex: 290 }}>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ flex: 177 }} />
            <View style={{ flex: 181 }}>
              <TouchableOpacity
                style={{ flex: 1 }}
                onPress={() =>
                  chooseMusic({
                    backgroundMusicFile: require("../../audio/ThinkWild_complete.mp3")
                  })
                }
              />
            </View>
            <View style={{ flex: 181 }}>
              <TouchableOpacity
                style={{ flex: 1 }}
                onPress={() =>
                  chooseMusic({
                    backgroundMusicFile: require("../../audio/MyMom.mp3")
                  })
                }
              />
            </View>
            <View style={{ flex: 211 }} />
          </View>
        </View>
        <View style={{ flex: 606 }} />
      </View>
      <WawaButton
        size={"sm"}
        style={styles.backButton}
        text={"返回"}
        onPress={backToHome}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1
  },
  backButton: {
    position: "absolute",
    width: 120,
    height: 50,
    right: 20,
    bottom: 10
  }
});

export default Phonograph;
