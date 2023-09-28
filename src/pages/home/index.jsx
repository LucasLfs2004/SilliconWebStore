import CardProduct from '../../components/CardProduct';
import Header from '../../components/Header';
import * as C from './styles';

const Home = () => {
  

  return (
    <C.Container>
      <Header />
      <C.Carousel>
        <img src='/assets/imgs/carroselfalso.png' alt='' />
      </C.Carousel>
      <C.TitlePurple>
        <h1>Marcas parceiras</h1>
      </C.TitlePurple>
      <C.CarouselMarcas>
        <img src='/assets/imgs/carrouselMarcasFalso.png' alt='' />
      </C.CarouselMarcas>
      <C.TitlePurple>
        <h1>Promoções</h1>
      </C.TitlePurple>
      <CardProduct />
    </C.Container>
  );
};

export default Home;
