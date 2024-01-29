import { useDispatch } from 'react-redux';
import { api_path } from '../../../../constants/api_path';
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
      <C.ImgProduct
        src={`${api_path}/image/product/${item?.images[0]}`}
      ></C.ImgProduct>
      <C.Infos>
        <C.BoxInfos>
          <p className='grey'>{item?.brand}</p>
          <p>{item?.name}</p>
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
            <p className='purple'>{inCash}</p>
          </C.Price>
          <C.Buttons>
            <C.BtnQuantidade>
              <p>quant.</p>
              <div className='row'>
                <button
                  onClick={() => dispatch(decrementAmountProduct(item.id))}
                >
                  <img src='/assets/icons/arrowLeftIcon.svg' alt='' />
                </button>
                <p>{item.amount}</p>
                <button
                  onClick={() => dispatch(incrementAmountProduct(item.id))}
                >
                  <img src='/assets/icons/arrowRightIcon.svg' alt='' />
                </button>
              </div>
            </C.BtnQuantidade>
            <C.ButtonDelete onClick={() => dispatch(removeProduct(item.id))}>
              <p>Remover</p>
              <div>
                <img src='/assets/icons/trash.svg' alt='' />
              </div>
            </C.ButtonDelete>
          </C.Buttons>
        </C.Box>
      </C.Infos>
    </C.ItemCart>
  );
};

export default ItemCart;
