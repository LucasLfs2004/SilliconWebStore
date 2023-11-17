import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../falseDatabase/products';
import * as C from './styles';
const Search = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);

  useEffect(() => {
    const searchResult = products.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );
    if (search === '') {
      setResult([]);
    } else {
      setResult(searchResult);
    }
    console.log(searchResult);
  }, [search]);
  return (
    <C.Container>
      <C.Search>
        <C.Input
          type='text'
          placeholder='pesquisar'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <C.BtnSearch>
          <img src='/assets/imgs/searchIcon.svg' alt='' />
        </C.BtnSearch>
      </C.Search>
      {result.length > 0 && (
        <C.Result onClick={() => setResult([])}>
          <C.Products>
            <C.Text className='mini'>Resultados</C.Text>
            {result &&
              result.map((item, index) => (
                <Link to={`product/${item.id}`}>
                  <C.ItemProduct key={index}>
                    <img src={item.image[0]} alt='' />
                    <C.InfoProduct>
                      <C.Text>{item.name}</C.Text>
                      <C.Text className='mini'>
                        {item.value.priceNow.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                          minimumFractionDigits: 2,
                        })}
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
