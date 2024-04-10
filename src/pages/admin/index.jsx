import { Container } from '../../CommomStyles';
import BtnSubmit from '../../components/BtnSubmit';
import Footer from '../../components/Footer';
import HeaderPage from '../../components/HeaderAlternative';
import {
  InputImgNeumorphism,
  InputNeumorphism,
} from '../../components/InputNeumorphism';
import { api_path } from '../../constants/api_path';
import * as C from './styles';
import useAdminPage from './useAdminPage';

const AdminScreen = () => {
  const {
    brands,
    categorys,
    edit,
    nameInput,
    setNameInput,
    brandEditId,
    setBrandEditId,

    categoryEditId,
    setCategoryEditId,
    handleFileChange,
    setCategoryNameInput,
    categoryNameInput,
    setProductEditId,
    brandNameInput,
    setBrandNameInput,
    setLogoBrand,
    logoBrand,
    setBlackLogoBrand,
    setIconCategory,
    iconCategory,
    blackLogoBrand,
  } = useAdminPage();
  console.log({ brands: brands, categorys: categorys });

  return (
    <Container>
      <HeaderPage page_title={'Administração da Loja'} />
      <C.ContentPage>
        <C.Box>
          <C.ComponentNeumorphism>
            <C.Title>Categorias</C.Title>
            <C.ListContent>
              {categorys?.map((item, index) => (
                <C.RowCard key={`categorys-row-component-${index}`}>
                  <C.NameComponent>{item.name}</C.NameComponent>
                  <C.IdComponent>
                    <span>ID:</span> {item.id}
                  </C.IdComponent>
                  <C.ActionsArea>
                    <C.BtnAction>
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
            <C.Form>
              <C.Title className='mini left'>
                {categoryEditId !== undefined && categoryEditId !== null
                  ? 'Editar categoria'
                  : 'Nova categoria'}
              </C.Title>
              <C.Box>
                <C.Column>
                  <InputNeumorphism
                    width={'76%'}
                    id={'category-name-input'}
                    placeholder={'nome'}
                    label={'Nome:'}
                    valueInput={categoryNameInput}
                    setValueInput={setCategoryNameInput}
                  />
                  <InputImgNeumorphism
                    id={'icone-category-input-img'}
                    multipleFiles={false}
                    label={'Ícone:'}
                    setValueInput={e => setIconCategory(handleFileChange(e))}
                    placeholder={'ícone'}
                  />
                </C.Column>
                {iconCategory?.preview && (
                  <C.LogoDiv>
                    <p>Ícone:</p>
                    <img src={iconCategory.preview} alt='' />
                  </C.LogoDiv>
                )}
              </C.Box>
              <BtnSubmit type='submit' text={edit ? 'Editar' : 'Adicionar'} />
            </C.Form>
          </C.ComponentNeumorphism>
          <C.ComponentNeumorphism>
            <C.Title>Marcas</C.Title>
            <C.ListContent>
              {brands?.map((item, index) => (
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
                    <C.BtnAction>
                      <img src='/assets/icons/trash.svg' alt='' />
                    </C.BtnAction>
                    <C.BtnAction
                      onClick={() => {
                        setProductEditId(item.id);
                        setNameInput(item.name);
                      }}
                    >
                      <img src='/assets/icons/editIconPurple.svg' alt='' />
                    </C.BtnAction>
                  </C.ActionsArea>
                </C.RowCard>
              ))}
            </C.ListContent>
            <C.Title className='mini left'>Nova marca</C.Title>
            <C.Form>
              <C.Box>
                <C.Column>
                  <InputNeumorphism
                    id={'brand-name'}
                    label={'Nome:'}
                    placeholder={'nome'}
                    value={brandNameInput}
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
                  className='width column-gap'
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
              <BtnSubmit type='submit' text={'Adicionar'} />
            </C.Form>
          </C.ComponentNeumorphism>
        </C.Box>
      </C.ContentPage>
      <Footer />
    </Container>
  );
};

export default AdminScreen;
