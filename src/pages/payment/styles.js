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
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Subtitle = styled.h2`
  color: #fff;
  font-size: 14px;
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
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
  width: 96px;
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
`;

export const PayCard = styled.button`
  border: none;
  background-color: #010f20;
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 16px;
  padding: 12px 20px;
  border-left: 3px solid #010f20;

  transition: border 0.3s ease-in-out;

  &.selected {
    border-left: 3px solid #5ce1e6;
    /* padding: 12px 17px; */
  }
`;
