import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Container } from '../../CommomStyles';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { getOrder } from '../../services/Requests';
import * as C from './styles';

const OrderDetailed = () => {
  const id = useParams().id;
  console.log(id);
  const user = useSelector(state => state.user);

  const { data: order, refetch } = useQuery({
    queryKey: ['order', id],
    queryFn: async () =>
      user.access_token && (await getOrder(id, user.access_token)),
  });

  console.log(order);

  return (
    <Container>
      <Header />
      <C.ContentPage></C.ContentPage>
      <Footer />
    </Container>
  );
};

export default OrderDetailed;
