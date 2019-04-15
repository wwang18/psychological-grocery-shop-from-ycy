import React, { Component } from "react";
import { StyleSheet, Image, View, TouchableHighlight, TouchableOpacity, ImageBackground } from "react-native";
import { topic } from '../constants';
class SubTopic extends Component {
  // TODO: we can reduce the load by only loading the background and buttons pics

  _handleTopicSelection(topic, issueKey) {
    this.props.navigation.push("LetterPaper", {topic, issueKey});
  }

  _onPressButton_back() {
    this.props.navigation.goBack();
  }

  render() {
    const {params} = this.props.navigation.state;

    return (
      <ImageBackground
        resizeMode= "stretch"
        style={styles.container}
        source={require('../img/bg/subtopic.jpg')}
      >
        <ImageBackground
          resizeMode="cover"
          style={styles.btnGroupContainer}
          source={topic[params].url}
        >
        <View style={styles.rightSide}>
          <View style={styles.buttonContainer}>
            {topic[params].issueList.map((topic, key) => {
              return (
                <TouchableOpacity
                  style={styles.button}
                  key={key}
                  onPress={() => this._handleTopicSelection(params, key)}
                />
              );
            })}
          </View>
        </View>
        </ImageBackground>
        <TouchableHighlight underlayColor='transparent' style={styles.goBack}
          onPress={() => this._onPressButton_back()}>
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
