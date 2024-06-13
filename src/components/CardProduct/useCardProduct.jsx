import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { addCartItem } from '../../services/Requests';
import { setCart } from '../../store/actions/cartActions';
import { toastErr, toastSuc } from '../ToastComponent';

export const useCardProduct = item => {
  const user = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const handleBuyProduct = async event => {
    event.preventDefault();
    event.stopPropagation();
    if (user.access_token) {
      const cartReturn = await addCartItem(user.access_token, {
        id_product: item.id,
        amount: 1,
      });
      if (cartReturn !== false) {
        dispatch(setCart(cartReturn));
        toastSuc('Produto adicionado com sucesso');
        setTimeout(() => navigate('/payment'), 1500);
      } else {
        toastErr(
          'Não foi possível adicionar o produto, por favor tente novamente',
        );
      }
    }
  };

  const handleAddToCart = async event => {
    event.preventDefault();
    event.stopPropagation();
    if (user.access_token) {
      const cartReturn = await addCartItem(user.access_token, {
        id_product: item.id,
        amount: 1,
      });
      console.log('cartReturn', cartReturn);

      if (cartReturn !== false) {
        dispatch(setCart(cartReturn));
        toastSuc('Produto adicionado ao carrinho');
      } else {
        toastErr(
          'Não foi possível adicionar o produto, por favor tente novamente',
        );
      }
      // alert('sucesso');
    }
  };

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
