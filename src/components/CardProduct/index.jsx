import { Link } from 'react-router-dom';
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

  const priceInPortions = item.value.priceNow * ((1 + (item.value.feesMonthly / 100)) ** item.value.portions)
  const pricePerPortions = priceInPortions / item.value.portions

  return (
    <C.Card>
      <Link to={'/product'}>
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
          {item?.discount && (
            <C.Discount>
              {/* <p>{item.discount}%</p> */}
              <img src='/assets/icons/seta.svg' alt='' />
            </C.Discount>
          )}
        </C.CarouselImg>
        <C.NameProduct>{item.name}</C.NameProduct>
        <C.PriceView>
          <C.InCash>
            <C.Price>
              {item?.value?.priceNow.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}
            </C.Price>
            <p className='condition'>À vista no pix</p>
          </C.InCash>
          <C.Portions>
            <C.Price>{priceInPortions.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</C.Price>
            <p className='condition'>
              {item.value.portions}x de {pricePerPortions.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}
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
      </Link>
    </C.Card>
  );
};

export default CardProduct;
