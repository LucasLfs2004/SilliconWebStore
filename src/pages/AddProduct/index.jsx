import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Header from '../../components/Header';
import * as C from './styles';

import { Container } from '../../CommomStyles';
import { createProduct } from '../../services/Requests';
import FormDesk from './components/desktop';
import { categorys } from './product';

const AddProduct = () => {
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

  // console.log(brand);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [scrollX, setScrollX] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const widthAreaRef = useRef(null);
  const widthScroll = useRef(null);

  const nextStep = e => {
    e.preventDefault();
    e.stopPropagation();
    validateInputs() && handleRightArrow();
  };

  const handleSubmit = async e => {
    e.preventDefault();
    e.stopPropagation();

    if (validateInputs()) {
      const formData = new FormData();
      console.log(product);

      formData.append('owner', product.owner);
      formData.append('name', product.name);
      formData.append('description', product.description);
      formData.append('brand', product.brand);
      formData.append('category', product.category);
      formData.append('price', product.price);
      formData.append('stock', product.stock);
      formData.append('featured', product.featured);
      selectedFiles.forEach(file => {
        formData.append('files', file, file.name);
      });
      console.log(formData);
      try {
        const data = await createProduct(formData);
        console.log(data);
        alert('Produto cadastrado com sucesso');
      } catch (error) {
        console.log(error);
        alert('Ocorreu um erro!');
      }
    } else {
      handleLeftArrow();
    }

    // console.log('Submit');
  };

  let categorias = [];

  categorys.forEach(categoria => {
    let objeto = {
      id: 'string',
      name: categoria
        .toLowerCase()
        .trim()
        .replaceAll(' ', '_')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, ''),
    };
    categorias.push(objeto);
  });

  // console.log(categorias);

  const validateInputs = () => {
    let valid = true;

    let erro = {
      name: '',
      brand: '',
      description: '',
      category: '',
      stock: '',
      price: '',
    };
    let product = {
      owner: JSON.parse(localStorage.getItem('user')).id,
      featured: isFeatured,
      category: 'notebook',
    };

    if (name.length > 3) {
      product.name = name;
    } else {
      erro.name = 'O nome precisa ter no mínimo 3 caracteres';
      valid = false;
    }

    if (description.length > 15) {
      product.description = description;
    } else {
      erro.description = 'A descrição precisa ter no mínimo 15 caracteres';
      valid = false;
    }

    if (stock > 0) {
      product.stock = stock;
    } else {
      erro.stock = 'Insira uma quantidade válida';
      valid = false;
    }
    if (price > 0) {
      product.price = price;
    } else {
      erro.price = 'Insira um preço válido';
      valid = false;
    }

    if (categorySelect !== 'null' && categorySelect !== 'outro') {
      product.category = categorySelect;
    } else if (categorySelect === 'outro' && category !== '') {
      product.category = category;
    } else {
      erro.category = 'Selecione uma categoria para o produto';
      valid = false;
    }

    if (brandSelect !== 'null' && brandSelect !== 'outro') {
      product.brand = brandSelect.toLowerCase();
    } else if (brandSelect === 'outro' && brand !== '') {
      product.brand = brand;
    } else {
      erro.brand = 'Adicione a marca do produto';
      valid = false;
    }

    !valid ? setErrors(erro) : setErrors({});
    valid && setProduct(product);
    return valid;
  };

  const handleBackForm = e => {
    e.preventDefault();
    e.stopPropagation();
    handleLeftArrow();
  };

  const handleLeftArrow = () => {
    let x = scrollX;
    const area = widthAreaRef.current.offsetWidth;
    const left = x - area;
    if (left >= 0) {
      setScrollX(left);
    }
  };

  const handleFileChange = event => {
    const newfile = Array.from(event.target.files);
    setSelectedFiles(files => [...files, ...newfile]);

    const newImages = newfile.map(file => URL.createObjectURL(file));
    setPreviewImages(prevImages => [...prevImages, ...newImages]);
  };

  const handleRightArrow = () => {
    const area = widthAreaRef.current.offsetWidth;
    setScrollX(area);
  };

  useEffect(() => {
    setItemWidth(widthAreaRef?.current?.offsetWidth);
  }, []);

  return (
    <Container>
      <Header />
      <C.Body>
        <C.Section>
          <div className='top'>
            <img src='/assets/imgs/vga.svg' alt='' />
            <C.Title className='title'>Cadastrar produto</C.Title>
          </div>
          {window.screen.width > 1024 && <FormDesk />}
        </C.Section>
      </C.Body>
      <C.Footer>
        <p>SILLICON STORE - VAREJO DE PRODUTOS DE INFORMÁTICA LTDA</p>
        <Link to={'/'}>TERMOS E PRIVACIDADE</Link>
      </C.Footer>
    </Container>
  );
};

export default AddProduct;
