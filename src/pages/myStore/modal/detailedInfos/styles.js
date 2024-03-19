import styled from 'styled-components';

export const Title = styled.div`
  color: #5b43d6;
  font-size: 24px;
  font-weight: 600;
`;

export const Paragraph = styled.p`
  color: #010f20;
  font-size: 16px;

  &.bold {
    font-weight: 600;
  }

  span {
    color: #5b43d6;
    font-weight: 600;
  }

  &.border-bottom {
    border-bottom: 1px solid #02eddf;
    padding-left: 3px;
    padding-bottom: 2px;
  }
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  column-gap: 24px;

  &.column {
    flex-direction: column;
  }

  &.relative {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  &.row-gap {
    row-gap: ${props => props.rg};
  }
  &.mt {
    margin-top: ${props => props.mt};
  }

  /* max-width: ${props => props.maxwidth}; */
`;

export const Id = styled.p`
  color: #010f20;
  font-weight: 600;
  font-size: 18px;
  position: absolute;
  left: 0;
`;

export const ImgProduct = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 120px;
  height: 120px;
  border-radius: 8px;

  img {
    padding: 0 5px;
    width: 110px;
  }
`;

export const Carousel = styled.section`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  max-width: 280px;
  width: 100%;
  z-index: 1;
  padding: 0 0 24px 18px;

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
    max-width: 200px;
  }

  @media (min-width: 1440px) {
    max-width: 280px;
  }
`;

export const ItemDiv = styled.div`
  margin: 0;
  max-width: 400px;
  border-radius: 12px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 360px;
  /* height: 360px; */
  padding: 12px 0;
  background-color: #fff;

  img {
    width: 90%;
    border-radius: 12px;
  }
`;

export const ValueArea = styled.div`
  box-shadow: 10px 10px 20px 0px #d1d9e6 inset, -10px -10px 20px 0px #fff inset;
  margin-top: 40px;
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  padding: 12px;
  height: min-content;
  row-gap: 8px;
`;

export const CommentsArea = styled.div`
  box-shadow: 4px 4px 8px 0px #d1d9e6 inset, -4px -4px 8px 0px #fff inset;
  border-radius: 12px;
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  align-items: center;
  height: 280px;
  width: 400px;
  overflow-y: scroll;
  padding: 12px 0;
  row-gap: 24px;
`;

export const CommentCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 180px;
  background-color: #ecf0f3;
  width: calc(90% - 32px);
  box-shadow: 4px 4px 20px 0px #d1d9e6, -4px -4px 20px 0px #fff;
  border-radius: 12px;
  padding: 8px 16px;

  h2 {
    color: #5b43d6;
    font-size: 16px;
    font-weight: 600;
  }

  p {
    font-weight: 500;
    font-size: 14px;
  }
`;

export const BtnClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ecf0f3;
  border-radius: 5px;
  border: none;
  height: 30px;
  color: #5b43d6;
  font-weight: 500;
  transition: all 0.4s ease;
  position: absolute;
  right: 0;

  &:hover {
    box-shadow: 5px 5px 6px 0px #d1d9e6,
      -5px -5px 6px 0px rgba(255, 255, 255, 0.35);
    cursor: pointer;
    /* background-color: #5b43d6; */
    /* color: #ecf0f3; */
  }
`;
