import { Link } from 'react-router-dom';
import BtnSubmit from '../../components/BtnSubmit';
import {
  Container,
  Footer,
  Form,
  FormInput,
  Header,
  Message,
  Section,
  Title,
} from './styles';
import { useLogin } from './useLogin';

const Login = () => {
  const { handleEffectLogin, handleSubmit, register, errors } = useLogin();

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
        <Form onSubmit={handleSubmit(handleEffectLogin)}>
          <FormInput>
            <label>email</label>
            <input type='text' placeholder={'email'} {...register('email')} />
            <p>{errors?.email?.message}</p>
          </FormInput>
          <FormInput>
            <label>senha</label>
            <input
              type='text'
              placeholder={'senha'}
              {...register('password')}
            />
            <p>{errors?.password?.message}</p>
          </FormInput>
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
