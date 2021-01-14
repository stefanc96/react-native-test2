import React from 'react';
import {View} from 'react-native';

const Dot = ({color, radius}) => (
  <View
    style={{
      backgroundColor: color,
      width: radius * 2,
      height: radius * 2,
      borderRadius: radius,
    }}
  />
);

export default Dot;
