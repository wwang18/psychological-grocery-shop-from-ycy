import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import Video from 'react-native-video';

import { pageIds } from '../InStore/InStoreConfig';

const f15Video = require('../../img/instore/F15.mp4');

class F15 extends React.Component {
  gotoNextPage() {
    this.props.funcs.redirectTo(pageIds.F16);
  };

  render() {
    return (
      <ImageBackground
        resizeMode="stretch"
        style={styles.fullScreen}
        source={require("../../img/instore/F15.png")}>
        <Video source={f15Video}
          ref={(ref) => {
            this.player = ref
          }}
          onEnd={() => this.gotoNextPage()}
          resizeMode="stretch"
          style={styles.backgroundVideo} />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  backgroundVideo: {
    flex: 1,
  },
});

export default F15;