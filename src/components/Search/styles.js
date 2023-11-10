import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
`;

export const Search = styled.div`
  margin: 0;
  background-color: #ecf0f3;
  box-shadow: 5px 5px 6px 0px #d1d9e6 inset, -5px -5px 6px 0px #fff inset;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25px;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  padding: 0 12px;
  width: (100% -24px);
  height: 100%;

  &:focus {
    outline: 0;
  }
`;

export const BtnSearch = styled.button`
  border: none;
  background-color: transparent;
`;
