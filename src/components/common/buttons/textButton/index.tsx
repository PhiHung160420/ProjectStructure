import RNText from 'components/common/text';
import React from 'react';
import {StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import colors from 'utils/colors';
import {sizes} from 'utils/sizings';

interface ITextButtonProps {
  text: string;
  color?: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

function TextButton(props: ITextButtonProps) {
  const {color, text, style, onPress} = props;
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <RNText style={[styles.text, {color: color || colors.darkBlue}]}>
        {text}
      </RNText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: sizes.size_14,
  },
});

export default TextButton;
