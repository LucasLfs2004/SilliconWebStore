import { Container } from '../../CommomStyles';
import Footer from '../../components/Footer';
import HeaderPage from '../../components/HeaderAlternative';
import { api_path } from '../../constants/api_path';
import { parseRealCurrency } from '../../functions/realCurrency';
import DescriptionModal from '../../modals/DescriptionModal';
import EditImagesProductModal from '../../modals/EditImagesProductModal';
import EditProductModal from '../../modals/EditProductModal';
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
    descriptionModal,
    setDescriptionModal,
    handleChangeDescriptionProduct,
    editor,
    setEditor,
    editProductModal,
    setEditProductModal,
    editImagesModal,
    setEditImagesModal,
    refetch,
  } = UseMyStore();

  return (
    <Container>
      <HeaderPage
        page_title={
          sellerData?.store_name ? sellerData.store_name : 'Minha loja'
        }
      />
      <C.Main>
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
                      {parseRealCurrency(
                        item?.value.price_now
                          ? item?.value.price_now
                          : item?.value?.common_price,
                      )}
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
                <C.ActionIcon
                  type='button'
                  onClick={() => {
                    setProductActive(item);
                    setDescriptionModal(true);
                  }}
                >
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
                <C.ActionIcon
                  type='button'
                  onClick={() => {
                    setProductActive(item);
                    setEditProductModal(true);
                  }}
                >
                  <img src='/assets/icons/editIconPurple.svg' alt='' />
                  <C.Paragraph>
                    Editar <br />
                    produto
                  </C.Paragraph>
                </C.ActionIcon>
                <C.ActionIcon
                  type='button'
                  onClick={() => {
                    setProductActive(item);
                    setEditImagesModal(true);
                  }}
                >
                  <img src='/assets/icons/editImagePurple.svg' alt='' />
                  <C.Paragraph>
                    Editar <br />
                    imagens
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
      <DescriptionModal
        visible={descriptionModal}
        product={productActive}
        closeModal={() => setDescriptionModal(false)}
        editor={editor}
        setEditor={setEditor}
        submit={handleChangeDescriptionProduct}
      />
      <EditProductModal
        visible={editProductModal}
        closeModal={() => setEditProductModal(false)}
        product={productActive}
        refetch={refetch}
      />
      <EditImagesProductModal
        product={productActive}
        visible={editImagesModal}
        closeModal={() => setEditImagesModal(false)}
        refetch={refetch}
      />
      <Footer />
    </Container>
  );
};

export default MyStore;
