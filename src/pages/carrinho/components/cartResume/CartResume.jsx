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
            cart?.items?.map((item, index) => (
              <C.RowP key={index}>
                <p className='grey'>
                  {item.amount} x {item?.name}
                </p>
                <p>
                  {item?.value?.price_now
                    ? (item?.value?.price_now * item.amount).toLocaleString(
                        'pt-BR',
                        {
                          style: 'currency',
                          currency: 'BRL',
                          minimumFractionDigits: 2,
                        },
                      )
                    : (item?.value?.common_price * item.amount).toLocaleString(
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
          {cart.discount_value > 0 && (
            <C.RowP>
              <p className='grey'>Desconto</p>
              <p className='purple'>
                {(-cart.discount_value).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 2,
                })}
              </p>
            </C.RowP>
          )}
          <C.RowP>
            <p className='grey'>Entrega</p>
            <p>{cart.ship_value > 0 ? cart.ship_value : 'Grátis'}</p>
          </C.RowP>
          <C.RowP className='total'>
            <p>Total</p>
            <p className='right'>
              {window.screen.width > 1024 && cart?.list_portions?.length > 0
                ? cart?.list_portions[
                    cart.list_portions.length - 1
                  ]?.value_credit.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                  })
                : cart.cart_total_value.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                  })}
              <br />
              {window.screen.width > 1024 &&
                cart?.list_portions?.length > 0 && (
                  <span>
                    {`Em até ${
                      cart?.list_portions[cart.list_portions.length - 1]?.often
                    }x de ${cart.list_portions[
                      cart.list_portions.length - 1
                    ].value_portion.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                      minimumFractionDigits: 2,
                    })}`}
                  </span>
                )}
            </p>
          </C.RowP>
        </C.ResumeList>
      </C.TopBox>
      <C.BottomBox>
        <C.InCashPrice>
          <p>Valor à vista no PIX</p>
          <h2>
            {cart.cart_total_value.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
            })}
          </h2>
          <p className='mini'>
            {cart?.list_portions?.length > 0 &&
              (
                cart.list_portions[cart.list_portions.length - 1].value_credit -
                cart.cart_total_value
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
