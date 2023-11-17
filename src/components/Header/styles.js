import { styled } from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 99;
  width: calc(100% - 30px);
  padding: 0 15px;
  background-color: #010f20;
  height: 60px;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #c1c5d6;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    margin: 0;
    margin-bottom: -2px;
  }
`;

export const Pesquisa = styled.div`
  margin: 0;
  background-color: #ecf0f3;
  box-shadow: 5px 5px 6px 0px #d1d9e6 inset, -5px -5px 6px 0px #fff inset;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25px;

  input {
    background-color: transparent;
    border: none;
    height: 100%;
  }

  input:focus {
    outline: 0;
  }

  button {
    border: none;
    background-color: transparent;
  }
`;

export const Carrinho = styled.button`
  margin: 0;
  border: none;
  background-color: transparent;
`;

export const DivBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 15%;

  button {
    margin: 0;
    padding: 0;
  }
`;
