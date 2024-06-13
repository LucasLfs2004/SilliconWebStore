import { INITIALIZE_PRODUCT, SET_PRODUCT } from '../actions/actionTypes';

const initialState = {};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_PRODUCT:
      return initialState;
    case SET_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

export default productReducer;
