import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container } from '../../CommomStyles';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProductArea from '../../components/ProductArea';
import BtnFilter from '../../components/btnFilter';
import BtnOrder from '../../components/btnOrder';
import { api_path } from '../../constants/api_path';
import { OrderProduct } from './hooks';
import * as C from './styles';
import useBrand from './useBrand';

const Brand = () => {
  const [order, setOrder] = useState('Ordenar');
  const [openOrder, setOpenOrder] = useState(false);
  const id_brand = parseInt(useParams().id);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(OrderProduct(order, id_brand));
  }, [order, id_brand]);

  const SelectOrder = item => {
    setOrder(item);
    setOpenOrder(false);
  };

  const { brand } = useBrand();
  console.log(brand);
  // let brand = brands.find(item => item.id === id_brand);
  return (
    <Container>
      <Header />
      <C.Brand>
        <C.TopBrand>
          <C.NameBrand>{brand?.brand_name}</C.NameBrand>
          <img src={`${api_path}/image/brand/${brand?.brand_logo}`} alt='' />
          <C.Buttons className='web'>
            <BtnFilter boxShadow={false} />
            <BtnOrder
              boxShadow={false}
              openOrder={openOrder}
              setOpenOrder={setOpenOrder}
              order={order}
              SelectOrder={SelectOrder}
            />
          </C.Buttons>
        </C.TopBrand>
        <C.Buttons className='mobile'>
          <BtnFilter boxShadow={true} />
          <BtnOrder
            boxShadow={true}
            openOrder={openOrder}
            setOpenOrder={setOpenOrder}
            order={order}
            SelectOrder={SelectOrder}
          />
        </C.Buttons>
        <ProductArea products={brand?.products} />
      </C.Brand>
      <Footer />
    </Container>
  );
};

export default Brand;
