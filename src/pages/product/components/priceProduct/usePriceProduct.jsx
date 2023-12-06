import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { products } from '../../../../falseDatabase/products';
import { addToCart } from '../../../../store/actions/cartActions';

export const usePriceProduct = () => {
  const [seePortions, setSeePortions] = useState(false);
  const id = parseInt(useParams().id);
  const product = products.find(item => item.id === id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const priceCredit =
    product.value.priceNow * (1 + product.value.feesCredit / 100);
  const priceInPortions =
    priceCredit *
    (1 + product.value.feesMonthly / 100) ** product.value.portions;
  const pricePerPortions = priceInPortions / product.value.portions;
  const portions = [];
  for (let i = 1; i <= product.value.portions; i++) {
    portions[i - 1] = priceCredit * (1 + product.value.feesMonthly / 100) ** i;
  }

  const buyProduct = () => {
    console.log('buyProduct');
    dispatch(addToCart(product));
    console.log('alterando rota');
    navigate('/carrinho');
  };

  const handleAddToCart = event => {
    event.stopPropagation();
    dispatch(addToCart(product));
  };

  return {
    buyProduct,
    seePortions,
    setSeePortions,
    pricePerPortions,
    product,
    priceCredit,
    priceInPortions,
    handleAddToCart,
    portions,
  };
};
