import { useDispatch, useSelector } from 'react-redux';
import { api_path } from '../../../../constants/api_path';
import { removeCartItem, updateCartItem } from '../../../../services/Requests';
import { setCart } from '../../../../store/actions/cartActions';
import * as C from './styles';
import { useItemCart } from './useItemCart';

const ItemCart = ({ item }) => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);
  const { inCredit, inCash, portions } = useItemCart(item);
  console.log(inCredit);

  const updateItemCart = async amount => {
    if (user.access_token && amount > 0) {
      const cartUpdated = await updateCartItem(user.access_token, {
        id: item.id,
        amount: amount,
      });
      dispatch(setCart(cartUpdated));
    } else {
      console.log('user not logged');
    }
  };

  const removeItemCart = async () => {
    if (user.access_token) {
      const formData = new FormData();
      formData.append('id', item.id);
      const cartUpdated = await removeCartItem(user.access_token, item.id);
      dispatch(setCart(cartUpdated));
    } else {
      console.log('user not logged');
    }
  };

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
                <button onClick={() => updateItemCart(item.amount - 1)}>
                  <img src='/assets/icons/arrowLeftIcon.svg' alt='' />
                </button>
                <p>{item.amount}</p>
                <button onClick={() => updateItemCart(item.amount + 1)}>
                  <img src='/assets/icons/arrowRightIcon.svg' alt='' />
                </button>
              </div>
            </C.BtnQuantidade>
            <C.ButtonDelete onClick={() => removeItemCart()}>
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
