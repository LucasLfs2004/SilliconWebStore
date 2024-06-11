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
          <C.NameCategory>{category?.name}</C.NameCategory>
        </C.TopCategory>
        {category?.products ? (
          <ProductArea products={category?.products} />
        ) : (
          <C.NotFound>
            <h1>Nenhum produto nessa categoria :(</h1>
          </C.NotFound>
        )}
      </C.Category>
      <Footer />
    </Container>
  );
};

export default Category;
