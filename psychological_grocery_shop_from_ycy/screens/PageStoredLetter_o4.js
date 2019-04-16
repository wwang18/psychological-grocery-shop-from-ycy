import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  ImageBackground,
  StatusBar,
  Alert,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  ScrollView
} from "react-native";
import { scale } from 'react-native-size-matters';

class PageStoredLetter_o4 extends Component {
  state = {
    mailBox: [],
    curPage: 0,
  }
  textHeight = 200;

  componentDidMount() {
    this.getMailBoxList()
  } 

  getMailBoxList = () => {
    Storage.load({
      key: 'mailBox',
    }).then(res => {
      // console.log(res, 'res---------')
      this.setState({mailBox: [...res]})
    }).catch(err => {
      Storage.save({
        key: 'mailBox',
        data: []
      })
    })
  }

  _onPressButton_back() {
    this.props.navigation.goBack();
  }
  _onPressButton_LastLetter(page) {
    let curPage = page - 1;
    if(curPage < 0 ) return Alert.alert('已经是最新的信件了')
    this.setState({curPage})
  }
  _onPressButton_NextLetter(page) {
    const { mailBox } = this.state;
    let curPage = page + 1;
    if(curPage > mailBox.length - 1) return Alert.alert('没有信件了，快去写一份吧')
    this.setState({curPage})
  }

  render() {
    const { mailBox, curPage } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="#ff0000"
          translucent={true}
          hidden={true}
          animated={true}
        />
        <ImageBackground
          resizeMode="stretch"
          style={styles.container}
          source={require("./../img/bg/letter_paper.jpg")}
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 140, position: 'relative' }} >
              <TouchableOpacity
                style={{ position: 'absolute', bottom: 20, left: 40 }}
                onPress={() => this._onPressButton_LastLetter(curPage)}
              >
                <Image
                  style={styles.btn}
                  resizeMode="contain"
                  source={require("../img/btns/o__LastLetter.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
              <View style={{flex: 13}}/>
              <View style={{flex: 30}}>
                <ScrollView style={{flex: 1}}>
                  <Text style={styles.text} >
                    {mailBox.length > 0 ? mailBox[curPage].letter : '没有信件，快去写一封吧'}
                  </Text>
                </ScrollView> 
              </View>
              <View style={{flex: 14}}/>
            </View>
            <View style={{ flex: 140, position: 'relative' }} >
              <TouchableOpacity
                style={{ position: 'absolute', bottom: 20, right: 40 }}
                onPress={() => this._onPressButton_NextLetter(curPage)}
              >
                <Image
                  style={styles.btn}
                  resizeMode="contain"
                  source={require("../img/btns/o_NextLetter.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textContainer: {
    flex: 678
  },
  btnWrapper: {
    flex: 1,
    flexDirection: 'column-reverse'
  },
  btn: {
    width: 100, 
    height: 40
  },
  text: {
    fontSize: scale(22),
    color: '#888',
  },
});

export default PageStoredLetter_o4;
