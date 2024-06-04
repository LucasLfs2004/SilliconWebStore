import {
  APPLY_VOUCHER,
  CALCULATE_PAYMENT,
  CLEAR_VOUCHER,
  CLOSE_PAYMENT_SUCCESS_MODAL,
  INITIALIZE_PAYMENT,
  OPEN_PAYMENT_SUCCESS_MODAL,
  SET_PAY_FORM,
  SET_SHIP_INFOS,
} from './actionTypes';

export const initializePayment = () => {
  const paymentData = {
    valueTotal: 0,
    discountValue: 0,
    portions: [],
    payForm: { method: null, portions: null },
    showSuccessModal: false,
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

export const openPaymentSuccessModal = () => {
  return {
    type: OPEN_PAYMENT_SUCCESS_MODAL,
    payload: true,
  };
};

export const closePaymentSuccessModal = () => {
  return {
    type: CLOSE_PAYMENT_SUCCESS_MODAL,
    payload: false,
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
