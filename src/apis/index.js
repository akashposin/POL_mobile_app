import axios from 'axios';
import {constants} from '../constants';

const SERVER_BASE = constants.SERVER_BASE;

export const login = async data => {
  try {
    let response = await axios.post(`${SERVER_BASE}user-logged-in`, data);
    console.log('login res', response.data);
    return response.data;
  } catch (err) {
    console.log('login error', err.response);
    // alert(err.response.data.message);
    return false;
  }
};

export const register = async data => {
  try {
    let response = await axios.post(`${SERVER_BASE}save-user`, data);
    console.log('register res', response.data);
    return response.data;
  } catch (err) {
    console.log('register error', err.response);
    // alert(err.response.data.message);
    return false;
  }
};
