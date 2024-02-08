import { Container } from '../../CommomStyles';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as C from './styles';
import { useProfile } from './useProfile';

const Profile = () => {
  const { profile, principalShip } = useProfile();

  console.log('profile: ', profile);
  console.log('Principal endereço de entrega', principalShip);

  return (
    <Container>
      <Header />
      <C.ContentPage>
        <C.Title>Minha conta</C.Title>
        <C.NeumorphismCard>
          <C.UserInfos>
            <C.Row className='between'>
              <C.Row className='gap' gap={12}>
                <img src='/assets/icons/userIcon.svg' alt='' />
                <h3>{profile?.name}</h3>
              </C.Row>
              <C.BtnEdit>
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
                // src={`/assets/icons/calendar/calendar_${
                //   profile?.birthday.split('/')[0]
                // }.svg`}
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
              <C.BtnAdd>
                <img src='/assets/icons/addIcon.svg' alt='' />
              </C.BtnAdd>
              <C.BtnEdit>
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
      </C.ContentPage>

      <Footer />
    </Container>
  );
};

export default Profile;
