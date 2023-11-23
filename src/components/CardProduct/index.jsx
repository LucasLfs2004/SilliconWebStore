import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { addToCart } from '../../store/actions/cartActions';
import Stars from '../Stars';
import * as C from './styles';

const CardProduct = ({ item }, props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = event => {
    event.stopPropagation();
    dispatch(addToCart(item));
  };

  const handleBuyProduct = event => {
    event.stopPropagation();
    dispatch(addToCart(item));
    navigate('/payment');
  };

  const navigateToProduct = event => {
    event.stopPropagation();
    navigate(`/product/${item.id}`);
  };
  // console.log(item);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const priceInPortions =
    item.value.priceNow *
    (1 + item.value.feesMonthly / 100) ** item.value.portions;
  const pricePerPortions = priceInPortions / item.value.portions;

  return (
    <C.Card onClick={event => navigateToProduct(event)}>
      <C.Rating>
        <Stars rating={item.rating} />
        <C.RatingValue className='dark-hover'>
          {item.rating} ({item.amount_rating})
        </C.RatingValue>
      </C.Rating>
      <C.ContentImg>
        <Slider className='carousel-image-product' {...settings}>
          {item &&
            item.image.map((img_path, index) => (
              <C.ImgProduct key={index}>
                <img src={img_path} alt={`Imagem ${item.name}`} />
              </C.ImgProduct>
            ))}
        </Slider>
        <C.ImageProductWeb>
          <img src={item?.image[0]} alt='' />
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
            {item?.value?.priceNow.toLocaleString('pt-BR', {
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
