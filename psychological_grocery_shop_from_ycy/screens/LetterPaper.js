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
import RNFS from 'react-native-fs';

class LetterPaper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      replying: false,
      text: ""
    };
  }

  _handleSendOut() {
    // TODO
    this.setState({ replying: true });
    setTimeout(() => {
          const path = RNFS.DocumentDirectoryPath + '/test.txt';
             RNFS.writeFile(path,this.state.text, 'utf8')
               .then((success) => {
                   console.log('path',path);
               })
               .catch((err) =>{
                   console.log(err.message);
                });

        Alert.alert(path);
//        Alert.alert(this.state.text);

        this.props.navigation.navigate("MailBox_i");

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
        source={require("./../img/replying.webp")}
      />
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
    flex: 0.2,
    width: null,
    height: null
  }
});

export default LetterPaper;
