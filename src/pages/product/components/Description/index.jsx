import { useSelector } from 'react-redux';
import * as C from './styles';

const Description = () => {
  const product = useSelector(state => state.product);

  return (
    <C.Container>
      <C.Title>Descrição</C.Title>
      <C.DescriptionArea
        dangerouslySetInnerHTML={{
          __html: product?.description?.desc_html,
        }}
      ></C.DescriptionArea>
    </C.Container>
  );
};

export default Description;
