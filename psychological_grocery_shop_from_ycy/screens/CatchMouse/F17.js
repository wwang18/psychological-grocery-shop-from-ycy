import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Image, Animated, Dimensions } from 'react-native';


const MAX_TRY = 10;
const MOUSE_SIZE = 100;
const MOUSE_SPEED = 900;
const MOUSE_REST = 2000;

const { height, width } = Dimensions.get('window');

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRndTopPosition() {
  return getRndInteger(50, height - MOUSE_SIZE);
}

function getRndMouseRest() {
  return getRndInteger(200, MOUSE_REST);
}

class F17 extends React.Component {
  state = {
    mouseCatched: false,
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
          this.props.navigation.popToTop();
          this.props.navigation.navigate('M1');
        }
      }
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.mouseRunningAnimation(true, MAX_TRY);
    }, MOUSE_REST);
  }

  componentWillUnmount() {
    this.state.mouseCatched = true;
  }

  render() {
    let { mouseTopPosition, mouseLeftPosition } = this.state;

    const catchMouse = () => {
      if (!this.state.mouseCatched) {
        this.state.mouseCatched = true;
        this.state.mouseLeftPosition.stopAnimation();
        this.state.mouseTopPosition.stopAnimation();
  
        setTimeout(() => {
          this.props.navigation.popToTop();
          this.props.navigation.navigate('F18');
        }, 3000);
      }
    };

    return (
      <View style={styles.container}>
        <ImageBackground
          resizeMode="stretch"
          style={styles.container}
          source={require("../../img/instore/F17.jpg")}>
          <View style={styles.container}>
            <Animated.View
              style={{
                ...styles.theMousePosition,
                top: mouseTopPosition,
                left: mouseLeftPosition,
              }}>
              <TouchableOpacity
                onPress={catchMouse}
                style={styles.theMouse}>
                <Image
                  style={styles.theMouse}
                  source={require("../../img/instore/TheMouse.jpeg")}
                />
              </TouchableOpacity>
            </Animated.View>
          </View>
        </ImageBackground>
      </View>
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