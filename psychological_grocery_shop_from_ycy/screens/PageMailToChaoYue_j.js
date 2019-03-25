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

   _onPressButton_family() {
     Alert.alert("家庭");
     this.props.navigation.push("SubTopic")
   }

   _onPressButton_work() {
     Alert.alert("工作");
     this.props.navigation.push("SubTopic")
   }

   _onPressButton_love() {
     Alert.alert("爱情");
     this.props.navigation.push("SubTopic")
   }

   _onPressButton_social() {
     Alert.alert("人际");
     this.props.navigation.push("SubTopic")
   }

   _onPressButton_Chaoyue() {
     Alert.alert("超越");
     this.props.navigation.push("SubTopic")
   }

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require("./../img/j_page.gif")}
      >
      <View style={{flex: 1, flexDirection: 'column'}}>
                    <View style={{flex:80}}/>
                    <View style={{flex:132}}/>
                    <View style={{flex:71}}/>
                    <View style={{flex:110}}>
                      <View style={{flex: 1, flexDirection: 'row'}}>
                                    <View style={{flex:316}}/>
                                    <View style={{flex:260, backgroundColor: 'powderblue'}}>
                                        <TouchableOpacity style={{flex: 1}} onPress={() => this._onPressButton_family()}/>
                                    </View>
                                    <View style={{flex:182}}/>
                                    <View style={{flex:260, backgroundColor: 'powderblue'}}>
                                        <TouchableOpacity style={{flex: 1}} onPress={() => this._onPressButton_work()}/>
                                    </View>
                                    <View style={{flex:316}}/>
                      </View>
                    </View>
                    <View style={{flex:30}}/>
                    <View style={{flex:110}}>
                      <View style={{flex: 1, flexDirection: 'row'}}>
                                    <View style={{flex:316}}/>
                                    <View style={{flex:260, backgroundColor: 'powderblue'}}>
                                        <TouchableOpacity style={{flex: 1}} onPress={() => this._onPressButton_love()}/>
                                    </View>
                                    <View style={{flex:182}}/>
                                    <View style={{flex:260, backgroundColor: 'powderblue'}}>
                                        <TouchableOpacity style={{flex: 1}} onPress={() => this._onPressButton_social()}/>
                                    </View>
                                    <View style={{flex:316}}/>
                      </View>
                    </View>
                    <View style={{flex:60}}/>
                    <View style={{flex:110}}>
                      <View style={{flex: 1, flexDirection: 'row'}}>
                                    <View style={{flex:378}}/>
                                    <View style={{flex:578, backgroundColor: 'powderblue'}}>
                                        <TouchableOpacity style={{flex: 1}} onPress={() => this._onPressButton_Chaoyue()}/>
                                    </View>
                                    <View style={{flex:378}}/>
                      </View>
                    </View>
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