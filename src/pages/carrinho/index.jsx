import { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from '../../CommomStyles';
import EmptyCart from '../../components/EmptyCart';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { getCep } from '../../services/Requests';
import {
  clearCart,
  decrementAmountProduct,
  incrementAmountProduct,
  removeProduct,
} from '../../store/actions/cartActions';
import {
  calculatePayment,
  clearVoucher,
  setShipInfos,
  setVoucher,
} from '../../store/actions/paymentActions';
import * as C from './styles';

const Carrinho = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const payment = useSelector(state => state.payment);
  console.log(payment);
  const [shipPrice, setShipPrice] = useState(5.99);
  const [cupom, setCupom] = useState('');
  const [cep, setCep] = useState('');

  const applyCupom = () => {
    if (cupom.toLowerCase() === 'nadamal') {
      dispatch(setVoucher({ voucher: 'nadamal', discount: 0.05 }));
      dispatch(calculatePayment(cart));
      setCupom('');
    }
  };

  const searchCep = async () => {
    const response = await getCep(cep);
    dispatch(setShipInfos(response));
    console.log(payment);
    console.log(response);
  };

  useEffect(() => {
    if (cart.length === 0) {
      dispatch(clearVoucher());
    }
    dispatch(calculatePayment(cart));
  }, [cart]);

  return (
    <Container>
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
                            <img src='/assets/icons/arrowLeftIcon.svg' alt='' />
                          </button>
                          <p>{item.amount}</p>
                          <button
                            onClick={() =>
                              dispatch(incrementAmountProduct(item.product.id))
                            }
                          >
                            <img
                              src='/assets/icons/arrowRightIcon.svg'
                              alt=''
                            />
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
                  <InputMask
                    mask={'99999-999'}
                    placeholder=''
                    value={cep}
                    onChange={e => setCep(e.target.value)}
                    className='center'
                  />
                </C.InputDisplay>
                <C.ButtonPurple onClick={() => searchCep()}>
                  Calcular
                </C.ButtonPurple>
              </C.RowCep>

              <C.CepInfo>
                {payment?.shipInfos?.logradouro} - {payment?.shipInfos?.bairro}
              </C.CepInfo>
            </C.CepArea>
            <C.CupomArea>
              <C.RowCupom>
                <C.InputDisplay>
                  <p>Cupom de desconto:</p>
                  <input
                    value={cupom}
                    onChange={e => setCupom(e.target.value)}
                  />
                </C.InputDisplay>
                <C.ButtonPurple onClick={() => applyCupom()}>
                  Aplicar
                </C.ButtonPurple>
              </C.RowCupom>
              {payment?.voucher !== null && (
                <C.CupomApply>
                  <p className='green'>Cupom aplicado: {payment?.voucher}</p>
                  <span>
                    {payment.discount > 1
                      ? `${payment.discount.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                          minimumFractionDigits: 2,
                        })} de desconto`
                      : `${payment.discount * 100}% off`}
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
            {payment.discountValue > 0 && (
              <C.RowP>
                <p className='grey'>Desconto</p>
                <p className='purple'>
                  {payment.discountValue.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                  })}
                </p>
              </C.RowP>
            )}
            <C.RowP>
              <p className='grey'>Entrega</p>
              {payment.shipValue > 0 && (
                <p>
                  {payment.shipValue.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                  })}
                </p>
              )}
            </C.RowP>
            <C.RowP>
              <p>Total</p>
              <p>
                {(payment.valueTotal + payment.shipValue).toLocaleString(
                  'pt-BR',
                  {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                  },
                )}
              </p>
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
        <EmptyCart />
      )}

      <Footer />
    </Container>
  );
};

export default Carrinho;
