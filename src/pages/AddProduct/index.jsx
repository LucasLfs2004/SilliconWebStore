import { useEffect, useRef, useState } from 'react';

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
  const [scrollX, setScrollX] = useState(0);
  const numberOfItens = 1;
  const [itemWidth, setItemWidth] = useState(0);
  const widthAreaRef = useRef(null);
  const widthScroll = useRef(null);

  const nextStep = e => {
    e.preventDefault();
    handleRightArrow();
  };

  const handleLeftArrow = () => {
    let x = scrollX;
    const area = widthAreaRef.current.offsetWidth;
    const left = x - area;
    console.log(x);
    console.log(area);
    console.log(left);
    if (left >= 0) {
      setScrollX(left);
      console.log(scrollX);
    }
  };
  const handleRightArrow = () => {
    const area = widthAreaRef.current.offsetWidth;
    setScrollX(area);
  };

  useEffect(() => {
    setItemWidth(widthAreaRef?.current?.offsetWidth / numberOfItens);
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
          <C.Scroll marginLeft={scrollX} ref={widthScroll}>
            <C.Form width={itemWidth} onSubmit={nextStep}>
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
              <C.RadioInput>
                <p>lançamento</p>
                <div className='optionLancamento'>
                  <input type='radio' name='lancamento' id='sim' />
                  <label htmlFor='sim'>Sim</label>
                  <input
                    type='radio'
                    checked={true}
                    name='lancamento'
                    id='nao'
                  />
                  <label htmlFor='nao'>Não</label>
                </div>
              </C.RadioInput>
              <BtnSubmit text={'Próximo'} />
            </C.Form>
            <C.Form width={itemWidth}>
              <C.InputImg>
                <p>Adicionar imagens</p>
                <input
                  type='file'
                  id='img-input'
                  src=''
                  alt=''
                  accept='image/png, image/jpeg'
                />
                <label htmlFor='img-input'>
                  <img src='/assets/imgs/vgathin.svg' alt='vga' />
                  <p>adicionar imagens</p>
                </label>
              </C.InputImg>
            </C.Form>
          </C.Scroll>
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