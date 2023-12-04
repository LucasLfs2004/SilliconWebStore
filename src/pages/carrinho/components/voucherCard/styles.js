import styled from 'styled-components';

export const CupomArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 70px;

  width: 95%;
  padding: 0 2.5%;

  @media (min-width: 104px) {
    background-color: #fff;
    padding: 4px 20px 8px 20px;
    height: auto;
    width: 100%;
  }
`;

export const CupomApply = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: #75e363;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  span {
    color: #010f20;
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @media (min-width: 1024px) {
    height: 32px;
    row-gap: 2px;
  }
`;

export const RowCupom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1024px) {
    margin-top: 16px;
    justify-content: flex-start;
    column-gap: 60px;
    margin-bottom: 6px;

    p.mobile-only {
      display: none;
    }

    input.extended {
      width: 120px;
    }
  }
`;
