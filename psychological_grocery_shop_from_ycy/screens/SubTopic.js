import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground } from "react-native";

class SubTopic extends Component {
  // TODO: we can reduce the load by only loading the background and buttons pics
  _getSubTopicBG = (topic) => {
    switch(topic) {
      case 'career':
        return require("./../img/subtopic/subtopic_career.gif");
      case 'family':
        return require("./../img/subtopic/subtopic_family.gif");
      case 'love':
        return require("./../img/subtopic/subtopic_love.gif");
      case 'people':
        return require("./../img/subtopic/subtopic_people.gif");
      default:
        return require("./../img/subtopic/subtopic_chaoyue.gif");
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
    const bgImg = this._getSubTopicBG('career');

    return (
      <ImageBackground
        resizeMode= "stretch"
        style={styles.container}
        source={bgImg}
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
          
          <TouchableOpacity style={styles.goBack} onPress={() => this._onPressButton_back()} />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row-reverse"
  },
  rightSide: {
    flex: 0.5,
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
    right: 0,
    width: 200,
    height: 30,
  }
});

export default SubTopic;
