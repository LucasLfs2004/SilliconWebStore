import styled from 'styled-components';

export const ContentPage = styled.section`
  background-color: #010f20;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 20px;
  padding: 12px 10% 0 10%;
  color: #5ce1e6;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  &.gap {
    column-gap: ${props => props.gap}px;
  }

  &.between {
    justify-content: space-between;
  }
`;

export const NeumorphismCard = styled.div`
  border-radius: 8px;
  background: #ecf0f3;
  box-shadow: inset -9px -9px 18px #d7dadd, inset 9px 9px 18px #ffffff;
  width: calc(86% - 40px);
  margin: 12px 8%;
  padding: 18px 20px;
`;

export const UserInfos = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  p {
    color: #010f20;
    font-size: 14px;
    font-weight: 400;
  }

  img.common-width {
    width: 16px;
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #5b43d6;
  }
`;

export const BtnEdit = styled.div`
  width: 22px;
  border: none;
  background-color: transparent;

  img {
    width: 100%;
  }

  @media (min-width: 1024px) {
    cursor: pointer;
  }
`;
