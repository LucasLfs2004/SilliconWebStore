import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #010f20;
`;

export const Row = styled.main`
  padding: 20px 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  img {
    margin-right: 10px;
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #fff;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 19px;
`;

export const Logo = styled.img`
  margin: 0;
`;

export const Store = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

export const Bottom = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #5b43d6;
  row-gap: 2px;
  padding: 5px 0;

  p,
  a {
    color: #010f20;
    text-align: center;
    font-size: 6px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
