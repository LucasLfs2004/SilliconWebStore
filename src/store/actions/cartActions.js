import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREMENT_AMOUNT_PRODUCT,
  INCREMENT_AMOUNT_PRODUCT,
  INITIALIZE_CART,
} from './actionTypes';

export const initializeCart = () => {
  const cartData = JSON.parse(localStorage.getItem('cart')) || [];
  return {
    type: INITIALIZE_CART,
    payload: cartData,
  };
};

export const addToCart = product => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
    payload: [],
  };
};

export const incrementAmountProduct = id => {
  return {
    type: INCREMENT_AMOUNT_PRODUCT,
    payload: id,
  };
};

export const decrementAmountProduct = id => {
  return {
    type: DECREMENT_AMOUNT_PRODUCT,
    payload: id,
  };
};
