import { Container } from '../../CommomStyles';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { getCategorys } from '../../services/Requests';
import * as C from './styles';
import { useQuery } from '@tanstack/react-query';

const ListCategorys = () => {
    const { data: categorys } = useQuery({
        queryKey: [`list-categorys`],
        queryFn: async () => await getCategorys(),
      });

  return (
    <Container>
      <Header />
      <C.ContentPage>
        <C.TopContent>
            Departamentos
        </C.TopContent>
      </C.ContentPage>
      <Footer />
    </Container>
  );
};

export default ListCategorys;
