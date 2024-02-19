import { useSelector } from 'react-redux';
import * as C from './styles';

const Comments = () => {
  const product = useSelector(state => state.product);

  console.log(product);

  return (
    <C.Container>
      <C.Title>Comentários ({product?.rating?.comments?.length})</C.Title>
    </C.Container>
  );
};

export default Comments;
