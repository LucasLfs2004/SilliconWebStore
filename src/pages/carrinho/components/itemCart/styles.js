import styled from 'styled-components';

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
