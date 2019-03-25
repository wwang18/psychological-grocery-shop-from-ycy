import React, { Component } from "react";
import {
  ImageBackground,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity
} from "react-native";

class LetterPaper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      replying: false,
      text: "Hello, 超越。"
    };
  }

  _handleSendOut() {
    // TODO
    this.setState({ replying: true });
    setTimeout(() => {
      this.props.navigation.navigate("Home");
    }, 1000);
  }

  _onPressButton_back() {
    this.props.navigation.goBack(); //TODO navigate to I page
  }

  render() {
    const { replying } = this.state;
    return replying ? (
      <ImageBackground
        style={styles.container}
        source={require("./../img/replying.gif")}
      />
    ) : (
      <ImageBackground
        style={styles.container}
        source={require("./../img/letter_paper.png")}
      >
        <View style={styles.textContainer}>
          <TextInput
            style={styles.text}
            multiline={true}
            numberOfLines={8}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this._handleSendOut()}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this._onPressButton_back()}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textContainer: {
    flex: 5,
    flexDirection: "row",
    justifyContent: "center"
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row"
  },
  text: {
    fontSize: 24,
    width: "70%",
    height: "70%",
    marginTop: "7%"
  },
  btn: {
    flex: 1
  }
});

export default LetterPaper;
