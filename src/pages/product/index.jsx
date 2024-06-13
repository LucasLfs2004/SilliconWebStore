import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Container } from '../../CommomStyles';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ToastComponent from '../../components/ToastComponent';
import { getProduct } from '../../services/Requests';
import { setProduct } from '../../store/actions/productActions';
import Comments from './components/Comments';
import Description from './components/Description';
import ProductPresentation from './components/ProductPresentation';
import PriceProduct from './components/priceProduct';
import TopInfos from './components/topInfos';
import * as C from './styles';

export const Product = () => {
  const id = parseInt(useParams().id);
  const dispatch = useDispatch();

  const { data: product_data } = useQuery({
    queryKey: ['product-id', id],
    queryFn: async () => await getProduct(id),
    staleTime: 0,
  });

  useEffect(() => {
    if (product_data) dispatch(setProduct(product_data));
  }, [product_data]);

  return (
    <Container>
      <ToastComponent />
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
          {product_data?.rating?.comments?.length > 0 && <Comments />}
          {product_data?.description?.desc_html && <Description />}
        </C.ContentPage>
      )}
      <Footer />
    </Container>
  );
};

export default Product;
