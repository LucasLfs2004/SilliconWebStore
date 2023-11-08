import { configureStore } from '@reduxjs/toolkit';
import { initializeCart } from './actions/cartActions';
import { initializeVoucher } from './actions/voucherActions';
import cartReducer from './reducers/cartReducer';
import voucherReducer from './reducers/voucherReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    voucher: voucherReducer,
  },
});

store.dispatch(initializeCart());
store.dispatch(initializeVoucher());

export default store;
