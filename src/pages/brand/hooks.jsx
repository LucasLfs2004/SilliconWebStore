import { products } from '../../falseDatabase/products';

export const OrderProduct = (order = '', id) => {
  let productsBrand = [];
  products.forEach(item => {
    item.brand_id === id && productsBrand.push(item);
  });
  switch (order) {
    case 'Menor preço':
      return productsBrand.sort((a, b) => a.value.priceNow - b.value.priceNow);
    case 'Maior preço':
      return productsBrand.sort((a, b) => b.value.priceNow - a.value.priceNow);
    case 'Mais avaliados':
      return productsBrand.sort((a, b) => b.amount_rating - a.amount_rating);
    case 'Mais recentes':
      return productsBrand;
    case 'Mais procurados':
      return productsBrand;
    case 'Promoções':
      return productsBrand;
    default:
      return productsBrand;
  }
};
