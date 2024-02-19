import styled from 'styled-components';

export const Content = styled.section`
  display: flex;
  flex-direction: row;
  column-gap: 48px;
  background-color: #010f20;
  padding: 8px 24px 36px 24px;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
`;

export const ImagesColumn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
`;

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
`;

export const ProductImage = styled.div`
  box-shadow: -8px -8px 30px 0px rgba(209, 217, 230, 0.25),
    8px 8px 30px 0px rgba(209, 217, 230, 0.25);
  background-color: #fff;
  width: 520px;
  height: 370px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  img {
    width: 350px;
  }
`;

export const Carousel = styled.section`
  width: 70px;
  height: 370px;

  /* width: 500px; */
  display: flex;
  justify-content: center;
  align-items: center;

  &.no-carousel {
    flex-direction: column;
    row-gap: 2px;
  }
  /* 
  .slick-slider {
    height: 100%;
  }

  *:focus {
    outline: 0;
    outline: none;
  } */
  .carousel-image-product {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 12px;

    /* padding: 32px 0; */
  }

  .slick-list {
    box-shadow: -4px -4px 16px 0px rgba(209, 217, 230, 0.25),
      4px 4px 16px 0px rgba(209, 217, 230, 0.25);
  }

  /*
  .slick-prev::before,
  .slick-next::before {
    color: #5ce1e6;
    opacity: 0.75;
  }

  .slick-dots {
    position: absolute;
    bottom: 0px;
    display: none !important;
  }

  .slick-dots li {
    margin: 0;
  }

  .slick-arrow {
    display: none !important; 
    position: static !important;
  }

  .slick-dots li button::before {
    color: #fff;
    opacity: 1;
  }

  .slick-dots li.slick-active button::before {
    color: #5ce1e6;
    opacity: 1;
  } */

  .slick-slide {
    width: 70px !important;
  }

  .slick-arrow {
    position: relative;
    left: 0;
    right: 0;
    /* top: 0; */
  }

  .slick-arrow.slick-prev {
    /* bottom: 0 !important; */
    transform: rotate(90deg);
  }
  .slick-arrow.slick-next {
    /* bottom: 0 !important; */
    transform: rotate(90deg);
  }
`;

export const ItemCard = styled.div`
  display: flex !important;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PreviewCard = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px !important;
  height: 70px;
  background-color: #fff;
  /* box-shadow: -4px -4px 16px 0px rgba(209, 217, 230, 0.25),
    4px 4px 16px 0px rgba(209, 217, 230, 0.25); */
  border-radius: 2px;
  border: none;
  cursor: pointer;

  img {
    width: 65px;
    max-height: 65px;
  }
`;
