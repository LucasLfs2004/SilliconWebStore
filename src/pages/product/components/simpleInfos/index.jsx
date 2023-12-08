import { useState } from 'react';
import * as C from './styles';

const SimpleInfos = ({ brandProduct, product }) => {
  const [favorite, setFavorite] = useState(false);
  return (
    <C.SimpleInfos>
      <C.LogoInfo>
        <img
          className='logoBrand'
          src={brandProduct.img_path}
          color='#000000'
          alt=''
        />
      </C.LogoInfo>
      <C.WarrantyInfo>
        <img src='/assets/icons/linePurple.svg' alt='' />
        <p>
          {product.warranty && product.warranty > 12
            ? `${product.warranty / 12} anos de garantia`
            : `${product.warranty} ${
                product.warranty > 1 ? 'meses' : 'mês'
              } de garantia`}
        </p>
        <img src='/assets/icons/linePurple.svg' alt='' />
      </C.WarrantyInfo>
      <C.BtnActions>
        <button onClick={() => setFavorite(!favorite)}>
          {favorite ? (
            <img src='/assets/icons/favoritePurple.svg' alt='' />
          ) : (
            <img src='/assets/icons/favoriteGray.svg' alt='' />
          )}
        </button>
        <img className='share-icon' src='/assets/icons/shareGray.svg' alt='' />
      </C.BtnActions>
    </C.SimpleInfos>
  );
};

export default SimpleInfos;