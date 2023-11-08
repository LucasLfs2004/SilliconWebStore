import { APPLY_VOUCHER, INITIALIZE_VOUCHER } from './actionTypes';

export const initializeVoucher = () => {
  const voucherData = { voucher: null, discount: 0 };
  return {
    type: INITIALIZE_VOUCHER,
    payload: voucherData,
  };
};

export const applyVoucher = voucher => {
  return {
    type: APPLY_VOUCHER,
    payload: voucher,
  };
};
