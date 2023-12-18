import { CLEAR_USER, INITIALIZE_USER, SET_USER } from './actionTypes';

export const initializeUser = () => {
  const userData = {
    access_token: null,
    data: {
      id: null,
      email: null,
      name: null,
    },
    idSeller: null,
    isAdmin: false,
    isSeller: false,
  };
  return {
    type: INITIALIZE_USER,
    payload: userData,
  };
};

export const setUser = data => {
  return {
    type: SET_USER,
    payload: data,
  };
};

export const clearUser = data => {
  return {
    type: CLEAR_USER,
    payload: data,
  };
};
