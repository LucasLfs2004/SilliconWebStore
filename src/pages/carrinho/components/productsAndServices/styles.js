import styled from 'styled-components';

export const CartComponent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Top = styled.div`
  width: 95%;
  padding: 12px 2.5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: #5b43d6;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (min-width: 1024px) {
    width: fit-content;
    padding: 0 5px;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    border-bottom: 1px solid #02eddf;

    &.margin {
      margin: 0 22px;
    }
  }
`;

export const BtnDelete = styled.button`
  border-radius: 3px;
  border: 1px solid #f00;
  color: #f00;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 5px;
  text-align: center;
  font-size: 9px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  padding: 2px 7px;
`;

export const SellFrom = styled.div`
  background-color: #010f20;
  width: 95%;
  padding: 6px 2.5%;
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  strong {
    font-weight: 600;
  }
`;

export const CartArea = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;
