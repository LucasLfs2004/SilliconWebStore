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

const CreateAccount: React.FC = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  return (
    <Container>
      <Header>
        <img src='/assets/imgs/logo-horizontal.svg' alt='' />
      </Header>
      <Section>
        <div className='top'>
          <img src='/assets/imgs/vga.svg' alt='' />
          <Title className='title'>Criar conta</Title>
        </div>
        <Form>
          <FormInput
            label={'nome'}
            value={nome}
            onChange={(e: string) => setNome(e)}
          />
          <FormInput
            label={'cpf'}
            value={cpf}
            onChange={(e: string) => setCpf(e)}
          />
          <FormInput
            label={'telefone'}
            value={phone}
            onChange={(e: string) => setPhone(e)}
          />
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
          <FormInput
            label={'Confirmar senha'}
            value={confirmPass}
            onChange={(e: string) => setConfirmPass(e)}
          />
          <BtnSubmit text={'Criar conta'} />
        </Form>
        <Message>
          Já tem conta? <Link to={'/'}> entrar</Link>
        </Message>
      </Section>
      <Footer>
        <p>SILLICON STORE - VAREJO DE PRODUTOS DE INFORMÁTICA LTDA</p>
        <Link to={'/'}>TERMOS E PRIVACIDADE</Link>
      </Footer>
    </Container>
  );
};

export default CreateAccount;
