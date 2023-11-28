import styled from 'styled-components';

export const Container = styled.section`
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Cart = styled.div`
  width: 100%;
  min-height: calc(100vh - 260px);
  background-color: #ecf0f3;
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

export const ItemCart = styled.div`
  width: 95%;
  padding: 13px 2.5% 10px 2.5%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  column-gap: 12px;
  background-color: #fff;
`;

export const ImgProduct = styled.img`
  margin: 0;
  width: 70px;
  height: 70px;
`;

export const Infos = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: calc(100% - 80px);
  height: 100%;

  p {
    color: #010f20;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Price = styled.div`
  margin: 0;
  p {
    color: #000;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  p.purple {
    color: #5b43d6;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 15px;
`;

export const BtnQuantidade = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 5px;

  p {
    color: #010f20;
    font-size: 13px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-align: center;
  }

  button {
    padding: 0;
    border: none;
    background-color: transparent;
    width: 6px;
    color: #5b43d6;
    font-size: 13px;
    font-weight: 300;
    text-align: center;
  }

  @media (min-width: 1024px) {
    button {
      height: 23px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 10px;
    }

    p {
      font-size: 15px;
      font-weight: 400;
    }
  }
`;

export const ButtonDelete = styled.button`
  margin: 0;
  border: none;
  padding: 0;
  background-color: transparent;

  @media (min-width: 1024px) {
    cursor: pointer;

    img {
      height: 18px;
    }
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
export const CupomArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 70px;

  width: 95%;
  padding: 0 2.5%;
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

export const RowCupom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

export const CartResume = styled.div`
  width: 95%;
  padding: 0 2.5%;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const RowP = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p {
    color: #010f20;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 200px;
  }

  p.grey {
    opacity: 0.7;
  }

  p.purple {
    color: #5b43d6;
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  width: 95%;
  padding: 50px 2.5%;

  a {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 4px;
  }

  a.payment {
    background-color: #010f20;
  }

  a.continue {
    border: 1px solid #02eddf;
    color: #010f20;
  }
`;
