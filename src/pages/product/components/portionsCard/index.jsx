import * as C from './styles';

const PortionsCard = ({ seePortions, portions, product, setSeePortions }) => {
  return (
    <C.Background display={seePortions ? 'flex' : 'none'}>
      <C.PortionsDisplay className={seePortions && 'view'} view={seePortions}>
        <h4>Parcelas</h4>
        <C.CloseBtn onClick={() => setSeePortions(false)}>X</C.CloseBtn>
        <C.Display>
          {portions?.map((item, index) => {
            return (
              <C.Portion>
                <p>
                  {index + 1} x de{' '}
                  {(item / (index + 1)).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                  })}
                </p>
                <span>
                  {item.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                  })}
                </span>
              </C.Portion>
            );
          })}
        </C.Display>
        <C.Description>
          *Em até {product.value.portions}x com juros de{' '}
          {product.value.feesMonthly}% a.m.
        </C.Description>
      </C.PortionsDisplay>
    </C.Background>
  );
};

export default PortionsCard;
