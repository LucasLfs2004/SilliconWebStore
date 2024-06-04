import {
  CLOSE_PAYMENT_SUCCESS_MODAL,
  INITIALIZE_PAYMENT,
  OPEN_PAYMENT_SUCCESS_MODAL,
  SET_PAY_FORM,
  SET_SHIP_INFOS,
} from '../actions/actionTypes';

const initialState = {
  valueTotal: 0,
  discountValue: 0,
  portions: [],
  payForm: { method: null, portions: null },
  shipValue: 0,
  shipInfos: {},
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_PAYMENT:
      return action.payload;
    case SET_SHIP_INFOS:
      return { ...state, shipInfos: action.payload, shipValue: 5.99 };
    case OPEN_PAYMENT_SUCCESS_MODAL:
      return {
        ...state,
        showSuccessModal: action.payload,
      };
    case CLOSE_PAYMENT_SUCCESS_MODAL:
      return {
        ...state,
        showSuccessModal: action.payload,
      };
    case SET_PAY_FORM:
      let method = '';
      let img = '';
      switch (action.payload.method) {
        case 'boleto':
          method = 'Boleto bancário';
          img = '/assets/icons/boletoBlue.svg';
          break;
        case 'pix':
          method = 'Pix';
          img = '/assets/icons/pixBlue.svg';
          break;
        case 'credit-card':
          method = 'Cartão de crédito';
          img = '/assets/icons/creditCardBlue.svg';
          break;
      }

      return {
        ...state,
        method: method,
        imgIcon: img,
        payForm: {
          method: action.payload.method,
          portion: action.payload.portion ? action.payload.portion : null,
        },
      };
    default:
      return state;
  }
};

export default paymentReducer;
