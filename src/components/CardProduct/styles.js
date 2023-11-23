import { styled } from 'styled-components';

export const Card = styled.div`
  margin: 0;
  width: 85%;
  /* height: 334px; */
  border-radius: 5px;
  background-color: #010f20;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 10px 16px 10px;

  a {
    width: 100%;
  }

  @media (min-width: 1024px) {
    padding: 5px 10px 10px 10px;
    width: calc((100% / 6) - 40px);
    min-width: 240px;
    height: auto;
    min-height: 370px;
    transition: all 0.15s ease-in-out;
    border-radius: 5px;
    border: 1px solid #010f20;

    &:hover {
      background-color: transparent;

      .dark-hover {
        color: #010f20;
      }
    }
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
`;

export const RatingValue = styled.div`
  margin: 0;
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  @media (min-width: 1024px) {
    font-size: 12px;
    font-weight: 400;
  }
`;

export const CarouselImg = styled.div`
  position: relative;
  height: calc(100vw / 2.4375);
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-bottom: 16px;
  border-radius: 5px;
  background: #fff;
  box-shadow: -8px -8px 30px 0px rgba(209, 217, 230, 0.25),
    8px 8px 30px 0px rgba(209, 217, 230, 0.25);
  .carousel-image-product {
    height: calc(100vw / 2.4375);
    width: 98%;
    border-radius: 5px;
  }

  .slick-arrow {
    display: none !important;
  }

  .slick-dots {
    position: absolute;
    bottom: 2px;
  }

  .slick-dots li {
    margin: 0;
    width: 10px;
  }

  .slick-dots li button::before {
    color: #5ce1e6;
    opacity: 0.2;
  }

  .slick-dots li.slick-active button::before {
    color: #5ce1e6;
    opacity: 1;
  }

  @media (min-width: 1024px) {
    height: 200px;

    .carousel-image-product {
      height: auto;
    }
  }
`;

export const ImgProduct = styled.div`
  display: flex !important;
  width: 90%;
  height: calc(100vw / 2.4375);
  margin: 0;
  background-color: #fff;
  /* border-radius: 5px; */
  align-items: center;
  justify-content: center;

  img {
    max-width: calc(100vw / 2.4375);
  }

  @media (min-width: 1024px) {
    height: auto;
    width: 100%;

    img {
      max-width: 200px;
    }
  }
`;

export const Discount = styled.div`
  position: absolute;
  left: 11px;
  bottom: -9px;
  width: 36px;
  height: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background-color: #02eddf;

  p {
    color: #010f20;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: -1px;
  }
`;

export const NameProduct = styled.p`
  color: #fff;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3;

  @media (min-width: 1024px) {
    font-size: 14px;
    font-weight: 400;
    height: 85px;
    -webkit-line-clamp: 4;
  }
`;

export const PriceView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 7px 0 16px 0;

  p.condition {
    color: #e859ce;
    font-family: Poppins;
    font-size: 9px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: -4px;
  }

  @media (min-width: 1024px) {
    p.condition {
      font-size: 12px;
    }
  }
`;
export const InCash = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const Portions = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Price = styled.p`
  color: #f406d7;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (min-width: 1024px) {
    font-size: 18px;
    font-weight: 500;
  }
`;

export const Buttons = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: column;
    row-gap: 12px;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: calc(50% - 24px);
  border-radius: 3px;
  column-gap: 10px;
  background: #02eddf;
  border: none;

  p {
    color: #010d20;
    font-size: 9px;
    font-weight: 400;
    line-height: normal;
  }

  @media (min-width: 1024px) {
    width: 100%;
    p {
      font-size: 12px;
      font-weight: 600;
    }
  }
`;
