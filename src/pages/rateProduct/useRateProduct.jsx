import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { toastErr, toastSuc } from '../../components/ToastComponent';
import { getProduct, postCommentProduct } from '../../services/Requests';

const useRateProduct = () => {
  const navigate = useNavigate();

  const user = useSelector(state => state.user);
  const { id, id_order } = useParams();
  const [rateObj, setRateObj] = useState({
    title: '',
    description: '',
    rating: 0,
  });

  const { data: product } = useQuery({
    queryKey: ['product-id-rate', id],
    queryFn: async () => await getProduct(id),
  });

  const postComment = async e => {
    e.preventDefault();
    e.stopPropagation();
    if (
      rateObj.title === '' ||
      rateObj.title === undefined ||
      rateObj.title === null
    ) {
      toastErr('Por favor preencha um título para seu comentário');
    } else if (!(rateObj.rating >= 0)) {
      toastErr('Por favor avalie o produto de 0 a 5 estrelas');
    } else {
      const dataComment = {
        id_product: id,
        id_order_item: id_order,
        rating: rateObj.rating,
        comment: rateObj.description,
        title: rateObj.title,
      };
      const response = await postCommentProduct(dataComment, user.access_token);
      if (response.id_comment) {
        toastSuc('Comentário salvo!');
        setTimeout(() => navigate(-1), 1500);
      } else {
        toastErr('Ocorreu um erro, por favor tente novamente.');
      }
    }
  };

  return {
    rateObj,
    setRateObj,
    product,
    postComment,
  };
};

export default useRateProduct;
