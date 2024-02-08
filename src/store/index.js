import { configureStore } from '@reduxjs/toolkit';
import { setCart } from './actions/cartActions';
import { initializePayment } from './actions/paymentActions';
import { initializeProduct } from './actions/productActions';
import { initializeUser } from './actions/userActions';
import cartReducer from './reducers/cartReducer';
import paymentReducer from './reducers/paymentReducer';
import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    payment: paymentReducer,
    user: userReducer,
    product: productReducer,
  },
});

store.dispatch(setCart());
store.dispatch(initializePayment());
store.dispatch(initializeUser());
store.dispatch(initializeProduct());

export default store;
