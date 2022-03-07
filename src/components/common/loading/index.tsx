import React, {Fragment} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useAppSelector} from 'store';
import colors from 'utils/colors';
import {sizes} from 'utils/sizings';

const Loading = () => {
  const isLoading = useAppSelector(state => state.loading);

  return (
    <Fragment>
      {isLoading && (
        <View style={styles.loadingStyle}>
          <View style={styles.loadingContainerStyle}>
            <ActivityIndicator
              size="large"
              color={colors.pink}
              style={styles.spinner}
            />
          </View>
        </View>
      )}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  loadingStyle: {
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    backgroundColor: colors.blackOpacity,
    zIndex: 9999,
  },
  loadingContainerStyle: {
    width: sizes.size_70,
    height: sizes.size_70,
    borderRadius: sizes.size_10,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    marginTop: sizes.size_3,
    marginLeft: sizes.size_3,
  },
});

export default Loading;
