import { Link } from 'react-router-dom';
import BtnSubmit from '../../components/BtnSubmit';
import Header from '../../components/Header';
import * as C from './styles';

const AddProduct = () => {
  //   const {
  //     handleSubmit,
  //     register,
  //     formState: { errors },
  //   } = useForm({
  //     mode: 'all',
  //     resolver: zodResolver(CreateAccountZod),
  //   });
  return (
    <C.Container>
      <Header />
      <C.Section>
        <div className='top'>
          <img src='/assets/imgs/vga.svg' alt='' />
          <C.Title className='title'>Criar conta</C.Title>
        </div>
        <C.Form>
          <C.FormInput>
            <label>nome</label>
            <input type='text' placeholder={'nome'} />
            {/* <p>{errors?.name?.message}</p> */}
          </C.FormInput>
          <C.FormInput>
            <label>marca</label>
            <input type='text' placeholder='marca' />
            {/* <p>{errors?.cpf?.message}</p> */}
          </C.FormInput>
          <C.FormInput>
            <label>preço</label>
            <input type='number' name='' id='' placeholder='preço' />
            {/* <p>{errors?.phone?.message}</p> */}
          </C.FormInput>
          <C.FormInput>
            <label>estoque</label>
            <input type='number' placeholder={'estoque'} />
            {/* <p>{errors?.email?.message}</p> */}
          </C.FormInput>
          <C.FormInput>
            <label>categoria</label>
            <input type='text' placeholder={'categoria'} />
            {/* <p>{errors?.birth?.message}</p> */}
          </C.FormInput>
          <C.FormInput>
            <label>descrição</label>
            <textarea type='text' placeholder={'descrição'} />
            {/* <p>{errors?.password?.message}</p> */}
          </C.FormInput>
          <BtnSubmit
            text={'Criar conta'}
            // onClick={e => handleCreateAccount(e)}
          />
        </C.Form>
        <C.Message>
          <Link to={'/home'}>cancelar</Link>
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
