import {
  APPLY_VOUCHER,
  CALCULATE_PAYMENT,
  CLEAR_VOUCHER,
  INITIALIZE_PAYMENT,
  SET_PAY_FORM,
  SET_SHIP_INFOS,
} from './actionTypes';

export const initializePayment = () => {
  const paymentData = {
    valueTotal: 0,
    discountValue: 0,
    portions: [],
    payForm: null,
    shipValue: 0,
    shipInfos: {},
    voucher: null,
    discount: 0,
  };
  return {
    type: INITIALIZE_PAYMENT,
    payload: paymentData,
  };
};

export const calculatePayment = data => {
  return {
    type: CALCULATE_PAYMENT,
    payload: data,
  };
};

export const setShipInfos = data => {
  return {
    type: SET_SHIP_INFOS,
    payload: data,
  };
};

export const setVoucher = data => {
  return {
    type: APPLY_VOUCHER,
    payload: data,
  };
};

export const clearVoucher = () => {
  return {
    type: CLEAR_VOUCHER,
  };
};

export const setPayForm = data => {
  return {
    type: SET_PAY_FORM,
    payload: data,
  };
};
