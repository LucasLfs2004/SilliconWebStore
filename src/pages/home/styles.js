import { styled } from 'styled-components';

export const Carousel = styled.section`
  margin: 0;
  padding: 0;
  height: 180px;
`;

export const TitlePurple = styled.article`
  background-color: #5b43d6;
  box-shadow: 0px 4px 10px -2px rgba(1, 15, 32, 0.8) inset;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 0;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
  }

  @media (min-width: 1024px) {
    height: 75px;
    h1 {
      font-size: 24px;
    }
  }
`;

export const CarouselMarcas = styled.div`
  margin: 0;
  background-color: #010f20;
  max-width: 100%;
  height: 90px;
  display: flex;
  padding-left: 30px;
  align-items: center;

  img {
    width: 100%;
  }
`;
