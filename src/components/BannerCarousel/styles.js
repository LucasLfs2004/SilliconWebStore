import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  width: 100%;
  background-color: #ffffff;
  height: calc(100vw / 3);
  z-index: 1;

  *:focus {
    outline: 0;
    outline: none;
  }
  .carousel-image-product {
    width: 100%;
  }

  .slick-prev::before,
  .slick-next::before {
    color: #5ce1e6;
    opacity: 0.75;
  }

  .slick-dots {
    position: absolute;
    bottom: 6px;
  }

  .slick-dots li {
    margin: 0;
  }

  .slick-arrow {
    display: none !important;
  }

  .slick-dots li button::before {
    color: #fff;
    opacity: 1;
  }

  .slick-dots li.slick-active button::before {
    color: #5ce1e6;
    opacity: 1;
  }

  @media (max-width: 1024px) {
    .carousel-item {
      height: calc(100vw / 3);
    }
  }

  @media (min-width: 1024px) {
    height: calc(100vw / 4.8);
  }
`;

export const ItemBanner = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
