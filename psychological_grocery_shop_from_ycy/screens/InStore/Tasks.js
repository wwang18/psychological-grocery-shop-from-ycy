import React from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  TouchableOpacity
} from "react-native";

import { WawaButton } from "../../components/WawaButton";
import { pageIds } from "../InStore/InStoreConfig";

export const Tasks = props => {
  const backToHome = () => {
    props.funcs.redirectTo(pageIds.storeMain);
  };

  return (
    <ImageBackground
      resizeMode="stretch"
      style={styles.fullScreen}
      source={require("../../img/instore/tasks.jpg")}
    >
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

export default Tasks;
