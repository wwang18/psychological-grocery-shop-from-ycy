import React from 'react';
import Video from 'react-native-video';
import { StyleSheet, ImageBackground } from 'react-native';
import { pageIds } from '../InStore/InStoreConfig';

const u1Video = require('../../img/instore/U1.mp4');

export class U1 extends React.Component {
  afterPlayingWinningVideo = () => {
    this.props.funcs.redirectTo(pageIds.U2);
  }

  render() {
    return (
      <ImageBackground
        resizeMode="stretch"
        style={styles.fullScreen}
        source={require("../../img/instore/U.jpg")}>
        <Video source={u1Video}
          ref={(ref) => {
            this.player = ref
          }}
          onEnd={this.afterPlayingWinningVideo}
          resizeMode="stretch"
          style={styles.fullScreen} />
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
});

export default U1;