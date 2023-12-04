import * as C from './styles';

const BtnFilter = ({ boxShadow }) => {
  return (
    <C.BtnFilter
      boxShadow={
        boxShadow
          ? '5px 5px 6px 0px #d1d9e6, -5px -5px 6px 0px rgba(255, 255, 255, 0.35)'
          : 'none'
      }
    >
      <img src='/assets/icons/filtro.png' alt='' />
      <p>Filtrar</p>
    </C.BtnFilter>
  );
};

export default BtnFilter;
