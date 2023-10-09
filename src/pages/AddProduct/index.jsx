import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import BtnSubmit from '../../components/BtnSubmit';
import Header from '../../components/Header/header';
import * as C from './styles';

import { createProduct } from '../../services/Requests';
import { brands, categorys } from './product';

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
    <C.Container>
      <Header />
      <C.Section>
        <div className='top'>
          <img src='/assets/imgs/vga.svg' alt='' />
          <C.Title className='title'>Cadastrar produto</C.Title>
        </div>
        <C.Area ref={widthAreaRef}>
          <C.Form
            marginLeft={scrollX}
            ref={widthScroll}
            onSubmit={handleSubmit}
          >
            <C.DivWrap width={itemWidth}>
              <C.FormInput>
                <label>nome</label>
                <input
                  type='text'
                  placeholder={'nome'}
                  onChange={e => setName(e.target.value)}
                />
                <p>{errors?.name}</p>
              </C.FormInput>
              <C.FormInput className='category'>
                <label>marca</label>

                <C.RowInput view={brandSelect === 'outro'}>
                  <select
                    name='category'
                    id='categorySelect'
                    onChange={e => setBrandSelect(e.target.value)}
                    className={
                      brandSelect !== null &&
                      brandSelect !== 'null' &&
                      'selected'
                    }
                  >
                    <option checked value={'null'}>
                      Selecionar
                    </option>
                    {brands &&
                      brands.map((item, key) => {
                        const brand = item
                          .toLowerCase()
                          .trim()
                          .replaceAll(' ', '_')
                          .normalize('NFD')
                          .replace(/[\u0300-\u036f]/g, '');
                        return (
                          <option key={key} value={brand}>
                            {item}
                          </option>
                        );
                      })}
                  </select>
                  <C.InputVisible
                    type='text'
                    placeholder={'marca'}
                    view={brandSelect === 'outro'}
                    onChange={e => setBrand(e.target.value)}
                  />
                </C.RowInput>
                <p>{errors?.brand}</p>
              </C.FormInput>
              <C.FormInput>
                <label>preço</label>
                <input
                  type='number'
                  name=''
                  id=''
                  step='0.01'
                  placeholder='preço'
                  className='no-spin'
                  onChange={e => setPrice(e.target.value)}
                />
                <p>{errors?.price}</p>
              </C.FormInput>
              <C.FormInput>
                <label>estoque</label>
                <input
                  type='number'
                  className='no-spin'
                  placeholder={'estoque'}
                  onChange={e => setStock(e.target.value)}
                />
                <p>{errors?.stock}</p>
              </C.FormInput>
              <C.FormInput className='category'>
                <label>categoria</label>

                <C.RowInput view={categorySelect === 'outro'}>
                  <select
                    name='category'
                    id='categorySelect'
                    onChange={e => setCategorySelect(e.target.value)}
                    className={
                      categorySelect !== null &&
                      categorySelect !== 'null' &&
                      'selected'
                    }
                  >
                    <option checked value={'null'}>
                      Selecionar
                    </option>
                    {categorys &&
                      categorys.map((item, key) => {
                        const category = item
                          .toLowerCase()
                          .trim()
                          .replaceAll(' ', '_')
                          .normalize('NFD')
                          .replace(/[\u0300-\u036f]/g, '');
                        return (
                          <option key={key} value={category}>
                            {item}
                          </option>
                        );
                      })}
                  </select>
                  <C.InputVisible
                    type='text'
                    placeholder={'categoria'}
                    onChange={e => setCategory(e.target.value)}
                    view={categorySelect === 'outro'}
                  />
                </C.RowInput>
                <p>{errors?.category}</p>
              </C.FormInput>
              <C.FormInput>
                <label>descrição</label>
                <textarea
                  type='text'
                  placeholder={'descrição'}
                  onChange={e => setDescription(e.target.value)}
                />
                <p>{errors?.description}</p>
              </C.FormInput>
              <C.RadioInput>
                <p>lançamento</p>
                <div className='optionLancamento'>
                  <input
                    type='radio'
                    checked={isFeatured}
                    onChange={e => setIsFeatured(true)}
                    name='lancamento'
                    id='sim'
                  />
                  <label htmlFor='sim'>Sim</label>
                  <input
                    type='radio'
                    checked={!isFeatured}
                    name='lancamento'
                    id='nao'
                    onChange={e => setIsFeatured(false)}
                  />
                  <label htmlFor='nao'>Não</label>
                </div>
              </C.RadioInput>
              <C.BtnNavigation type='button' onClick={e => nextStep(e)}>
                Próximo
              </C.BtnNavigation>
            </C.DivWrap>
            <C.DivWrap width={itemWidth}>
              <C.InputImg>
                <p>Adicionar imagens</p>
                <input
                  type='file'
                  id='img-input'
                  src=''
                  alt=''
                  accept='image/png, image/jpeg'
                  multiple
                  onChange={handleFileChange}
                />
                <label htmlFor='img-input'>
                  <img src='/assets/imgs/vgathin.svg' alt='vga' />
                  <p>adicionar imagens</p>
                </label>
              </C.InputImg>

              <C.Carousel>
                <Slider className='carousel-image-product' {...settings}>
                  {previewImages &&
                    previewImages.map((image, index) => (
                      <C.ItemDiv key={index} className='carousel-item'>
                        <img src={image} alt={`Imagem ${index}`} />
                      </C.ItemDiv>
                    ))}
                </Slider>
              </C.Carousel>
              <BtnSubmit text={'Criar'} type='submit' />
              <C.BtnNavigation text={'Voltar'} onClick={e => handleBackForm(e)}>
                Voltar
              </C.BtnNavigation>
            </C.DivWrap>
            {/* <BtnSubmit text={'Criar'} type='submit' /> */}
          </C.Form>
        </C.Area>
        <C.Message>
          <Link to={'/'}>cancelar</Link>
        </C.Message>
      </C.Section>
      <C.Footer>
        <p>SILLICON STORE - VAREJO DE PRODUTOS DE INFORMÁTICA LTDA</p>
        <Link to={'/'}>TERMOS E PRIVACIDADE</Link>
      </C.Footer>
    </C.Container>
  );
};

export default AddProduct;
