import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREMENT_AMOUNT_PRODUCT,
  INCREMENT_AMOUNT_PRODUCT,
  INITIALIZE_CART,
  REMOVE_PRODUCT,
} from './actionTypes';

export const initializeCart = (cart) => {
  // const item = localStorage.getItem('cart');
  // const cartData = item !== undefined ? JSON.parse(item) : [];
  const cartData = [];
  console.log(cart)
  return {
    type: INITIALIZE_CART,
    payload: cart || cartData,
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

export const removeProduct = id => {
  return {
    type: REMOVE_PRODUCT,
    payload: id,
  };
};
