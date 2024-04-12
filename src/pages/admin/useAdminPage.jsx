import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toastErr, toastSuc } from '../../components/ToastComponent';
import {
  deleteBrand,
  deleteCategory,
  getBrands,
  getCategorys,
  patchBrand,
  patchCategory,
  postBrand,
  postCategory,
} from '../../services/Requests';

const useAdminPage = () => {
  const user = useSelector(state => state.user);

  const [brandEditId, setBrandEditId] = useState(null);
  const [categoryEditId, setCategoryEditId] = useState(null);
  const [brandNameInput, setBrandNameInput] = useState('');
  const [categoryNameInput, setCategoryNameInput] = useState('');
  const [iconCategory, setIconCategory] = useState(null);
  const [logoBrand, setLogoBrand] = useState(null);
  const [blackLogoBrand, setBlackLogoBrand] = useState(null);

  const { data: brands, refetch: refetchBrand } = useQuery({
    queryKey: ['brands-admin-page'],
    queryFn: async () => await getBrands(),
  });
  const { data: categorys, refetch: refetchCategory } = useQuery({
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

  const categoryRequest = async e => {
    e.preventDefault();
    e.stopPropagation();

    const formData = new FormData();
    formData.append('name', categoryNameInput);

    if (
      categoryEditId !== null &&
      categoryEditId !== undefined &&
      categoryEditId !== '' &&
      categoryNameInput.length > 0
    ) {
      formData.append('id', categoryEditId);
      const response = await patchCategory(formData, user.access_token);
      if (response) {
        toastSuc('Categoria editada com sucesso');
        refetchCategory();
        cleanCategoryForm();
      } else {
        toastErr('Não foi possível concluir, por favor tente novamente');
      }
    } else {
      const response = await postCategory(formData, user.access_token);
      console.log(response);
      if (response) {
        toastSuc(`Categoria ${categoryNameInput} cadastrada!`);
        refetchCategory();
        cleanCategoryForm();
      } else {
        toastErr('Não foi possível concluir, por favor tente novamente');
      }
    }
  };

  const brandRequest = async e => {
    e.preventDefault();
    e.stopPropagation();
    // let response;
    const formData = new FormData();

    formData.append('name', brandNameInput);

    if (logoBrand?.file) {
      formData.append('brand_logo', logoBrand.file, logoBrand.file.name);
    }
    if (blackLogoBrand?.file) {
      formData.append(
        'brand_logo_black',
        blackLogoBrand.file,
        blackLogoBrand.file.name,
      );
    }

    if (
      brandEditId !== null &&
      brandEditId !== '' &&
      brandEditId !== undefined &&
      brandNameInput.length > 0
    ) {
      console.log('EDIT BRAND');
      formData.append('id', brandEditId);
      const response = await patchBrand(formData, user.access_token);
      console.log(response);
      if (response) {
        toastSuc(`Marca editada com sucesso`);
        refetchBrand();
        cleanBrandForm();
      } else {
        toastErr('Não foi possível concluir, por favor tente novamente');
      }
    } else {
      console.log('NEW BRAND');
      const response = await postBrand(formData, user.access_token);
      if (response) {
        toastSuc(`Marca ${brandNameInput} cadastrada!`);
        refetchBrand();
        cleanBrandForm();
      } else {
        toastErr('Não foi possível concluir, por favor tente novamente');
      }
      console.log('RESPONSE OF REQUEST: ', response);
    }
  };

  const handleDeleteCategory = async id => {
    console.log('DELETANDO CATEGORIA DE ID: ', id);
    const response = await deleteCategory(id, user.access_token);
    if (response) {
      toastSuc(`Categoria deletada!`);
      cleanCategoryForm();
      refetchCategory();
    }
  };

  const handleDeleteBrand = async id => {
    const response = await deleteBrand(id, user.access_token);
    console.log(response);
    if (response) {
      toastSuc(`Marca deletada!`);
      cleanBrandForm();
      refetchBrand();
    }
  };

  const cleanCategoryForm = () => {
    setCategoryEditId(null);
    setCategoryNameInput('');
  };

  const cleanBrandForm = () => {
    setBrandEditId(null);
    setBrandNameInput('');
    setBlackLogoBrand(null);
    setLogoBrand(null);
  };

  useEffect(() => {
    console.log('brands mudou: ', brands);
  }, [brands]);

  return {
    categoryRequest,
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
    cleanCategoryForm,
    cleanBrandForm,
    brandRequest,
    handleDeleteCategory,
    handleDeleteBrand,
  };
};

export default useAdminPage;
