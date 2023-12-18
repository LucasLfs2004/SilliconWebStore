import { configureStore } from '@reduxjs/toolkit';
import { initializeCart } from './actions/cartActions';
import { initializePayment } from './actions/paymentActions';
import { initializeUser } from './actions/userActions';
import cartReducer from './reducers/cartReducer';
import paymentReducer from './reducers/paymentReducer';
import userReducer from './reducers/userReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    payment: paymentReducer,
    user: userReducer,
  },
});

store.dispatch(initializeCart());
store.dispatch(initializePayment());
store.dispatch(initializeUser());

export default store;
