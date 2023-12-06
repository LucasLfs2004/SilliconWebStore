import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCep } from '../../../../services/Requests';
import { setShipInfos } from '../../../../store/actions/paymentActions';
import * as C from './styles';

const ShipCalcCard = () => {
  const dispatch = useDispatch();
  const [cep, setCep] = useState('');
  const payment = useSelector(state => state.payment);
  console.log(cep);
  console.log(payment.shipInfos);

  const searchCep = async () => {
    const response = await getCep(cep);
    dispatch(setShipInfos(response));
    console.log(response);
  };

  useEffect(() => {
    console.log(cep.length);
    if (cep.length >= 8) {
      searchCep();
    }
  }, [cep]);

  return (
    <C.Card>
      <C.RowCep>
        <p>Insira seu CEP:</p>
        <input
          type='text'
          placeholder='00000-000'
          value={cep}
          onChange={e => setCep(e.target.value)}
        />
        <a
          target='_blank'
          href='https://buscacepinter.correios.com.br/'
          rel='noreferrer'
        >
          Esqueci meu CEP
        </a>
      </C.RowCep>
      <C.CepLocation>
        {payment.shipInfos.logradouro &&
          payment.shipInfos.bairro &&
          `${payment?.shipInfos?.logradouro} - ${payment?.shipInfos?.bairro}`}
        <br />
        {payment.shipInfos.localidade &&
          payment.shipInfos.uf &&
          `${payment?.shipInfos?.localidade} - ${payment?.shipInfos?.uf}`}
      </C.CepLocation>
    </C.Card>
  );
};

export default ShipCalcCard;
