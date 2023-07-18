import { styled } from 'styled-components';

export const Container = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  min-width: 78.78%;

  label {
    color: #5b43d6;
    font-size: 10px;
    padding-left: 3px;
    font-weight: 275;
  }

  input {
    background: #ecf0f3;
    box-shadow: 5px 5px 6px 0px #d1d9e6,
      -5px -5px 6px 0px rgba(255, 255, 255, 0.35);
    border-radius: 5px;
    border: none;
    width: calc(100% - 28px);
    height: 30px;
    padding: 0 14px;
    font-size: 12px;
  }

  input::placeholder {
    color: #c1c5d6;
    font-size: 10px;
    font-weight: 275;
  }
`;
