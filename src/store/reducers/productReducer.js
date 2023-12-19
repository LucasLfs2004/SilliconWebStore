import { INITIALIZE_PRODUCT, SET_PRODUCT } from '../actions/actionTypes';

const initialState = {};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_PRODUCT:
      // console.log('iniciando a porra do product', initialState);
      return initialState;
    case SET_PRODUCT:
      console.log(action);
      return action.payload;
    default:
      return state;
  }
};

export default productReducer;
