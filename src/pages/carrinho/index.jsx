import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import {
  clearCart,
  decrementAmountProduct,
  incrementAmountProduct,
  removeProduct,
} from '../../store/actions/cartActions';
import { applyVoucher } from '../../store/actions/voucherActions';
import * as C from './styles';

const Carrinho = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const voucher = useSelector(state => state.voucher);
  const [shipPrice, setShipPrice] = useState(5.99);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cupom, setCupom] = useState('');

  const applyCupom = () => {
    if (cupom.toLowerCase() === 'nadamal') {
      dispatch(applyVoucher({ voucher: 'nadamal', discount: 0.05 }));
      setCupom('');
    }
  };

  useEffect(() => {
    let value = 0;
    cart.forEach(element => {
      value += element.product.value.priceNow * element.amount;
    });
    value += shipPrice;
    setTotalPrice(value);
  }, [dispatch]);

  return (
    <C.Container>
      <Header />
      {cart && cart.length > 0 ? (
        <C.Cart>
          <C.Top>
            <C.Title>Produtos e Serviços</C.Title>
            <C.BtnDelete onClick={() => dispatch(clearCart())}>
              <img src='/assets/icons/trash.svg' alt='' />
              Remover Todos
            </C.BtnDelete>
          </C.Top>
          <C.SellFrom>
            Vendido e Entregue por <strong>Sillicon Store</strong>
          </C.SellFrom>
          <C.CartArea>
            {cart &&
              cart.map((item, index) => (
                <C.ItemCart key={index}>
                  <C.ImgProduct src={item.product.image[0]}></C.ImgProduct>
                  <C.Infos>
                    <p>{item.product.name}</p>
                    <C.Row>
                      <C.Price>
                        <p>Preço à vista no pix</p>
                        <p className='purple'>
                          {item.product.value.priceNow.toLocaleString('pt-BR', {
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
                            {'<'}
                          </button>
                          <p>{item.amount}</p>
                          <button
                            onClick={() =>
                              dispatch(incrementAmountProduct(item.product.id))
                            }
                          >
                            {'>'}
                          </button>
                        </C.BtnQuantidade>
                        <C.ButtonDelete
                          onClick={() =>
                            dispatch(removeProduct(item.product.id))
                          }
                        >
                          <img src='/assets/icons/trash.svg' alt='' />
                        </C.ButtonDelete>
                      </C.Buttons>
                    </C.Row>
                  </C.Infos>
                </C.ItemCart>
              ))}
            <C.CepArea>
              <C.RowCep>
                <C.InputDisplay>
                  <p>Insira seu CEP:</p>
                  <C.InputCep />
                </C.InputDisplay>
                <C.ButtonPurple>Calcular</C.ButtonPurple>
              </C.RowCep>
            </C.CepArea>
            <C.CupomArea>
              <C.RowCupom>
                <C.InputDisplay>
                  <p>Cupom de desconto:</p>
                  <C.InputCep
                    value={cupom}
                    onChange={e => setCupom(e.target.value)}
                  />
                </C.InputDisplay>
                <C.ButtonPurple onClick={() => applyCupom()}>
                  Aplicar
                </C.ButtonPurple>
              </C.RowCupom>
              {voucher?.voucher !== null && (
                <C.CupomApply>
                  <p className='green'>Cupom aplicado: {voucher?.voucher}</p>
                  <span>
                    {voucher.discount > 1
                      ? `${voucher.discount.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                          minimumFractionDigits: 2,
                        })} de desconto`
                      : `${voucher.discount * 100}% off`}
                  </span>
                </C.CupomApply>
              )}
            </C.CupomArea>
          </C.CartArea>
          <C.CartResume>
            <C.Title>Resumo</C.Title>
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
            {voucher.discount > 0 && (
              <C.RowP>
                <p className='grey'>Desconto</p>
                <p className='purple'>
                  {voucher.discount > 1
                    ? (-(totalPrice - voucher.discount)).toLocaleString(
                        'pt-BR',
                        {
                          style: 'currency',
                          currency: 'BRL',
                          minimumFractionDigits: 2,
                        },
                      )
                    : (-(totalPrice * voucher.discount)).toLocaleString(
                        'pt-BR',
                        {
                          style: 'currency',
                          currency: 'BRL',
                          minimumFractionDigits: 2,
                        },
                      )}
                </p>
              </C.RowP>
            )}
            <C.RowP>
              <p className='grey'>Entrega</p>
              <p>
                {shipPrice.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 2,
                })}
              </p>
            </C.RowP>
            <C.RowP>
              <p>Total</p>
              {voucher.discount > 0 ? (
                <p>
                  {(
                    totalPrice -
                    (totalPrice * voucher.discount) / 100
                  ).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                  })}
                </p>
              ) : (
                <p>
                  {totalPrice.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                  })}
                </p>
              )}
            </C.RowP>
          </C.CartResume>
          <C.Navigation>
            <Link className='payment' to={'/payment'}>
              Pagamento
            </Link>
            <Link className='continue' to={'/'}>
              Continuar comprando
            </Link>
          </C.Navigation>
        </C.Cart>
      ) : (
        <C.EmptyCart>
          <h3>Nenhum item foi adicionado ao seu carrinho :(</h3>
          <p>Que tal olhar outros produtos?</p>
          <Link to={'/'}>
            <img src='/assets/icons/carrinho.svg' alt='' />
            Ir às compras
          </Link>
        </C.EmptyCart>
      )}

      <Footer />
    </C.Container>
  );
};

export default Carrinho;
