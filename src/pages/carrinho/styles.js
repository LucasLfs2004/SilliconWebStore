import styled from 'styled-components';

export const Title = styled.div`
  @media (max-width: 1024px) {
    &.only-web {
      display: none;
    }
  }

  h1 {
    color: #5b43d6;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #02eddf;
    width: fit-content;
    padding: 0 6px;
    column-gap: 8px;

    h1 {
      color: #5b43d6;
      font-size: 20px;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
`;

export const ContentPage = styled.div`
  width: 100%;
  min-height: calc(100vh - 260px);
  background-color: #ecf0f3;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    align-items: start;
    column-gap: 80px;
    padding: 56px 0;
  }

  @media (min-width: 1024px) and (max-width: 1460px) {
    column-gap: 36px;
    padding: 40px 0;
  }
`;

export const BoxInfos = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    min-width: 900px;
    max-width: 1000px;
    flex-direction: column-reverse;
    width: 100%;
  }
`;

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

export const InputsBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    column-gap: 40px;
  }
`;

export const CepArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  padding: 0 2.5%;
  justify-content: center;
  row-gap: 6px;
  height: 70px;
`;

export const RowCep = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CepInfo = styled.span`
  color: #010f2095;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  height: 17px;
`;

export const InputDisplay = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 9px;
  align-items: center;

  input {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    padding: 0 5px 3px 5px;
    outline: none;
    background-color: transparent;
    border: none;

    border-bottom: 0.5px solid #5b43d6;
  }

  input.center {
    width: 65px;
    text-align: center;
  }

  @media (min-width: 1024px) {
    p {
      color: #010f20;
      font-size: 12px;
      font-weight: 500;
    }
  }
`;

export const InputCep = styled.input``;

export const ButtonPurple = styled.button`
  background-color: #5b43d6;
  border: none;
  height: 24px;
  width: 70px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
