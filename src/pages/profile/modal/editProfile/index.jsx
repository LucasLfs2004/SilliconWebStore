import * as C from './styles';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
// import useShip from './useShip';
import { useState } from 'react';
import InputMask from 'react-input-mask';
import { profileZod } from '../../useProfile';

const ModalProfile = ({ visible, closeModal, submitForm, profile }) => {
  const [genderSelect, setGenderSelect] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: zodResolver(profileZod),
  });
  return (
    <C.Container visible={visible ? 'flex' : 'none'}>
      <C.Modal>
        <C.Row>
          <C.Title>Editar perfil</C.Title>
          <C.Btn onClick={closeModal}>
            <img src='/assets/icons/closeIconCyan.svg' alt='' />
          </C.Btn>
        </C.Row>
        <C.Form onSubmit={handleSubmit(submitForm)}>
          <C.Box>
            <C.FormInput>
              <label htmlFor='name'>Nome Completo</label>
              <input
                name='name'
                type='text'
                placeholder='Nome'
                value={profile?.name}
                {...register('name')}
              />
              <p>{errors?.name?.message}</p>
            </C.FormInput>
            <C.FormInput>
              <label htmlFor='telefone'>Telefone</label>
              <InputMask
                name='telefone'
                type='text'
                mask={'(99) 99999-9999'}
                value={profile?.phone_number}
                placeholder='Telefone'
                {...register('phone_number')}
              />
              <p>{errors?.phone_number?.message}</p>
            </C.FormInput>
            <C.FormInput>
              <label htmlFor='birthday'>Data de Nascimento</label>
              <C.InputBlocked>
                <input
                  name='birthday'
                  type='text'
                  value={profile?.birthday}
                  disabled
                  {...register('receiver')}
                />
                <img src='/assets/icons/lock.svg' alt='' />
              </C.InputBlocked>
              <p></p>
            </C.FormInput>
            <C.FormInput>
              <label htmlFor='email'>Email</label>
              <C.InputBlocked>
                <input
                  name='email'
                  type='text'
                  value={profile?.email}
                  disabled
                  {...register('receiver')}
                />
                <img src='/assets/icons/lock.svg' alt='' />
              </C.InputBlocked>
              <p></p>
            </C.FormInput>
            <C.FormInput>
              <label htmlFor='cpf'>CPF</label>
              <C.InputBlocked>
                <input
                  name='cpf'
                  type='text'
                  value={profile?.cpf}
                  disabled
                  {...register('receiver')}
                />
                <img src='/assets/icons/lock.svg' alt='' />
              </C.InputBlocked>
              <p></p>
            </C.FormInput>
          </C.Box>
          <C.BtnSubmit type='submit'>Adicionar</C.BtnSubmit>
        </C.Form>
      </C.Modal>
    </C.Container>
  );
};

export default ModalProfile;
