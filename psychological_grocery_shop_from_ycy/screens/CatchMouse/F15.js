import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Alert } from 'react-native';
import Video from 'react-native-video';

import { InStoreView } from '../InStoreView';

const f15Video = require('../../img/instore/F15.mp4');

class F15 extends React.Component {
  componentDidMount() {
    this.props.navigation.dismiss();
  }

  gotoNextPage() {
    this.props.navigation.push('F16');
  };

  render() {
    return (
      <InStoreView backgroundImage={require("../../img/instore/F15.png")}>
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