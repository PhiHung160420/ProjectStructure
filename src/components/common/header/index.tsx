import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {goback} from 'navigation/service';
import colors from 'utils/colors';
import {fontWeights, sizes} from 'utils/sizings';
import RNText from '../text';
//import icons from 'utils/icons/icons';

interface IHeader {
  title?: string;
  isBackButton?: boolean;
  style?: StyleProp<ViewStyle>;
  onGoBack?: () => void;
}

export default function Header({
  title,
  isBackButton,
  style,
  onGoBack,
}: IHeader) {
  return (
    <View style={[styles.headerContainer, style]}>
      {isBackButton && (
        <TouchableOpacity
          onPress={onGoBack ? onGoBack : goback}
          style={styles.backButton}>
          {/* <Image source={icons.backIcon} style={styles.imgBackIcon} /> */}
        </TouchableOpacity>
      )}
      {title && title.length > 0 && (
        <RNText style={styles.textHeader}>{title}</RNText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: sizes.size_50,
    paddingHorizontal: sizes.size_50,
    backgroundColor: colors.white,
  },
  imgBackIcon: {
    width: sizes.size_12,
    height: sizes.size_20,
    resizeMode: 'contain',
    tintColor: colors.darkBlue,
  },
  backButton: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    padding: sizes.size_14,
  },
  textHeader: {
    fontSize: sizes.size_17,
    fontFamily: fontWeights.fontWeight_700,
    color: colors.darkBlue,
  },
});
