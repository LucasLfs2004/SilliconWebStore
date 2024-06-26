// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import {
  ContainerModal,
  FormInput,
  ModalWhite,
} from '../../../../CommomStyles';
import { api_path } from '../../../../constants/api_path';
// import { offerZod } from '../../useMyStore';
import { parseRealCurrency } from '../../../../functions/realCurrency';
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
    if (value < commonPrice) {
      setNewPrice(value);
      setErrors('');
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
        <C.InfoProduct>
          <C.ImgProduct>
            {product?.images?.length > 0 && (
              <img
                src={`${api_path}/image/product/${product?.images[0]}`}
                alt=''
              />
            )}
          </C.ImgProduct>
          <C.Box className='column'>
            <C.NameProduct>{product?.name}</C.NameProduct>
            <C.Price>
              Preço original:{' '}
              <span>{parseRealCurrency(product?.value?.common_price)}</span>
            </C.Price>
            {product?.value?.price_now && (
              <C.Price>
                Preço atual:{' '}
                <span>{parseRealCurrency(product?.value?.price_now)}</span>
              </C.Price>
            )}
          </C.Box>
        </C.InfoProduct>
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
          <C.Box>
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
              />
              <p>{errors}</p>
            </FormInput>
          </C.Box>
          <C.Box className='between'>
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
          </C.Box>
        </C.Form>
      </ModalWhite>
    </ContainerModal>
  );
};

export default OfferModal;
