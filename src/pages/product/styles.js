import styled from 'styled-components';

export const ContentPage = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;

  @media (min-width: 1024px) {
    /* flex-direction: row; */
    justify-content: center;
    background: #ecf0f3;
    /* box-shadow: 5px 5px 6px 0px #d1d9e6 inset, -5px -5px 6px 0px #fff inset; */
    /* padding: 24px 0; */
    column-gap: 48px;
    row-gap: 48px;
  }

  @media (min-width: 1440px) {
    align-items: center;
  }
`;

export const ProductSection = styled.section`
  margin: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    background: #ecf0f3;
    box-shadow: 5px 5px 6px 0px #d1d9e6 inset;
    padding: 24px 0;
    column-gap: 48px;
  }
`;

export const BoxContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    padding: 0;
    background-color: transparent;
  }
`;
