import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import Video from 'react-native-video';
import { WawaButton } from "../../components/WawaButton";
import { pageIds } from '../InStore/InStoreConfig';

const qsmxVideo = require('../../img/instore/qsmx.mp4');
const wdmmVideo = require('../../img/instore/wdmm.mp4');

class VMV extends React.Component {
  _onPressButton_back() {
    this.props.funcs.redirectTo(pageIds.phonograph);
  }

  componentWillMount(){
    this.props.funcs.updateSettings({ backgroundMusic: false });
  }

  componentWillUnmount(){
    this.props.funcs.updateSettings({ backgroundMusic: true });
  }

  render() {
    const { data } = this.props;
    let video = data.id === 0 ? qsmxVideo : wdmmVideo;

    return (
      <ImageBackground
        resizeMode="stretch"
        style={styles.fullScreen}
        >
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View style={{ flex: 490 }}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Video source={video}
                ref={(ref) => {
                  this.player = ref
                }}
                resizeMode="stretch"
                paused={false}
                style={styles.backgroundVideo} />
            </View>
          </View>
          <WawaButton
                  size={"sm"}
                  style={styles.backButton}
                  text={"返回"}
                  onPress={()=>{this._onPressButton_back()}}
                />
        </View>
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
  backButton: {
    position: "absolute",
    width: 120,
    height: 50,
    right: 20,
    bottom: 10
  }
});

export default VMV;