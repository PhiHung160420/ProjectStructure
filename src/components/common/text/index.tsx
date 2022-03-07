import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

const RNText = (props: TextProps) => {
  const {children, style} = props;

  return (
    <Text {...props} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {},
});

export default RNText;
