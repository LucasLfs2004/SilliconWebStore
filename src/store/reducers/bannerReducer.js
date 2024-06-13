import { CLEAR_BANNER, SET_BANNER } from '../actions/actionTypes';

const initialState = {};

const bannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BANNER:
      return action.payload;
    case CLEAR_BANNER:
      localStorage.setItem('cart', action.payload);
      return {};
    default:
      return state;
  }
};

export default bannerReducer;
