import { useSelector } from 'react-redux';
import { Container } from '../../CommomStyles';
import BannerCarousel from '../../components/BannerCarousel';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProductArea from '../../components/ProductArea';
import * as C from './styles';
import { useHome } from './useHome';
import BrandCarousel from '../../components/BrandCarousel';

const Home = () => {
  const { products, brands, cart } = useHome();
  const user = useSelector(state => state.user);
  console.log('user', user);
  console.log('cart', cart);
  console.log('brands', brands);
  console.log('products', products);
  return (
    <Container>
      <Header />
      <BannerCarousel />
      <C.TitlePurple>
        <h1>Marcas parceiras</h1>
      </C.TitlePurple>
      <BrandCarousel brands={brands} />
      <C.TitlePurple>
        <h1>Promoções</h1>
      </C.TitlePurple>
      <ProductArea products={products} />
      <Footer />
    </Container>
  );
};

export default Home;
