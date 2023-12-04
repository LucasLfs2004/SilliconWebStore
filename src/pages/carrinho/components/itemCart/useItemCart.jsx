export const useItemCart = item => {
  console.log(item);
  const inCash = item?.product.value?.priceNow;
  const portions = item.product.value.portions;
  const inCredit =
    inCash *
    (1 + item?.product?.value?.feesCredit / 100) *
    (1 + item.product.value.feesMonthly / 100) ** portions;

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
