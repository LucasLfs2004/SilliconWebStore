import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../CommomStyles';
import BannerCarousel from '../../components/BannerCarousel';
import BrandCarousel from '../../components/BrandCarousel';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProductArea from '../../components/ProductArea';
import { products } from '../../falseDatabase/products';
import { calculatePayment } from '../../store/actions/paymentActions';
import * as C from './styles';

const Home = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  dispatch(calculatePayment(cart));
  return (
    <Container>
      <Header />
      <BannerCarousel />
      <C.TitlePurple>
        <h1>Marcas parceiras</h1>
      </C.TitlePurple>
      <BrandCarousel />
      <C.TitlePurple>
        <h1>Promoções</h1>
      </C.TitlePurple>
      <ProductArea products={products} />
      <Footer />
    </Container>
  );
};

export default Home;
