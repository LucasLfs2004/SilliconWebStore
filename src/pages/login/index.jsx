import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import BtnSubmit from '../../components/BtnSubmit';
import { effectLogin } from '../../services/Requests';
import { LoginZod } from './login';
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
const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: zodResolver(LoginZod),
  });
  const handleEffectLogin = async data => {
    try {
      const login = {
        email: data.email,
        pass: data.password,
      };

      const response = await effectLogin(login.email, login.pass);
      console.log(response);
      console.log(response.user_data);
      localStorage.setItem('user', JSON.stringify(response.user_data));
      localStorage.setItem('token', response.user_token);
      window.history.back();
    } catch (error) {
      alert('Erro, não foi possível realizar o login');
      console.log(error);
    }
  };

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
