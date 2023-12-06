import { Container } from '../../CommomStyles';
import Footer from '../../components/Footer';
import HeaderPage from '../../components/HeaderAlternative';
import PurchaseResume from './components/PurchaseResume';
import PaymentCard from './components/paymentCard';
import ShipComponent from './components/ship';
import * as C from './styles';

const Payment = () => {
  // const payment = useSelector(state => state.payment);
  // const dispatch = useDispatch();
  return (
    <Container>
      <HeaderPage
        img_path={'/assets/icons/carrinho-gradient.svg'}
        page_title={'Pagamento'}
      />
      <C.ContentPage>
        <C.Box className='left-side'>
          <C.Title className='only-mobile'>Endereço de entrega</C.Title>
          <ShipComponent />
          <C.Title className='only-mobile'>Forma de Pagamento</C.Title>
          <PaymentCard />
        </C.Box>
        <C.Box className='right-side'>
          <PurchaseResume />
          {/* <C.ButtonsPayment>
            <C.ButtonNavigation>Finalizar pagamento</C.ButtonNavigation>
            <C.ButtonNavigation className='transparent'>
              Voltar
            </C.ButtonNavigation>
          </C.ButtonsPayment> */}
        </C.Box>
      </C.ContentPage>
      <Footer />
    </Container>
  );
};

export default Payment;
