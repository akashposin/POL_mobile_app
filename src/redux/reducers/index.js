import {persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import todo_reducer from './todo_reducer';

const whitelists = ['todo_reducer'];

const config = {
  key: 'primary',
  storage: AsyncStorage,
  whitelists,
};

export default persistCombineReducers(config, {
  todo_reducer,
});
