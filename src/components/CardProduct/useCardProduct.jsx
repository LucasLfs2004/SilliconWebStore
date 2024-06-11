import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

export const useCardProduct = item => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = event => {
    event.stopPropagation();
    // dispatch(addToCart(item));
  };

  const handleBuyProduct = event => {
    event.stopPropagation();
    // dispatch(addToCart(item));
    navigate('/payment');
  };

  const navigateToProduct = event => {
    event.stopPropagation();
    navigate(`/product/${item.id}`);
  };

  let priceInPortions, price;
  if (item.value.price_now) {
    price = item.value.price_now;
    priceInPortions =
      price * (1 + item.value.fees_monthly / 100) ** item.value.portions;
  } else {
    price = item.value.common_price;
    priceInPortions =
      price * (1 + item.value.fees_monthly / 100) ** item.value.portions;
  }
  const pricePerPortions = priceInPortions / item.value.portions;

  const discount = (
    100 -
    (item.value.price_now * 100) / item.value.common_price
  ).toFixed(0);

  return {
    navigateToProduct,
    handleAddToCart,
    handleBuyProduct,
    priceInPortions,
    pricePerPortions,
    price,
    discount,
  };
};

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
