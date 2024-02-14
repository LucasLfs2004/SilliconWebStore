import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getBrands, getCategorys } from '../../services/Requests';

const useAddProducts = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState(0);
  const [brand, setBrand] = useState('');
  const [brandSelect, setBrandSelect] = useState('null');
  const [category, setCategory] = useState(null);
  const [categorySelect, setCategorySelect] = useState('null');
  const [product, setProduct] = useState({});
  const [errors, setErrors] = useState({});
  const [isFeatured, setIsFeatured] = useState(false);
  const [model, setModel] = useState('');
  const [warranty, setWarranty] = useState('');
  const [portions, setPortions] = useState(0);
  const [feesMonthly, setFeesMonthly] = useState(0);
  const [feesCredit, setFeesCredit] = useState(0);
  const [previewImages, setPreviewImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const { data: brands } = useQuery({
    queryKey: ['brands-add-product'],
    queryFn: async () => await getBrands(),
  });
  const { data: categorys } = useQuery({
    queryKey: ['categorys-add-product'],
    queryFn: async () => await getCategorys(),
  });

  // console.log(brand);
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

  return {
    name,
    setName,
    price,
    setPrice,
    description,
    setDescription,
    stock,
    setStock,
    warranty,
    setWarranty,
    brand,
    setBrand,
    brandSelect,
    setBrandSelect,
    category,
    setCategory,
    categorySelect,
    setCategorySelect,
    product,
    setProduct,
    errors,
    setErrors,
    isFeatured,
    setIsFeatured,
    model,
    setModel,
    categorys,
    brands,
    portions,
    setPortions,
    feesCredit,
    setFeesCredit,
    feesMonthly,
    setFeesMonthly,
    previewImages,
    setPreviewImages,
    settings,
    handleFileChange,
  };
};

export default useAddProducts;
