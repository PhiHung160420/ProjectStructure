import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';

function useFocusScreen(onFocus?: Function, isFirstCall: boolean = true) {
  const navigation = useNavigation();

  useEffect(() => {
    if (onFocus) {
      if (isFirstCall) {
        onFocus();
      }
      navigation.addListener('focus', () => {
        onFocus();
      });
    }
  }, [navigation]);
}

export default useFocusScreen;
