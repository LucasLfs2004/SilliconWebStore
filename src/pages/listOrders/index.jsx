import { Container } from '../../CommomStyles';
import Footer from '../../components/Footer';
import HeaderPage from '../../components/HeaderAlternative';
import CardOrder from '../../components/cardOrder';
import * as C from './styles';
import useOrders from './useOrders';

const PurchaseOrders = () => {
  const { orders } = useOrders();

  console.log(orders);

  return (
    <Container className='dark'>
      <HeaderPage page_title={'Pedidos'} />
      <C.ContentPage>
        {orders?.map((order, key) => (
          <CardOrder purchase={order} key={key} />
        ))}
      </C.ContentPage>
      <Footer />
    </Container>
  );
};

export default PurchaseOrders;
