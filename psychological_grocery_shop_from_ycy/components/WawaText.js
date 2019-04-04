import React from 'react';
import { Text, Alert } from 'react-native';

export class WawaText extends React.Component {
  render() {
    return (
      // Cannot use bold font, otherwise the font will return to default.
      <Text style={{ ...this.props.style, fontWeight: 'normal', fontFamily: 'DFPWaWaW5-GB' }}>
        {this.props.children}
      </Text>
    );
  }
}