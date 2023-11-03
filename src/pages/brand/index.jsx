import { useState } from 'react';
import { useParams } from 'react-router';
import CardProduct from '../../components/CardProduct';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { brands } from '../../falseDatabase/brands';
import { products } from '../../falseDatabase/products';
import * as C from './styles';

const Brand = () => {
  const [order, setOrder] = useState('Ordenar');
  const [openOrder, setOpenOrder] = useState(false);
  const id_brand = parseInt(useParams().id);
  console.log(id_brand);
  console.log();

  let productsBrand = [];
  products.forEach(item => {
    item.brand_id === id_brand && productsBrand.push(item);
  });

  const orderList = [
    'Menor preço',
    'Maior preço',
    'Mais avaliados',
    'Mais recentes',
    'Mais procurados',
    'Promoções',
  ];

  const SelectOrder = item => {
    setOrder(item);
    setOpenOrder(false);
  };
  let brand = brands.find(item => item.id === id_brand);
  return (
    <C.Container>
      <Header />
      <C.TopBrand>
        <C.NameBrand>{brand.brand}</C.NameBrand>
        <img src={brand.img_path} alt='' />
      </C.TopBrand>
      <C.Buttons>
        <C.BtnFilter>
          <img src='/assets/icons/filtro.png' alt='' />
          <p>Filtrar</p>
        </C.BtnFilter>
        <C.BtnOrder className={openOrder && 'open'}>
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
      </C.Buttons>
      <C.ProductArea>
        {productsBrand &&
          productsBrand.map((item, index) => <CardProduct item={item} />)}
      </C.ProductArea>
      <Footer />
    </C.Container>
  );
};

export default Brand;
