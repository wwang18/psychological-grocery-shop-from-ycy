import React from 'react';
import { StyleSheet, ImageBackground, View, Animated, Text, Alert } from 'react-native';
import { scale } from 'react-native-size-matters';

export class AnimatedWawaText extends React.Component {
  state = {
    textSize: new Animated.Value(scale(14)),
  }

  springText() {
    Animated.sequence([
      Animated.spring(
        this.state.textSize,
        {
          toValue: scale(24),
        }
      ),
      Animated.spring(
        this.state.textSize,
        {
          toValue: scale(14),
        }
      ),
    ]).start();
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.springText();
    }
  }

  render() {
    const { textSize } = this.state;

    return (
      <View style={this.props.style}>
        <ImageBackground
          style={styles.textBackground}
          source={this.props.backgroundImage}>
          <Animated.Text style={{ ...styles.displayText, fontSize: textSize }}>
            {this.props.value}
          </Animated.Text>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textBackground: {
    flex: 1,
    paddingStart: 45,
    paddingVertical: 15,
  },
  displayText: {
    color: 'white',
    fontWeight: 'normal',
    fontFamily: 'DFPWaWaW5-GB',
  },
});

export default AnimatedWawaText;