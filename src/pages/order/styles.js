import styled from 'styled-components';

export const ContentPage = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 10%;
  align-items: flex-start;
  width: 80%;
`;

export const ContentHeader = styled.div`
  margin-top: 24px;
  box-shadow: -12px -12px 20px #021833;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #010f20;
  width: calc(100% - 48px);
  border-radius: 4px 4px 1px 1px;
  padding: 4px 24px;
  border-bottom: 2px solid #02efdf;

  h3 {
    font-weight: 600;
    text-transform: uppercase;
  }

  h3.red {
    color: #f00;
  }

  h3.green {
    color: #0f0;
  }

  h3.yellow {
    color: #ff0;
  }

  p {
    color: #fff;
    font-weight: 500;
    font-size: 18px;
  }
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 24px;
  justify-content: space-between;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
`;

export const NeumorphismCard = styled.div`
  border-radius: 8px;
  background: #010f20;
  box-shadow: inset -10px -10px 25px #02183350, inset 10px 10px 25px #00060d50;
  width: calc(100% - 40px);
  margin: 12px 0;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;

  &.gap {
    row-gap: ${props => props.gap}px;
  }

  @media (min-width: 1024px) {
    /* width: 50%; */
    margin: 0;

    &.full {
      width: 100%;
    }
  }
`;

export const ShipData = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #02efdf90;
  padding: 0 2px 6px 2px;

  h3 {
    font-weight: 600;
    font-size: 18px;
    color: #fff;
  }

  p {
    color: #fff;
    font-size: 14px;
    margin-top: 6px;
    font-weight: 500;
  }
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

  h3 span {
    color: #5b43d6;
    font-weight: 600;
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

export const ValuesArea = styled.div`
  padding-top: 24px;
  display: flex;
  flex-direction: column;
`;

export const RowValue = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;

  p {
    font-weight: 500;
  }

  span {
    font-weight: 600;
  }

  &.total {
    margin-top: 16px;
    border-top: 1px solid #02efdf;
    padding: 8px 4px 0 4px;
  }
`;
