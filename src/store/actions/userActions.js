import { CLEAR_USER, INITIALIZE_USER, SET_USER } from './actionTypes';

export const initializeUser = () => {
  const userObj = {
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

  const userStorage = localStorage.getItem('user');
  const userData =
    userStorage === undefined ? userObj : JSON.parse(userStorage);
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

export const clearUser = () => {
  return {
    type: CLEAR_USER,
    payload: null,
  };
};
