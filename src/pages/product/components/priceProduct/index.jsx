import Stars from '../../../../components/Stars';
import PortionsCard from '../portionsCard';
import ShipCalcCard from '../shipCalc';
import * as C from './styles';
import { usePriceProduct } from './usePriceProduct';

const PriceProduct = () => {
  const {
    buyProduct,
    pricePerPortions,
    seePortions,
    setSeePortions,
    product,
    priceInPortions,
    handleAddToCart,
    portions,
  } = usePriceProduct();

  return (
    <>
      <C.PriceArea>
        <C.Rating>
          <Stars rating={product.rating} />
          <p>({product.rating})</p>
        </C.Rating>
        <C.Name>{product.name}</C.Name>
        <C.IdProduct>Código: xxxxxxxx</C.IdProduct>
        <C.BrandProduct>Marca: {product.brand}</C.BrandProduct>
        <C.RowPriceBtn>
          <C.RowPrice>
            <img src='/assets/icons/pix.svg' alt='' />
            <C.Price>
              <p>
                {product.value.priceNow.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 2,
                })}
              </p>
              <span>à vista no pix</span>
            </C.Price>
          </C.RowPrice>
          <C.BtnsBuy>
            <C.ButtonBuy onClick={() => buyProduct()}>
              <img src='/assets/icons/carrinho.svg' alt='' />
              Comprar
            </C.ButtonBuy>
            <C.ButtonBuy onClick={event => handleAddToCart(event)}>
              <img src='/assets/icons/carrinhoAdd.svg' alt='' />
            </C.ButtonBuy>
          </C.BtnsBuy>
        </C.RowPriceBtn>

        <C.PriceInCredit>
          <p>
            {priceInPortions.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
            })}
          </p>
          <span>
            Em até {product.value.portions} x de{' '}
            <strong>
              {pricePerPortions.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
              })}
            </strong>{' '}
            sem juros no cartão
          </span>
          <span>Ou em 1x no cartão com até 5% OFF</span>
        </C.PriceInCredit>

        <C.RowPrice className='credit'>
          <img
            src='/assets/icons/creditCard.svg'
            className='only-mobile'
            alt=''
          />
          <C.Price>
            <p>
              {priceInPortions.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
              })}
            </p>
            <span>
              {product.value.portions} x de{' '}
              {pricePerPortions.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
              })}
            </span>
            <C.BtnPortions onClick={() => setSeePortions(!seePortions)}>
              <img src='/assets/icons/miniArrowGray.svg' alt='' />
              <p>Ver parcelas</p>
            </C.BtnPortions>
          </C.Price>
        </C.RowPrice>
        <C.SeePortions
          onClick={() => setSeePortions(true)}
          // onMouseEnter={() => setSeePortions(true)}
          // onMouseLeave={() => setSeePortions(false)}
        >
          Ver parcelas
        </C.SeePortions>

        <C.SellFrom>
          Vendido e entregue por <span>Sillicon Store</span>
        </C.SellFrom>

        <PortionsCard
          setSeePortions={setSeePortions}
          seePortions={seePortions}
          portions={portions}
          product={product}
        />

        {window.screen.width > 1024 && <ShipCalcCard className='only-web' />}
      </C.PriceArea>
      <C.BuyComponent>
        <C.Price className='cian'>
          <p>
            {product.value.priceNow.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
            })}
          </p>
          <span>À vista no pix</span>
        </C.Price>
        <C.BuyBtn onClick={() => buyProduct()}>
          <img src='/assets/icons/carrinhoDark.svg' alt='' />
          <p>Comprar</p>
        </C.BuyBtn>
      </C.BuyComponent>
    </>
  );
};

export default PriceProduct;
