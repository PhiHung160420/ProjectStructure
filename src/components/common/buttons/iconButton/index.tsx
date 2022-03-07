import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {sizes} from 'utils/sizings';

interface iconButtonProps {
  icon: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  size?: number;
  onPress: () => void;
}

const IconButton = (props: iconButtonProps) => {
  const {icon, style, size, onPress} = props;

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Image
        source={icon}
        style={[styles.icon, size ? {width: size, height: size} : null]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: sizes.size_20,
    height: sizes.size_20,
    resizeMode: 'contain',
  },
  button: {
    padding: sizes.size_10,
  },
});

export default IconButton;
