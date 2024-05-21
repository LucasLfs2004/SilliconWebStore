import styled from 'styled-components';

export const Payment = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-bottom: 28px;

  @media (min-width: 1024px) {
    background-color: #010f20;
    padding: 16px 0;
    row-gap: 18px;
  }
`;

export const Title = styled.h1`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    padding-left: 60px;
  }
`;

export const ItemPay = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #010f20;
  border-left: 3px solid #010f20;
  transition: border 0.3s ease-in-out;

  &.selected {
    border-left: 3px solid #5ce1e6;
  }

  @media (min-width: 1024px) {
    border-radius: 8px;
    background: #010f20;
    box-shadow: -8px -8px 12px 0px #01142a inset, 8px 8px 12px 0px #010b16 inset;
    margin: 0 28px;
  }
`;

export const PayCard = styled.button`
  border: none;
  background-color: transparent;
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 16px;
  padding: 12px 20px;

  @media (min-width: 1024px) {
    cursor: pointer;
  }
`;

export const InfoPay = styled.div`
  display: none;
  flex-direction: column;

  &.view {
    display: flex;
  }
`;

export const List = styled.ul`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ButtonsPayment = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const Portion = styled.div`
  width: 100%;
  padding: 16px;

  select {
    width: 360px;
    padding: 2px 6px;
    height: 28px;
    background-color: #010f20;
    border: none;
    color: #fff;
    border: 1px solid #02efdf;
    border-radius: 6px;
    box-shadow: -8px -8px 12px 0px #01142a, 8px 8px 12px 0px #010b16;
    outline: none;
  }
`;
