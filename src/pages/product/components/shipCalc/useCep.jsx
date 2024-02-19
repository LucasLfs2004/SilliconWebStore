import { useState } from 'react';
import { regionList } from '../../../../constants/list_ship';
import { getCep, getShipValue } from '../../../../services/Requests';

const useCep = () => {
  const [cep, setCep] = useState('');
  const [shipValue, setShipValue] = useState({});

  const findRegion = sigla => {
    for (const [regiao, estados] of Object.entries(regionList)) {
      if (estados.includes(sigla)) {
        return regiao;
      }
    }
    return null;
  };

  const calcShip = async () => {
    const cepData = await getCep(cep);
    const regiao = findRegion(cepData?.uf);
    const data = await getShipValue(regiao);
    setShipValue({
      cep: cepData,
      value: { value: parseFloat(data.value), deadline: data.deadline },
    });
  };

  return { cep, setCep, shipValue, calcShip };
};

export default useCep;
