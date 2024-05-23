import { parseRealCurrency } from '../../../../functions/realCurrency';
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
                  {index + 1} x de {parseRealCurrency(item / (index + 1))}
                </p>
                <span>{parseRealCurrency(item)}</span>
              </C.Portion>
            );
          })}
        </C.Display>
        <C.Description>
          *Em até {product?.value?.portions}x com juros de{' '}
          {product?.value?.fees_monthly}% a.m.
        </C.Description>
      </C.PortionsDisplay>
    </C.Background>
  );
};

export default PortionsCard;
