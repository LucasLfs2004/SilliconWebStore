import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';
import BtnSubmit from '../../components/BtnSubmit';
import ToastComponent from '../../components/ToastComponent';
import * as C from '../signIn/styles';
import { useSignUp } from './useSignUp';

const CreateAccount = () => {
  const {
    viewPass,
    setViewPass,
    viewPassConfirm,
    setViewPassConfirm,
    errors,
    handleCreateAccount,
    handleSubmit,
    register,
  } = useSignUp();
  return (
    <C.Container>
      <C.Header>
        <img src='/assets/imgs/logo-horizontal.svg' alt='' />
      </C.Header>
      <ToastComponent />
      <C.Section className='sign-up'>
        <div className='top'>
          <img src='/assets/imgs/vga.svg' alt='' />
          <C.Title className='title'>Criar conta</C.Title>
        </div>
        <C.Form
          className='sign-up'
          onSubmit={handleSubmit(handleCreateAccount)}
        >
          <C.InputArea className='sign-up'>
            <C.FormInput className='sign-up'>
              <label>nome</label>
              <input type='text' placeholder={'nome'} {...register('name')} />
              <p>{errors?.name?.message}</p>
            </C.FormInput>
            <C.FormInput className='sign-up'>
              <label>cpf</label>
              <InputMask
                mask='999.999.999-99'
                type='text'
                placeholder={'cpf'}
                {...register('cpf')}
              />
              <p>{errors?.cpf?.message}</p>
            </C.FormInput>
            <C.FormInput className='sign-up'>
              <label>telefone</label>
              <InputMask
                mask='(99) 99999-9999'
                type='text'
                placeholder={'telefone'}
                {...register('phone')}
              />
              <p>{errors?.phone?.message}</p>
            </C.FormInput>
            <C.FormInput className='sign-up'>
              <label>data de nascimento</label>
              <InputMask
                mask='99/99/9999'
                type='text'
                placeholder={'data de nascimento'}
                {...register('birth')}
              />
              <p>{errors?.birth?.message}</p>
            </C.FormInput>
            <C.FormInput className='sign-up'>
              <label>email</label>
              <input type='text' placeholder={'email'} {...register('email')} />
              <p>{errors?.email?.message}</p>
            </C.FormInput>
            <C.FormInput className='sign-up'>
              <label>senha</label>
              <C.InputPassword>
                <input
                  {...register('password')}
                  type={viewPass ? 'text' : 'password'}
                  placeholder={'senha'}
                />
                <button type='button' onClick={() => setViewPass(!viewPass)}>
                  <img
                    src={
                      viewPass
                        ? '/assets/icons/eyeClosedIcon.svg'
                        : '/assets/icons/eyeIcon.svg'
                    }
                    alt=''
                  />
                </button>
              </C.InputPassword>
              <p>{errors?.password?.message}</p>
            </C.FormInput>
            <C.FormInput className='sign-up'>
              <label>confirmar senha</label>
              <C.InputPassword>
                <input
                  {...register('confirm_password')}
                  type={viewPassConfirm ? 'text' : 'password'}
                  placeholder={'confirmar senha'}
                />
                <button
                  type='button'
                  onClick={() => setViewPassConfirm(!viewPassConfirm)}
                >
                  <img
                    src={
                      viewPass
                        ? '/assets/icons/eyeClosedIcon.svg'
                        : '/assets/icons/eyeIcon.svg'
                    }
                    alt=''
                  />
                </button>
              </C.InputPassword>
              <p>{errors?.confirm_password?.message}</p>
            </C.FormInput>
          </C.InputArea>
          <BtnSubmit text={'Criar conta'} />
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
