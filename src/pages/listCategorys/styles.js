import styled from 'styled-components';

export const ContentPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #010f20;
  color: #fff;
  align-items: center;
  justify-content: center;
  height: 48px;
  font-size: 24px;
  font-weight: 600;
`;

export const ListCategory = styled.div`
  padding: 36px 5%;
  width: 90%;
  column-gap: 24px;
  row-gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const ItemCategory = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #010f20;
  width: calc(100% - 48px);
  height: 108px;
  border-radius: 8px;
  padding: 18px 24px;
  transition: all 0.5s;
  border: 1px solid #010f20;

  p {
    color: #fff;
    font-weight: 700;
    font-size: 22px;
  }

  @media (min-width: 1440px) {
    cursor: pointer;
  }

  &:hover {
    border: 1px solid #02efdf;
    transform: scale(1.05);
    box-shadow: inset -10px -10px 16px #021833, inset 10px 10px 16px #00060d;
  }

  &:active {
    transform: scale(0.95) rotateZ(1.7deg);
  }
`;
