import { Container } from '../../CommomStyles';
import BtnSubmit from '../../components/BtnSubmit';
import Footer from '../../components/Footer';
import HeaderPage from '../../components/HeaderAlternative';
import {
  InputNeumorphism,
  InputValueNeumorphism,
  TextAreaNeumorphism,
} from '../../components/InputNeumorphism';
import Stars from '../../components/Stars';
import ToastComponent from '../../components/ToastComponent';
import { api_path } from '../../constants/api_path';
import * as C from './styles';
import useRateProduct from './useRateProduct';

const RateProduct = () => {
  const { rateObj, setRateObj, product, postComment } = useRateProduct();

  return (
    <Container className={'dark'}>
      <ToastComponent />
      <HeaderPage page_title={'Avaliar produto'} />
      <C.ContentPage>
        <C.Section onSubmit={e => postComment(e)}>
          <C.Title>Avaliar produto</C.Title>
          <C.ProductArea>
            <div className='img'>
              <img
                src={`${api_path}/image/product/${product?.images[0]}`}
                alt=''
              />
            </div>
            <h1>{product?.name}</h1>
          </C.ProductArea>
          <C.Form>
            <InputNeumorphism
              id={'input-title'}
              label={'Título:'}
              placeholder={'título'}
              valueInput={rateObj.title}
              setValueInput={e => setRateObj(state => ({ ...state, title: e }))}
            />
            <C.Row>
              <InputValueNeumorphism
                id={'rating-value'}
                label={'Avaliação:'}
                placeholder={'avaliação'}
                valueInput={rateObj.rating}
                setValueInput={e => {
                  if (parseFloat(e) <= 5 || e == '') {
                    setRateObj(state => ({ ...state, rating: parseFloat(e) }));
                  }
                }}
                step={'0.5'}
                width={'30%'}
              />
              <Stars rating={rateObj.rating} height={'30px'} />
            </C.Row>
            <TextAreaNeumorphism
              id={'description-rating'}
              label={'Descrição:'}
              placeholder={'descrição'}
              valueInput={rateObj.description}
              setValueInput={e =>
                setRateObj(state => ({ ...state, description: e }))
              }
            />
          </C.Form>
          <BtnSubmit text={'Confirmar'} />
        </C.Section>
      </C.ContentPage>
      <Footer />
    </Container>
  );
};

export default RateProduct;
