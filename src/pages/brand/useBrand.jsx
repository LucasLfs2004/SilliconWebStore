import { useQuery } from '@tanstack/react-query';
import { getProductsOfBrand } from '../../services/Requests';

import { useParams } from 'react-router';

const useBrand = () => {
  const id_brand = parseInt(useParams().id);
  const { data: brand } = useQuery({
    queryKey: [`products-of-brand-${id_brand}`],
    queryFn: async () => {
      return await getProductsOfBrand(id_brand);
    },
  });

  console.log('products in page brand: ', brand);
  return { brand };
};

export default useBrand;
