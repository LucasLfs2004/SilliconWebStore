// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import {
  ContainerModal,
  FormInput,
  ModalWhite,
} from '../../../../CommomStyles';
import { api_path } from '../../../../constants/api_path';
import { ImgProduct } from '../../styles';
// import { offerZod } from '../../useMyStore';
import * as C from './styles';

const OfferModal = ({ visible, closeModal, product, setOffer }) => {
  const [commonPrice, setCommonPrice] = useState(product?.value?.common_price);
  const [newPrice, setNewPrice] = useState(
    product?.value?.price_now || product?.value?.common_price,
  );
  const [errors, setErrors] = useState('');

  useEffect(() => {
    setCommonPrice(product?.value?.common_price);
    setNewPrice(product?.value?.price_now || product?.value?.common_price);
  }, [product]);

  const handleChangeNewPrice = value => {
    console.log(value);
    if (value < commonPrice) {
      setNewPrice(value);
      setErrors('');

      // setCommonPrice(value);
    } else {
      setErrors('O valor da oferta não pode ser maior que o valor atual.');
    }
  };

  return (
    <ContainerModal visible={visible ? 'flex' : 'none'} pt={'128px'}>
      <ModalWhite width={'500px'} height={'min-content'} padding={'24px 18px'}>
        <C.Box className='relative full justify-center'>
          <C.BtnClose type='button' onClick={closeModal}>
            Cancelar
          </C.BtnClose>
          <C.Title>Promoção</C.Title>
        </C.Box>
        <C.Box>
          <ImgProduct>
            <img
              src={`${api_path}/image/product/${product?.images[0]}`}
              alt=''
            />
          </ImgProduct>
          <C.Box className='column'>
            <C.NameProduct>{product?.name}</C.NameProduct>
            <C.Price>
              Preço original:{' '}
              <span>
                {product?.value?.common_price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 2,
                })}
              </span>
            </C.Price>
            {product?.value?.price_now && (
              <C.Price>
                Preço atual:{' '}
                <span>
                  {product?.value?.price_now.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                  })}
                </span>
              </C.Price>
            )}
          </C.Box>
        </C.Box>
        <C.Box className='column full'>
          {newPrice > 0 && (
            <C.Price>
              Desconto:{' '}
              <span>
                {(parseInt((newPrice * 100) / commonPrice) - 100) * -1}%
              </span>
            </C.Price>
          )}
        </C.Box>
        <C.Form
          onSubmit={e => {
            e.preventDefault();
            e.stopPropagation();
            setOffer({ id_product: product.id, new_price: newPrice });
            closeModal();
          }}
        >
          <FormInput className='flex'>
            <label htmlFor='price-original'>preço atual</label>
            <input
              disabled
              name='price-original'
              id='price-original'
              type='number'
              placeholder='preço atual'
              value={commonPrice}
              min={0}
              onChange={e => setCommonPrice(e.target.value)}
              // {...register('commonPrice', { valueAsNumber: true })}
            />
            <p></p>
          </FormInput>
          <FormInput className='flex'>
            <label htmlFor='price-new'>valor da oferta</label>
            <input
              name='price-new'
              id='price-new'
              type='number'
              placeholder='valor da oferta'
              min={0}
              max={commonPrice + 0.1}
              step={0.01}
              value={newPrice}
              onChange={e => handleChangeNewPrice(parseFloat(e.target.value))}
              // {...register('newPrice', { valueAsNumber: true })}
            />
            <p>{errors}</p>
          </FormInput>
          <C.BtnConfirm
            type='button'
            className='red'
            onClick={() => {
              setOffer({ id_product: product.id, new_price: null });
            }}
          >
            Remover Oferta
          </C.BtnConfirm>
          <C.BtnConfirm type='submit'>Confirmar</C.BtnConfirm>
        </C.Form>
      </ModalWhite>
    </ContainerModal>
  );
};

export default OfferModal;
