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
import letterList from '../components/CardStore/letterConfig';
import giftList from '../components/CardStore/giftConfig';
import personList from '../components/CardStore/personConfig';
import { connect } from "react-redux";

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
      Alert.alert('信已收到，勿念，ID茉莉');
      this.props.navigation.navigate("MailBox_i");
    }, 2000);
    const { text } = this.state;
    const { dispatch } = this.props;
    const { params } = this.props.navigation.state;
    const { topic, issueKey } = params; // 烦恼大小类
    
    let letters = letterList.filter(x=>{return x.topic.indexOf(topic) > -1 && x.key.indexOf(issueKey) > -1 });
    let letter = letters[Math.floor(Math.random()*letters.length)];
    let letterId = letter.id - 1;
    let giftId = Math.floor(Math.random() * giftList.length + 1);   
    let personalId = Math.floor(Math.random() * personList.length + 1);
    dispatch({
      type: 'mailBox/saveData',
      params: { topic, issueKey, letter: text, letterId: !!text ? letterId : 0, giftId, personalId, createTime: new Date().getTime() }
    })
    dispatch({
      type: 'mailBox/changeMailBoxState',
      params: {
        key: 'isNew',
        data: true
      }
    })
  }

  _onPressButton_back() {
    this.props.navigation.goBack(); //TODO navigate to I page
  }

  render() {
    const { replying } = this.state;
    return replying ? (
      <TouchableHighlight
        underlayColor='transparent'
        style={styles.writBack} onPress={() => this.props.navigation.navigate("MailBox_i")}
      >
        <ImageBackground
          style={styles.container}
          source={require("./../img/replying.gif")}
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

export default connect()(LetterPaper);
