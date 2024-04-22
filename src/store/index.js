import { configureStore } from '@reduxjs/toolkit';
import { setBanner } from './actions/bannerActions';
import { setCart } from './actions/cartActions';
import { initializePayment } from './actions/paymentActions';
import { initializeProduct } from './actions/productActions';
import { initializeUser } from './actions/userActions';
import bannerReducer from './reducers/bannerReducer';
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
    banner: bannerReducer,
  },
});

store.dispatch(setBanner());
store.dispatch(setCart());
store.dispatch(initializePayment());
store.dispatch(initializeUser());
store.dispatch(initializeProduct());

export default store;
