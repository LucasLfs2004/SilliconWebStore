import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { Container } from '../../CommomStyles';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { getCategorys } from '../../services/Requests';
import * as C from './styles';

const ListCategorys = () => {
  const navigate = useNavigate();

  const { data: categorys } = useQuery({
    queryKey: [`list-categorys`],
    queryFn: async () => await getCategorys(),
  });

  return (
    <Container>
      <Header />
      <C.ContentPage>
        <C.TopContent>Departamentos</C.TopContent>
        <C.ListCategory>
          {categorys?.map((item, key) => (
            <C.ItemCategory
              key={key}
              onClick={() => navigate(`/category/${item.id}`)}
            >
              <p>{item?.name}</p>
            </C.ItemCategory>
          ))}
        </C.ListCategory>
      </C.ContentPage>
      <Footer />
    </Container>
  );
};

export default ListCategorys;
