import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  AppRegistry,
  Button,
  Alert,
  TouchableOpacity
} from "react-native";

class PageMailToChaoYue_j extends Component {
  _onPressButton_back() {
    this.props.navigation.goBack();
  }

   _onPressButton_mail_box() {
     Alert.alert("点击邮箱");
   }

   _onPressButton_mail_to_ChaoYue() {
     this.props.navigation.push("MailBox_i")
   }

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require("./../img/j_page.gif")}
      >
      <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex:80}}/>
                    <View style={{flex:132}}/>
                    <View style={{flex:71}}/>
                    <View style={{flex:110}}>
                      <View style={{flex: 1, flexDirection: 'column'}}>
                                    <View style={{flex:316}}/>
                                    <View style={{flex:260}}>
                                        <TouchableOpacity style={{flex: 1}} onPress={() => this._onPressButton_mail_box()}/>
                                    </View>
                                    <View style={{flex:182}}/>
                                    <View style={{flex:260}}>
                                        <TouchableOpacity style={{flex: 1}} onPress={() => this._onPressButton_mail_box()}/>
                                    </View>
                                    <View style={{flex:316}}/>
                      </View>
                    </View>
                    <View style={{flex:30}}/>
                    <View style={{flex:110}}>
                      <View style={{flex: 1, flexDirection: 'column'}}>
                                    <View style={{flex:316}}/>
                                    <View style={{flex:260}}>
                                        <TouchableOpacity style={{flex: 1}} onPress={() => this._onPressButton_mail_box()}/>
                                    </View>
                                    <View style={{flex:182}}/>
                                    <View style={{flex:260}}>
                                        <TouchableOpacity style={{flex: 1}} onPress={() => this._onPressButton_mail_box()}/>
                                    </View>
                                    <View style={{flex:316}}/>
                      </View>
                    </View>
                    <View style={{flex:60}}/>
                    <View style={{flex:110}}>
                      <View style={{flex: 1, flexDirection: 'column'}}>
                                    <View style={{flex:378}}/>
                                    <View style={{flex:578}}>
                                        <TouchableOpacity style={{flex: 1}} onPress={() => this._onPressButton_mail_box()}/>
                                    </View>
                                    <View style={{flex:378}}/>
                      </View>
                    </view>
                    <View style={{flex:47}}/>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 60 : 80
  }
});

export default PageMailToChaoYue_j;