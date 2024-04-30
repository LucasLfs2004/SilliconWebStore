import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Stars from '../Stars';
import * as C from './styles';
import { useCardProduct } from './useCardProduct';

const CardProduct = ({ item, widthCard }) => {
  const {
    handleAddToCart,
    handleBuyProduct,
    navigateToProduct,
    priceInPortions,
    pricePerPortions,
    price,
  } = useCardProduct(item);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // console.log(item);

  return (
    <C.Card onClick={event => navigateToProduct(event)} widthCard={widthCard}>
      <C.Rating>
        <Stars rating={item.rating.rating_value} />
        <C.RatingValue className='dark-hover'>
          {item.rating.rating_value} ({item.rating.amount_rating})
        </C.RatingValue>
      </C.Rating>
      <C.ContentImg>
        <Slider className='carousel-image-product' {...settings}>
          {item &&
            item.images.map((img_path, index) => (
              <C.ImgProduct key={index}>
                <img
                  src={`http://0.0.0.0:8080/image/product/${img_path}`}
                  alt={`Imagem ${item.name}`}
                />
              </C.ImgProduct>
            ))}
        </Slider>
        <C.ImageProductWeb>
          <img
            src={`http://0.0.0.0:8080/image/product/${item?.images[0]}`}
            alt=''
          />
        </C.ImageProductWeb>

        {item?.discount && (
          <C.Discount>
            {/* <p>{item.discount}%</p> */}
            <img src='/assets/icons/seta.svg' alt='' />
          </C.Discount>
        )}
      </C.ContentImg>
      <C.NameProduct className='dark-hover'>{item.name}</C.NameProduct>
      <C.PriceView>
        <C.InCash>
          <C.Price>
            {price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
            })}
          </C.Price>
          <p className='condition'>À vista no pix</p>
        </C.InCash>
        <C.Portions>
          <C.Price>
            {priceInPortions.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
            })}
          </C.Price>
          <p className='condition'>
            {item.value.portions}x de{' '}
            {pricePerPortions.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
            })}
          </p>
        </C.Portions>
      </C.PriceView>
      <C.Buttons>
        <C.Button className='cart' onClick={event => handleAddToCart(event)}>
          <p>Adicionar ao carrinho</p>
        </C.Button>
        <C.Button onClick={event => handleBuyProduct(event)}>
          <img src='/assets/icons/carrinho.svg' alt='' />
          <p>Comprar</p>
        </C.Button>
      </C.Buttons>
    </C.Card>
  );
};

export default CardProduct;
