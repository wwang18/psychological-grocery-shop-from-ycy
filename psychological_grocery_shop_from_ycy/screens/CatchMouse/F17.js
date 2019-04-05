import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Image, Animated, Dimensions } from 'react-native';

import { InStoreView } from '../InStoreView';

const MAX_TRY = 10;
const MOUSE_SIZE = 100;
const MOUSE_SPEED = 3900;
const MOUSE_REST = 2000;

const { height, width } = Dimensions.get('window');

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
    mouseCatched: false,
    mouseYDegree: new Animated.Value(0),
    mouseLeftPosition: new Animated.Value(0 - MOUSE_SIZE * 2),
    mouseTopPosition: new Animated.Value(getRndTopPosition()),
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
          this.props.navigation.push('M1');
        }
      }
    });
  }

  componentDidMount() {
    this.props.navigation.dismiss();
    setTimeout(() => {
      this.mouseRunningAnimation(true, MAX_TRY);
    }, MOUSE_REST);
  }

  componentWillUnmount() {
    this.state.mouseCatched = true;
  }

  catchMouse() {
    if (!this.state.mouseCatched) {
      this.state.mouseCatched = true;
      this.state.mouseLeftPosition.stopAnimation();
      this.state.mouseTopPosition.stopAnimation();

      setTimeout(() => {
        this.props.navigation.push('F18');
      }, 1000);
    }
  }

  render() {
    let { mouseTopPosition, mouseLeftPosition, mouseYDegree } = this.state;
    let interpolate = mouseYDegree.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg']
    });

    return (
      <InStoreView backgroundImage={require("../../img/instore/F17.jpg")}>
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
      </InStoreView>
    )
  }
}

const styles = StyleSheet.create({
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
  }
});

export default F17;