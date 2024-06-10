import { useQuery } from '@tanstack/react-query';
import { getProductsOfBrand } from '../../services/Requests';

import { useParams } from 'react-router';

const useCategory = () => {
  const id_category = parseInt(useParams().id);
  const { data: category } = useQuery({
    queryKey: [`category-of-brand-${id_category}`],
    queryFn: async () => await getProductsOfBrand(id_category),
  });
  return { category };
};

export default useCategory;
