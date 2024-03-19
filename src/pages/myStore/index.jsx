import { Container } from '../../CommomStyles';
import Footer from '../../components/Footer';
import HeaderPage from '../../components/HeaderAlternative';
import { api_path } from '../../constants/api_path';
import DetailedInfos from './modal/detailedInfos';
import OfferModal from './modal/offerModal';
import * as C from './styles';
import UseMyStore from './useMyStore';

const MyStore = () => {
  const {
    sellerData,
    handleDeleteProduct,
    handleOpenOfferModal,
    offerModal,
    setOfferModal,
    productActive,
    setProductActive,
    detailModal,
    setDetailModal,
    setOfferProduct,
  } = UseMyStore();

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
              <C.Box>
                <C.ImgProduct>
                  <img
                    src={`${api_path}/image/product/${item?.images[0]}`}
                    alt=''
                  />
                </C.ImgProduct>
                <C.NameProduct>{item.name}</C.NameProduct>
              </C.Box>
              <C.InfosProduct>
                <C.ItemInfo>
                  <C.Paragraph>
                    Preço <br />
                    <span>
                      {item?.value.price_now
                        ? item?.value.price_now.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                            minimumFractionDigits: 2,
                          })
                        : item?.value?.common_price.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                            minimumFractionDigits: 2,
                          })}
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
                  <C.BtnLink
                    type='button'
                    onClick={() => {
                      setProductActive(item);
                      setDetailModal(true);
                    }}
                  >
                    Informações detalhadas
                  </C.BtnLink>
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
                <C.ActionIcon
                  type='button'
                  onClick={() => handleOpenOfferModal(item)}
                >
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
                <C.ActionIcon
                  type='button'
                  onClick={() => handleDeleteProduct(item.id)}
                >
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
      <OfferModal
        product={productActive}
        visible={offerModal}
        setOffer={setOfferProduct}
        closeModal={() => setOfferModal(false)}
      />
      <DetailedInfos
        product={productActive}
        visible={detailModal}
        closeModal={() => setDetailModal(false)}
      />
      <Footer />
    </Container>
  );
};

export default MyStore;
