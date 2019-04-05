import React from 'react';
import { StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export class DialogBox extends React.Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={.7}
        onPress={() => this.props.onPress()}
        style={styles.dialogContainer}>
        <ImageBackground
          resizeMode="stretch"
          style={styles.dialogArea}
          source={require("../img/instore/EmptyDialogBox.png")}>
          {this.props.children}
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  dialogContainer: {
    flex: 1,
    paddingStart: 30,
    paddingEnd: 26,
  },
  dialogArea: {
    flex: 1,
    marginTop: 10,
    marginBottom: 4,
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
});