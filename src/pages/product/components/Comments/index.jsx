import { useSelector } from 'react-redux';
import * as C from './styles';

const Comments = () => {
  const product = useSelector(state => state.product);

  console.log(product);

  return (
    <C.Container>
      <C.Title>Avalições ({product?.rating?.comments?.length})</C.Title>
      <C.CommentsBox>
        {product?.rating?.comments?.map(item => {
          return (
            <C.CardComment key={item.id_comment}>
              <C.RowTop>
                <C.Title className='comment'>{item.title_text}</C.Title>
                <C.Rate>{item.rating_value}</C.Rate>
              </C.RowTop>
              <C.TextComment>{item.text_comment}</C.TextComment>
            </C.CardComment>
          );
        })}
      </C.CommentsBox>
    </C.Container>
  );
};

export default Comments;
