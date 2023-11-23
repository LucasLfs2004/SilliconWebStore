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

  @media (min-width: 1024px) {
    height: calc(150px - 40px);
    align-items: center;
  }
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
    font-weight: 700;
  }

  @media (min-width: 1024px) {
    row-gap: 10px;
    column-gap: 50px;
    flex-wrap: wrap;
    height: 100%;

    a {
      font-size: 16px;
      font-weight: 700;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 19px;

  @media (min-width: 1024px) {
    flex-direction: row;
    column-gap: 30px;
    align-items: center;
  }
`;

export const Logo = styled.img`
  margin: 0;

  @media (min-width: 1024px) {
    height: 100px;
  }
`;

export const Store = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  @media (min-width: 1024px) {
    width: 150px;
    row-gap: 12px;
  }
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
    font-weight: 400;
  }

  @media (min-width: 1024px) {
    p,
    a {
      font-size: 12px;
      font-weight: 600;
    }
  }
`;
