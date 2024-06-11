import styled from 'styled-components';

export const Category = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TopCategory = styled.div`
  background-color: #010f20;
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    width: calc(100% - 80px);
    padding: 0 40px;
  }
`;

export const NameCategory = styled.p`
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
    text-align: center;
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

export const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;

  h1 {
    color: #010f20;
  }
`;
