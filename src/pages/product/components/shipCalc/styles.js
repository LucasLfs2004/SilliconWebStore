import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  margin-top: 40px;
`;
export const RowCep = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 16px;
  align-items: center;

  p {
    color: #010f20;
    font-size: 16px;
    font-weight: 300;
    margin-right: 18px;
  }

  input {
    border-radius: 5px;
    background: #ecf0f3;
    box-shadow: 5px 5px 6px 0px #d1d9e6,
      -5px -5px 6px 0px rgba(255, 255, 255, 0.35);
    border: none;
    outline: none;
    padding: 6px 12px;
    height: fit-content;
  }

  input::placeholder {
    color: #c1c5d6;
    font-size: 14px;
    font-weight: 300;
  }

  a {
    color: #5b43d6;
    font-size: 14px;
    font-weight: 500;
  }
`;
export const CepLocation = styled.p`
  color: rgba(1, 15, 32, 0.6);
  font-size: 14px;
  font-weight: 500;
`;

export const ButtonCep = styled.button`
  background-color: #5b43d6;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-weight: 600;
  padding: 6px 12px;
  font-size: 16px;

  @media (min-width: 1024px) {
    cursor: pointer;
  }
`;
