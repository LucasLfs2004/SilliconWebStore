import { Container } from '../../CommomStyles';
import BtnSubmit from '../../components/BtnSubmit';
import Footer from '../../components/Footer';
import HeaderPage from '../../components/HeaderAlternative';
import {
  InputImgNeumorphism,
  InputNeumorphism,
} from '../../components/InputNeumorphism';
import ToastComponent from '../../components/ToastComponent';
import { api_path } from '../../constants/api_path';
import BannerComponent from './components/bannerComponent';
import VoucherComponent from './components/voucherComponent';
import * as C from './styles';
import useAdminPage from './useAdminPage';

const AdminScreen = () => {
  const {
    brands,
    categorys,
    brandEditId,
    setBrandEditId,
    categoryRequest,
    categoryEditId,
    setCategoryEditId,
    handleFileChange,
    setCategoryNameInput,
    categoryNameInput,
    brandNameInput,
    setBrandNameInput,
    setLogoBrand,
    logoBrand,
    setBlackLogoBrand,
    iconCategory,
    blackLogoBrand,
    cleanCategoryForm,
    cleanBrandForm,
    brandRequest,
    handleDeleteCategory,
    handleDeleteBrand,
    banners,
  } = useAdminPage();

  return (
    <Container>
      <ToastComponent />
      <HeaderPage page_title={'Administração da Loja'} />
      <C.ContentPage>
        <C.Box className='row-gap' rg={'32px'}>
          <C.ComponentNeumorphism>
            <C.Title>Categorias</C.Title>
            <C.ListContent>
              {categorys &&
                categorys.map((item, index) => (
                  <C.RowCard key={`categorys-row-component-${index}`}>
                    <C.NameComponent>{item.name}</C.NameComponent>
                    <C.IdComponent>
                      <span>ID:</span> {item.id}
                    </C.IdComponent>
                    <C.ActionsArea>
                      <C.BtnAction
                        onClick={() => handleDeleteCategory(item.id)}
                      >
                        <img src='/assets/icons/trash.svg' alt='' />
                      </C.BtnAction>
                      <C.BtnAction
                        onClick={() => {
                          setCategoryEditId(item.id);
                          setCategoryNameInput(item.name);
                        }}
                      >
                        <img src='/assets/icons/editIconPurple.svg' alt='' />
                      </C.BtnAction>
                    </C.ActionsArea>
                  </C.RowCard>
                ))}
            </C.ListContent>
            <C.Form onSubmit={e => categoryRequest(e)}>
              <C.Box className='box-form'>
                <C.Title className='mini left'>
                  {categoryEditId !== undefined && categoryEditId !== null
                    ? `Editar categoria: ${categoryEditId}`
                    : 'Nova categoria'}
                </C.Title>
                <C.BtnCancel onClick={cleanCategoryForm}>Limpar</C.BtnCancel>
              </C.Box>
              <C.Box className='box-form'>
                <C.Column>
                  <InputNeumorphism
                    width={'76%'}
                    id={'category-name-input'}
                    placeholder={'nome'}
                    label={'Nome:'}
                    valueInput={categoryNameInput}
                    setValueInput={setCategoryNameInput}
                  />
                </C.Column>
                {/* {iconCategory?.preview && (
                  <C.LogoDiv>
                    <p>Ícone:</p>
                    <img src={iconCategory.preview} alt='' />
                  </C.LogoDiv>
                )} */}
              </C.Box>
              <BtnSubmit
                type='submit'
                text={categoryEditId ? 'Editar' : 'Adicionar'}
              />
            </C.Form>
          </C.ComponentNeumorphism>
          <C.ComponentNeumorphism>
            <C.Title>Marcas</C.Title>
            <C.ListContent>
              {brands &&
                brands.map((item, index) => (
                  <C.RowCard key={`brands-row-component-${index}`}>
                    <C.ImageComponent>
                      <img
                        src={`${api_path}/image/brand/${item.brand_logo_black}`}
                        alt=''
                      />
                    </C.ImageComponent>
                    <C.NameComponent>{item.name}</C.NameComponent>
                    <C.IdComponent>
                      <span>ID: </span>
                      {item.id}
                    </C.IdComponent>
                    <C.ActionsArea>
                      <C.BtnAction onClick={() => handleDeleteBrand(item.id)}>
                        <img src='/assets/icons/trash.svg' alt='' />
                      </C.BtnAction>
                      <C.BtnAction
                        type='button'
                        onClick={() => {
                          setBrandEditId(item.id);
                          setBrandNameInput(item.name);
                          setBlackLogoBrand({
                            preview: `${api_path}/image/brand/${item.brand_logo_black}`,
                          });
                          setLogoBrand({
                            preview: `${api_path}/image/brand/${item.brand_logo}`,
                          });
                        }}
                      >
                        <img src='/assets/icons/editIconPurple.svg' alt='' />
                      </C.BtnAction>
                    </C.ActionsArea>
                  </C.RowCard>
                ))}
            </C.ListContent>
            <C.Box className='box-form'>
              <C.Title className='mini left'>
                {brandEditId ? `Editar marca (${brandEditId})` : 'Nova marca'}
              </C.Title>
              <C.BtnCancel onClick={cleanBrandForm}>Limpar</C.BtnCancel>
            </C.Box>
            <C.Form onSubmit={e => brandRequest(e)}>
              <C.Box className='box-form break-mobile'>
                <C.Column>
                  <InputNeumorphism
                    id={'brand-name'}
                    label={'Nome:'}
                    placeholder={'nome'}
                    valueInput={brandNameInput}
                    setValueInput={setBrandNameInput}
                    width={'76%'}
                  />
                  <InputImgNeumorphism
                    id={'logo-white-input-img'}
                    multipleFiles={false}
                    label={'Logo branco:'}
                    setValueInput={e => setLogoBrand(handleFileChange(e))}
                    placeholder={'logo branco'}
                  />
                  <InputImgNeumorphism
                    id={'logo-black-input-img'}
                    multipleFiles={false}
                    label={'Logo preto:'}
                    setValueInput={e => setBlackLogoBrand(handleFileChange(e))}
                    placeholder={'logo preto'}
                  />
                </C.Column>
                <C.Box
                  className='width column-gap preview-logo-brand'
                  width={'auto'}
                  cgap={'12px'}
                >
                  {logoBrand?.preview && (
                    <C.LogoDiv>
                      <p>Logo branco:</p>
                      <img src={logoBrand.preview} alt='' />
                    </C.LogoDiv>
                  )}
                  {blackLogoBrand?.preview && (
                    <C.LogoDiv>
                      <p>Logo preto:</p>
                      <img src={blackLogoBrand.preview} alt='' />
                    </C.LogoDiv>
                  )}
                </C.Box>
              </C.Box>
              <BtnSubmit
                type='submit'
                text={brandEditId ? 'Editar' : 'Adicionar'}
              />
            </C.Form>
          </C.ComponentNeumorphism>
        </C.Box>
        <C.Box className='flex-start row-gap' rg={'32px'}>
          <BannerComponent />
          <VoucherComponent />
        </C.Box>
      </C.ContentPage>
      <Footer />
    </Container>
  );
};

export default AdminScreen;
