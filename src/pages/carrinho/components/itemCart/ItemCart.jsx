import { useDispatch } from 'react-redux';
import {
  decrementAmountProduct,
  incrementAmountProduct,
  removeProduct,
} from '../../../../store/actions/cartActions';
import * as C from './styles';
import { useItemCart } from './useItemCart';

const ItemCart = ({ item }) => {
  const dispatch = useDispatch();

  const { inCredit, inCash, portions } = useItemCart(item);
  console.log(inCredit);

  return (
    <C.ItemCart>
      <C.ImgProduct src={item?.product?.image[0]}></C.ImgProduct>
      <C.Infos>
        <C.BoxInfos>
          <p className='grey'>{item?.product?.brand}</p>
          <p>{item?.product?.name}</p>
          <p className='grey font-mini'>
            Valor no pix: <strong>{inCash}</strong>
          </p>
          <p className='grey font-mini'>
            {`Em até ${portions}x de `}
            <strong>{inCredit}</strong>
          </p>
        </C.BoxInfos>
        <C.Box>
          <C.Price>
            <p>Preço à vista no pix</p>
            <p className='purple'>
              {item?.product?.value?.priceNow.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
              })}
            </p>
          </C.Price>
          <C.Buttons>
            <C.BtnQuantidade>
              <p>quant...</p>
              <button
                onClick={() =>
                  dispatch(decrementAmountProduct(item.product.id))
                }
              >
                <img src='/assets/icons/arrowLeftIcon.svg' alt='' />
              </button>
              <p>{item.amount}</p>
              <button
                onClick={() =>
                  dispatch(incrementAmountProduct(item.product.id))
                }
              >
                <img src='/assets/icons/arrowRightIcon.svg' alt='' />
              </button>
            </C.BtnQuantidade>
            <C.ButtonDelete
              onClick={() => dispatch(removeProduct(item.product.id))}
            >
              <p>Remover</p>
              <img src='/assets/icons/trash.svg' alt='' />
            </C.ButtonDelete>
          </C.Buttons>
        </C.Box>
      </C.Infos>
    </C.ItemCart>
  );
};

export default ItemCart;
