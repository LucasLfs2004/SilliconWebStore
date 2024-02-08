import {
  CLEAR_CART,
  SET_CART
} from '../actions/actionTypes';

const initialState = {};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      console.log('payload', action.payload)
      return action.payload;
    case CLEAR_CART:
      console.log('limpando')
      localStorage.setItem('cart', action.payload);
      return {};
    default:
      return state;
  }
};

export default cartReducer;
