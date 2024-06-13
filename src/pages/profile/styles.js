import styled from 'styled-components';

export const ContentPage = styled.section`
  background-color: #010f20;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  row-gap: 24px;

  @media (min-width: 1024px) {
    row-gap: 48px;
  }
`;

export const Title = styled.h3`
  font-size: 20px;
  padding: 12px 10% 0 10%;
  color: #5ce1e6;
`;

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
    font-size: 18px;
    font-weight: 500;
    color: #fff;
  }
`;

export const NeumorphismCard = styled.div`
  border-radius: 8px;
  background: #010f20;
  box-shadow: inset -10px -10px 25px #02183350, inset 10px 10px 25px #00060d50;
  width: calc(94% - 36px);
  margin: 12px 3%;
  padding: 16px 18px;
  display: flex;
  flex-direction: column;

  h1 {
    color: #fff;
    font-size: 18px;
  }

  &.gap {
    row-gap: ${props => props.gap}px;
  }

  @media (min-width: 1024px) {
    width: 50%;
    margin: 0;
    width: calc(86% - 40px);
    margin: 12px 8%;
    padding: 18px 20px;
    &.full {
      width: 100%;
    }
  }
`;

export const UserInfos = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

export const BtnEdit = styled.div`
  width: 16px;
  border: none;
  background-color: transparent;

  img {
    width: 100%;
  }

  @media (min-width: 1024px) {
    cursor: pointer;
  }
`;
export const BtnAdd = styled.div`
  width: 16px;
  border: none;
  background-color: transparent;

  img {
    width: 100%;
  }

  @media (min-width: 1024px) {
    cursor: pointer;
  }
`;

export const TextBorderBottom = styled.p`
  border-bottom: 1px solid #02eddf;
  color: #fff;
  width: auto;
  /* padding-left: 3px; */
  padding-right: 6px;
`;

export const ParagraphShip = styled.p`
  font-size: 12px;
  color: #d1d9e6;
  font-weight: 500;

  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;

export const DisplayCards = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    column-gap: 48px;
    padding: 0 5%;
  }
`;

export const BtnDetails = styled.button`
  background-color: #5ce1e6;
  border: none;
  height: 32px;
  color: #010f20;
  font-weight: 700;
  border-radius: 4px;
  padding: 0 12px;
`;

export const ContentOrder = styled.div`
  border-top: 1px solid #5ce1e690;
  border-bottom: 1px solid #5ce1e690;
  width: -webkit-fil-available;
  margin-top: 12px;
  padding: 8px 2%;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
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

export const productOrderArea = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 16px;

  .img-area {
    border-radius: 4px;
    padding: 3px;
    background-color: #fff;
  }

  img {
    width: 100px;
  }
`;

export const DataOrderItem = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  color: #fff;
  width: -webkit-fill-available;

  span {
    font-weight: 700;
    font-size: 11px;
  }
  div.row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
