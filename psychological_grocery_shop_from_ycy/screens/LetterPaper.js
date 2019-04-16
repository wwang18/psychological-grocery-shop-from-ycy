import React, { Component } from "react";
import {
  ImageBackground,
  TextInput,
  StyleSheet,
  View,
  Alert,
  Image,
  TouchableHighlight
} from "react-native";
import { scale } from 'react-native-size-matters';

class LetterPaper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      replying: false,
      text: "",
    };
  }

  _handleSendOut() {
    // TODO 

    this.setState({ replying: true });
    setTimeout(() => {
        Alert.alert(selectTopic);
        this.props.navigation.navigate("MailBox_i");
    }, 1000);

 
    const { text } = this.state;
    const {params} = this.props.navigation.state;
    const {topic, issueKey} = params; // 烦恼大小类
    this.setState({ replying: true });
    Storage.load({
      key: 'mailBox',
    }).then(res => {
      // console.log(res, 'res')
      let newMailBox = [...res, {topic, issueKey, letter: text}]
      Storage.save({
        key: 'mailBox',
        data: newMailBox
      })
    }).catch(err => {
      Storage.save({
        key: 'mailBox',
        data: [{topic, issueKey, letter: text}]
      })
    }) 
  }

  _onPressButton_back() {
    this.props.navigation.goBack(); //TODO navigate to I page
  }

  render() {
    const { replying } = this.state;
    return replying ? (
      <TouchableHighlight underlayColor='transparent' style={styles.writBack} onPress={() => this.props.navigation.navigate("MailBox_i")}>
        <ImageBackground
          style={styles.container}
          source={require("./../img/replying.webp")}
        ></ImageBackground>
      </TouchableHighlight>
    ) : (
        <ImageBackground
          style={styles.container}
          source={require("./../img/bg/letter_paper.jpg")}
        >
          <TouchableHighlight underlayColor='transparent' style={styles.btnWrapper}
            onPress={() => this._handleSendOut()}>
            <Image
              style={styles.btn}
              resizeMode="contain"
              source={require('../img/btns/letterpaper_send.png')}
            />
          </TouchableHighlight>
          <View style={styles.textContainer}>
            <TextInput
              style={styles.text}
              multiline={true}
              numberOfLines={8}
              placeholder="超越亲启..."
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
            />
          </View>
          <TouchableHighlight underlayColor='transparent' style={styles.btnWrapper}
            onPress={() => this._onPressButton_back()}>
            <Image
              style={styles.btn}
              resizeMode="contain"
              source={require('../img/btns/letterpaper_back.png')}
            />
          </TouchableHighlight>
        </ImageBackground>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  textContainer: {
    flex: 5,
    flexDirection: "row"
  },
  text: {
    fontSize: scale(22),
    color: '#888',
    height: "60%",
    marginTop: "10%"
  },
  btnWrapper: {
    flex: 1,
    flexDirection: 'column-reverse'
  },
  btn: {
    flex: 1,
    width: null,
    height: null
  },
  writBack: {
    flex: 1
  }
});

export default LetterPaper;
