import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { products } from '../../falseDatabase/products';
import { ClearCart } from '../../store/actions/cartActions';
import * as C from './styles';

const Carrinho = () => {
  const [shipPrice, setShipPrice] = useState(5.99);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const carrinhoIds = localStorage.getItem('cart')?.split(',');
  const [cupons, setCupons] = useState(['nadamal']);
  const [carrinhoItems, setCarrinhoItems] = useState([]);
  const [cupom, setCupom] = useState('');
  const [cupomValid, setCupomValid] = useState(false);

  const cart = useSelector(state => state.cart);
  //   console.log('cart', cart);

  const dispatch = useDispatch();

  useEffect(() => {
    loadProducts();
  }, [localStorage]);

  const loadProducts = () => {
    // console.log('loadProducts chamado');
    let carrinho = [];
    products.forEach(element => {
      let item = carrinhoIds?.find(item => element.id == parseInt(item));
      if (item !== undefined && item !== null) {
        carrinho.push(element);
      }
    });
    setCarrinhoItems(carrinho);
  };

  const clearAll = () => {
    dispatch(ClearCart());
  };

  useEffect(() => {
    let value = 0;
    carrinhoItems.forEach(element => {
      //   console.log(element.value.priceNow);
      value += element.value.priceNow;
    });
    value += shipPrice;
    setTotalPrice(value);
  }, [loadProducts]);

  const removeItemCart = id => {
    console.log(id);
  };

  const applyCupom = () => {
    if (cupom.toLowerCase() === 'nadamal') {
      setCupomValid(true);
      console.log('Cupom ativado');
      setDiscount(5);
    }
  };

  console.log(carrinhoItems);
  console.log('valid cupom? ', cupomValid);
  return (
    <C.Container>
      <Header />
      {cart && cart.length > 0 ? (
        <C.Cart>
          <C.Top>
            <C.Title>Produtos e Serviços</C.Title>
            <C.BtnDelete onClick={() => clearAll()}>
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
                          <button>{'<'}</button>
                          <p>{item.amount}</p>
                          <button>{'>'}</button>
                        </C.BtnQuantidade>
                        <C.ButtonDelete onClick={() => removeItemCart(index)}>
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
              {cupomValid && (
                <C.CupomApply>
                  <p className='green'>Cupom aplicado: {cupom}</p>
                  <span>5% off</span>
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
            {discount > 0 && (
              <C.RowP>
                <p className='grey'>Desconto</p>
                <p className='purple'>
                  {(-(totalPrice * discount) / 100).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                  })}
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
              {discount > 0 ? (
                <p>
                  {(totalPrice - (totalPrice * discount) / 100).toLocaleString(
                    'pt-BR',
                    {
                      style: 'currency',
                      currency: 'BRL',
                      minimumFractionDigits: 2,
                    },
                  )}
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
            <Link className='payment'>Pagamento</Link>
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
