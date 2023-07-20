import { useState } from 'react';
import { Link } from 'react-router-dom';
import BtnSubmit from '../../components/BtnSubmit';
import FormInput from '../../components/FormInput';
import { createAccount } from '../../services/Requests';
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
  const [birth, setBirth] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const handleSetCpf = (event: any) => {
    const { value } = event.target;
    const numbersOnly = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    const maskedCpf = numbersOnly.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      '$1.$2.$3-$4',
    ); // Aplica a máscara de CPF
    console.log(maskedCpf);
    setCpf(maskedCpf);
  };

  const handleCreateAccount = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const dados = await createAccount(nome, cpf, email, birth, phone, pass);
      console.log(dados);
      alert('Conta criada com sucesso');

      setNome('');
      setCpf('');
      setPhone('');
      setEmail('');
      setBirth('');
      setPass('');
      setConfirmPass('');
    } catch (error) {
      console.log(error);
      alert('Erro ao criar conta. por favor, tente novamente.');
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
            onChange={(e: string) => handleSetCpf(e)}
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
            label={'data de nascimento'}
            value={birth}
            onChange={(e: string) => setBirth(e)}
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
          <BtnSubmit
            text={'Criar conta'}
            onClick={e => handleCreateAccount(e)}
          />
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
