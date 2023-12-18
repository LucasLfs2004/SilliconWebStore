import { useSelector } from 'react-redux';
import { Container } from '../../CommomStyles';
import BannerCarousel from '../../components/BannerCarousel';
import BrandCarousel from '../../components/BrandCarousel';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProductArea from '../../components/ProductArea';
import * as C from './styles';
import { useHome } from './useHome';

const Home = () => {
  const { products, cart } = useHome();
  const user = useSelector(state => state.user);
  console.log('user', user);
  console.log('products on Home', products);
  console.log('cart', cart);
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
