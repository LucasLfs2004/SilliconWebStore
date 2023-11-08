import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREMENT_AMOUNT_PRODUCT,
  INCREMENT_AMOUNT_PRODUCT,
  INITIALIZE_CART,
  REMOVE_PRODUCT,
} from '../actions/actionTypes';

const initialState = [];

const cartReducer = (state = initialState, action) => {
  let list = [];
  switch (action.type) {
    case INITIALIZE_CART:
      return action.payload;
    case ADD_TO_CART:
      const product = action.payload;
      const existingProduct = state.find(
        item => item.product.id === product.id,
      );

      if (existingProduct) {
        list = state.map(item =>
          item.product.id === product.id
            ? { ...item, amount: item.amount + 1 }
            : item,
        );
        localStorage.setItem('cart', JSON.stringify(list));
        return list;
      } else {
        // console.log([...state, { product, amount: 1 }]);
        list = [...state, { product, amount: 1 }];
        localStorage.setItem('cart', JSON.stringify(list));
        return list;
      }
    case CLEAR_CART:
      localStorage.setItem('cart', []);
      return action.payload;
    case INCREMENT_AMOUNT_PRODUCT:
      list = state.map(item =>
        item.product.id === action.payload
          ? { ...item, amount: item.amount + 1 }
          : item,
      );
      localStorage.setItem('cart', JSON.stringify(list));
      return list;
    case DECREMENT_AMOUNT_PRODUCT:
      list = state.map(item =>
        item.product.id === action.payload
          ? { ...item, amount: item.amount - 1 }
          : item,
      );
      localStorage.setItem('cart', JSON.stringify(list));
      return list;
    case REMOVE_PRODUCT:
      list = state.filter(item => item.product.id !== action.payload && item);
      console.log('list', list);
      localStorage.setItem('cart', JSON.stringify(list));
      return list;
    default:
      return state;
  }
};

export default cartReducer;
