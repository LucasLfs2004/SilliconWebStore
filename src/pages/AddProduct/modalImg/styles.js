import styled from 'styled-components';

export const container = styled.section`
  position: absolute;
  display: ${props => props.visible};
  justify-content: center;
  background-color: #00000030;
  width: 100%;
  height: 100%;
  z-index: 100;
  padding-top: 128px;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ecf0f3;
  min-width: 800px;
  max-width: 1200px;
  max-height: 340px;
  border-radius: 15px;
  box-shadow: 10px 10px 20px 0px #d1d9e6 inset, -10px -10px 20px 0px #fff inset;
`;

export const Title = styled.h1`
  color: #5b43d6;
  font-size: 24px;
  padding-top: 8px;
  text-transform: uppercase;
`;

export const Carousel = styled.section`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  max-width: 700px;
  width: 100%;
  z-index: 1;

  .carousel-image-product {
    width: 100%;
  }

  .slick-prev::before,
  .slick-next::before {
    color: #5ce1e6;
    opacity: 0.75;
  }

  .slick-dots li button::before {
    color: #fff;
    opacity: 1;
  }

  .slick-dots li.slick-active button::before {
    color: #5ce1e6;
    opacity: 1;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    /* max-width: 200px; */
  }

  @media (min-width: 1440px) {
    /* max-width: 280px; */
  }
`;

export const ItemDiv = styled.div`
  margin: 0;
  max-width: 200px;
  padding: 12px;
  /* display: flex !important; */
  flex-direction: column;
  align-items: center;

  /* height: 500px; */
  img {
    width: calc(100% - 24px);
    border-radius: 6px;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 16px;
    margin-top: 6px;
    width: calc(100% - 24px);
  }
`;

export const BtnArrow = styled.button`
  border: none;
  width: 24px;
  height: 24px;

  img {
    width: 100%;
  }

  @media (min-width: 1024px) {
    cursor: pointer;
  }
`;
export const BtnDelete = styled.button`
  border: none;
  width: 28px;
  height: 24px;

  img {
    width: 100%;
  }

  @media (min-width: 1024px) {
    cursor: pointer;
  }
`;

export const Box = styled.div`
  display: flex;
  column-gap: 24px;
  margin-top: 24px;
`;

export const BtnModal = styled.button`
  border: none;
  display: flex;
  flex-direction: row;
  color: #c1c5d6;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  /* height: 36px; */
  border-radius: 5px;
  background-color: #ecf0f3;
  box-shadow: 5px 5px 6px 0px #d1d9e6,
    -5px -5px 6px 0px rgba(255, 255, 255, 0.35);
  /* width: 76%; */
  column-gap: 16px;
  font-size: 14px;
  color: #5b43d6;
  padding: 4px 8px;

  @media (min-width: 1024px) {
    cursor: pointer;
  }
`;
