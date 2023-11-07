import {
  ADD_TO_CART,
  CLEAR_CART,
  INITIALIZE_CART,
} from '../actions/actionTypes';

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_CART:
      return action.payload;
    case ADD_TO_CART:
      console.log(action);
      const product = action.payload;
      const existingProduct = state.find(
        item => item.product.id === product.id,
      );

      if (existingProduct) {
        const list = state.map(item =>
          item.product.id === product.id
            ? { ...item, amount: item.amount + 1 }
            : item,
        );
        localStorage.setItem('cart', JSON.stringify(list));
        return list;
      } else {
        // console.log([...state, { product, amount: 1 }]);
        const list = [...state, { product, amount: 1 }];
        localStorage.setItem('cart', JSON.stringify(list));
        return list;
      }
    case CLEAR_CART:
      localStorage.setItem('cart', []);
      return action.payload;
    default:
      return state;
  }
};

export default cartReducer;
