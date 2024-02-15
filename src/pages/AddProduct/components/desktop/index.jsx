import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import {
  Area,
  BtnSubmit,
  Carousel,
  FormInput,
  InputImg,
  ItemDiv,
  Message,
  Section,
  Title,
} from '../../styles';
import useAddProducts from '../../useAddProducts';
import * as C from './styles';

const FormDesk = () => {
  const {
    settings,
    setName,
    errors,
    setModel,
    model,
    brands,
    categorys,
    setBrandSelect,
    brandSelect,
    categorySelect,
    setCategorySelect,
    setWarranty,
    warranty,
    setStock,
    price,
    setPrice,
    portions,
    setPortions,
    feesMonthly,
    setFeesMonthly,
    feesCredit,
    setFeesCredit,
    description,
    setDescription,
    previewImages,
    setPreviewImages,
    handleFileChange,
  } = useAddProducts();
  console.log({ brands: brands, categorys: categorys });
  return (
    <Section>
      <div className='top'>
        <img src='/assets/imgs/vga.svg' alt='' />
        <Title className='title'>Cadastrar produto</Title>
      </div>

      <Area>
        <C.ColumnForm>
          <C.RowBox>
            <FormInput>
              <label htmlFor=''>nome</label>
              <input
                type='text'
                placeholder='nome'
                onChange={e => setName(e.target.value)}
              />
              <p>{errors.price}</p>
            </FormInput>
            <FormInput>
              <label htmlFor=''>modelo</label>
              <input
                type='text'
                placeholder='modelo'
                onChange={e => setModel(e.target.value)}
              />
              <p>{errors.model}</p>
            </FormInput>
          </C.RowBox>
          <C.RowBox>
            <FormInput>
              <label htmlFor=''>categoria</label>
              <select
                name='category'
                id='categorySelect'
                onChange={e => setBrandSelect(e.target.value)}
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
              <p>{errors.price}</p>
            </FormInput>
            <FormInput>
              <label htmlFor=''>marca</label>
              <select
                name='category'
                id='categorySelect'
                onChange={e => setBrandSelect(e.target.value)}
                className={
                  brandSelect !== null && brandSelect !== 'null' && 'selected'
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
              <p>{errors.model}</p>
            </FormInput>
          </C.RowBox>
          <C.RowBox>
            <FormInput>
              <label htmlFor=''>estoque</label>
              <input
                type='number'
                min={0}
                placeholder='estoque'
                onChange={e => setStock(e.target.value)}
              />
              <p>{errors?.estoque}</p>
            </FormInput>
            <FormInput>
              <label htmlFor=''>garantia (meses)</label>
              <input
                type='text'
                placeholder='garantia'
                onChange={e => setWarranty(e.target.value)}
              />
              <p>{errors.model}</p>
            </FormInput>
          </C.RowBox>
          <C.RowBox>
            <FormInput className='half'>
              <label htmlFor=''>preço</label>
              <input
                type='number'
                step={'0.01'}
                min={0}
                placeholder='preço'
                onChange={e => setPrice(e.target.value)}
              />
              <p>{errors?.estoque}</p>
            </FormInput>
            <FormInput className='half'>
              <label htmlFor=''>parcelas</label>
              <input
                type='number'
                step={'1'}
                max={12}
                min={0}
                placeholder='parcelas'
                onChange={e => setPortions(e.target.value)}
              />
              <p>{errors.model}</p>
            </FormInput>
            <FormInput className='half'>
              <label htmlFor=''>juros (crédito)</label>
              <input
                type='number'
                step={'0.01'}
                min={0}
                placeholder='juros'
                onChange={e => setFeesCredit(e.target.value)}
              />
              <p>{errors.model}</p>
            </FormInput>
            <FormInput className='half'>
              <label htmlFor=''>juros (mensal)</label>
              <input
                type='number'
                step={'0.01'}
                min={0}
                placeholder='juros'
                onChange={e => setFeesMonthly(e.target.value)}
              />
              <p>{errors.model}</p>
            </FormInput>
          </C.RowBox>
          <FormInput className='complete-width'>
            <label htmlFor=''>descrição</label>
            <textarea
              placeholder='descrição'
              onChange={e => setDescription(e.target.value)}
            />
            <p>{errors.model}</p>
          </FormInput>
        </C.ColumnForm>
        <C.ColumnForm className='center'>
          <InputImg>
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
          </InputImg>
          <Carousel>
            <Slider className='carousel-image-product' {...settings}>
              {previewImages &&
                previewImages.map((image, index) => (
                  <ItemDiv key={index} className='carousel-item'>
                    <img src={image} alt={`Imagem ${index}`} />
                  </ItemDiv>
                ))}
            </Slider>
          </Carousel>
        </C.ColumnForm>
      </Area>
      <BtnSubmit type='submit'>Cadastrar</BtnSubmit>
      <Message>
        <Link to={'/'}>cancelar</Link>
      </Message>
    </Section>
  );
};

export default FormDesk;
