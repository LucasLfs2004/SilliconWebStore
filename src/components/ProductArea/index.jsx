// import { products } from '../../falseDatabase/products';
import { useEffect, useRef, useState } from 'react';
import CardProduct from '../CardProduct';
import * as C from './styles';

const ProductArea = ({ products }) => {
  const areaRef = useRef();
  const [widthCard, setWidthCard] = useState(266);

  const handleResize = () => {
    if (areaRef.current.offsetWidth > 1024) {
      const value =
        areaRef.current.offsetWidth - (areaRef.current.offsetWidth * 4) / 100;
      const RowItemsUnit = (value - (value % 290)) / 290;
      const spacedPixels = value - 20 * (RowItemsUnit - 1);
      setWidthCard(spacedPixels / RowItemsUnit);
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
    <C.Container id='product-area' ref={areaRef}>
      {products?.length > 0 &&
        products?.map((item, index) => (
          <CardProduct key={index} item={item} widthCard={widthCard} />
        ))}
    </C.Container>
  );
};

export default ProductArea;
