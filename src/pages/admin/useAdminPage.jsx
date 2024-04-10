import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getBrands, getCategorys } from '../../services/Requests';

const useAdminPage = () => {
  const [brandEditId, setBrandEditId] = useState(null);
  const [categoryEditId, setCategoryEditId] = useState(null);
  const [brandNameInput, setBrandNameInput] = useState('');
  const [categoryNameInput, setCategoryNameInput] = useState('');
  const [iconCategory, setIconCategory] = useState(null);
  const [logoBrand, setLogoBrand] = useState(null);
  const [blackLogoBrand, setBlackLogoBrand] = useState(null);

  const { data: brands } = useQuery({
    queryKey: ['brands-admin-page'],
    queryFn: async () => await getBrands(),
  });
  const { data: categorys } = useQuery({
    queryKey: ['categorys-admin-page'],
    queryFn: async () => await getCategorys(),
  });

  const handleFileChange = event => {
    const newfile = Array.from(event.target.files);

    const newImages = newfile.map(file => URL.createObjectURL(file));

    console.log('handleLogoChange: ', {
      preview: newImages[0],
      file: newfile[0],
    });
    return { preview: newImages[0], file: newfile[0] };
  };

  return {
    brands,
    categorys,
    categoryNameInput,
    setCategoryNameInput,
    brandEditId,
    setBrandEditId,
    categoryEditId,
    setCategoryEditId,
    iconCategory,
    setIconCategory,
    logoBrand,
    setLogoBrand,
    blackLogoBrand,
    setBlackLogoBrand,
    brandNameInput,
    setBrandNameInput,
    handleFileChange,
  };
};

export default useAdminPage;
