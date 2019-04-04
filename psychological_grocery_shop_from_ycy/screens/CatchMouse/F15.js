import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Alert } from 'react-native';
import Video from 'react-native-video';

import { InStoreView } from '../InStoreView';

class F15 extends React.Component {
  gotoNextPage = () => {
    this.props.navigation.popToTop();
    this.props.navigation.navigate('F16');
  };

  render() {
    const f15Video = require('../../img/instore/F15.mp4');

    return (
      <InStoreView backgroundImage={require("../../img/instore/F14.jpg")}>
        <Video source={f15Video}
          ref={(ref) => {
            this.player = ref
          }}
          onEnd={() => this.gotoNextPage()}
          resizeMode="stretch"
          style={styles.backgroundVideo} />
      </InStoreView>
    );
  }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1,
  },
});

export default F15;