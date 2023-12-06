import styled from 'styled-components';

export const Ship = styled.div`
  background-color: #010f20;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
  padding: 9px 2.5%;

  @media (min-width: 1024px) {
    width: calc(100% - 30px);
    padding: 8px 20px 8px 10px;
  }
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
