import * as C from './styles';

const Home = () => {
  return (
    <C.Container>
      <C.Header>
        <C.DivBlock>
          <C.Logo>
            <h1>SILLICON</h1>
            <img src='/assets/imgs/vga-azul.svg' alt='' />
          </C.Logo>
        </C.DivBlock>
        <C.Pesquisa>
          <input type='text' />
          <button>
            <img src='/assets/imgs/searchIcon.svg' alt='' />
          </button>
        </C.Pesquisa>
        <C.DivBlock>
          <C.Carrinho>
            <img src='/assets/imgs/carrinho.svg' alt='' />
          </C.Carrinho>
          <C.Sidebar>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='13'
              viewBox='0 0 20 13'
              fill='none'
            >
              <line y1='0.5' x2='20' y2='0.5' stroke='#D1D9E6' />
              <line y1='4.5' x2='20' y2='4.5' stroke='#D1D9E6' />
              <line y1='8.5' x2='20' y2='8.5' stroke='#D1D9E6' />
              <line y1='12.5' x2='20' y2='12.5' stroke='#D1D9E6' />
            </svg>
          </C.Sidebar>
        </C.DivBlock>
      </C.Header>
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
    </C.Container>
  );
};

export default Home;
