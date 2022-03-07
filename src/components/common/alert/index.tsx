import {Alert} from 'react-native';

export function handleError(error?: any) {
  if (error && error.error && error.message) {
    // messages here
  } else {
    // messages here
  }
}

export function showAlert(
  content: string,
  title: string = '',
  textSuccess = 'OK',
) {
  setTimeout(() => {
    Alert.alert(title, content, [{text: textSuccess, onPress: () => {}}], {
      cancelable: false,
    });
  }, 100);
}

export const showAlertCallBack = (
  alert = '',
  content: string,
  callBack: Function,
  textCancel = 'Cancel',
  textConfirm = 'OK',
) => {
  setTimeout(() => {
    Alert.alert(
      alert,
      content,
      [
        {
          text: textCancel,
          style: 'cancel',
        },
        {
          text: textConfirm,
          onPress: () => {
            callBack && callBack();
          },
        },
      ],
      {cancelable: false},
    );
  }, 100);
};

export const showAlertCallBackNotCancel = (
  alert = '',
  content: string,
  callBack: Function,
  textConfirm = 'OK',
) => {
  setTimeout(() => {
    Alert.alert(
      alert,
      content,
      [
        {
          text: textConfirm,
          onPress: () => {
            callBack && callBack();
          },
        },
      ],
      {cancelable: false},
    );
  }, 100);
};

export function showAlertConfirm(
  title = '',
  content = '',
  onConfirm: Function,
  textSuccess = 'OK',
  textCancel = 'Cancel',
) {
  setTimeout(() => {
    Alert.alert(
      title,
      content,
      [
        {
          text: textCancel,
          onPress: () => {
            onConfirm && onConfirm(false);
          },
          style: 'cancel',
        },
        {
          text: textSuccess,
          onPress: () => {
            onConfirm && onConfirm(true);
          },
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  }, 100);
}
