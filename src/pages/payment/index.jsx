import { Container } from '../../CommomStyles';
import Footer from '../../components/Footer';
import HeaderPage from '../../components/HeaderAlternative';
import ModalShip from '../../modals/Ship';
import PurchaseResume from './components/PurchaseResume';
import PaymentCard from './components/paymentCard';
import ShipComponent from './components/ship';
import * as C from './styles';
import usePayment from './usePayment';

const Payment = () => {
  // const payment = useSelector(state => state.payment);
  // const dispatch = useDispatch();

  const {
    setShipIdSelected,
    modalShipVisible,
    setModalShipVisible,
    refetch,
    modalViewShipVisible,
    setModalViewShipVisible,
    submitForm,
    checkedPrincipalShip,
    setCheckedPrincipalShip,
    shipEditObject,
    principalShip,
    handlePrincipalShip,
    profile,
    setShipEditObject,
  } = usePayment();

  return (
    <Container>
      <HeaderPage
        img_path={'/assets/icons/carrinho-gradient.svg'}
        page_title={'Pagamento'}
      />
      {profile && (
        <C.ContentPage>
          <C.Box className='left-side'>
            <C.Title className='only-mobile'>Endereço de entrega</C.Title>
            <ShipComponent openModalShip={() => setModalShipVisible(true)} />
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
      )}
      <Footer />
      <ModalShip
        visible={modalShipVisible}
        closeModal={value => {
          setModalShipVisible(false);
          setShipIdSelected(value);
          refetch();
        }}
        editObj={shipEditObject}
        setEditObj={value => setShipEditObject(value)}
      />
    </Container>
  );
};

export default Payment;
