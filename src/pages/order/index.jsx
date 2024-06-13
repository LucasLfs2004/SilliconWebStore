import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Container } from '../../CommomStyles';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CardOrder from '../../components/cardOrder';
import { parseRealCurrency } from '../../functions/realCurrency';
import { getOrder } from '../../services/Requests';
import * as C from './styles';

const OrderDetailed = () => {
  const id = useParams().id;
  const user = useSelector(state => state.user);

  const { data: order, refetch } = useQuery({
    queryKey: ['order', id],
    queryFn: async () =>
      user.access_token && (await getOrder(id, user.access_token)),
  });

  return (
    <Container className='dark'>
      <Header />
      <C.ContentPage>
        <C.ContentHeader>
          <p>
            <span>Pedido: {order?.id_order}</span>
          </p>
          {order?.status_order === 'canceled' && (
            <h3 className='red'>Compra cancelada</h3>
          )}
          {order?.status_order === 'completed' && (
            <h3 className='green'>Compra concluída</h3>
          )}
          {order?.status_order === 'pending' && (
            <h3 className='yellow'>Compra em processo</h3>
          )}
        </C.ContentHeader>
        <C.Box>
          <C.Column width={'60%'}>
            <CardOrder purchase={order} hideDetail={true} />
          </C.Column>
          <C.Column width={'35%'}>
            <C.NeumorphismCard>
              <C.ShipData>
                <h3>{order?.delivery_infos?.receiver_name}</h3>
                <p>{`${order?.delivery_infos?.street}, ${order?.delivery_infos?.number}, ${order?.delivery_infos?.city} - ${order?.delivery_infos?.state}`}</p>
              </C.ShipData>
              <C.Row className='between mt' mt={12}>
                {order?.payment_method === 'pix' && (
                  <C.PayMethod className='gap' gap={16}>
                    <img src='/assets/icons/pixBlue.svg' alt='' />
                    <p>Pagamento via PIX</p>
                  </C.PayMethod>
                )}
                {order?.payment_method === 'credit-card' && (
                  <C.PayMethod className='gap' gap={16}>
                    <img src='/assets/icons/creditCardBlue.svg' alt='' />
                    <p>Pagamento via Cartão de Crédito</p>
                  </C.PayMethod>
                )}
                {order?.payment_method === 'boleto' && (
                  <C.PayMethod className='gap' gap={16}>
                    <img src='/assets/icons/boletoBlue.svg' alt='' />
                    <p>Pagamento via Boleto Bancário</p>
                  </C.PayMethod>
                )}
                {order?.status_order === 'completed' && (
                  <C.StatusOrder className='green'>
                    Pedido concluído
                  </C.StatusOrder>
                )}
                {order?.status_order === 'processing' && (
                  <C.StatusOrder className='yellow'>
                    Pedido em processo
                  </C.StatusOrder>
                )}
                {order?.status_order === 'canceled' && (
                  <C.StatusOrder className='red'>
                    Pedido cancelado
                  </C.StatusOrder>
                )}
              </C.Row>
              <C.ValuesArea>
                <C.RowValue>
                  <p>Total dos produtos</p>
                  <span>
                    {parseRealCurrency(
                      order?.total_value +
                        order?.discount_value +
                        order?.ship_value,
                    )}
                  </span>
                </C.RowValue>
                <C.RowValue>
                  <p>Desconto</p>
                  <span>{parseRealCurrency(order?.discount_value)}</span>
                </C.RowValue>
                <C.RowValue>
                  <p>Frete</p>
                  <span>{parseRealCurrency(order?.ship_value)}</span>
                </C.RowValue>
                {order?.payment_method === 'credit-card' && (
                  <C.RowValue>
                    <p>Parcelas:</p>
                    <span>{`
                  ${order.often}x de ${parseRealCurrency(
                      order?.portions_value,
                    )}`}</span>
                  </C.RowValue>
                )}
                <C.RowValue className='total'>
                  <p>Total do pedido:</p>
                  <span>{parseRealCurrency(order?.total_value)}</span>
                </C.RowValue>
              </C.ValuesArea>
            </C.NeumorphismCard>
          </C.Column>
        </C.Box>
      </C.ContentPage>
      <Footer />
    </Container>
  );
};

export default OrderDetailed;
