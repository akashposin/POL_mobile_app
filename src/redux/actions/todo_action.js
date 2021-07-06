import {TYPES} from './action-types';
export const userActions = {
  setUserModel,
};

function setUserModel(user) {
  return {type: TYPES.SET_USER_MODEL, payload: user};
}
