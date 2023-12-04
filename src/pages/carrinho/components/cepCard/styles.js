import styled from 'styled-components';

export const CepArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  padding: 0 2.5%;
  justify-content: center;
  row-gap: 6px;
  height: 70px;

  @media (min-width: 1024px) {
    background-color: #fff;
    height: auto;
    width: 100%;
    padding: 4px 20px 8px 20px;
    justify-content: flex-start;
  }
`;

export const RowBox = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    a {
      width: 90px;
      color: #02eddf;
      font-size: 10px;
      font-weight: 500;
    }
  }
`;

export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowCep = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1024px) {
    margin-top: 16px;
    justify-content: flex-start;
    column-gap: 30px;
  }
`;

export const CepInfo = styled.span`
  color: #010f2095;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  height: 17px;

  @media (min-width: 1024px) {
    margin-top: 4px;
  }
`;

export const ShipValue = styled.div`
  margin: 0;
  display: flex;
  justify-content: end;
  flex-direction: column;
  row-gap: 4px;
`;

export const Subtitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 7px;

  div {
    padding: 0 3px;
    border-bottom: 1px solid #5b43d6;
    display: flex;
    flex-direction: row;
    column-gap: 4px;
  }

  h2 {
    color: #010f20;
    font-size: 12px;
    font-weight: 500;
  }

  h1 {
    color: #5b43d6;
    font-size: 12px;
    font-weight: 700;
  }
`;
export const TimeShip = styled.div`
  color: rgba(1, 15, 32, 0.6);
  font-size: 10px;
  font-weight: 500;
  text-align: right;
`;
