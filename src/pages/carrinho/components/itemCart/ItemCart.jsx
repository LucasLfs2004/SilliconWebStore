import { useDispatch } from 'react-redux';
import {
  decrementAmountProduct,
  incrementAmountProduct,
  removeProduct,
} from '../../../../store/actions/cartActions';
import * as C from './styles';

const ItemCart = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <C.ItemCart>
      <C.ImgProduct src={item?.product?.image[0]}></C.ImgProduct>
      <C.Infos>
        <p>{item?.product?.name}</p>
        <C.Row>
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
              <img src='/assets/icons/trash.svg' alt='' />
            </C.ButtonDelete>
          </C.Buttons>
        </C.Row>
      </C.Infos>
    </C.ItemCart>
  );
};

export default ItemCart;
