import React, { Component } from "react";
import { StyleSheet, Image, View, TouchableHighlight, TouchableOpacity, ImageBackground } from "react-native";

class SubTopic extends Component {
  // TODO: we can reduce the load by only loading the background and buttons pics
  _getBtnGroup = (topic) => {
    switch(topic) {
      case 'career':
        return require("./../img/btns/subtopic_career.png");
      case 'family':
        return require("./../img/btns/subtopic_family.png");
      case 'love':
        return require("./../img/btns/subtopic_love.png");
      case 'social':
        return require("./../img/btns/subtopic_social.png");
      default:
        return require("./../img/btns/subtopic_idol.png");
    }
  }

  _getSubTopics = () => {
    return [
      { keyword: "", label: "坚持下去吗" },
      { keyword: "", label: "想有能力去爱" },
      { keyword: "", label: "渴望转机" },
      { keyword: "", label: "我能够吗" },
      { keyword: "", label: "想被认可" },
      { keyword: "", label: "我想被爱" },
      { keyword: "", label: "想被人在意" }
    ];
  }

  _handleTopicSelection() {
    this.props.navigation.push("LetterPaper");
  }

  _onPressButton_back() {
    this.props.navigation.goBack();
  }

  render() {
    const {params} = this.props.navigation.state;
    const bgGroup = this._getBtnGroup(params);

    return (
      <ImageBackground
        resizeMode= "stretch"
        style={styles.container}
        source={require('../img/bg/subtopic.jpg')}
      >
        <ImageBackground
          resizeMode="cover"
          style={styles.btnGroupContainer}
          source={bgGroup}
        >
        <View style={styles.rightSide}>
          <View style={styles.buttonContainer}>
            {this._getSubTopics().map((topic, key) => {
              return (
                <TouchableOpacity
                  style={styles.button}
                  key={key}
                  onPress={() => this._handleTopicSelection()}
                />
              );
            })}
          </View>
        </View>
        </ImageBackground>
        <TouchableHighlight style={styles.goBack} onPress={() => this._onPressButton_back()}>
          <Image
            style={styles.backBtn}
            resizeMode="contain"
            source={require('../img/btns/back.png')}
          />
        </TouchableHighlight>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "center",
  },
  btnGroupContainer: {
    flex: 0.8,
    flexDirection: "row-reverse"
  },
  rightSide: {
    flex: 0.4,
    marginRight: '10%',
    flexDirection: "column",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 0.85,
    flexDirection: "column",
    justifyContent: "center",
  },
  button: {
    flex: 1,
  },
  goBack: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 100,
    height: 50,
  },
  backBtn: {
    width: null,
    height: null,
    flex: 1,
  }
});

export default SubTopic;
