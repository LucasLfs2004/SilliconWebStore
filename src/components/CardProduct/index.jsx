import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Stars from '../Stars';
import * as C from './styles';

const CardProduct = ({ item }) => {
  console.log(item);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <C.Card>
      <C.Rating>
        <Stars rating={item.rating} />
        <C.RatingValue>
          {item.rating} ({item.amount_rating})
        </C.RatingValue>
      </C.Rating>
      <C.CarouselImg>
        <Slider className='carousel-image-product' {...settings}>
          {item &&
            item.image.map((img_path, index) => (
              <C.ImgProduct key={index}>
                <img src={img_path} alt={`Imagem ${item.name}`} />
              </C.ImgProduct>
            ))}
        </Slider>
        {item.discount && (
          <C.Discount>
            <p>{item.discount}%</p>
            <img src='/assets/icons/seta.svg' alt='' />
          </C.Discount>
        )}
      </C.CarouselImg>
      <C.NameProduct>{item.name}</C.NameProduct>
      <C.PriceView>
        <C.InCash>
          <C.Price>
            R$ {(item.price - item.price * (item.inCash / 100)).toFixed(2)}
          </C.Price>
          <p className='condition'>À vista no pix</p>
        </C.InCash>
        <C.Portions>
          <C.Price>R$ {item.price}</C.Price>
          <p className='condition'>
            {item.portions}x de R${' '}
            {((item.price * 100) / item.portions / 100).toFixed(2)}
          </p>
        </C.Portions>
      </C.PriceView>
      <C.Buttons>
        <C.Button>
          <p>Adicionar ao carrinho</p>
        </C.Button>
        <C.Button>
          <img src='/assets/icons/carrinho.svg' alt='' />
          <p>Comprar</p>
        </C.Button>
      </C.Buttons>
    </C.Card>
  );
};

export default CardProduct;
