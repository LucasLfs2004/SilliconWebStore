import { Container } from '../../CommomStyles';
import BtnSubmit from '../../components/BtnSubmit';
import Footer from '../../components/Footer';
import HeaderPage from '../../components/HeaderAlternative';
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
    productEditId,
    setProductEditId,
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
            <C.Form>
              <C.Title className='mini left'>
                {edit ? 'Editar categoria' : 'Nova categoria'}
              </C.Title>
              <C.Box>
                <C.Column>
                  <C.FormInput>
                    <label htmlFor=''>Nome:</label>
                    <input
                      type='text'
                      placeholder='nome'
                      value={nameInput}
                      onChange={e => setNameInput(e.target.value)}
                    />
                  </C.FormInput>
                  <C.InputImg>
                    <p>Adicionar imagens</p>
                    <input
                      type='file'
                      id='img-input'
                      src=''
                      alt=''
                      value={''}
                      accept='image/png, image/jpeg, .svg'
                      // onChange={handleFileChange}
                    />
                    <label htmlFor='img-input'>
                      <img src='/assets/imgs/vgathin.svg' alt='vga' />
                      <p>adicionar imagens</p>
                    </label>
                  </C.InputImg>
                </C.Column>
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
                  {/* <C.ColumnDiv> */}
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
                  {/* </C.ColumnDiv> */}
                </C.RowCard>
              ))}
            </C.ListContent>
          </C.ComponentNeumorphism>
        </C.Box>
      </C.ContentPage>
      <Footer />
    </Container>
  );
};

export default AdminScreen;
