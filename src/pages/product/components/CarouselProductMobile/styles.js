import styled from 'styled-components';

export const CarouselImages = styled.div`
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
