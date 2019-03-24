import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

class SubTopic extends Component {
  _getSubTopics() {
    return [
      { keyword: "坚持下去吗", label: "坚持下去吗" },
      { keyword: "想有能力去爱", label: "想有能力去爱" },
      { keyword: "渴望转机", label: "渴望转机" },
      { keyword: "我能够吗", label: "我能够吗" },
      { keyword: "想被认可", label: "想被认可" },
      { keyword: "我想被支持", label: "我想被爱" },
      { keyword: "想被人在意", label: "想被人在意" }
    ];
  }

  _handleTopicSelection() {
    this.props.navigation.push("LetterPaper");
  }

  _onPressButton_back() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          {this._getSubTopics().map((topic, key) => {
            return (
              <Button
                key={key}
                onPress={() => this._handleTopicSelection()}
                title={topic.label}
              />
            );
          })}
        </View>
        <View style={styles.goBack}>
          <Button onPress={() => this._onPressButton_back()} title="<-Back" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row-reverse"
  },
  buttonContainer: {
    flex: 0.5,
    flexDirection: "column",
    backgroundColor: "powderblue",
    justifyContent: "space-around"
  },
  goBack: {
    position: "absolute",
    bottom: 0,
    right: 0
  }
});

export default SubTopic;
