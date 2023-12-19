import { INITIALIZE_PRODUCT, SET_PRODUCT } from './actionTypes';

export const initializeProduct = () => {
  const product = {};
  return {
    type: INITIALIZE_PRODUCT,
    payload: product,
  };
};

export const setProduct = data => {
  return {
    type: SET_PRODUCT,
    payload: data,
  };
};
