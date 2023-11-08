import { APPLY_VOUCHER, INITIALIZE_VOUCHER } from '../actions/actionTypes';

const voucherReducer = (state = {}, action) => {
  switch (action.type) {
    case INITIALIZE_VOUCHER:
      return action.payload;
    case APPLY_VOUCHER:
      return {
        voucher: action.payload.voucher,
        discount: action.payload.discount,
      };
    default:
      return state;
  }
};

export default voucherReducer;
