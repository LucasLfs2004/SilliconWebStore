import { styled } from 'styled-components';

export const Button = styled.button`
  background-color: #5b43d6;
  color: #fff;
  border-radius: 5px;
  width: 45.5%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: transparent;
    color: #5b43d6;
    box-shadow: 6px 6px 12px 0px inset #d1d9e6, -6px -6px 12px 0px inset #fff;
  }

  @media (min-width: 1024px) {
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
  }
`;
