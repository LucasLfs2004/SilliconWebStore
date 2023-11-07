import { configureStore } from '@reduxjs/toolkit';
import { initializeCart } from './actions/cartActions';
import cartReducer from './reducers/cartReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

store.dispatch(initializeCart());

export default store;
