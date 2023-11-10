import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #ecf0f3;
  min-height: 100vh;
`;

export const Title = styled.h1`
  color: #010f20;
  width: 95%;
  padding: 5px 2.5% 10px 2.5%;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &.blue {
    color: #5ce1e6;
  }

  &.no-padding {
    width: 100%;
    padding: 5px 0 10px 0;
  }
`;

export const Subtitle = styled.h2`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Paragraph = styled.p`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &.spaced {
    padding-left: 34px;
  }

  &.mini {
    font-size: 12px;
  }

  &.margin-top {
    margin-top: 12px;
  }
`;

export const Span = styled.span`
  color: rgba(236, 240, 243, 0.7);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Ship = styled.div`
  background-color: #010f20;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
  padding: 9px 2.5%;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
`;

export const Icon = styled.img`
  width: 24px;
`;

export const InfosShip = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonsShip = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 9px;
`;

export const Button = styled.button`
  margin: 0;
  color: #fff;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
  width: 104px;
  border-radius: 3px;
  background-color: transparent;
  border: 1px solid #fff;
  height: 22px;
`;

export const Payment = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-bottom: 28px;
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

export const ButtonNavigation = styled.button`
  border: none;
  display: flex;
  width: 95%;
  margin: 0 2.5%;
  height: 30px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 4px;
  background: #010f20;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &.transparent {
    background-color: transparent;
    border: 1px solid #02eddf;
    color: #010f20;
  }
`;
