import styled from 'styled-components';

export const ContentPage = styled.section`
  background-color: #010f20;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
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

  &.mt {
    margin-top: ${props => props.mt}px;
  }

  &.gap {
    column-gap: ${props => props.gap}px;
  }

  &.between {
    justify-content: space-between;
  }

  p {
    color: #fff;
    font-size: 12px;
    font-weight: 400;
  }

  img.common-width {
    height: 14px;
  }

  h3 {
    font-size: 18px;
    font-weight: 500;
    color: #fff;
  }
`;

export const NeumorphismCard = styled.div`
  border-radius: 8px;
  background: #010f20;
  box-shadow: inset -10px -10px 25px #02183350, inset 10px 10px 25px #00060d50;
  width: calc(86% - 40px);
  margin: 12px 8%;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;

  &.gap {
    row-gap: ${props => props.gap}px;
  }
`;

export const UserInfos = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

export const BtnEdit = styled.div`
  width: 16px;
  border: none;
  background-color: transparent;

  img {
    width: 100%;
  }

  @media (min-width: 1024px) {
    cursor: pointer;
  }
`;
export const BtnAdd = styled.div`
  width: 16px;
  border: none;
  background-color: transparent;

  img {
    width: 100%;
  }

  @media (min-width: 1024px) {
    cursor: pointer;
  }
`;

export const TextBorderBottom = styled.p`
  border-bottom: 1px solid #02eddf;
  color: #fff;
  width: auto;
  /* padding-left: 3px; */
  padding-right: 6px;
`;

export const ParagraphShip = styled.p`
  font-size: 12px;
  color: #d1d9e6;
  font-weight: 500;
`;
