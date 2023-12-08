import styled from 'styled-components';

export const DarkArea = styled.div`
  background-color: #010f20;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 calc(100vw / 8);

  @media (min-width: 1024px) {
    background-color: transparent;
    padding: 0;
  }
`;

export const Rating = styled.div`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  align-items: center;
  margin-bottom: 6px;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const RatingValue = styled.div`
  margin: 0;
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const ProductImages = styled.div`
  background-color: #fff;
  width: 100%;
  height: calc(100vw / 2);
  border-radius: 5px;
  margin-bottom: 22px;
  box-shadow: -8px -8px 30px 0px rgba(209, 217, 230, 0.25),
    8px 8px 30px 0px rgba(209, 217, 230, 0.25);

  @media (min-width: 1024px) {
    box-shadow: none;
    background-color: transparent;
    height: auto;
  }
`;

export const ImgProduct = styled.div`
  width: 95%;
  height: calc(100vw / 2);
  display: flex !important;
  align-items: center;
  justify-content: center;

  img {
    height: calc(100vw / 2);
  }
`;

export const Seller = styled.p`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 6px;

  span {
    color: #5ce1e6;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;
