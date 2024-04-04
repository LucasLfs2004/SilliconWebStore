import styled from 'styled-components';

export const TopContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const Title = styled.h1`
  color: #5b43d6;
  font-size: 18px;
  font-weight: 600;
`;

export const ProductName = styled.h2`
  font-weight: 500;
  font-size: 16px;
  padding-top: 12px;
  max-width: 80%;
  color: #010f20;
  text-align: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InfoProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
  margin: 8px 0;

  @media (min-width: 1024px) {
    flex-direction: row;
    column-gap: 12px;
  }
`;

export const ImgProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: #fff;
  width: 100px;
  height: 100px;

  img {
    width: 90px;
  }

  @media (min-width: 1024px) {
    width: 80px;
    height: 80px;

    img {
      width: 80%;
    }
  }
  @media (min-width: 1440px) {
    width: 100px;
    height: 100px;

    img {
      width: 80px;
    }
  }
`;

export const NameProduct = styled.p`
  font-size: 14px;
  width: 100%;
  /* max-height: calc(16px * 2); */
  line-height: normal;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;

  @media (min-width: 1024px) {
    font-size: 16;
    font-weight: 400;
    color: #010f20;
    max-width: 400px;
    width: 400px;
  }
`;

export const Carousel = styled.section`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  /* max-width: 280px; */
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

  .slick-dots li {
    margin: 0 2px;
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
  max-width: 400px;
  display: flex !important;
  row-gap: 6px;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  height: max-content;
  /* border-radius: 6px; */
  padding-top: 4px;
  border-left: 2px solid #ecf0f3;
  border-right: 2px solid #ecf0f3;

  img {
    width: 90%;
  }
`;

export const BtnModal = styled.button`
  margin-top: 48px;
  border: none;
  display: flex;
  flex-direction: row;
  color: #c1c5d6;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 30px;
  border-radius: 5px;
  background-color: #ecf0f3;
  box-shadow: 5px 5px 6px 0px #d1d9e6,
    -5px -5px 6px 0px rgba(255, 255, 255, 0.35);
  width: 76%;
  column-gap: 16px;

  img {
    padding-left: 26px;
  }

  p {
    color: #5b43d6;
    padding-left: 3px;
  }
`;

export const BtnActions = styled.div`
  width: calc(100% - 24px);
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BtnArrow = styled.button`
  background-color: transparent;
  border: none;
  width: 24px;

  @media (min-width: 1024px) {
    cursor: pointer;
  }
`;

export const BtnDelete = styled.button`
  border: none;
  background-color: transparent;
  width: 30px;
  height: 30px;

  img {
    height: 100%;
  }

  @media (min-width: 1024px) {
    cursor: pointer;
  }
`;

export const InputImg = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100%);
  font-weight: 300;
  font-size: 10px;
  row-gap: 4px;

  @media (min-width: 600px) {
    align-items: center;
  }

  p {
    color: #5b43d6;
    padding-left: 3px;
  }

  input {
    display: none;
  }

  label {
    color: #c1c5d6;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 30px;
    border-radius: 5px;
    background-color: #ecf0f3;
    box-shadow: 5px 5px 6px 0px #d1d9e6,
      -5px -5px 6px 0px rgba(255, 255, 255, 0.35);
    width: 76%;
    column-gap: 16px;

    img {
      padding-left: 26px;
    }
  }

  @media (min-width: 1024px) {
    label,
    p {
      font-size: 14px;
      font-weight: 600;
    }
    p {
      padding-bottom: 2px;
    }
    label {
      cursor: pointer;
    }
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 250px;
    align-items: flex-start;

    label {
      width: 100%;
    }
  }
  @media (min-width: 1440px) {
    width: 300px;
    align-items: flex-start;

    label {
      width: 100%;
    }
  }
`;

export const BtnArea = styled.div`
  margin: 24px 0 0 0;
  display: flex;
  column-gap: 24px;
  align-items: center;
`;

export const BtnConfirm = styled.button`
  display: flex;
  margin-top: 16px;
  align-items: center;
  justify-content: center;
  background: #ecf0f3;
  box-shadow: 5px 5px 6px 0px #d1d9e6,
    -5px -5px 6px 0px rgba(255, 255, 255, 0.35);
  border-radius: 5px;
  border: none;
  height: 30px;
  color: #5b43d6;
  transition: all 0.4s ease;
  width: 50%;
  font-weight: 600;

  &:hover {
    background-color: #5b43d6;
    color: #ecf0f3;
  }

  @media (max-width: 1024px) {
    &.red {
      background-color: #f00;
      color: #ecf0f3;
    }
  }

  &.red:hover {
    background-color: #f00;
    color: #fff;
  }

  @media (min-width: 1024px) {
    font-weight: 500;
    cursor: pointer;
    width: auto;
  }
`;
