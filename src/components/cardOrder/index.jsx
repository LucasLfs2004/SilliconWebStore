import moment from 'moment';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { api_path } from '../../constants/api_path';
import { parseRealCurrency } from '../../functions/realCurrency';
import * as C from './styles';

const CardOrder = ({ purchase, hideDetail }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/profile/order/${purchase.id_order}`);
  };

  console.log(purchase);

  return (
    <C.NeumorphismCard>
      {!hideDetail && (
        <C.Row className='between mobile-column'>
          <C.Row className='gap' gap={12}>
            <img className='cart' src='/assets/icons/orderIcon.svg' alt='' />
            <h3>
              <span>Pedido: </span>
              {`${purchase?.id_order} - 
                  ${moment(purchase?.order_date).format('DD/MM/YYYY')}`}
            </h3>
          </C.Row>
          <C.BtnDetails onClick={() => handleNavigate()}>DETALHES</C.BtnDetails>
        </C.Row>
      )}
      <C.ContentOrder className={`${hideDetail && 'without-border-top'}`}>
        {!hideDetail && (
          <C.Row className='between mobile-column'>
            {purchase?.payment_method === 'pix' && (
              <C.PayMethod className='gap' gap={16}>
                <img src='/assets/icons/pixBlue.svg' alt='' />
                <p>Pagamento via PIX</p>
              </C.PayMethod>
            )}
            {purchase?.payment_method === 'credit-card' && (
              <C.PayMethod className='gap' gap={16}>
                <img src='/assets/icons/creditCardBlue.svg' alt='' />
                <p>Pagamento via Cartão de Crédito</p>
              </C.PayMethod>
            )}
            {purchase?.payment_method === 'boleto' && (
              <C.PayMethod className='gap' gap={16}>
                <img src='/assets/icons/boletoBlue.svg' alt='' />
                <p>Pagamento via Boleto Bancário</p>
              </C.PayMethod>
            )}
            {purchase?.status_order === 'completed' && (
              <C.StatusOrder className='green'>Pedido concluído</C.StatusOrder>
            )}
            {purchase?.status_order === 'processing' && (
              <C.StatusOrder className='yellow'>
                Pedido em processo
              </C.StatusOrder>
            )}
            {purchase?.status_order === 'canceled' && (
              <C.StatusOrder className='red'>Pedido cancelado</C.StatusOrder>
            )}
          </C.Row>
        )}
        {purchase?.items?.map((product, key) => (
          <C.productOrderArea key={key}>
            <C.TopContentCard>
              <span>Vendido e entregue por {product?.store_name}</span>
              <C.BtnCommentProduct>
                <Link
                  to={`/profile/rate-product/${product?.id_product}/${product?.id_order_item}`}
                >
                  Avaliar
                </Link>
              </C.BtnCommentProduct>
            </C.TopContentCard>
            <Link className='img-area' to={`/product/${product.id_product}`}>
              <img
                src={`${api_path}/image/product/${product?.images[0]}`}
                alt=''
              />
            </Link>
            <C.DataOrderItem>
              <div className='row'>
                <span>Vendido e entregue por {product?.store_name}</span>
                <C.BtnCommentProduct>
                  <Link
                    to={`/profile/rate-product/${product?.id_product}/${product?.id_order_item}`}
                  >
                    Avaliar
                  </Link>
                </C.BtnCommentProduct>
              </div>
              <Link to={`/product/${product.id_product}`}>
                <p>{product?.name}</p>
              </Link>
              <div className='row'>
                <p>Quantidade: {product?.quantity}</p>
                <p>{parseRealCurrency(product?.price)}</p>
              </div>
            </C.DataOrderItem>
          </C.productOrderArea>
        ))}
      </C.ContentOrder>
    </C.NeumorphismCard>
  );
};

export default CardOrder;
