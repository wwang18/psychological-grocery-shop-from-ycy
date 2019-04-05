import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import Video from 'react-native-video';
import { scale } from 'react-native-size-matters';

import { InStoreView } from '../InStoreView';
import { WawaText } from '../../components/WawaText';
import { DialogBox } from '../../components/DialogBox';

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
            <View style={styles.dialogContainer}>
              <DialogBox onPress={() => this.gotoNextPage()}>
                <WawaText style={styles.displayText}>
                  好棒！抓到老鼠啦！
                </WawaText>
              </DialogBox>
            </View>
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