import { Container } from '../../CommomStyles';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as C from './styles';
import { useProfile } from './useProfile';

const Profile = () => {
  const { profile } = useProfile();

  return (
    <Container>
      <Header />
      <C.ContentPage>
        <C.Title>Minha conta</C.Title>
        <C.NeumorphismCard>
          <C.UserInfos>
            <C.Row className='between'>
              <C.Row className='gap' gap={12}>
                <img src='/assets/icons/userIconPurple.svg' alt='' />
                <h3>{profile?.name}</h3>
              </C.Row>
              <C.BtnEdit>
                <img src='/assets/icons/editIconPurple.svg' alt='' />
              </C.BtnEdit>
            </C.Row>
            <C.Row className='gap' gap={6}>
              <img
                className='common-width'
                src='/assets/icons/emailIcon.svg'
                alt=''
              />
              <p className='email'>{profile?.email}</p>
            </C.Row>
            <C.Row className='gap' gap={6}>
              <img
                className='common-width'
                src='/assets/icons/identityIcon.svg'
                alt=''
              />
              <p className='email'>{profile?.cpf}</p>
            </C.Row>
            <C.Row className='gap' gap={6}>
              <img
                className='common-width'
                src={`/assets/icons/calendar/calendar_${
                  profile?.birthday.split('/')[0]
                }.svg`}
                alt=''
              />
              <p className='email'>{profile?.birthday}</p>
            </C.Row>
          </C.UserInfos>
        </C.NeumorphismCard>
      </C.ContentPage>

      <Footer />
    </Container>
  );
};

export default Profile;
