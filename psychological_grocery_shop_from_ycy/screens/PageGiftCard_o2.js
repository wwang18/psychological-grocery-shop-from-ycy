import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  ImageBackground,
  StatusBar,
} from "react-native";
import { connect } from "react-redux";

class PageGiftCard_o2 extends Component {
 
  param = this.props.navigation.getParam("data")
  
  _onPressButton_back() {
    this.props.navigation.goBack();
  }

  render() {
    const { giftCards } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="#ff0000"
          translucent={true}
          hidden={true}
          animated={true}
        />
        <ImageBackground
          resizeMode="contain"
          style={styles.container}
          source={giftCards[this.param.giftId].big}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 60 : 0
  }
});

export default connect(({mailBox}) => {
  return{
    giftCards: mailBox.giftCards,
  }
})(PageGiftCard_o2);
