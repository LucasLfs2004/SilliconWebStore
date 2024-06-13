import { CLEAR_CART, SET_CART } from '../actions/actionTypes';

const initialState = {};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return action.payload;
    case CLEAR_CART:
      localStorage.setItem('cart', action.payload);
      return {};
    default:
      return state;
  }
};

export default cartReducer;
