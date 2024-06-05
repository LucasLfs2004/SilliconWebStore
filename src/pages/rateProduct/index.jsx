import { Container } from '../../CommomStyles';
import Footer from '../../components/Footer';
import HeaderPage from '../../components/HeaderAlternative';
import { useParams } from 'react-router';
import { getProduct } from '../../services/Requests';
import { useQuery } from '@tanstack/react-query';

const RateProduct = () => {
  const { id, id_order } = useParams();
  console.log('id_product: ', id);
  console.log('id_order: ', id_order);

  const { data: product } = useQuery({
    queryKey: ['product-id-rate', id],
    queryFn: async () => await getProduct(id),
  });

  return (
    <Container className={'dark'}>
      <HeaderPage page_title={'Avaliar produto'} />
      <Footer />
    </Container>
  );
};

export default RateProduct;
