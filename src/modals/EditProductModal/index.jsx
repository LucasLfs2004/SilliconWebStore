import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import * as C from './styles';

import { BtnCloseTop, ContainerModal, ModalWhite } from '../../CommomStyles';
import useEditProducts from './useEditProducts';

const EditProductModal = ({ visible, closeModal, product, refetch }) => {
  const {
    brands,
    categorys,
    brandSelect,
    setBrandSelect,
    categorySelect,
    setCategorySelect,
    handleCreateProduct,
    register,
    handleSubmit,
    errors,
  } = useEditProducts(product, refetch, closeModal);

  return (
    <ContainerModal visible={visible ? 'flex' : 'none'} pt={'48px'}>
      <ModalWhite width={'fit-content'} height={'min-content'} padding={'32px'}>
        <C.Section onSubmit={handleSubmit(handleCreateProduct)}>
          <C.TopContent>
            <div className='top'>
              <img src='/assets/imgs/vga.svg' alt='' />
              <C.Title className='title'>Editar produto</C.Title>
            </div>
            <BtnCloseTop type='button' onClick={closeModal}>
              Cancelar
            </BtnCloseTop>
          </C.TopContent>

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
                      categorys?.map((item, key) => {
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
                      brands !== null &&
                      brands !== undefined &&
                      brands.map((item, key) => {
                        return (
                          <option key={key} value={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                  </select>
                  <p>{errors?.brand}</p>
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
            </C.ColumnForm>
          </C.Form>
          <C.BtnSubmit type='submit'>Alterar</C.BtnSubmit>
        </C.Section>
      </ModalWhite>
    </ContainerModal>
  );
};

export default EditProductModal;
