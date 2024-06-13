import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Header from '../../components/Header';
import * as C from './styles';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Slider from 'react-slick';
import { Container } from '../../CommomStyles';
import ToastComponent from '../../components/ToastComponent';
import DescriptionModal from '../../modals/DescriptionModal';
import ModalImage from './modalImg';
import useAddProducts, { productZod } from './useAddProducts';

const AddProduct = () => {
  const {
    settings,
    brands,
    categorys,
    brandSelect,
    setBrandSelect,
    categorySelect,
    setCategorySelect,
    previewImages,
    handleFileChange,
    handleCreateProduct,
    modalVisible,
    setModalVisible,
    setSelectedFiles,
    setPreviewImages,
    selectedFiles,
    description,
    setDescription,
    modalDescription,
    setModalDescription,
  } = useAddProducts();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: zodResolver(productZod),
  });

  return (
    <Container>
      <Header />
      <ToastComponent />
      <C.Body>
        <C.Section onSubmit={handleSubmit(handleCreateProduct)}>
          <div className='top'>
            <img src='/assets/imgs/vga.svg' alt='' />
            <C.Title className='title'>Cadastrar produto</C.Title>
          </div>

          <C.Form>
            <C.ColumnForm>
              <C.Box>
                <C.FormInput>
                  <label htmlFor=''>nome</label>
                  <input
                    maxLength={255}
                    type='text'
                    placeholder='nome'
                    {...register('name')}
                  />
                  <p>{errors?.name?.message}</p>
                </C.FormInput>
                <C.FormInput>
                  <label htmlFor=''>modelo</label>
                  <input
                    type='text'
                    placeholder='modelo'
                    {...register('model')}
                  />
                  <p>{errors?.model?.message}</p>
                </C.FormInput>
              </C.Box>
              <C.Box>
                <C.FormInput>
                  <label htmlFor=''>categoria</label>
                  <select
                    name='category'
                    id='categorySelect'
                    {...register('category')}
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
                        return (
                          <option key={key} value={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                  </select>
                  <p>{errors?.category?.message}</p>
                </C.FormInput>
                <C.FormInput>
                  <label htmlFor=''>marca</label>
                  <select
                    name='brand'
                    id='brandSelect'
                    {...register('brand')}
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
                        return (
                          <option key={key} value={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                  </select>
                  <p>{errors?.model}</p>
                </C.FormInput>
              </C.Box>
              <C.Box>
                <C.FormInput>
                  <label htmlFor=''>estoque</label>
                  <input
                    type='number'
                    min={0}
                    placeholder='estoque'
                    {...register('stock', { valueAsNumber: true })}
                    // onChange={e => setStock(e.target.value)}
                  />
                  <p>{errors?.stock?.message}</p>
                </C.FormInput>
                <C.FormInput>
                  <label htmlFor=''>garantia (meses)</label>
                  <input
                    type='number'
                    min={0}
                    placeholder='garantia'
                    {...register('warranty', { valueAsNumber: true })}
                    // onChange={e => setWarranty(e.target.value)}
                  />
                  <p>{errors?.warranty?.message}</p>
                </C.FormInput>
              </C.Box>
              <C.Box>
                <C.FormInput className='half'>
                  <label htmlFor=''>preço</label>
                  <input
                    type='number'
                    step={'0.01'}
                    min={0}
                    {...register('price', { valueAsNumber: true })}
                    placeholder='preço'
                    // onChange={e => setPrice(e.target.value)}
                  />
                  <p>{errors?.price?.message}</p>
                </C.FormInput>
                <C.FormInput className='half'>
                  <label htmlFor=''>parcelas</label>
                  <input
                    type='number'
                    step={'1'}
                    max={12}
                    min={0}
                    placeholder='parcelas'
                    {...register('portions', { valueAsNumber: true })}
                    // onChange={e => setPortions(e.target.value)}
                  />
                  <p>{errors?.portions?.message}</p>
                </C.FormInput>
                <C.FormInput className='half'>
                  <label htmlFor=''>juros (crédito)</label>
                  <input
                    type='number'
                    step={'0.01'}
                    min={0}
                    placeholder='juros'
                    {...register('feesMonthly', { valueAsNumber: true })}
                    // onChange={e => setFeesCredit(e.target.value)}
                  />
                  <p>{errors?.feesMonthly?.message}</p>
                </C.FormInput>
                <C.FormInput className='half'>
                  <label htmlFor=''>juros (mensal)</label>
                  <input
                    type='number'
                    step={'0.01'}
                    min={0}
                    placeholder='juros'
                    {...register('feesCredit', { valueAsNumber: true })}
                  />
                  <p>{errors?.feesCredit?.message}</p>
                </C.FormInput>
              </C.Box>
              <C.FormInput className='complete-width'>
                <C.BtnDescription
                  type='button'
                  onClick={() => setModalDescription(true)}
                >
                  Adicionar descrição
                </C.BtnDescription>
              </C.FormInput>
            </C.ColumnForm>
            <C.ColumnForm className='center'>
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
              {previewImages.length > 0 && (
                <C.BtnModal type='button' onClick={() => setModalVisible(true)}>
                  <img src='/assets/icons/editIconGray.svg' alt='' />
                  <p>Editar ordem</p>
                </C.BtnModal>
              )}
            </C.ColumnForm>
          </C.Form>
          <C.BtnSubmit type='submit'>Cadastrar</C.BtnSubmit>
          <C.Message>
            <Link to={'/'}>cancelar</Link>
          </C.Message>
        </C.Section>
        {/* {window.screen.width > 1024 ? <FormDesk /> : <FormMobile />} */}
      </C.Body>
      <C.Footer>
        <p>SILLICON STORE - VAREJO DE PRODUTOS DE INFORMÁTICA LTDA</p>
        <Link to={'/'}>TERMOS E PRIVACIDADE</Link>
      </C.Footer>
      <ModalImage
        images={previewImages}
        files={selectedFiles}
        visible={modalVisible}
        setModalVisible={setModalVisible}
        setFiles={setSelectedFiles}
        setImages={setPreviewImages}
        closeModal={() => setModalVisible(false)}
      />
      <DescriptionModal
        visible={modalDescription}
        editor={description}
        setEditor={setDescription}
        closeModal={() => setModalDescription(false)}
        submit={() => setModalDescription(false)}
      />
    </Container>
  );
};

export default AddProduct;
