import {
  CLEAR_SHIP_SELECTED,
  INITIALIZE_SHIP_SELECTED,
  SET_SHIP_SELECTED,
} from './actionTypes';

export const initializeShipSelected = () => {
  const ship = { shipSelected: null };
  return {
    type: INITIALIZE_SHIP_SELECTED,
    payload: ship,
  };
};

export const setShipSelected = data => {
  const ship = {};
  return {
    type: SET_SHIP_SELECTED,
    payload: data,
  };
};

export const clearShipSelected = () => {
  return {
    type: CLEAR_SHIP_SELECTED,
    payload: null,
  };
};
