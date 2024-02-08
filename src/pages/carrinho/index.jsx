import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../CommomStyles';
import EmptyCart from '../../components/EmptyCart';
import Footer from '../../components/Footer';
import HeaderPage from '../../components/HeaderAlternative';
import { getCart } from '../../services/Requests';
import { setCart } from '../../store/actions/cartActions';
import CartResume from './components/cartResume/CartResume';
import CepCard from './components/cepCard/CepCard';
import ProductsAndServices from './components/productsAndServices/ProductsAndServices';
import VoucherCard from './components/voucherCard/VoucherCard';
import * as C from './styles';
import { useCart } from './useCart';

const Carrinho = () => {
  const cart = useCart();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const { data: cartRequest } = useQuery({
    queryKey: ['cart-data'],
    queryFn: async () => {
      if (user.access_token) {
        const response = await getCart(user.access_token);
        dispatch(setCart(response));
        console.log('response queryKey cart-data', response);
        return response;
      }
    },
  });

  console.log(cart);

  return (
    <Container>
      {/* <Header /> */}
      <HeaderPage
        img_path={'/assets/icons/carrinho-gradient.svg'}
        page_title={'Carrinho'}
      />
      {cart?.items && cart.items.length > 0 ? (
        <C.ContentPage>
          <C.BoxInfos>
            <ProductsAndServices />
            <C.InputsBox>
              <CepCard />
              <VoucherCard />
            </C.InputsBox>
          </C.BoxInfos>
          <CartResume />
        </C.ContentPage>
      ) : (
        <EmptyCart />
      )}
      <Footer />
    </Container>
  );
};

export default Carrinho;
