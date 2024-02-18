import { Container } from '../../CommomStyles';
import Footer from '../../components/Footer';
import HeaderPage from '../../components/HeaderAlternative';
import { api_path } from '../../constants/api_path';
import * as C from './styles';
import UseMyStore from './useMyStore';

const MyStore = () => {
  const { sellerData } = UseMyStore();

  console.log('REQUESTE DAS INFORMAçÕES de vendedor', sellerData);
  return (
    <Container>
      <HeaderPage
        // img_path={'/assets/icons/carrinho-gradient.svg'}
        page_title={'Minha loja'}
      />
      <C.Main>
        <C.Title>{sellerData?.store_name}</C.Title>
        <C.ProductArea>
          <C.HeaderBox>
            <C.Title className='font-24'>Meus produtos</C.Title>
            <C.BtnAdd
              onClick={() => (window.location.pathname = 'add-product')}
            >
              Adicionar Produto
            </C.BtnAdd>
          </C.HeaderBox>
          {sellerData?.products_from_seller?.map((item, key) => (
            <C.ItemProduct key={key}>
              <C.ImgProduct>
                <img
                  src={`${api_path}/image/product/${item?.images[0]}`}
                  alt=''
                />
              </C.ImgProduct>
              <C.NameProduct>{item.name}</C.NameProduct>
              <C.InfosProduct>
                <C.ItemInfo>
                  <C.Paragraph>
                    Preço <br />
                    <span>
                      {item?.value.price_now
                        ? item?.value.price_now
                        : item?.value?.common_price}
                    </span>
                  </C.Paragraph>
                  <C.Paragraph>
                    Avaliação <br />
                    <span>{item?.rating?.rating_value}</span>
                  </C.Paragraph>
                </C.ItemInfo>
                <C.ItemInfo>
                  <C.Paragraph>
                    Estoque <br />
                    <span>{item?.stock}</span>
                  </C.Paragraph>
                  <C.Paragraph>
                    Garantia <br />
                    <span>
                      {item?.warranty <= 12
                        ? `${item.warranty} meses`
                        : `${item.warranty / 12} anos`}
                    </span>
                  </C.Paragraph>
                </C.ItemInfo>
                <C.ItemInfo>
                  <C.Paragraph>
                    Quantidade vendida <br />
                    <span>0</span>
                  </C.Paragraph>
                  <C.BtnLink>Informações detalhadas</C.BtnLink>
                </C.ItemInfo>
              </C.InfosProduct>
              <C.AreaOptions>
                <C.ActionIcon>
                  <img src='/assets/icons/descriptionIcon.svg' alt='' />
                  <C.Paragraph>
                    Editar <br />
                    descrição
                  </C.Paragraph>
                </C.ActionIcon>
                <C.ActionIcon>
                  <img src='/assets/icons/offerIcon.svg' alt='' />
                  <C.Paragraph>
                    Adicionar <br />
                    promoção
                  </C.Paragraph>
                </C.ActionIcon>
                <C.ActionIcon>
                  <img src='/assets/icons/editIconPurple.svg' alt='' />
                  <C.Paragraph>
                    Editar <br />
                    produto
                  </C.Paragraph>
                </C.ActionIcon>
                <C.ActionIcon>
                  <img src='/assets/icons/trash.svg' alt='' />
                  <C.Paragraph className='red'>
                    Apagar <br />
                    produto
                  </C.Paragraph>
                </C.ActionIcon>
              </C.AreaOptions>
            </C.ItemProduct>
          ))}
        </C.ProductArea>
      </C.Main>

      <Footer />
    </Container>
  );
};

export default MyStore;
