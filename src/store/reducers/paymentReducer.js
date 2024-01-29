import {
  APPLY_VOUCHER,
  CLEAR_VOUCHER,
  INITIALIZE_PAYMENT,
  SET_PAY_FORM,
  SET_SHIP_INFOS
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
    // case CALCULATE_PAYMENT:
    //   let discountValue = 0;
    //   let valueTotal = action?.payload.reduce((accumulator, currentItem) => {
    //     const itemTotal =
    //       currentItem.amount * currentItem.product.value.priceNow;
    //     return accumulator + itemTotal;
    //   }, 0);
    //   if (state.voucher !== null && state.voucher !== undefined) {
    //     {
    //       state.discount > 1
    //         ? (discountValue = state.discount)
    //         : (discountValue = valueTotal * state.discount);
    //     }
    //     valueTotal = valueTotal - discountValue;
    //   }
    //   let maxPortion = 0;
    //   action.payload.forEach(element => {
    //     if (maxPortion === 0) {
    //       maxPortion = element.product.value.portions;
    //     } else if (element.product.value.portions < maxPortion) {
    //       maxPortion = element.product.value.portions;
    //     }
    //   });
    //   let portions = [];
    //   console.log(action.payload);
    //   console.log('maxPortion', maxPortion);
    //   for (let i = 0; i < maxPortion; i++) {
    //     let priceTotal = 0;
    //     // console.log('props', action.payload);
    //     action.payload.forEach(element => {
    //       // console.log(element);
    //       let price =
    //         element.product.value.priceNow *
    //         element.amount *
    //         (1 + element.product.value.feesCredit / 100);
    //       if (i > 0) {
    //         price =
    //           price * (1 + element.product.value.feesMonthly / 100) ** (i + 1);
    //       }
    //       priceTotal = priceTotal + price;
    //       // console.log(priceTotal);
    //     });
    //     portions.push({
    //       often: i + 1,
    //       valueCredit: priceTotal,
    //       valuePortion: priceTotal / (i + 1),
    //     });
    //   }
    //   return {
    //     ...state,
    //     valueTotal: valueTotal,
    //     discountValue: discountValue,
    //     portions: portions,
    //   };
    case SET_SHIP_INFOS:
      return { ...state, shipInfos: action.payload, shipValue: 5.99 };
    case APPLY_VOUCHER:
      return {
        ...state,
        voucher: action.payload.voucher,
        discount: action.payload.discount,
      };
    case CLEAR_VOUCHER:
      return {
        ...state,
        voucher: null,
        discount: 0,
      };
    case SET_PAY_FORM:
      return {
        ...state,
        payForm: {
          method: action.payload.method,
          portion: action.payload.portion ? action.payload : null,
        },
      };
    default:
      return state;
  }
};

export default paymentReducer;
