import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import DOMPurify from 'dompurify';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { z } from 'zod';
import {
  getBrands,
  getCategorys,
  updateProduct,
} from '../../services/Requests';

const useEditProducts = (product, refetch, closeModal) => {
  const user = useSelector(state => state.user);
  const [categorySelect, setCategorySelect] = useState(null);
  const [brandSelect, setBrandSelect] = useState(null);

  useEffect(() => {
    if (!user && !user?.access_token && !user?.idSeller) {
      window.location.pathname = 'signin';
    }
  }, [user]);

  const { data: brands } = useQuery({
    queryKey: ['brands-add-product'],
    queryFn: async () => await getBrands(),
  });
  const { data: categorys } = useQuery({
    queryKey: ['categorys-add-product'],
    queryFn: async () => await getCategorys(),
  });

  const handleCreateProduct = async data => {
    try {
      const paramsRequest = {
        id: product.id,
        name: data.name,
        brand: data.brand,
        category: data.category,
        price: data.price,
        portions: data.portions,
        warranty: data.warranty,
        stock: data.stock,
        model: data.model,
        fees_credit: data.feesCredit,
        fees_monthly: data.feesMonthly,
        active: true,
        featured: true,
      };
      console.log('data of updateProduct', paramsRequest);

      const success = await updateProduct(user.access_token, paramsRequest);
      // console.log(dataProduct);
      success && refetch();
      success && closeModal();
      alert('Produto cadastrado com sucesso');
    } catch (error) {
      alert('Erro, não foi possível criar o produto');
      console.log('Erro na criação do produto', error);
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: zodResolver(productZod),
  });

  const handleSetInputs = () => {
    const brand = brands?.find(item => item.name === product?.brand?.name)?.id;
    const category = categorys?.find(
      item => item.name === product?.category,
    )?.id;
    setBrandSelect(brand);
    setCategorySelect(category);
    const dataRegister = {
      name: product?.name || '',
      stock: product?.stock || '',
      portions: product?.value?.portions || 0,
      price: product?.value?.common_price || 0,
      feesMonthly: product?.value?.fees_monthly || 0,
      feesCredit: product?.value?.fees_credit || 0,
      warranty: product?.warranty || 0,
      model: product?.model || '',
      category: String(category) || 'null',
      brand: String(brand) || 'null',
    };
    Object.keys(dataRegister).forEach(campo => {
      if (!register(campo)) return; // Garante que o campo está registrado no formulário
      if (!register(campo).value) setValue(campo, dataRegister[campo]);
    });
  };

  useEffect(() => {
    console.log('product for edit: ', product);
    handleSetInputs();
  }, [product]);

  return {
    categorys,
    brands,
    categorySelect,
    setCategorySelect,
    brandSelect,
    setBrandSelect,
    handleCreateProduct,
    register,
    handleSubmit,
    errors,
  };
};

export const productZod = z
  .object({
    name: z
      .string()
      .min(5, 'Este campo deve ter no mínimo 5 caracteres')
      .transform(field => DOMPurify.sanitize(field)),
    model: z.string().transform(field => DOMPurify.sanitize(field)),
    // brand: z.string().transform(field => DOMPurify.sanitize(field)),
    stock: z
      .number()
      .int()
      .positive()
      .transform(field => DOMPurify.sanitize(field)),
    portions: z
      .number()
      .int()
      .positive()
      .transform(field => DOMPurify.sanitize(field)),
    warranty: z
      .number()
      .int()
      .positive()
      .transform(field => DOMPurify.sanitize(field)),
    price: z
      .number()
      .positive()
      .refine(value => !Number.isNaN(value) && Number.isFinite(value), {
        message: 'O preço deve ser um número real',
      })
      .transform(field => DOMPurify.sanitize(field)),
    feesMonthly: z
      .number()
      .positive()
      .refine(value => !Number.isNaN(value) && Number.isFinite(value), {
        message: 'O preço deve ser um número real',
      })
      .transform(field => DOMPurify.sanitize(field)),
    feesCredit: z
      .number()
      .positive()
      .refine(value => !Number.isNaN(value) && Number.isFinite(value), {
        message: 'O preço deve ser um número real',
      })
      .transform(field => DOMPurify.sanitize(field)),
    category: z
      .string()
      .nonempty({ message: 'Selecione uma categoria' })
      .transform(field => DOMPurify.sanitize(field)),
    brand: z
      .string()
      .nonempty({ message: 'Selecione uma Marca' })
      .transform(field => DOMPurify.sanitize(field)),
  })
  .required();

export default useEditProducts;
