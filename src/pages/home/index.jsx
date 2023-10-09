import BannerCarousel from '../../components/BannerCarousel';
import BrandCarousel from '../../components/BrandCarousel';
import CardProduct from '../../components/CardProduct';
import Header from '../../components/Header/header';
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
      {/* <C.CarouselMarcas>
        <img src='/assets/imgs/carrouselMarcasFalso.png' alt='' />
      </C.CarouselMarcas> */}
      <C.TitlePurple>
        <h1>Promoções</h1>
      </C.TitlePurple>
      <CardProduct />
    </C.Container>
  );
};

export default Home;
