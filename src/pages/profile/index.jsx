import moment from 'moment';
import { Container } from '../../CommomStyles';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { api_path } from '../../constants/api_path';
import { parseRealCurrency } from '../../functions/realCurrency';
import ModalProfile from './modal/editProfile';
import ModalShip from './modal/ship';
import ModalViewShip from './modal/viewShip';
import * as C from './styles';
import { useProfile } from './useProfile';

const Profile = () => {
  const {
    profile,
    principalShip,
    modalViewShipVisible,
    setModalViewShipVisible,
    modalShipVisible,
    setModalShipVisible,
    modalProfile,
    setModalProfile,
    handlePrincipalShip,
    submitForm,
    checkedPrincipalShip,
    setCheckedPrincipalShip,
    setShipEditObject,
    shipEditObject,
  } = useProfile();

  console.log('profile: ', profile);
  console.log('Principal endereço de entrega', principalShip);

  return (
    <Container className='dark'>
      <Header />
      <C.ContentPage>
        <C.Title>Minha conta</C.Title>
        <C.DisplayCards>
          <C.NeumorphismCard>
            <C.UserInfos>
              <C.Row className='between'>
                <C.Row className='gap' gap={12}>
                  <img src='/assets/icons/userIcon.svg' alt='' />
                  <h3>{profile?.name}</h3>
                </C.Row>
                <C.BtnEdit onClick={() => setModalProfile(true)}>
                  <img src='/assets/icons/editIconPurple.svg' alt='' />
                </C.BtnEdit>
              </C.Row>
              <C.Row className='gap' gap={16}>
                <img
                  className='common-width'
                  src='/assets/icons/emailIcon.svg'
                  alt=''
                />
                <p className='email'>{profile?.email}</p>
              </C.Row>
              <C.Row className='gap' gap={16}>
                <img
                  className='common-width'
                  src='/assets/icons/identityIcon.svg'
                  alt=''
                />
                <p className='email'>{profile?.cpf}</p>
              </C.Row>
              <C.Row className='gap' gap={16}>
                <img
                  className='common-width'
                  src='/assets/icons/commonCalendar.svg'
                  alt=''
                />
                <p className='email'>{profile?.birthday}</p>
              </C.Row>
            </C.UserInfos>
          </C.NeumorphismCard>
          <C.NeumorphismCard className='gap' gap={4}>
            <C.Row className='between'>
              <C.Row className='gap' gap={12}>
                <img src='/assets/icons/locationIconCyan.svg' alt='' />
                <h3>Endereços</h3>
              </C.Row>
              <C.Row className='gap' gap={18}>
                <C.BtnAdd onClick={() => setModalShipVisible(true)}>
                  <img src='/assets/icons/addIcon.svg' alt='' />
                </C.BtnAdd>
                <C.BtnEdit onClick={() => setModalViewShipVisible(true)}>
                  <img src='/assets/icons/editIconPurple.svg' alt='' />
                </C.BtnEdit>
              </C.Row>
            </C.Row>
            <C.Row className='mt' mt={6}>
              <C.TextBorderBottom>{principalShip.ship_name}</C.TextBorderBottom>
            </C.Row>
            <C.Row className='between'>
              <C.ParagraphShip>{principalShip.receiver_name}</C.ParagraphShip>
              <C.ParagraphShip>{principalShip.cep}</C.ParagraphShip>
            </C.Row>
            <C.Row>
              <C.ParagraphShip>
                {principalShip.street}, {principalShip.ship_number}
              </C.ParagraphShip>
            </C.Row>
            <C.Row>
              <C.ParagraphShip>{principalShip.district}</C.ParagraphShip>
            </C.Row>
          </C.NeumorphismCard>
        </C.DisplayCards>

        <C.DisplayCards>
          <C.NeumorphismCard className='full'>
            <C.Row className='between'>
              <C.Row className='gap' gap={12}>
                <img
                  className='cart'
                  src='/assets/icons/carrinho-gradient.svg'
                  alt=''
                />
                <h3>
                  {`Resumo do seu último pedido - 
                  ${moment(profile?.last_order?.order_date).format(
                    'DD/MM/YYYY',
                  )}`}
                </h3>
              </C.Row>
              <C.BtnDetails>DETALHES</C.BtnDetails>
            </C.Row>
            <C.Row style={{ marginLeft: '44px' }}>
              <p>{profile?.last_order?.id_order}</p>
            </C.Row>
            <C.ContentOrder>
              <C.Row className='between'>
                {profile?.last_order?.payment_method === 'pix' && (
                  <C.PayMethod className='gap' gap={16}>
                    <img src='/assets/icons/pixBlue.svg' alt='' />
                    <p>Pagamento via PIX</p>
                  </C.PayMethod>
                )}
                {profile?.last_order?.payment_method === 'credit-card' && (
                  <C.PayMethod className='gap' gap={16}>
                    <img src='/assets/icons/creditCardBlue.svg' alt='' />
                    <p>Pagamento via Cartão de Crédito</p>
                  </C.PayMethod>
                )}
                {profile?.last_order?.payment_method === 'boleto' && (
                  <C.PayMethod className='gap' gap={16}>
                    <img src='/assets/icons/boletoBlue.svg' alt='' />
                    <p>Pagamento via Boleto Bancário</p>
                  </C.PayMethod>
                )}
                {profile?.last_order?.status_order === 'completed' && (
                  <C.StatusOrder className='green'>
                    Pedido concluído
                  </C.StatusOrder>
                )}
                {profile?.last_order?.status_order === 'processing' && (
                  <C.StatusOrder className='yellow'>
                    Pedido em processo
                  </C.StatusOrder>
                )}
                {profile?.last_order?.status_order === 'canceled' && (
                  <C.StatusOrder className='red'>
                    Pedido cancelado
                  </C.StatusOrder>
                )}
              </C.Row>
              {profile?.last_order?.items?.map((product, key) => (
                <C.productOrderArea key={key}>
                  <div className='img-area'>
                    <img
                      src={`${api_path}/image/product/${product?.images[0]}`}
                      alt=''
                    />
                  </div>
                  <C.DataOrderItem>
                    <span>Vendido e entregue por {product?.store_name}</span>
                    <p>{product?.name}</p>
                    <div className='row'>
                      <p>Quantidade: {product?.quantity}</p>
                      <p>{parseRealCurrency(product?.price)}</p>
                    </div>
                  </C.DataOrderItem>
                </C.productOrderArea>
              ))}
            </C.ContentOrder>
          </C.NeumorphismCard>
        </C.DisplayCards>

        <ModalViewShip
          profile={profile}
          visible={modalViewShipVisible}
          modalVisible={setModalViewShipVisible}
          principalShip={principalShip}
          handlePrincipalShip={handlePrincipalShip}
          addShip={() => {
            setModalViewShipVisible(false);
            setModalShipVisible(true);
          }}
          editShip={ship => {
            setShipEditObject(ship);
            setModalViewShipVisible(false);
            setModalShipVisible(true);
          }}
        />
        <ModalShip
          visible={modalShipVisible}
          closeModal={() => {
            setModalShipVisible(false);
            setShipEditObject(undefined);
          }}
          submitForm={submitForm}
          checked={checkedPrincipalShip}
          setChecked={setCheckedPrincipalShip}
          editObj={shipEditObject}
        />
        <ModalProfile
          visible={modalProfile}
          closeModal={() => setModalProfile(false)}
          profile={profile}
        />
      </C.ContentPage>

      <Footer />
    </Container>
  );
};

export default Profile;
