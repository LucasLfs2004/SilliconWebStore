import { configureStore } from '@reduxjs/toolkit';
import { initializeCart } from './actions/cartActions';
import { initializePayment } from './actions/paymentActions';
import cartReducer from './reducers/cartReducer';
import paymentReducer from './reducers/paymentReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    payment: paymentReducer,
  },
});

store.dispatch(initializeCart());
store.dispatch(initializePayment());

export default store;
