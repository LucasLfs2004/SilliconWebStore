import styled from 'styled-components';

export const Main = styled.main`
  max-width: 100vw;
  width: calc() (100vw - 5%);
  padding: 24px 5%;

  @media (min-width: 1024px) {
    background-color: #ecf0f3;
    box-shadow: 10px 10px 20px 0px #d1d9e6 inset,
      -10px -10px 20px 0px #fff inset;
    width: calc(100% - 96px);
    min-height: calc(100vh - 270px);
    padding: 36px 48px;
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #5b43d6;

  &.font-24 {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 36px;
    color: #5b43d6;

    &.font-24 {
      font-size: 24px;
    }
  }
`;

export const ProductArea = styled.section`
  background-color: #ecf0f3;
  width: calc(100% - 32px);
  padding: 18px 16px;
  margin: 12px 0 0 0;
  border-radius: 8px;
  row-gap: 8px;

  @media (min-width: 1024px) {
    row-gap: 12px;
    padding: 18px 24px;
    box-shadow: 15px 15px 29px 0px #d1d9e6, -15px -15px 29px 0px #fff;
    margin: 36px auto;
    display: flex;
    flex-direction: column;
    max-width: 1360px;
  }
`;

export const HeaderBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BtnAdd = styled.button`
  background-color: transparent;
  border: 2px solid #5b43d6;
  border-radius: 4px;
  color: #5b43d6;
  font-size: 14px;
  height: 24px;

  @media (min-width: 1024px) {
    cursor: pointer;
    height: 32px;
    font-weight: 600;
    font-size: 18px;
  }
`;

export const ItemProduct = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(91, 67, 214, 0.5);
  row-gap: 16px;
  padding-top: 16px;

  @media (min-width: 1024px) {
    column-gap: 24px;
    align-items: center;
    flex-direction: row;
    column-gap: 24px;
    padding-bottom: 12px;
  }
`;

export const Box = styled.div`
  display: flex;
  column-gap: 12px;
  width: 100%;

  @media (min-width: 1024px) {
    align-items: center;
    width: auto;
    column-gap: 24px;
  }
`;

export const ImgProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: #fff;
  width: 70px;
  height: 70px;

  img {
    width: 60px;
  }

  @media (min-width: 1024px) {
    width: 100px;
    height: 100px;

    img {
      width: 80px;
    }
  }
`;

export const NameProduct = styled.p`
  font-size: 14px;
  width: 260px;

  @media (min-width: 1024px) {
    font-size: 16;
    font-weight: 400;
    color: #010f20;
    max-width: 400px;
    width: 400px;
  }
`;

export const InfosProduct = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  column-gap: 32px;

  @media (min-width: 1024px) {
    column-gap: 42px;
    padding: 0 24px;
    border-left: 1px solid rgba(2, 237, 223, 0.3);
    border-right: 1px solid rgba(2, 237, 223, 0.3);
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Paragraph = styled.p`
  color: #5b43d6;
  font-weight: 500;
  text-align: center;
  font-size: 14px;

  &.red {
    color: #f00;
  }
  span {
    color: #010f20;
  }
`;

export const BtnLink = styled.button`
  background-color: #5b43d6;
  border: none;
  width: 120px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  height: 42px;
  cursor: pointer;
`;

export const AreaOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 24px;

  @media (min-width: 1024px) {
    column-gap: 32px;
  }
`;

export const ActionIcon = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
  background-color: transparent;
  border: none;

  img {
    width: 16px;
  }

  @media (min-width: 1024px) {
    cursor: pointer;
  }
`;
