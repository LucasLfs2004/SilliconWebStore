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

export const ShipValue = styled.div``;
