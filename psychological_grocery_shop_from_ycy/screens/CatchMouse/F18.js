import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import Video from 'react-native-video';

import { InStoreView } from '../InStoreView';

class F18 extends React.Component {
  gotoNextPage = () => {
    this.props.navigation.popToTop();
    this.props.navigation.navigate('M1');
  };

  render() {
    const f15Video = require('../../img/instore/F18.mp4');

    return (
      <InStoreView backgroundImage={require("../../img/instore/F17.jpg")}>
        <TouchableOpacity
          onPress={() => this.gotoNextPage()}
          style={styles.button}>
          <Video source={f15Video}
            ref={(ref) => {
              this.player = ref
            }}
            resizeMode="stretch"
            style={styles.backgroundVideo} />
        </TouchableOpacity>
      </InStoreView>
    );
  }
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonArea: {
    position: 'absolute',
    bottom: height * 0.05,
    right: width * 0.05,
    width: width * 0.15,
    height: height * 0.15,
  },
  button: {
    flex: 1,
    backgroundColor: 'rgba(220, 120, 120, 0.5)',
  },
  backgroundVideo: {
    flex: 1,
  },
});

export default F18;