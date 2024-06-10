import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container } from '../../CommomStyles';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProductArea from '../../components/ProductArea';
import { api_path } from '../../constants/api_path';
import { OrderProduct } from './hooks';
import * as C from './styles';
import useBrand from './useBrand';

const Brand = () => {
  const { brand } = useBrand();
  return (
    <Container>
      <Header />
      <C.Brand>
        <C.TopBrand>
          <C.NameBrand>{brand?.brand_name}</C.NameBrand>
          <img src={`${api_path}/image/brand/${brand?.brand_logo}`} alt='' />
          <C.Buttons className='web'>
          </C.Buttons>
        </C.TopBrand>
        <ProductArea products={brand?.products} />
      </C.Brand>
      <Footer />
    </Container>
  );
};

export default Brand;
