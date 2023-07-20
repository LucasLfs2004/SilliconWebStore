import { useState } from 'react';
import { Link } from 'react-router-dom';
import BtnSubmit from '../../components/BtnSubmit';
import FormInput from '../../components/FormInput';
import {
  Container,
  Footer,
  Form,
  Header,
  Message,
  Section,
  Title,
} from './styles';
const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <Container>
      <Header>
        <img src='/assets/imgs/logo-horizontal.svg' alt='' />
      </Header>
      <Section>
        <div className='top'>
          <img src='/assets/imgs/vga.svg' alt='' />
          <Title className='title'>Login</Title>
        </div>

        <Form>
          <FormInput
            label={'email'}
            value={email}
            onChange={(e: string) => setEmail(e)}
          />
          <FormInput
            label={'senha'}
            value={pass}
            onChange={(e: string) => setPass(e)}
          />
          <BtnSubmit text={'Entrar'} />
        </Form>
        <Message>
          Não tem conta?
          <Link to={'/create-account'}> clique aqui!</Link>
        </Message>
        <Message>
          Esqueci minha
          <Link to={'/'}> senha</Link>
        </Message>
      </Section>
      <Footer>
        <p>SILLICON STORE - VAREJO DE PRODUTOS DE INFORMÁTICA LTDA</p>
        <Link to={'/'}>TERMOS E PRIVACIDADE</Link>
      </Footer>
    </Container>
  );
};

export default Login;
