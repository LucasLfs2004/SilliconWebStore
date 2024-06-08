import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { api_path } from '../../constants/api_path';
import { parseRealCurrency } from '../../functions/realCurrency';
import { useDebounce } from '../../hooks/useDebounce';
import { searchProducts } from '../../services/Requests';
import * as C from './styles';
const Search = () => {
  const [search, setSearch] = useState('');
  const [showResult, setShowResult] = useState([]);

  // useEffect(() => {
  //   const searchResult = products.filter(product =>
  //     product.name.toLowerCase().includes(search.toLowerCase()),
  //   );
  //   if (search === '') {
  //     setResult([]);
  //   } else {
  //     setResult(searchResult);
  //   }
  //   console.log(searchResult);
  // }, [search]);

  // const handleSearch = async () => {
  //   const searchResult = await searchProducts(search);
  //   if (search === null) {
  //     setResult([]);
  //   } else {
  //     setResult(searchResult);
  //   }
  //   console.log(searchResult);
  // };

  const debouncedSearch = useDebounce(search, 300);

  const {
    data: dataProduct = [],
    // isFetching: searchLoading,
    // isError: searchError,
    // isFetched: searchFetchStatus,
  } = useQuery({
    queryKey: ['search-products', debouncedSearch],
    queryFn: async () => {
      const response = await searchProducts(debouncedSearch);
      return response;
    },
    enabled: !!debouncedSearch,
  });

  return (
    <C.Container>
      <C.Search>
        <C.Input
          type='text'
          placeholder='pesquisar'
          value={search}
          onFocus={() => setShowResult(true)}
          onBlur={e => (e.target.placeholder = 'pesquisar')}
          onChange={e => setSearch(e.target.value)}
        />
        <C.BtnsSearch>
          <C.BtnSearch
            onClick={() => {
              setShowResult(false);
              setSearch('');
            }}
          >
            <img src='/assets/icons/x.svg' alt='' />
          </C.BtnSearch>
          <C.BtnSearch
          // onClick={() => handleSearch()}
          >
            <img src='/assets/imgs/searchIcon.svg' alt='' />
          </C.BtnSearch>
        </C.BtnsSearch>
      </C.Search>
      {dataProduct.length > 0 && showResult && (
        <C.Result onClick={() => setShowResult(false)}>
          <C.Products>
            <C.Text className='mini'>Resultados</C.Text>
            {dataProduct &&
              dataProduct.map((item, index) => (
                <Link to={`/product/${item.id}`} key={index}>
                  <C.ItemProduct key={index}>
                    <img
                      src={`${api_path}/image/product/${item.images[0]}`}
                      alt=''
                    />
                    <C.InfoProduct>
                      <C.Text>{item.name}</C.Text>
                      <C.Text className='mini'>
                        {parseRealCurrency(
                          item.value.price_now
                            ? item.value.price_now
                            : item.value.common_price,
                        )}
                      </C.Text>
                    </C.InfoProduct>
                  </C.ItemProduct>
                </Link>
              ))}
          </C.Products>
          {/* <C.Background onClick={() => setResult([])}></C.Background> */}
        </C.Result>
      )}
    </C.Container>
  );
};
export default Search;
