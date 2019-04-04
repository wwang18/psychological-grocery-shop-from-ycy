import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Alert } from 'react-native';

import { InStoreView } from '../InStoreView';
import { WawaText } from '../../components/WawaText';

const MESSAGES = [
  '系统：超越，如果你正在玩我们的游戏，那我们会很高兴哦！偷偷给你安排了一个为上面对话框填词的小任务！',
  '（此页面是特地cue超越而设计，其他玩家请点击进入下一页面。超越本人请偷偷私信我们填了什么词哦）',
];

export class F14 extends React.Component {
  state = {
    displayingIndex: 0,
  };

  gotoNextPage() {
    this.props.navigation.popToTop();
    this.props.navigation.navigate('F15');
  }

  next() {
    const nextMessageIndex = this.state.displayingIndex + 1;
    this.setState({displayingIndex: nextMessageIndex});
    if (nextMessageIndex >= MESSAGES.length) {
      this.gotoNextPage();
    }
  }

  render() {
    return (
      <InStoreView backgroundImage={require("../../img/instore/F14.jpg")}>
        <View style={styles.topPlaceholder}>
        </View>
        <View style={styles.buttonArea}>
          <TouchableOpacity
            onPress={() => this.next()}
            style={styles.textContainer}>
            <WawaText style={styles.displayText}>
              {MESSAGES[this.state.displayingIndex]}
            </WawaText>
          </TouchableOpacity>
        </View>
      </InStoreView>
    )
  }
}

const styles = StyleSheet.create({
  topPlaceholder: {
    flex: 500,
  },
  buttonArea: {
    flex: 250,
  },
  textContainer: {
    flex: 1,
    backgroundColor: 'rgba(120, 120, 220, 0.5)',
    paddingHorizontal: 80,
    paddingVertical: 30,
  },
  displayText: {
    color: 'white',
    fontSize: 24,
  },
});

export default F14;