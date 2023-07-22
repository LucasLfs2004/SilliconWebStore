import { zodResolver } from '@hookform/resolvers/zod';
import moment from 'moment';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';
import BtnSubmit from '../../components/BtnSubmit';
import { createAccount } from '../../services/Requests';
import { CreateAccountZod } from './createAccount';
import * as C from './styles';

const CreateAccount = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: zodResolver(CreateAccountZod),
  });

  // const handleCreateAccount = async e => {
  //   e.preventDefault();

  //   console.log('HandleCreateAccount');
  //   try {
  //     const data = moment(birth, 'DD/MM/YYYY', true).format('YYYY-MM-DD');
  //     const dados = await createAccount(nome, cpf, email, data, phone, pass);
  //     console.log(dados);
  //     alert('Conta criada com sucesso');

  //     setNome('');
  //     setCpf('');
  //     setPhone('');
  //     setEmail('');
  //     setBirth('');
  //     setPass('');
  //     setConfirmPass('');
  //   } catch (error) {
  //     console.log(error.response.data);
  //     alert('Não foi possível criar sua conta');
  //   }
  // };

  const handleCreateAccount = async data => {
    console.log('HandleCreateAccount');
    try {
      const user = {
        nome: data.name,
        cpf: data.cpf,
        phone: data.phone,
        email: data.email,
        birth: data.birth,
        pass: data.password,
      };
      const dataFormata = moment(user.birth, 'DD/MM/YYYY', true).format(
        'YYYY-MM-DD',
      );
      const dados = await createAccount(
        user.nome,
        user.cpf,
        user.email,
        dataFormata,
        user.phone,
        user.pass,
      );
      console.log(dados);
      alert('Conta criada com sucesso');
    } catch (error) {
      console.log(error.response.data);
      alert('Não foi possível criar sua conta');
    }
  };

  return (
    <C.Container>
      <C.Header>
        <img src='/assets/imgs/logo-horizontal.svg' alt='' />
      </C.Header>
      <C.Section>
        <div className='top'>
          <img src='/assets/imgs/vga.svg' alt='' />
          <C.Title className='title'>Criar conta</C.Title>
        </div>
        <C.Form onSubmit={handleSubmit(handleCreateAccount)}>
          <C.FormInput>
            <label>nome</label>
            <input type='text' placeholder={'nome'} {...register('name')} />
            <p>{errors?.name?.message}</p>
          </C.FormInput>
          <C.FormInput>
            <label>cpf</label>
            <InputMask
              mask='999.999.999-99'
              type='text'
              placeholder={'cpf'}
              {...register('cpf')}
            />
            <p>{errors?.cpf?.message}</p>
          </C.FormInput>
          <C.FormInput>
            <label>telefone</label>
            <InputMask
              mask='(99) 99999-9999'
              type='text'
              placeholder={'telefone'}
              {...register('phone')}
            />
            <p>{errors?.phone?.message}</p>
          </C.FormInput>
          <C.FormInput>
            <label>email</label>
            <input type='text' placeholder={'email'} {...register('email')} />
            <p>{errors?.email?.message}</p>
          </C.FormInput>
          <C.FormInput>
            <label>data de nascimento</label>
            <InputMask
              mask='99/99/9999'
              type='text'
              placeholder={'data de nascimento'}
              {...register('birth')}
            />
            <p>{errors?.birth?.message}</p>
          </C.FormInput>
          <C.FormInput>
            <label>senha</label>
            <input
              {...register('password')}
              type='text'
              placeholder={'senha'}
            />
            <p>{errors?.password?.message}</p>
          </C.FormInput>
          <C.FormInput>
            <label>confirmar senha</label>
            <input
              {...register('confirm_password')}
              type='text'
              placeholder={'confirmar senha'}
            />
            <p>{errors?.confirm_password?.message}</p>
          </C.FormInput>
          <BtnSubmit
            text={'Criar conta'}
            onClick={e => handleCreateAccount(e)}
          />
        </C.Form>
        <C.Message>
          Já tem conta? <Link to={'/'}> entrar</Link>
        </C.Message>
      </C.Section>
      <C.Footer>
        <p>SILLICON STORE - VAREJO DE PRODUTOS DE INFORMÁTICA LTDA</p>
        <Link to={'/'}>TERMOS E PRIVACIDADE</Link>
      </C.Footer>
    </C.Container>
  );
};

export default CreateAccount;
