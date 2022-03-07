import React, {Fragment} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import {isIOS, sizes} from 'utils/sizings';

import colors from 'utils/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Header} from 'components/common';

interface IContainerProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  isHeader?: boolean;
  useHomeHeader?: boolean;
  hiddenTaskBar?: boolean;
  safeColor?: string;
  title?: string;
  headerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  titleHomeHeader?: string;
  isTitleHomeHeader?: boolean;
  isBackButton?: boolean;
  isKeyboardOverlay?: boolean;
  onGoBack?: () => void;
}

function Container(props: IContainerProps) {
  const {
    children,
    style,
    isHeader,
    safeColor,
    title,
    headerStyle,
    hiddenTaskBar = false,
    onGoBack,
    isKeyboardOverlay = false,
  } = props;
  const insets = useSafeAreaInsets();

  return (
    <Fragment>
      {isIOS ? (
        <KeyboardAvoidingView
          keyboardVerticalOffset={isKeyboardOverlay ? 20 + insets.bottom : 0}
          behavior={'padding'}
          style={{flex: 1}}>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}>
            <SafeAreaView
              style={{flex: 1, backgroundColor: safeColor || colors.white}}>
              {isHeader && (
                <Header
                  onGoBack={onGoBack}
                  isBackButton
                  title={title}
                  style={headerStyle}
                />
              )}
              <StatusBar hidden={hiddenTaskBar} barStyle="dark-content" />
              <View style={[styles.container, style]}>{children}</View>
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      ) : (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <SafeAreaView
            style={{flex: 1, backgroundColor: safeColor || colors.white}}>
            {isHeader && (
              <Header
                onGoBack={onGoBack}
                isBackButton
                title={title}
                style={headerStyle}
              />
            )}
            <StatusBar
              hidden={hiddenTaskBar}
              barStyle="dark-content"
              backgroundColor={colors.white}
            />
            <View style={[styles.container, style]}>{children}</View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      )}
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: sizes.size_15,
    paddingBottom: sizes.size_15,
  },
});

export default Container;
