import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Container } from '../../CommomStyles';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { getProduct } from '../../services/Requests';
import { setProduct } from '../../store/actions/productActions';
import Comments from './components/Comments';
import ProductPresentation from './components/ProductPresentation';
import PriceProduct from './components/priceProduct';
import TopInfos from './components/topInfos';
import * as C from './styles';

export const Product = () => {
  const id = parseInt(useParams().id);
  const dispatch = useDispatch();
  console.log('id of product:', id);

  const { data: product_data } = useQuery({
    queryKey: ['product-id', id],
    queryFn: async () => {
      const response = await getProduct(id);
      return response;
    },
  });

  useEffect(() => {
    if (product_data) dispatch(setProduct(product_data));
  }, [product_data]);

  return (
    <Container>
      <Header />
      {product_data && (
        <C.ContentPage>
          <C.ProductSection>
            <C.BoxContent>
              <TopInfos product={product_data} />
              <ProductPresentation product={product_data} />
            </C.BoxContent>
            <C.BoxContent>
              <PriceProduct product={product_data} />
            </C.BoxContent>
          </C.ProductSection>
          <Comments />
        </C.ContentPage>
      )}
      <Footer />
    </Container>
  );
};

export default Product;
