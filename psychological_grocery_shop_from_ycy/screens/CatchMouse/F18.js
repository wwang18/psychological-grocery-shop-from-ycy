import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import Video from 'react-native-video';
import { scale } from 'react-native-size-matters';

import { WawaText } from '../../components/WawaText';
import { DialogBox } from '../../components/DialogBox';
import { pageIds } from '../InStore/InStoreConfig';

const f18Video = require('../../img/instore/F18.mp4');

class F18 extends React.Component {
  state = {
    showVideo: true,
  }

  gotoNextPage() {
    this.props.funcs.redirectTo(pageIds.M1);
  }

  afterPlayingWinningVideo = () => {
    this.setState({ showVideo: false });
    this.props.funcs.funcs.modState(10, 10);
  }

  render() {

    return (
      <ImageBackground
        resizeMode="stretch"
        style={styles.fullScreen}
        source={require("../../img/instore/F17.jpg")}>
        {this.state.showVideo &&
          <Video source={f18Video}
            ref={(ref) => {
              this.player = ref
            }}
            onEnd={this.afterPlayingWinningVideo}
            resizeMode="stretch"
            style={styles.backgroundVideo} />
        }
        {!this.state.showVideo &&
          <View style={styles.container}>
            <View style={styles.topPlaceHolder}></View>
            <View style={styles.dialogContainer}>
              <DialogBox onPress={() => this.gotoNextPage()}>
                <WawaText style={styles.displayText}>
                  好棒！抓到老鼠啦！
                </WawaText>
              </DialogBox>
            </View>
          </View>
        }
      </ImageBackground>
    );
  }
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  topPlaceHolder: {
    flex: 500,
  },
  dialogContainer: {
    flex: 250,
  },
  backgroundVideo: {
    flex: 1,
  },
  displayText: {
    color: 'white',
    fontSize: scale(18),
  },
});

export default F18;