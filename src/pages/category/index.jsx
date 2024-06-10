import { Container } from '../../CommomStyles';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProductArea from '../../components/ProductArea';
import * as C from './styles';
import useCategory from './useCategory';

const Category = () => {
  const { category } = useCategory();

  return (
    <Container>
      <Header />
      <C.Category>
        <C.TopCategory>
          <C.NameCategory>{category?.category_name}</C.NameCategory>
        </C.TopCategory>
        <ProductArea products={category?.products} />
      </C.Category>
      <Footer />
    </Container>
  );
};

export default Category;
