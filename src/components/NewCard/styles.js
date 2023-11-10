import styled from 'styled-components';

export const Display = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: calc(100% - 32px);
  padding: 0 17px 15px 15px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 10px;
`;

export const Input = styled.input`
  border-radius: 3px;
  border: 1px solid #5ce1e6;
  width: ${props => props.width};
  background-color: transparent;
  outline: none;
  height: 30px;
  padding: 0 9px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const Select = styled.select`
  border-radius: 3px;
  border: 1px solid #5ce1e6;
  width: ${props => props.width};
  background-color: transparent;
  outline: none;
  height: 30px;
  padding: 0 9px;
  background-color: transparent;
  color: #fff;
`;
