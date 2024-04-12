import styled from 'styled-components';

export const Brand = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TopBrand = styled.div`
  background-color: #010f20;
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    max-height: 70%;
  }

  @media (min-width: 1024px) {
    width: calc(100% - 80px);
    padding: 0 40px;
    justify-content: space-between;
  }
`;

export const NameBrand = styled.p`
  display: none;
  position: absolute;
  left: 20px;
  color: #fff;
  text-align: center;
  font-size: 12px;
  font-weight: 500;

  @media (min-width: 1024px) {
    position: static;
    display: flex;
    font-size: 16px;
    font-weight: 700;
    width: 336px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin: 12px 0;
  justify-content: center;
  column-gap: 50px;
  position: relative;

  &.web {
    display: none;
  }

  @media (min-width: 1024px) {
    column-gap: 36px;
    width: 336px;

    &.mobile {
      display: none;
    }

    &.web {
      display: flex;
    }
  }
`;

export const ProductArea = styled.section`
  margin: 0;
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  width: 100%;
  align-items: center;
  padding: 30px 0;
`;
