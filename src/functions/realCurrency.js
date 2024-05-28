export const parseRealCurrency = value => {
  if (value !== null && value !== undefined && typeof value === 'number')
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });
  else {
    return 0;
  }
};
