import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Image, Animated, Dimensions } from 'react-native';
import { scale } from 'react-native-size-matters';

import { WawaText } from '../../components/WawaText';
import { DialogBox } from '../../components/DialogBox';
import { pageIds } from '../InStore/InStoreConfig';

const MAX_TRY = 10;
const MOUSE_SIZE = 100;
const MOUSE_SPEED = 1500;
const MOUSE_REST = 2000;

function getDimension() {
  const { height, width } = Dimensions.get('window');
  return height > width ? { height: width, width: height } : { height, width };
} 

const { height, width } = getDimension();

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRndTopPosition() {
  return getRndInteger(100, height - MOUSE_SIZE);
}

function getRndMouseRest() {
  return getRndInteger(200, MOUSE_REST);
}

class F17 extends React.Component {
  state = {
    startCatch: false,
    mouseCatched: false,
    mouseYDegree: new Animated.Value(0),
    mouseLeftPosition: new Animated.Value(0 - MOUSE_SIZE * 2),
    mouseTopPosition: new Animated.Value(getRndTopPosition()),
  }

  componentWillUnmount() {
    this.state.mouseCatched = true;
  }

  gameStart() {
    this.setState({ startCatch: true });

    setTimeout(() => {
      this.mouseRunningAnimation(true, MAX_TRY);
    }, MOUSE_REST);
  }

  mouseRunningAnimation(direction, counter) {
    const leftMost = 0 - MOUSE_SIZE * 2;
    const rightMost = width + MOUSE_SIZE;
    const desitination = direction ? rightMost : leftMost;

    Animated.sequence([
      Animated.timing(
        this.state.mouseLeftPosition,
        {
          toValue: desitination,
          duration: getRndInteger(200, MOUSE_SPEED),
        }
      ),
      Animated.timing(
        this.state.mouseYDegree,
        {
          toValue: direction ? 1 : 0,
          duration: 50,
        }
      ),
      Animated.timing(
        this.state.mouseTopPosition,
        {
          toValue: getRndTopPosition(),
          duration: getRndMouseRest(),
        }
      ),
    ]).start(() => {
      if (!this.state.mouseCatched) {
        if (counter > 0) {
          this.mouseRunningAnimation(!direction, counter - 1);
        } else {
          this.props.funcs.redirectTo(pageIds.M1);
        }
      }
    });
  }

  catchMouse() {
    if (!this.state.mouseCatched) {
      this.state.mouseCatched = true;
      this.state.mouseLeftPosition.stopAnimation();
      this.state.mouseTopPosition.stopAnimation();

      setTimeout(() => {
        this.props.funcs.redirectTo(pageIds.F18);
      }, 1000);
    }
  }

  render() {
    let { mouseTopPosition, mouseLeftPosition, mouseYDegree } = this.state;
    let interpolate = mouseYDegree.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg']
    });
    const { redirectTo } = this.props.funcs;
    return (
      <ImageBackground
        resizeMode="stretch"
        style={styles.fullScreen}
        source={require("../../img/instore/F17.jpg")}>
        {!this.state.startCatch &&
          <View style={styles.container}>
            <View style={styles.topPlaceHolder}></View>
            <View style={styles.dialogContainer}>
              <DialogBox onPress={() => this.gameStart()}>
                <WawaText style={styles.displayText}>
                  提示：请抓住老鼠。点击开始。
                </WawaText>
              </DialogBox>
            </View>
          </View>
        }
        {this.state.startCatch &&
          <Animated.View
            style={{
              ...styles.theMousePosition,
              top: mouseTopPosition,
              left: mouseLeftPosition,
              transform: [{ rotateY: interpolate }]
            }}>
            <TouchableOpacity
              onPress={() => this.catchMouse()}
              style={styles.theMouse}>
              <Image
                style={styles.theMouse}
                source={require("../../img/instore/TheMouse.gif")}
              />
            </TouchableOpacity>
          </Animated.View>
        }
        <TouchableOpacity
          style={{ position: 'absolute', bottom: 20, right: 50 }}
          onPress={() => redirectTo(pageIds.storeMain)}
        >
          <Image
            style={styles.button}
            resizeMode="contain"
            source={require('../../img/btns/n_Return.png')}
          />
        </TouchableOpacity>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  theMousePosition: {
    width: 100,
    height: 100,
    position: 'absolute',
  },
  theMouse: {
    width: '100%',
    height: '100%',
  },
  topPlaceHolder: {
    flex: 500,
  },
  dialogContainer: {
    flex: 250,
  },
  displayText: {
    color: 'white',
    fontSize: scale(18),
  },
});

export default F17;