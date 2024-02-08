import {
  CLEAR_CART,
  SET_CART
} from './actionTypes';

const modelCart = {
  cart_total_value: 0,
  discount: null,
  discount_value: 0,
  items: [],
  list_portions: [],
  portions: 0,
  product_total_value: 0,
  ship_cep: null,
  ship_deadline: null,
  ship_street: null,
  ship_value: 0,
  voucher: null
}

export const setCart = (cart) => {
  return {
    type: SET_CART,
    payload: cart || modelCart,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
    payload: {},
  };
};

