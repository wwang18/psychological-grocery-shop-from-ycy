import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import Video from 'react-native-video';
import { scale } from 'react-native-size-matters';

import { InStoreView } from '../InStoreView';
import { WawaText } from '../../components/WawaText';

const f18Video = require('../../img/instore/F18.mp4');

class F18 extends React.Component {
  state = {
    showVideo: true,
  }

  componentDidMount() {
    this.props.navigation.dismiss();
  }

  gotoNextPage() {
    this.props.navigation.push('M1');
  }

  render() {

    return (
      <InStoreView backgroundImage={require("../../img/instore/F17.jpg")}>
        {this.state.showVideo &&
          <Video source={f18Video}
            ref={(ref) => {
              this.player = ref
            }}
            onEnd={() => this.setState({ showVideo: false })}
            resizeMode="stretch"
            style={styles.backgroundVideo} />
        }
        {!this.state.showVideo &&
          <View style={styles.container}>
            <View style={styles.topPlaceHolder}></View>
            <TouchableOpacity
              onPress={() => this.gotoNextPage()}
              style={styles.button}>
              <ImageBackground
                resizeMode="stretch"
                style={styles.dialogArea}
                source={require("../../img/instore/EmptyDialogBox.png")}>
                <WawaText style={styles.displayText}>
                  好棒！抓到老鼠啦！
              </WawaText>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        }
      </InStoreView>
    );
  }
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topPlaceHolder: {
    flex: 500,
  },
  buttonArea: {
    position: 'absolute',
    bottom: height * 0.05,
    right: width * 0.05,
    width: width * 0.15,
    height: height * 0.15,
  },
  button: {
    flex: 250,
    paddingStart: 30,
    paddingEnd: 26,
  },
  backgroundVideo: {
    flex: 1,
  },
  dialogArea: {
    flex: 1,
    marginTop: 10,
    marginBottom: 4,
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  displayText: {
    color: 'white',
    fontSize: scale(18),
  },
});

export default F18;