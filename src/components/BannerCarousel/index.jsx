import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { api_path } from '../../constants/api_path';
import * as C from './styles';

const BannerCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const banners = useSelector(state => state.banner);

  const navigate = useNavigate();
  const handleNavigate = href => {
    navigate(href);
  };

  console.log('BANNERSSSS', banners);

  return (
    <C.Container>
      {banners.length > 0 && (
        <Slider className='carousel-image-product' {...settings}>
          {banners &&
            banners.map((image, index) => (
              <C.ItemBanner
                key={index}
                className='carousel-item'
                onClick={() => handleNavigate(image.link)}
              >
                <img
                  src={`${api_path}/image/banner/${
                    window.screen.width > 1024
                      ? image.img_banner_web
                      : image.img_banner_mobile
                  }`}
                  alt={`Imagem ${index}`}
                />
              </C.ItemBanner>
            ))}
        </Slider>
      )}
    </C.Container>
  );
};

export default BannerCarousel;
