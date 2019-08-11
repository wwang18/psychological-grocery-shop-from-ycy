import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image
} from "react-native";
import { connect } from 'react-redux';
import { initCardStore } from '../components/CardStore';

class PageMailBox_i extends Component {

  componentDidMount() {
    initCardStore(this.props); // 初始化数据
  }

  _onPressButton_back() {
    this.props.navigation.goBack();
  }

  _onPressButton_mail_box() {
    this.props.navigation.push("MailBox_n");
    this.props.dispatch({
      type: 'mailBox/changeMailBoxState',
      params: {
        key: 'isNew',
        data: false
      }
    })
  }

  _onPressButton_mail_to_ChaoYue() {
    this.props.navigation.push("MailToChaoYue_j");
  }

  render() {
    const { isNew } = this.props;
    console.log(isNew , 'isNew')
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="#ff0000"
          translucent={true}
          hidden={true}
          animated={true}
        />
        <ImageBackground
          resizeMode="stretch" // ios下over会使图片部分显示不了
          style={styles.container}
          source={require("./../img/i_page.gif")} 
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 184 }} />
            <View style={{ flex: 218 }}>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{ flex: 605 }} />
                <View style={{ flex: 107, position: 'relative' }}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => this._onPressButton_mail_box()}
                  />
                  {isNew && <Image style={styles.newSty} source={require('../img/O/NEW.png')}/>}
                </View>
                <View style={{ flex: 38 }} />
              </View>
            </View>
            <View style={{ flex: 300 }} />
            <View style={{ flex: 455 }}>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{ flex: 605 }} />
                <View style={{ flex: 107 }}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => this._onPressButton_mail_to_ChaoYue()}
                  />
                </View>
                <View style={{ flex: 38 }} />
              </View>
            </View>
            <View style={{ flex: 57 }} />
            <View style={{ flex: 86 }}>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{ flex: 690 }} />
                <View style={{ flex: 43 }}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => this._onPressButton_back()}
                  />
                </View>
                <View style={{ flex: 17 }} />
              </View>
            </View>
            <View style={{ flex: 34 }} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 60 : 0
  },
  newSty: {
    width: 50, 
    height: 30, 
    position: 'absolute',
    top: -20,
    right: -20
  }
});

export default connect( ({mailBox}) => {
  return {
    isNew: mailBox.isNew
  }
})(PageMailBox_i);
