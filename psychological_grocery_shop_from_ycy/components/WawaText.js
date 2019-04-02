import React from 'react';
import { Text } from 'react-native';

export class WawaText extends React.Component {
  render() {
    return (
      <Text style={{fontFamily: 'DFPWaWaW5-GB', ...this.props.style}}>{this.props.children}</Text>
    );
  }
}