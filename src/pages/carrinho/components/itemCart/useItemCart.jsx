export const useItemCart = item => {
  console.log(item);
  const inCash = item?.value?.price_now
    ? item?.value?.price_now
    : item?.value?.common_price;
  const portions = item.value.portions;
  const inCredit =
    inCash *
    (1 + item?.value?.fees_credit / 100) *
    (1 + item?.value?.fees_monthly / 100) ** portions;

  console.log('inCash', inCash);

  return {
    inCash: inCash.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }),
    inCredit: inCredit.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }),
    portions,
  };
};
