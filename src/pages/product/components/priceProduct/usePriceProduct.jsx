import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { addCartItem } from '../../../../services/Requests';
import { setCart } from '../../../../store/actions/cartActions';

export const usePriceProduct = () => {
  //redux
  const product = useSelector(state => state.product);
  const user = useSelector(state => state.user);

  //state
  const [seePortions, setSeePortions] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const buyProduct = async () => {
    if (user.access_token) {
      const cartReturn = await addCartItem(user.access_token, {
        id_product: product.id,
        amount: 1,
      });
      dispatch(setCart(cartReturn));
    }

    navigate('/carrinho');
  };

  const handleAddToCart = async event => {
    event.stopPropagation();
    if (user.access_token) {
      const cartReturn = await addCartItem(user.access_token, {
        id_product: product.id,
        amount: 1,
      });
      console.log(cartReturn);
      dispatch(setCart(cartReturn));
      // alert('sucesso');
    }
  };

  return {
    product,
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
