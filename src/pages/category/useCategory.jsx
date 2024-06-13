import { useQuery } from '@tanstack/react-query';
import { getProductsOfCategory } from '../../services/Requests';

import { useParams } from 'react-router';

const useCategory = () => {
  const id_category = parseInt(useParams().id_category);
  const { data: category } = useQuery({
    queryKey: [`category-of-brand-${id_category}`],
    queryFn: async () => await getProductsOfCategory(id_category),
  });
  return { category };
};

export default useCategory;
