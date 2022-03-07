import RNText from 'components/common/text';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import colors from 'utils/colors';
import {fontWeights, sizes} from 'utils/sizings';

interface imageButtonProps {
  image: ImageSourcePropType;
  title: string;
  buttonStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const ImageButton = (props: imageButtonProps) => {
  const {image, title, buttonStyle, onPress} = props;
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <RNText style={styles.title}>{title}</RNText>
      <Image source={image} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: sizes.size_48,
    height: sizes.size_48,
    marginVertical: sizes.size_8,
    resizeMode: 'contain',
  },
  button: {
    borderRadius: sizes.size_4,
    paddingHorizontal: sizes.size_16,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: colors.darkBlue,
    fontSize: sizes.size_18,
    fontFamily: fontWeights.fontWeight_600,
  },
});

export default ImageButton;
