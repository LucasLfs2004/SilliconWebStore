import moment from 'moment';
import { useSelector } from 'react-redux';
import Stars from '../../../../components/Stars';
import * as C from './styles';

const Comments = () => {
  const product = useSelector(state => state.product);

  return (
    <C.Container>
      <C.Title className='left'>
        Comentários (
        {product?.rating?.comments?.length
          ? product?.rating?.comments?.length
          : 0}
        )
      </C.Title>

      <C.CommentBox>
        {product?.rating?.comments?.map((item, index) => (
          <C.CardComment>
            <C.TopContent>
              <C.Title className='comment'>{item.title_text}</C.Title>
              <C.RatingComponent>
                <Stars rating={item.rating_value} />({item.rating_value})
              </C.RatingComponent>
            </C.TopContent>
            <C.Text>{item.text_comment}</C.Text>
            <C.Text className='mini'>
              Avaliado em
              {` ${moment(item.created_at).format('DD/MM/YYYY')}`}
            </C.Text>
          </C.CardComment>
        ))}
      </C.CommentBox>
    </C.Container>
  );
};

export default Comments;
