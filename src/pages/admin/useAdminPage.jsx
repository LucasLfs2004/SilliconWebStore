import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getBrands, getCategorys } from '../../services/Requests';

const useAdminPage = () => {
  const [edit, setEdit] = useState(false);
  const [productEditId, setProductEditId] = useState(undefined);
  const [nameInput, setNameInput] = useState('');

  const { data: brands } = useQuery({
    queryKey: ['brands-admin-page'],
    queryFn: async () => await getBrands(),
  });
  const { data: categorys } = useQuery({
    queryKey: ['categorys-admin-page'],
    queryFn: async () => await getCategorys(),
  });

  return {
    brands,
    categorys,
    edit,
    nameInput,
    setNameInput,
    productEditId,
    setProductEditId,
  };
};

export default useAdminPage;
