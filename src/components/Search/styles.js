import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
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

  @media (min-width: 1024px) {
    height: 30px;
    width: 250px;
    border-radius: 10px;
  }
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

  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;

export const BtnsSearch = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BtnSearch = styled.button`
  border: none;
  background-color: transparent;
`;

export const Background = styled.button`
  border: none;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
`;

export const Result = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  z-index: 50;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);

  @media (min-width: 1024px) {
    top: 80px;
    width: 100%;
    align-items: center;
  }
`;

export const Products = styled.div`
  padding: 0 2.5% 6px 2.5%;
  width: calc(100% - 5%);
  background-color: #010f20;
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  @media (min-width: 1024px) {
    width: 40%;
  }
`;

export const ItemProduct = styled.a`
  margin: 0;
  display: flex;
  flex-direction: row;
  column-gap: 9px;
  border: 0.5px solid transparent;
  border-bottom-color: #5ce1e6;
  padding: 7px 5px 7px 5px;
  transition: all 0.3s ease-in-out;

  img {
    width: 12.8%;
  }

  @media (min-width: 1024px) {
    &:hover {
      border-color: #5ce1e6;
      border-radius: 3px;
    }
  }
`;

export const InfoProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Text = styled.div`
  color: #fff;
  font-weight: 300;
  font-size: 10px;

  & .mini {
    font-size: 8px;
  }

  @media (min-width: 1024px) {
    font-size: 15px;
    font-weight: 500;
  }
`;
