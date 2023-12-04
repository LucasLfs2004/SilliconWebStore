import { Container } from '../../CommomStyles';
import EmptyCart from '../../components/EmptyCart';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CartResume from './components/cartResume/CartResume';
import CepCard from './components/cepCard/CepCard';
import ProductsAndServices from './components/productsAndServices/ProductsAndServices';
import VoucherCard from './components/voucherCard/VoucherCard';
import * as C from './styles';
import { useCart } from './useCart';

const Carrinho = () => {
  const cart = useCart();

  return (
    <Container>
      <Header />
      {cart && cart.length > 0 ? (
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
