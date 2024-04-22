import { CLEAR_BANNER, SET_BANNER } from './actionTypes';

const modelBanner = [];

export const setBanner = banner => {
  return {
    type: SET_BANNER,
    payload: banner || modelBanner,
  };
};

export const clearBanner = () => {
  return {
    type: CLEAR_BANNER,
    payload: [],
  };
};
