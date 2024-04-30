// import { products } from '../../falseDatabase/products';
import { useEffect, useRef, useState } from 'react';
import CardProduct from '../CardProduct';
import * as C from './styles';

const ProductArea = ({ products }) => {
  const areaRef = useRef();
  const [columnGap, setColumnGap] = useState(0);
  const [widthCard, setWidthCard] = useState(266);

  const handleResize = () => {
    console.log('WIDTH OF CONTAINER', areaRef.current.offsetWidth);
    if (areaRef.current.offsetWidth > 1024) {
      const spacedPixels =
        areaRef.current.offsetWidth - (areaRef.current.offsetWidth * 4) / 100;
      console.log('SPACED PIXEL', spacedPixels);
      const valueCard = spacedPixels;
      const value =
        areaRef.current.offsetWidth - (areaRef.current.offsetWidth * 4) / 100;
      const RowItems = value % 290;
      const RowItemsUnit = (value - RowItems) / 290;
      const columnSpace = 20 * (RowItemsUnit - 1);
      console.log('SPACE FOR ITEMS', spacedPixels - columnSpace);
      setWidthCard((spacedPixels - columnSpace) / RowItemsUnit);
      console.log(widthCard);
      console.log(RowItemsUnit);
      setColumnGap(RowItems / (RowItemsUnit - 1));
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Retorna uma função de limpeza para remover o ouvinte de evento quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [areaRef]);

  // console.log('products', products);
  return (
    <C.Container id='product-area' ref={areaRef} columnGap={columnGap}>
      {products?.length > 0 &&
        products.map((item, index) => (
          <CardProduct key={index} item={item} widthCard={widthCard} />
        ))}
    </C.Container>
  );
};

export default ProductArea;
