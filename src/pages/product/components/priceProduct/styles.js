import styled from 'styled-components';

export const PriceArea = styled.section`
  display: flex;
  flex-direction: column;
  width: 85%;
  padding-bottom: 12px;
  padding: 7px 7.5% 12px 7.5%;
  background: #ecf0f3;
  box-shadow: 5px 5px 6px 0px #d1d9e6 inset, -5px -5px 6px 0px #fff inset;

  @media (min-width: 1024px) {
    background-color: transparent;
    box-shadow: none;
    padding: 0;
    max-width: 570px;
  }
`;

export const Rating = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    align-items: center;
    height: 30px;
    margin-bottom: 20px;

    p {
      color: #010f20;
      font-size: 14px;
      font-weight: 300;
    }
  }
`;

export const Name = styled.p`
  color: #010f20;
  font-size: 13px;
  font-weight: 300;

  @media (min-width: 1024px) {
    font-size: 16px;
    font-weight: 600;
  }
`;

export const IdProduct = styled.p`
  color: #010f20;
  font-size: 8px;
  font-weight: 300;
  margin-bottom: 5px;

  @media (min-width: 1024px) {
    font-size: 10px;
  }
`;

export const BrandProduct = styled.p`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    color: #010f20;
    font-size: 12px;
    font-weight: 400;
  }
`;

export const RowPriceBtn = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    column-gap: 94px;
    margin-top: 32px;
    align-items: center;
  }
`;

export const RowPrice = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  margin-top: 9px;

  @media (min-width: 1024px) {
    column-gap: 16px;

    img {
      width: 26px;
    }

    &.credit {
      display: none;
    }

    img.only-mobile {
      display: none;
    }
  }
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

  &.cian p,
  &.cian span {
    color: #5ce1e6;
  }

  @media (min-width: 1024px) {
    p {
      color: #5b43d6;
      font-size: 20px;
      font-weight: 700;
      line-height: 22px;
    }
  }
`;

export const PriceInCredit = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    row-gap: 2px;

    p {
      color: #010f20;
      font-size: 14px;
      font-weight: 700;
    }

    span {
      font-size: 12px;
      font-weight: 500;
      color: #010f20;
    }

    span strong {
      font-weight: 700;
    }
  }
`;

export const BtnsBuy = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 16px;
`;

export const ButtonBuy = styled.button`
  display: none;

  @media (min-width: 1024px) {
    border-radius: 3px;
    background: #02eddf;
    height: 36px;
    padding: 20px;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 8px;
    color: #010f20;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    img {
      width: 24px;
    }
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

export const SeePortions = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    color: #5b43d6;
    font-size: 12px;
    font-weight: 700;
    width: fit-content;
    cursor: pointer;
  }
`;

export const SellFrom = styled.p`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    color: #010f20;
    font-size: 14px;
    font-weight: 500;
    margin-top: 8px;

    span {
      color: #5b43d6;
    }
  }
`;

export const BuyComponent = styled.div`
  background-color: #010f20;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 7%;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const BuyBtn = styled.button`
  width: 33%;
  height: 30px;
  border-radius: 5px;
  background: #ecf0f3;
  border: none;
  box-shadow: 5px 5px 6px 0px #d1d9e6 inset, -5px -5px 6px 0px #fff inset;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 12px;

  p {
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
