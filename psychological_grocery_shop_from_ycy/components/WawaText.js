import React from 'react';
import { Text } from 'react-native';

export class WawaText extends React.Component {
  render() {
    const defaultStyle = {
      fontWeight: 'normal',
      fontFamily: 'DFPWaWaW5-GB',
    };

    let inputStyles = {};
    if (Array.isArray(this.props.style)) {
      this.props.style.forEach(s => inputStyles = {...inputStyles, ...s});
    } else {
      inputStyles = this.props.style;
    }

    return (
      // Cannot use bold font, otherwise the font will return to default.
      <Text style={{ ...inputStyles, ...defaultStyle }}>
        {this.props.children}
      </Text>
    );
  }
}

export default WawaText;