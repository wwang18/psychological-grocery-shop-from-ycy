import React from 'react';
import { StyleSheet } from 'react-native';
import Video from 'react-native-video';

import { InStoreView } from '../InStoreView';

const M1Video = require('../../img/instore/M1.mp4');

class M1 extends React.Component {
  componentDidMount() {
    this.props.navigation.dismiss();
  }

  gotoNextPage() {
    this.props.navigation.push('M2');
  };

  render() {
    return (
      <InStoreView backgroundImage={require('../../img/instore/M1.png')}>
        <Video source={M1Video}
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

export default M1;