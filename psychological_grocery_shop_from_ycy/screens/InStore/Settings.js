import React from 'react';
import { StyleSheet, View, ImageBackground, CheckBox } from 'react-native';
import { scale } from 'react-native-size-matters';

import { WawaText } from '../../components/WawaText';
import { WawaButton } from '../../components/WawaButton';

export class Settings extends React.Component {
  state = {
    backgroundMusic: this.props.settings.backgroundMusic,
  }

  updateSettings = (key, val) => {
    this.setState({ key, val });
    this.props.updateSettings(this.state);
    this.closeDialog();
  }

  closeDialog = () => {
    this.props.toggle();
  }

  render() {
    return (
      <View style={styles.settingContainer}>
        <ImageBackground
          resizeMode="stretch"
          style={styles.dialogBox}
          source={require("../../img/instore/EmptyDialogBox.png")}>
          <View style={styles.contentPosition}>
            <View style={styles.headerContainer}>
              <WawaText style={styles.headerText}>
                ～～设置～～
              </WawaText>
            </View>
            <View style={styles.checkbox}>
              <CheckBox
                value={this.state.backgroundMusic}
                onChange={() => this.setState({ 'backgroundMusic': !this.state.backgroundMusic })}
              />
              <WawaText style={styles.itemText}>背景音乐</WawaText>
            </View>
            <WawaButton
              size={"sm"}
              style={[styles.button, styles.saveButton]}
              text={"保存"}
              onPress={this.updateSettings}></WawaButton>
            <WawaButton
              size={"sm"}
              style={[styles.button, styles.cancelButton]}
              text={"取消"}
              onPress={this.closeDialog}></WawaButton>
          </View>
        </ImageBackground>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  settingContainer: {
    flex: 1,
    paddingHorizontal: 70,
    paddingTop: 80,
  },
  dialogBox: {
    flex: 1,
  },
  contentPosition: {
    flex: 1,
    paddingHorizontal: 70,
    paddingTop: 30,
  },
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    color: 'white',
    fontSize: scale(36),
  },
  itemText: {
    marginTop: 5,
    color: 'white',
    fontSize: scale(18),
  },
  checkbox: {
    flexDirection: 'row',
  },
  button: {
    position: 'absolute',
    bottom: 30,
    width: 120,
    height: 50,
  },
  saveButton: {
    left: 150,
  },
  cancelButton: {
    right: 150,
  },
});

export default Settings;