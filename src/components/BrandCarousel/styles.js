import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  background-color: #010f20;
  width: 100%;
  height: 90px;
`;

export const Carousel = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* .slick-slider {
		width: 85%;
	} */

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
    bottom: 0px;
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
`;

export const ItemBrand = styled.a`
  margin: 0;
  height: 90px;
  display: flex !important;
  align-items: center;
  justify-content: center;

  img {
    min-width: 80%;
    max-width: 90%;
    width: auto;
    max-height: 35px;
  }
`;
