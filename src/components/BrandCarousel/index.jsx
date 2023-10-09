import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import * as C from './styles';

const BrandCarousel = () => {
  const brands = [
    {
      brand: 'Apple',
      img_path: '/assets/brands/appleLogo.svg',
      href: '/apple',
    },
    {
      brand: 'Asus',
      img_path: '/assets/brands/asusLogo.svg',
      href: '/asus',
    },
    {
      brand: 'Gigabyte',
      img_path: '/assets/brands/gigabyteLogo.svg',
      href: '/gigabyte',
    },
    {
      brand: 'Logitech',
      img_path: '/assets/brands/logitechLogo.svg',
      href: '/logitech',
    },
    {
      brand: 'Xbox',
      img_path: '/assets/brands/xboxLogo.svg',
      href: '/xbox',
    },
    {
      brand: 'Amd',
      img_path: '/assets/brands/amdLogo.svg',
      href: '/amd',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <C.Container>
      <C.Carousel>
        <Slider className='carousel-image-product' {...settings}>
          {brands &&
            brands.map((item, index) => (
              <C.ItemBrand
                key={index}
                className='carousel-item'
                href={item.href}
              >
                <img src={item.img_path} alt={`Imagem ${item.brand}`} />
              </C.ItemBrand>
            ))}
        </Slider>
      </C.Carousel>
    </C.Container>
  );
};

export default BrandCarousel;
