import { Container } from '../../CommomStyles';
import BannerCarousel from '../../components/BannerCarousel';
import BrandCarousel from '../../components/BrandCarousel';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProductArea from '../../components/ProductArea';
import * as C from './styles';
import { useHome } from './useHome';

const Home = () => {
  const { products, brands } = useHome();
  console.log(products);
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
      {products && products.length > 0 && <ProductArea products={products} />}
      <Footer />
    </Container>
  );
};

export default Home;
