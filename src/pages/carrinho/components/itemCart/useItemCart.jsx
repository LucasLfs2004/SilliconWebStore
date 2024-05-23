import { parseRealCurrency } from '../../../../functions/realCurrency';

export const useItemCart = item => {
  const inCash = item?.value?.price_now
    ? item?.value?.price_now
    : item?.value?.common_price;
  const portions = item.value.portions;
  const inCredit =
    inCash *
    (1 + item?.value?.fees_credit / 100) *
    (1 + item?.value?.fees_monthly / 100) ** portions;

  return {
    inCash: parseRealCurrency(inCash),
    inCredit: parseRealCurrency(inCredit),
    portions,
  };
};
