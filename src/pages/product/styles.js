import styled from 'styled-components';

export const Page = styled.section`
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const TopInfos = styled.div`
  display: flex;
  flex-direction: column;
  background: #010f20;
  /* box-shadow: 5px 5px 6px 0px #d1d9e6 inset, -5px -5px 6px 0px #fff inset; */
`;

export const RouteCategory = styled.p`
  margin: 4px 0px 6px 10px;
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  span {
    color: #5ce1e6;
  }
`;

export const SimpleInfos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 0;
  column-gap: 12px;
  background-color: #010f20;

  p {
    color: #fff;
    font-size: 9px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const BtnActions = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 8px;

  button {
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
  }
`;

export const DarkArea = styled.div`
  background-color: #010f20;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 calc(100vw / 8);
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
`;

export const CarouselImage = styled.div`
  background-color: #fff;
  width: 100%;
  height: calc(100vw / 2);
  border-radius: 5px;
  margin-bottom: 22px;
  box-shadow: -8px -8px 30px 0px rgba(209, 217, 230, 0.25),
    8px 8px 30px 0px rgba(209, 217, 230, 0.25);

  .carousel-image-product {
    height: calc(100vw / 2);
    width: 98%;
    border-radius: 5px;
  }

  .slick-arrow {
    display: none !important;
  }

  .slick-dots li {
    margin: 0;
    width: 18px;
    /* margin: 0 5px; */
  }

  .slick-dots li button {
    width: 18px;
    height: 18px;
  }

  .slick-dots li button::before {
    color: #fff;
    opacity: 1;
    font-size: 8px;
  }

  .slick-dots li.slick-active button::before {
    color: #5ce1e6;
    opacity: 1;
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
`;

export const PriceArea = styled.section`
  display: flex;
  flex-direction: column;
  background: #ecf0f3;
  width: 85%;
  padding-bottom: 12px;
  padding: 7px 7.5% 12px 7.5%;
  box-shadow: 5px 5px 6px 0px #d1d9e6 inset, -5px -5px 6px 0px #fff inset;
`;

export const Name = styled.p`
  color: #010f20;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const IdProduct = styled.p`
  color: #010f20;
  font-size: 8px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-bottom: 5px;
`;

export const RowPrice = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  margin-top: 9px;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: #010f20;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  span {
    color: #010f20;
    font-size: 9px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const BtnPortions = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  column-gap: 6px;
  align-items: center;
  padding: 0;
  margin: 0;

  p {
    color: #010f20;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const PortionsDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #5b43d620;
  background: linear-gradient(145deg, #d4d8db, #fdffff);
  box-shadow: 12px 12px 24px #d4d8db, -12px -12px 24px #ffffff;
  margin: 32px 0;
  border-radius: 30px;
  border-radius: 25px;
  max-height: 0;
  transition: ${props =>
    props.view
      ? 'opacity 1.5s ease-in-out, max-height 1s ease-in-out, margin 1.5s ease-in-out'
      : 'max-height 1s ease-in-out, opacity 0.2s ease-in-out, margin 0.7s ease-in-out'};
  opacity: 0;
  margin: 0;

  &.view {
    padding: 10px 0;
    max-height: 600px;
    opacity: 1;
    margin: 24px 0;
  }

  h4 {
    margin-bottom: 10px;
  }

  .desc {
    padding: 15px 20px 0 20px;
    width: calc(100% - 40px);
    font-size: 9px;
    color: #00000090;
  }
`;

export const Portion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p,
  span {
    color: #010f20;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  span {
    padding-left: 40px;
  }
`;

export const Display = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  max-height: 280px;
  align-items: center;
  row-gap: 10px;
`;
