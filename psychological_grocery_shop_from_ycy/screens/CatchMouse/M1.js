import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import Video from 'react-native-video';

import { pageIds } from '../InStore/InStoreConfig';

const M1Video = require('../../img/instore/M1.mp4');

class M1 extends React.Component {
  gotoNextPage() {
    this.props.funcs.redirectTo(pageIds.M2);
  };

  render() {
    return (
      <ImageBackground
        resizeMode="stretch"
        style={styles.fullScreen}
        source={require("../../img/instore/M1.png")}>
        <Video source={M1Video}
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

export default M1;