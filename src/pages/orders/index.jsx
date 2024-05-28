import { Container } from '../../CommomStyles';
import Footer from '../../components/Footer';
import HeaderPage from '../../components/HeaderAlternative';
import useOrders from './useOrders';

const PurchaseOrders = () => {
  const { orders } = useOrders();

  console.log(orders);

  return (
    <Container>
      <HeaderPage page_title={'Pedidos'} />
      <Footer />
    </Container>
  );
};

export default PurchaseOrders;
