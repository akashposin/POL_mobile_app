import Toast from 'react-native-toast-message';

export const SERVER_BASE = 'https://pol.aisoftwares.co.in/';

export function isEmailInvalid(email) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

export function showToast(
  message1,
  message2,
  type = 'error',
  position = 'top',
) {
  Toast.show({
    type: type,
    position: position,
    text1: message1,
    text2: message2,
    visibilityTime: 3000,
    autoHide: true,
    topOffset: 30,
    props: {
      height: 500,
    },
    bottomOffset: 40,
    onShow: () => {},
    onHide: () => {},
    onPress: () => {},
  });
}
