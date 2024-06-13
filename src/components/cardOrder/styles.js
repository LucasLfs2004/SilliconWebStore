import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  &.mt {
    margin-top: ${props => props.mt}px;
  }

  &.gap {
    column-gap: ${props => props.gap}px;
  }

  &.between {
    justify-content: space-between;
  }

  p {
    color: #fff;
    font-size: 12px;
    font-weight: 400;
  }

  img.common-width {
    height: 14px;
  }

  img.cart {
    height: 25px;
  }

  h3 {
    font-size: 14px;
    font-weight: 500;
    color: #fff;
  }

  h3 span {
    color: #5b43d6;
    font-weight: 600;
  }

  @media (max-width: 1024px) {
    &.mobile-column {
      flex-direction: column;
      align-items: flex-start;
      row-gap: 6px;
    }
  }

  @media (min-width: 1024px) {
    h3 {
      font-size: 18px;
      font-weight: 500;
      color: #fff;
    }
  }
`;

export const NeumorphismCard = styled.div`
  border-radius: 8px;
  background: #010f20;
  box-shadow: inset -10px -10px 25px #02183350, inset 10px 10px 25px #00060d50;
  width: calc(94% - 32px);
  margin: 12px 3%;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;

  &.gap {
    row-gap: ${props => props.gap}px;
  }

  @media (min-width: 1024px) {
    width: 100%;
    margin: 0;
    width: calc(86% - 40px);
    margin: 12px 8%;
    padding: 18px 20px;
  }
`;

export const BtnDetails = styled.button`
  background-color: #5ce1e6;
  border: none;
  color: #010f20;
  font-weight: 700;
  border-radius: 4px;
  padding: 0 12px;
  width: 100%;
  height: 26px;

  @media (min-width: 1024px) {
    width: auto;
    height: 32px;
  }
`;

export const ContentOrder = styled.div`
  border-top: 1px solid #5ce1e690;
  width: -webkit-fil-available;
  margin-top: 12px;
  padding: 8px 2%;
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  &.without-border-top {
    border-top: none;
    margin-top: 0;
  }

  @media (min-width: 1024px) {
    border-bottom: 1px solid #5ce1e690;
  }
`;

export const PayMethod = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 16px;

  p {
    font-size: 14px;
    color: #fff;
    font-weight: 700;
  }
`;

export const StatusOrder = styled.span`
  font-size: 14px;
  font-weight: 700;

  &.green {
    color: #0f0;
  }

  &.yellow {
    color: #ff0;
  }

  &.red {
    color: #f00;
  }
`;

export const TopContentCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  width: -webkit-fill-available;
  margin-bottom: 16px;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
  }

  span {
    font-weight: 700;
    font-size: 11px;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const productOrderArea = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 16px;

  .img-area {
    border-radius: 4px;
    padding: 3px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 100px;
    height: auto;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    column-gap: 16px;

    .img-area {
      border-radius: 4px;
      padding: 3px;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      width: 100px;
      height: auto;
    }
  }
`;

export const DataOrderItem = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  color: #fff;
  width: -webkit-fill-available;
  padding-bottom: 16px;
  border-bottom: 1px solid #02eddf50;

  p {
    font-size: 13px;
    margin-top: 4px;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
  }

  span {
    font-weight: 700;
    font-size: 11px;
  }

  div.row {
    display: none;
  }

  @media (min-width: 1024px) {
    p {
      margin-top: 0;
      font-size: 16px;
    }
    div.row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export const BtnCommentProduct = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #02eddf;
  padding: 3px 12px;
  border-radius: 4px;

  a {
    color: #010f20 !important;
  }
`;
