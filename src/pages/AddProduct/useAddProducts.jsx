import { useQuery } from '@tanstack/react-query';
import DOMPurify from 'dompurify';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { z } from 'zod';
import { toastErr, toastSuc } from '../../components/ToastComponent';
import {
  createProduct,
  getBrands,
  getCategorys,
} from '../../services/Requests';

const useAddProducts = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const [previewImages, setPreviewImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [categorySelect, setCategorySelect] = useState(null);
  const [brandSelect, setBrandSelect] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState('');
  const [modalDescription, setModalDescription] = useState(false);

  useEffect(() => {
    if (!user && !user?.access_token && !user?.idSeller) {
      navigate('/signin');
    } else if (user?.idSeller === null) {
      navigate('/');
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleFileChange = event => {
    const newfile = Array.from(event.target.files);
    setSelectedFiles(files => [...files, ...newfile]);

    const newImages = newfile.map(file => URL.createObjectURL(file));
    setPreviewImages(prevImages => [...prevImages, ...newImages]);
  };

  const handleCreateProduct = async data => {
    if (selectedFiles.length > 0) {
      try {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('brand_id', data.brand);
        formData.append('category_id', data.category);
        formData.append('price', data.price);
        formData.append('portions', data.portions);
        formData.append('fees_monthly', data.feesMonthly);
        formData.append('fees_credit', data.feesCredit);
        formData.append('stock', data.stock);
        formData.append('featured', true);
        formData.append('warranty', data.warranty);
        formData.append('model', data.model);
        // formData.append('description', data.description);
        selectedFiles.forEach(file => {
          formData.append('files', file, file.name);
        });

        if (
          description !== '' &&
          description !== null &&
          description !== undefined
        ) {
          formData.append('description', description);
        }
        const response = await createProduct(user.access_token, formData);
        if (response) {
          toastSuc('Produto cadastrado!');
          setTimeout(() => navigate('/profile/my-store'), 1500);
        } else {
          toastErr('Erro, não foi possível criar o produto');
        }
      } catch (error) {
        toastErr('Erro, não foi possível criar o produto');
      }
    } else {
      alert('Insira Imagens por favor');
    }
  };

  const confirmChanges = files => {
    setModalVisible(false);
    setSelectedFiles(...files);
  };

  return {
    categorys,
    brands,
    categorySelect,
    setCategorySelect,
    brandSelect,
    setBrandSelect,
    previewImages,
    setPreviewImages,
    settings,
    handleFileChange,
    handleCreateProduct,
    modalVisible,
    setModalVisible,
    selectedFiles,
    setSelectedFiles,
    confirmChanges,
    setPreviewImages,
    description,
    setDescription,
    modalDescription,
    setModalDescription,
  };
};

export const productZod = z
  .object({
    name: z
      .string()
      .min(5, 'Este campo deve ter no mínimo 5 caracteres')
      .transform(field => DOMPurify.sanitize(field)),
    // model: z.string().transform(field => DOMPurify.sanitize(field)),
    // brand: z.string().transform(field => DOMPurify.sanitize(field)),
    stock: z
      .number({
        required_error: 'Este campo é obrigatório!',
        invalid_type_error: 'Preencha o campo corretamente.',
      })
      .int()
      .positive()
      .transform(field => DOMPurify.sanitize(field)),
    portions: z
      .number({
        required_error: 'Este campo é obrigatório!',
        invalid_type_error: 'Preencha o campo corretamente.',
      })
      .int()
      .positive()
      .transform(field => DOMPurify.sanitize(field)),
    warranty: z
      .number({
        required_error: 'Este campo é obrigatório!',
        invalid_type_error: 'Preencha o campo corretamente.',
      })
      .int()
      .positive()
      .transform(field => DOMPurify.sanitize(field)),
    price: z
      .number({
        required_error: 'Este campo é obrigatório!',
        invalid_type_error: 'Preencha o campo corretamente.',
      })
      .positive()
      .refine(value => !Number.isNaN(value) && Number.isFinite(value), {
        message: 'O preço deve ser um número real',
      })
      .transform(field => DOMPurify.sanitize(field)),
    feesMonthly: z
      .number({
        required_error: 'Este campo é obrigatório!',
        invalid_type_error: 'Preencha o campo corretamente.',
      })
      .positive()
      .refine(value => !Number.isNaN(value) && Number.isFinite(value), {
        message: 'O preço deve ser um número real',
      })
      .transform(field => DOMPurify.sanitize(field)),
    feesCredit: z
      .number({
        required_error: 'Este campo é obrigatório!',
        invalid_type_error: 'Preencha o campo corretamente.',
      })
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

export default useAddProducts;
