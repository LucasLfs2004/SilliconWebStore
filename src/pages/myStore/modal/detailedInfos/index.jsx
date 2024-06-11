import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { ContainerModal, ModalWhite } from '../../../../CommomStyles';
import Stars from '../../../../components/Stars';
import { api_path } from '../../../../constants/api_path';
import { parseRealCurrency } from '../../../../functions/realCurrency';
import * as C from './styles';

const DetailedInfos = ({ visible, product, closeModal }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ContainerModal visible={visible ? 'flex' : 'none'} pt={'48px'}>
      <ModalWhite
        width={'1000px'}
        height={'min-content'}
        padding={'24px 48px'}
        className='scroll-y'
      >
        <C.Box className='relative'>
          <C.Id className='bold'>ID: {product?.id}</C.Id>
          <C.Title>Detalhes do produto</C.Title>
          <C.BtnClose type='button' onClick={closeModal}>
            Fechar
          </C.BtnClose>
        </C.Box>
        <C.Box>
          <C.ImgProduct>
            {product?.images?.length > 0 && (
              <img
                src={`${api_path}/image/product/${product?.images[0]}`}
                alt=''
              />
            )}
          </C.ImgProduct>

          <C.Box className='column row-gap' rg={'6px'}>
            <C.Paragraph>
              {product?.name}
              {product?.model && ` - ${product.model}`}
            </C.Paragraph>
            <C.Box>
              <Stars rating={product?.rating?.rating_value} />
              <C.Paragraph className='cyan'>
                {product?.rating?.rating_value} - (
                {product?.rating?.amount_rating}) avaliações
              </C.Paragraph>
            </C.Box>
            <C.Box>
              <C.Box className='column'>
                <C.Paragraph className='bold'>
                  <span>Estoque:</span> {product?.stock} unidades
                </C.Paragraph>
                <C.Paragraph className='bold'>
                  <span>Garantia:</span>{' '}
                  {product?.warranty > 12
                    ? `${product.warranty / 12} anos`
                    : `${product?.warranty} meses`}{' '}
                </C.Paragraph>
              </C.Box>
              <C.Box className='column'>
                <C.Paragraph className='bold'>
                  <span>Marca: </span>
                  {product?.brand?.name}
                </C.Paragraph>
                <C.Paragraph className='bold'>
                  <span>Categoria: </span>
                  {product?.category}
                </C.Paragraph>
              </C.Box>
            </C.Box>
          </C.Box>
        </C.Box>
        <C.Box>
          <C.Carousel>
            <Slider className='carousel-image-product' {...settings}>
              {product?.images &&
                product?.images.map((image, index) => (
                  <C.ItemDiv key={index} className='carousel-item'>
                    <img
                      src={`${api_path}/image/product/${image}`}
                      alt={`Imagem ${index}`}
                    />
                  </C.ItemDiv>
                ))}
            </Slider>
          </C.Carousel>
          <C.ValueArea>
            <C.Title className='cyan'>Valores</C.Title>
            <C.Paragraph className='bold border-bottom'>
              <span>Preço: </span>
              {parseRealCurrency(product?.value?.common_price)}
            </C.Paragraph>
            {product?.value?.price_now > 0 && (
              <C.Paragraph className='bold border-bottom'>
                <span>Preço de oferta: </span>
                {parseRealCurrency(product?.value?.common_price)}
              </C.Paragraph>
            )}
            <C.Paragraph className='bold border-bottom'>
              <span>Parcelas: </span> até {product?.value?.portions}x
            </C.Paragraph>
            <C.Paragraph className='bold border-bottom'>
              <span>Juros (crédito): </span> {product?.value?.fees_credit}%
            </C.Paragraph>
            <C.Paragraph className='bold border-bottom'>
              <span>Juros (mensal): </span>{' '}
              {product?.value?.fees_monthly.toLocaleString('pt-BR')}%
            </C.Paragraph>
          </C.ValueArea>
          {product?.rating?.comments && (
            <C.CommentsArea>
              <C.Title>Comentários</C.Title>
              {product?.rating?.comments &&
                product.rating.comments.map((item, index) => (
                  <C.CommentCard key={item.id_comment}>
                    <h2>{item.title_text}</h2>
                    <p className='bold'>{item.text_comment}</p>
                  </C.CommentCard>
                ))}
            </C.CommentsArea>
          )}
        </C.Box>

        {product?.description?.desc_html && (
          <C.DescriptionCard>
            <C.Title>Descrição do produto</C.Title>
            <C.Box
              className='column'
              dangerouslySetInnerHTML={{
                __html: product?.description?.desc_html,
              }}
            />
          </C.DescriptionCard>
        )}
      </ModalWhite>
    </ContainerModal>
  );
};

export default DetailedInfos;
