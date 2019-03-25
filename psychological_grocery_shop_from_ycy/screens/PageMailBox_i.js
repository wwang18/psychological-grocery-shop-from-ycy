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

class PageMailBox_i extends Component {
  _onPressButton_back() {
    this.props.navigation.goBack();
  }

   _onPressButton_mail_box() {
     Alert.alert("点击邮箱");
   }

   _onPressButton_mail_to_ChaoYue() {
     this.props.navigation.push("MailToChaoYue_j")
   }

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require("./../img/i_page.gif")}
      >
      <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex:184}}/>
              <View style={{flex:218}}>
                      <View style={{flex: 1, flexDirection: 'column'}}>
                                    <View style={{flex:605}}/>
                                    <View style={{flex:107}}>
                                        <TouchableOpacity style={{flex: 1}} onPress={() => this._onPressButton_mail_box()}/>
                                    </View>
                                    <View style={{flex:38}}/>
                      </View>
              </View>
              <View style={{flex:300}}/>
              <View style={{flex:455}}>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                                    <View style={{flex:605}}/>
                                    <View style={{flex:107}}>
                                        <TouchableOpacity style={{flex: 1}} onPress={() => this._onPressButton_mail_to_ChaoYue()}/>
                                    </View>
                                    <View style={{flex:38}}/>
                    </View>
              </View>
              <View style={{flex:57}}/>
              <View style={{flex:86}}>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                                                        <View style={{flex:690}}/>
                                                        <View style={{flex:43}}>
                                                            <TouchableOpacity style={{flex: 1}} onPress={() => this._onPressButton_back()}/>
                                                        </View>
                                                        <View style={{flex:17}}/>
                    </View>
              </View>
              <View style={{flex:34}}/>
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

export default PageMailBox_i;