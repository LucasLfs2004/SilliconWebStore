import { useParams } from 'react-router';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Container } from '../../CommomStyles';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { category } from '../../falseDatabase/category';
import { products } from '../../falseDatabase/products';
import ProductPresentation from './components/ProductPresentation';
import PriceProduct from './components/priceProduct';
import TopInfos from './components/topInfos';
import * as C from './styles';

export const Product = () => {
  const id = parseInt(useParams().id);
  const product = products.find(item => item.id === id);
  const categoryProduct = category.find(
    item => item.id === product.category_id,
  );

  return (
    <Container>
      <Header />
      <C.ContentPage>
        <C.BoxContent>
          <TopInfos categoryProduct={categoryProduct} product={product} />
          <ProductPresentation />
        </C.BoxContent>
        <C.BoxContent>
          <PriceProduct />
        </C.BoxContent>
      </C.ContentPage>
      <Footer />
    </Container>
  );
};

export default Product;
