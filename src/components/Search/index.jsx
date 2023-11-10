import { useState } from 'react';
import * as C from './styles';
const Search = () => {
  const [search, setSearch] = useState('');
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
    </C.Container>
  );
};
export default Search;
