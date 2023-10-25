import BannerCarousel from '../../components/BannerCarousel';
import BrandCarousel from '../../components/BrandCarousel';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProductArea from '../../components/ProductArea';
import * as C from './styles';

const Home = () => {
  return (
    <C.Container>
      <Header />
      <BannerCarousel />
      <C.TitlePurple>
        <h1>Marcas parceiras</h1>
      </C.TitlePurple>
      <BrandCarousel />
      <C.TitlePurple>
        <h1>Promoções</h1>
      </C.TitlePurple>
      <ProductArea></ProductArea>
      <Footer />
    </C.Container>
  );
};

export default Home;
