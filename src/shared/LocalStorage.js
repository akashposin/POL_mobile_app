import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeUserId = async id => {
  try {
    return await AsyncStorage.setItem('user_id', id);
  } catch (error) {
    console.log(error);
  }
};

export const getUserId = async () => {
  try {
    const result = await AsyncStorage.getItem('user_id');
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const removeUserId = async () => {
  try {
    return await AsyncStorage.removeItem('user_id');
  } catch (error) {
    console.log(error);
  }
};
