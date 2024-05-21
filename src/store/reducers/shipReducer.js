import {
  CLEAR_SHIP_SELECTED,
  INITIALIZE_SHIP_SELECTED,
  SET_SHIP_SELECTED,
} from '../actions/actionTypes';

const initialState = {};

const shipReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_SHIP_SELECTED:
      return action.payload;
    case SET_SHIP_SELECTED:
      // console.log('iniciando a porra do product', initialState);
      return { ...state, shipSelected: action.payload };
    case CLEAR_SHIP_SELECTED:
      console.log(action);
      return { ...state, shipSelected: action.payload };

    default:
      return state;
  }
};

export default shipReducer;
