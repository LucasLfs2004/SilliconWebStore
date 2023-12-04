import styled from 'styled-components';

export const BtnFilter = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 100px;
  border: none;
  border-radius: 5px;
  background: #ecf0f3;
  box-shadow: ${props => props.boxShadow};
  column-gap: 10px;

  p {
    color: #010f20;
    font-size: 12px;
    font-weight: 400;
  }

  @media (min-width: 1024px) {
    width: 150px;

    p {
      font-size: 14px;
    }
  }
`;
