import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { api_path } from '../../constants/api_path';
import { parseRealCurrency } from '../../functions/realCurrency';
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
    discount,
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
            item?.images?.map((img_path, index) => (
              <C.ImgProduct key={index}>
                <img
                  src={`${api_path}/image/product/${img_path}`}
                  alt={`Imagem ${item.name}`}
                />
              </C.ImgProduct>
            ))}
        </Slider>
        <C.ImageProductWeb>
          {item?.images?.length > 0 && (
            <img src={`${api_path}/image/product/${item?.images[0]}`} alt='' />
          )}
        </C.ImageProductWeb>

        {item?.value.price_now && (
          <C.Discount>
            <p>{discount}%</p>
            <img src='/assets/icons/seta.svg' alt='' />
          </C.Discount>
        )}
      </C.ContentImg>
      <C.NameProduct className='dark-hover'>{item.name}</C.NameProduct>
      <C.PriceView>
        <C.InCash>
          <C.Price>{parseRealCurrency(price)}</C.Price>
          <p className='condition'>À vista no pix</p>
        </C.InCash>
        <C.Portions>
          <C.Price>{parseRealCurrency(priceInPortions)}</C.Price>
          <p className='condition'>
            {item.value.portions}x de {parseRealCurrency(pricePerPortions)}
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
