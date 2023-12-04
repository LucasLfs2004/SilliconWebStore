import * as C from './styles';

const BtnOrder = ({
  boxShadow,
  openOrder,
  setOpenOrder,
  order,
  SelectOrder,
}) => {
  const orderList = [
    'Menor preço',
    'Maior preço',
    'Mais avaliados',
    // 'Mais recentes',
    // 'Mais procurados',
    // 'Promoções',
  ];

  return (
    <C.BtnOrder
      className={openOrder && 'open'}
      boxShadow={
        boxShadow
          ? '5px 5px 6px 0px #d1d9e6, -5px -5px 6px 0px rgba(255, 255, 255, 0.35)'
          : 'none'
      }
    >
      <button onClick={() => setOpenOrder(!openOrder)} className='row'>
        <img src='/assets/icons/ordenar.png' alt='' />
        <p>{order}</p>
      </button>
      <C.SelectOrder className={openOrder && 'view'} view={openOrder}>
        {orderList.map((item, index) => (
          <C.OrderOption
            onClick={() => openOrder && SelectOrder(item)}
            className={openOrder && 'view'}
            view={openOrder}
            key={index}
          >
            {item}
          </C.OrderOption>
        ))}
      </C.SelectOrder>
    </C.BtnOrder>
  );
};

export default BtnOrder;
