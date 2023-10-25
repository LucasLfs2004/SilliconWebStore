import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Stars from '../../components/Stars';
import { brands } from '../../falseDatabase/brands';
import { category } from '../../falseDatabase/category';
import { department } from '../../falseDatabase/department';
import { products } from '../../falseDatabase/products';
import { seller } from '../../falseDatabase/seller';
import * as C from './styles';

export const Product = () => {
  const [favorite, setFavorite] = useState(false);
  const product = products[0];

  const categoryProduct = category.find(
    item => item.id === product.category_id,
  );
  const departmentProduct = department.find(
    item => item.id === categoryProduct.department_id,
  );
  const brandProduct = brands.find(item => item.id === product.brand_id);
  const sellerName = seller.find(item => item.id === product.seller_id).name;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <C.Page>
      <Header />
      <C.TopInfos>
        <C.RouteCategory>
          {departmentProduct.name} <span>{' > '}</span> {categoryProduct.name}
          <span>{' > '}</span> {brandProduct.brand}
        </C.RouteCategory>
        <C.SimpleInfos>
          <img src={brandProduct.img_path} color='#000000' alt='' />
          <img src='/assets/icons/linePurple.svg' alt='' />
          <p>
            {product.warranty && product.warranty > 12
              ? `${product.warranty / 12} anos de garantia`
              : `${product.warranty} ${
                  product.warranty > 1 ? 'meses' : 'mês'
                } de garantia`}
          </p>
          <img src='/assets/icons/linePurple.svg' alt='' />
          <C.BtnActions>
            <button onClick={() => setFavorite(!favorite)}>
              {favorite ? (
                <img src='/assets/icons/favoritePurple.svg' alt='' />
              ) : (
                <img src='/assets/icons/favoriteGray.svg' alt='' />
              )}
            </button>
            <img src='/assets/icons/shareGray.svg' alt='' />
          </C.BtnActions>
        </C.SimpleInfos>
      </C.TopInfos>
      <C.DarkArea>
        <C.Rating>
          <Stars rating={product.rating} />
          <C.RatingValue>
            {product.rating} ({product.amount_rating})
          </C.RatingValue>
        </C.Rating>
        <C.CarouselImage>
          <Slider className='carousel-image-product' {...settings}>
            {product &&
              product.image.map((img_path, index) => (
                <C.ImgProduct key={index}>
                  <img
                    src={img_path}
                    alt={`Imagem ${product.name} - ${index}`}
                  />
                </C.ImgProduct>
              ))}
          </Slider>
        </C.CarouselImage>
        <C.Seller>
          Vendido e entregue por <span>{sellerName}</span>
        </C.Seller>
      </C.DarkArea>
      <C.PriceArea>
        <C.Name>{product.name}</C.Name>
        <C.IdProduct>Código: xxxxxxxx</C.IdProduct>
        <C.RowPrice>
          <img src='/assets/icons/creditCard.svg' alt='' />
          <C.Price>
            <p>{product.price}</p>
            <span>à vista no pix</span>
          </C.Price>
        </C.RowPrice>
      </C.PriceArea>
      <Footer />
    </C.Page>
  );
};

export default Product;
