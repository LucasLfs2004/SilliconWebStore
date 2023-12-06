import styled from 'styled-components';

export const SimpleInfos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 0;
  margin: 0 auto;
  background-color: transparent;
  width: 100%;

  p {
    color: #fff;
    font-size: 9px;
  }

  @media (min-width: 1024px) {
    border-radius: 5px 5px 0 0;
  }
`;

export const LogoInfo = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  img {
    max-height: 18px;
    max-width: 70px;
  }

  @media (min-width: 1024px) {
    img {
      max-width: 100px;
    }
  }
`;

export const WarrantyInfo = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  column-gap: 24px;
  margin: 0 24px;
  align-items: center;
  width: 40%;

  p {
    width: 100px;
    text-align: center;
  }

  @media (min-width: 1024px) {
    p {
      font-size: 16px;
      width: 170px;
    }
  }
`;

export const BtnActions = styled.div`
  display: flex;
  width: 30%;
  flex-direction: row;
  column-gap: 8px;

  button {
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
  }

  @media (min-width: 1024px) {
    column-gap: 14px;

    img {
      width: 24px;
    }

    img.share-icon {
      width: 20px;
    }
  }
`;
