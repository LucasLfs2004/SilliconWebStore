import { Link } from 'react-router-dom';
import * as C from './styles';
import { useCartResume } from './useCartResume';

const CartResume = () => {
  const { payInfos, payment, cart } = useCartResume();

  return (
    <C.CartResume>
      <C.TopBox>
        <C.Title className='margin'>Resumo</C.Title>
        <C.ResumeList>
          {cart &&
            cart.map((item, index) => (
              <C.RowP key={index}>
                <p className='grey'>
                  {item.amount} x {item.product.name}
                </p>
                <p>
                  {(item.product.value.priceNow * item.amount).toLocaleString(
                    'pt-BR',
                    {
                      style: 'currency',
                      currency: 'BRL',
                      minimumFractionDigits: 2,
                    },
                  )}
                </p>
              </C.RowP>
            ))}
          {payment.discountValue > 0 && (
            <C.RowP>
              <p className='grey'>Desconto</p>
              <p className='purple'>{payInfos.discountValue}</p>
            </C.RowP>
          )}
          <C.RowP>
            <p className='grey'>Entrega</p>
            {payment.shipValue > 0 && <p>{payInfos.shipValue}</p>}
          </C.RowP>
          <C.RowP className='total'>
            <p>Total</p>
            <p className='right'>
              {window.screen.width > 1024 && payment.portions.length > 0
                ? payInfos.valueCredit
                : payInfos.totalValue}
              <br />
              {window.screen.width > 1024 && payment.portions.length > 0 && (
                <span>
                  {`Em até ${payInfos.maxOften}x de ${payInfos.discountInCash}`}
                </span>
              )}
            </p>
          </C.RowP>
        </C.ResumeList>
      </C.TopBox>
      <C.BottomBox>
        <C.InCashPrice>
          <p>Valor à vista no PIX</p>
          <h2>{payInfos.totalValue}</h2>
          <p className='mini'>
            {payment.portions.length > 0 &&
              (
                payment.portions[payment.portions.length - 1].valueCredit +
                payment.shipValue -
                (payment.valueTotal + payment.shipValue)
              ).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
              })}{' '}
            de economia
          </p>
        </C.InCashPrice>
        <C.Navigation>
          <Link className='payment' to={'/payment'}>
            Pagamento
          </Link>
          <Link className='continue' to={'/'}>
            Continuar comprando
          </Link>
        </C.Navigation>
      </C.BottomBox>
    </C.CartResume>
  );
};

export default CartResume;
