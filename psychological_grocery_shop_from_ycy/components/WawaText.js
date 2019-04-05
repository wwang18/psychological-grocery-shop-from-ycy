import React from 'react';
import { Text } from 'react-native';

export class WawaText extends React.Component {
  render() {
    const defaultStyle = {
      fontWeight: 'normal',
      fontFamily: 'DFPWaWaW5-GB',
    };

    return (
      // Cannot use bold font, otherwise the font will return to default.
      <Text style={{ ...this.props.style, ...defaultStyle }}>
        {this.props.children}
      </Text>
    );
  }
}