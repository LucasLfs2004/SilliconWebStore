import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

export const usePriceProduct = product => {
  const [seePortions, setSeePortions] = useState(false);

  // const id = parseInt(useParams().id);
  // const product = products.find(item => item.id === id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log('product in usePricePrduct', product);
  // console.log('product in usePricePrduct', product?.value?.price_now);
  // console.log('product in usePricePrduct', product?.value?.common_price);

  let priceCredit = 0,
    pricePerPortions = 0,
    priceInPortions = 0,
    portions = [];

  if (product && product.value && product.value.price_now) {
    priceCredit =
      product?.value?.price_now *
      (1 + parseFloat(product?.value?.fees_credit) / 100);
  } else {
    priceCredit =
      product?.value?.common_price *
      (1 + parseFloat(product?.value?.fees_credit) / 100);
  }

  priceInPortions =
    priceCredit *
    (1 + product?.value?.fees_monthly / 100) ** product?.value?.portions;
  pricePerPortions = priceInPortions / product?.value?.portions;
  portions = [];
  for (let i = 1; i <= product?.value?.portions; i++) {
    portions[i - 1] =
      priceCredit * (1 + product?.value?.fees_monthly / 100) ** i;
  }
  // console.log('priceCredit', priceCredit);

  const buyProduct = () => {
    // console.log('buyProduct');
    // dispatch(addToCart(product));
    // console.log('alterando rota');
    navigate('/carrinho');
  };

  const handleAddToCart = event => {
    event.stopPropagation();
    // dispatch(addToCart(product));
  };

  return {
    buyProduct,
    seePortions,
    setSeePortions,
    pricePerPortions,
    priceCredit,
    priceInPortions,
    handleAddToCart,
    portions,
  };
};
