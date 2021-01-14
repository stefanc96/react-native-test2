import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

const Row = ({style, children}) => (
  <View style={[styles.container, style]}>{children}</View>
);

export default Row;
