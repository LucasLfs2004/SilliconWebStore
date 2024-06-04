import * as C from './styles';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { getCep } from '../../../../services/Requests';
// import useShip from './useShip';
import { shipZod } from '../../useProfile';

const ModalShip = ({
  submitForm,
  visible,
  closeModal,
  checked,
  setChecked,
  editObj,
}) => {
  // const { shipZod } = useShip();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: zodResolver(shipZod),
  });

  const handleCepChange = async event => {
    const cep = event.target.value;

    if (cep.replaceAll('-', '').length === 8) {
      const dadosDoCep = await getCep(cep);
      const dataRegister = {
        street: dadosDoCep.logradouro,
        state: dadosDoCep.uf,
        city: dadosDoCep.localidade,
        district: dadosDoCep.bairro,
      };
      Object.keys(dataRegister).forEach(campo => {
        if (!register(campo)) return; // Garante que o campo está registrado no formulário
        if (!register(campo).value) setValue(campo, dataRegister[campo]);
      });
    }
  };

  const setEditValues = () => {
    console.log(editObj);
    const dataRegister = {
      cep:
        editObj !== undefined && editObj?.cep && editObj.cep !== undefined
          ? editObj.cep
          : '',
      city: editObj?.city,
      complement: editObj?.complement,
      district: editObj?.district,
      street: editObj?.street,
      phone_number:
        editObj !== undefined &&
        editObj?.phone_number &&
        editObj?.phone_number !== undefined
          ? editObj.phone_number
          : '',
      receiver: editObj?.receiver_name,
      name: editObj?.ship_name,
      number: editObj?.ship_number,
      state: editObj?.state,
    };

    Object.keys(dataRegister).forEach(campo => {
      if (!register(campo)) return; // Garante que o campo está registrado no formulário
      if (!register(campo).value) setValue(campo, dataRegister[campo]);
    });
  };

  useEffect(() => {
    console.log('VALUE OF EDITOBJ: ', editObj);
    setEditValues();
  }, [editObj]);

  useEffect(() => {
    console.log(register.cep);
  }, [register]);

  return (
    <C.Container>
      <C.Modal visible={visible ? 'flex' : 'none'}>
        <C.Row>
          <C.Title>Adicionar endereço</C.Title>
          <C.Btn onClick={closeModal}>
            <img src='/assets/icons/closeIconCyan.svg' alt='' />
          </C.Btn>
        </C.Row>
        <C.Form onSubmit={handleSubmit(submitForm)}>
          <C.Box>
            <C.FormInput>
              <label htmlFor='name'>Nome</label>
              <input
                name='name'
                type='text'
                placeholder='Nome'
                {...register('name')}
              />
              <p>{errors?.name?.message}</p>
            </C.FormInput>
            <C.FormInput>
              <label htmlFor='destinatario'>Destinatário</label>
              <input
                name='destinatario'
                type='text'
                placeholder='Destinatário'
                {...register('receiver')}
              />
              <p>{errors?.receiver?.message}</p>
            </C.FormInput>
          </C.Box>
          <C.Box>
            <C.FormInput>
              <label htmlFor='telefone'>Telefone</label>
              <input
                name='telefone'
                type='text'
                placeholder='Telefone'
                {...register('phone_number')}
              />
              <p>{errors?.phone_number?.message}</p>
            </C.FormInput>
            <C.FormInput>
              <label htmlFor='cep'>CEP</label>
              <input
                name='cep'
                type='text'
                placeholder='CEP'
                {...register('cep')}
                onChange={e => handleCepChange(e)}
              />
              <p>{errors?.cep?.message}</p>
            </C.FormInput>
          </C.Box>
          <C.Box></C.Box>
          <C.Box className='row'>
            <C.FormInput className='width' widthp={65}>
              <label htmlFor='street'>Rua</label>
              <input
                name='street'
                type='text'
                placeholder='Rua'
                {...register('street')}
              />
              <p>{errors?.street?.message}</p>
            </C.FormInput>
            <C.FormInput className='width' widthp={30}>
              <label htmlFor='numero'>Numero</label>
              <input
                name='numero'
                type='number'
                placeholder='Número'
                {...register('number', { valueAsNumber: true })}
              />
              <p>{errors?.number?.message}</p>
            </C.FormInput>
          </C.Box>
          <C.Box></C.Box>
          <C.Box>
            <C.FormInput>
              <label htmlFor='bairro'>Bairro</label>
              <input
                name='bairro'
                type='text'
                placeholder='Bairro'
                {...register('district')}
              />
              <p>{errors?.district?.message}</p>
            </C.FormInput>
            <C.Box className='row'>
              <C.FormInput className='width' widthp={70}>
                <label htmlFor='cidade'>Cidade</label>
                <input
                  name='cidade'
                  type='text'
                  placeholder='Cidade'
                  {...register('city')}
                />
                <p>{errors?.city?.message}</p>
              </C.FormInput>
              <C.FormInput className='width' widthp={25}>
                <label htmlFor='estado'>Estado</label>
                <input
                  name='estado'
                  type='text'
                  placeholder='Estado'
                  {...register('state')}
                />
                <p>{errors?.state?.message}</p>
              </C.FormInput>
            </C.Box>
          </C.Box>
          <C.Box>
            <C.FormInput>
              <label htmlFor='complemento'>Complemento</label>
              <input
                name='complemento'
                type='text'
                placeholder='Complemento'
                {...register('complement')}
              />
              <p>{errors?.complement?.message}</p>
            </C.FormInput>
          </C.Box>
          <C.Box>
            <C.Checkbox>
              <label className='container'>
                {' '}
                <p>Endereço Principal</p>
                <input
                  type='checkbox'
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
                <div className='checkmark'></div>
              </label>
            </C.Checkbox>
          </C.Box>
          <C.BtnSubmit onClick={() => console.log('CLIQUEI')} type='submit'>
            Adicionar
          </C.BtnSubmit>
        </C.Form>
      </C.Modal>
    </C.Container>
  );
};

export default ModalShip;
