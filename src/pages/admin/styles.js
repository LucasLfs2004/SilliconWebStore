import styled from 'styled-components';

export const ContentPage = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #5b43d6;

  &.mini {
    font-size: 18px;
  }

  &.left {
    width: 100%;
    text-align: left;
  }
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  column-gap: 64px;

  &.width {
    width: ${props => props.width};
  }

  &.column-gap {
    column-gap: ${props => props.cgap};
  }
`;

export const ComponentNeumorphism = styled.div`
  width: 45%;
  display: flex;
  height: fit-content;
  background-color: #ecf0f3;
  box-shadow: 15px 15px 29px 0px #d1d9e6, -15px -15px 29px 0px #fff;
  width: calc(100% - 32px);
  padding: 18px 16px;
  margin: 12px 0 0 0;
  border-radius: 8px;
  row-gap: 8px;
  align-items: center;

  @media (min-width: 1024px) {
    row-gap: 12px;
    padding: 18px 24px;
    margin: 36px auto;
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    width: fit-content;
  }

  @media (min-width: 1500px) {
    max-width: 1460px;
  }
`;

export const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 304px;
  overflow-y: auto;
  /* background-color: #010f20; */
  border-radius: 8px;
  padding: 8px 12px;
`;

export const RowCard = styled.div`
  display: flex;
  flex-direction: row;
  padding: 6px 6px;
  border-bottom: 1px solid #5b43d6;
  column-gap: 24px;
`;

export const NameComponent = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #010f20;
  width: 140px;
`;

export const IdComponent = styled.p`
  font-size: 16px;
  font-weight: 500;
  width: 130px;

  span {
    color: #5b43d6;
  }
`;

export const ActionsArea = styled.div`
  /* background-color: #010f20; */
  display: flex;
`;

export const BtnAction = styled.button`
  background-color: transparent;
  border: none;
  width: 28px;

  img {
    width: 100%;
  }

  @media (min-width: 1024px) {
    cursor: pointer;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 24px;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  row-gap: 12px;
`;

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageComponent = styled.div`
  /* max-width: 30px; */
  max-height: 25px;
  max-width: 100px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 100px;

  img {
    max-width: 100%;
    max-height: 100%;
    /* height: 100%; */
  }
`;

export const LogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
  width: 100px;
  height: 100px;

  img {
    max-width: 100%;
    max-height: 80%;
  }

  p {
    color: #5b43d6;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }
`;

export const BtnCancel = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ecf0f3;
  border-radius: 5px;
  border: none;
  height: 30px;
  color: #5b43d6;
  font-weight: 500;
  transition: all 0.4s ease;

  &:hover {
    box-shadow: 5px 5px 6px 0px #d1d9e6,
      -5px -5px 6px 0px rgba(255, 255, 255, 0.35);
    cursor: pointer;
  }
`;
