import { styled } from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 99;
  width: calc(100% - 4%);
  padding: 0 2%;
  background-color: #010f20;
  height: 60px;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1024px) {
    height: 80px;
  }
`;

export const Logo = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #c1c5d6;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    margin: 0;
    margin-bottom: -2px;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 16px;
    }

    img {
      width: 66px;
    }
  }
`;

export const Page = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 14px;

  h1 {
    background: linear-gradient(95deg, #02efdf 9.34%, #5b43d6 99.96%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 20px;
    font-weight: 500;
  }

  img {
    width: 30px;
  }

  @media (min-width: 1024px) {
    column-gap: 26px;

    h1 {
      font-size: 36px;
      font-weight: 500;
    }

    img {
      width: 38px;
    }
  }
`;

export const DivBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 7%;

  button {
    margin: 0;
    padding: 0;
  }

  .carrinho {
    margin: 0;
    border: none;
    background-color: transparent;
  }

  @media (min-width: 1024px) {
    .carrinho img {
      height: 24px;
    }
  }

  @media (min-width: 1024px) {
    width: 8%;
  }
`;
