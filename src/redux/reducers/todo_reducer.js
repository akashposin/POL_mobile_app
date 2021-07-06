import {TYPES} from '../actions/action-types';
import {REHYDRATE} from 'redux-persist';

const initialState = {
  userModel: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REHYDRATE: {
      return action.payload
        ? action.payload.todo_reducer
        : initialState || initialState;
    }

    case TYPES.SET_USER_MODEL:
      return {
        ...state,
        userModel: action.payload,
      };

    default:
      return state;
  }
}
