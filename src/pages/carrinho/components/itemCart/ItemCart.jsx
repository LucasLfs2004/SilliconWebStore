import { useSelector } from 'react-redux';
import { api_path } from '../../../../constants/api_path';
import { useCart } from '../../useCart';
import * as C from './styles';
import { useItemCart } from './useItemCart';

const ItemCart = ({ item }) => {
  const user = useSelector(state => state.user);
  const { inCredit, inCash, portions } = useItemCart(item);
  const { updateItemCart, removeItemCart } = useCart();

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
                <button onClick={() => updateItemCart(item.amount - 1, item)}>
                  <img src='/assets/icons/arrowLeftIcon.svg' alt='' />
                </button>
                <p>{item.amount}</p>
                <button onClick={() => updateItemCart(item.amount + 1, item)}>
                  <img src='/assets/icons/arrowRightIcon.svg' alt='' />
                </button>
              </div>
            </C.BtnQuantidade>
            <C.ButtonDelete onClick={() => removeItemCart(item)}>
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
