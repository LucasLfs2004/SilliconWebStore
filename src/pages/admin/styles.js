import styled from 'styled-components';

export const ContentPage = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
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

  &.flex-start {
    justify-content: flex-start;
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
    margin: 36px;
    display: flex;
    flex-direction: column;
    max-width: 1440px;

    &.full {
      width: 100%;
    }
    /* width: fit-content; */
  }

  @media (min-width: 1500px) {
    max-width: 40%;
    &.full {
      max-width: 80%;
    }
  }
`;

export const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 304px;
  width: 100%;
  overflow-y: auto;
  /* background-color: #010f20; */
  border-radius: 8px;
  padding: 8px 12px;

  &::-webkit-scrollbar {
    width: 8px;
    padding-left: 10px; /* largura da barra de rolagem */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #010f20; /* cor de fundo da trilha de rolagem */
    border-radius: 5px; /* arredondamento das bordas do botão de rolagem */
  }
  &::-webkit-scrollbar-track {
    background-color: #ecf0f3; /* cor do botão de rolagem */
  }
`;

export const RowCard = styled.div`
  display: flex;
  flex-direction: row;
  padding: 6px 6px;
  border-bottom: 1px solid #5b43d6;
  column-gap: 24px;

  @media (min-width: 1440px) {
    justify-content: space-between;
  }
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

  &.set-width {
    width: ${props => props.width};
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

export const ListBanners = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  flex-wrap: wrap;
  width: 100%;
  column-gap: 24px;
  row-gap: 24px;
`;

export const BannerItem = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #c3c6ce;
  padding: 4px 12px;
  border-radius: 18px;
  transition: 0.5s ease-out;
  overflow: visible;
  width: calc(50% - 48px);
  row-gap: 8px;
  /* max-width: 300px; */

  &:hover {
    border-color: #5b43d6;
    box-shadow: 0 4px 18px 0 #5ce1e620;
  }

  .edit-icon path,
  .trash-icon {
    transition: all 0.3s ease-out;
  }

  &:hover .edit-icon path {
    stroke: #5b43d6;
  }

  &:hover .trash-icon {
    fill: #ff0000;
  }

  .id {
    font-weight: 600;
    color: #5b43d6;

    span {
      color: #010f20;
    }
  }

  .img-area {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }

  p {
    color: #010f20;
  }
`;

export const BannerImgArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    font-weight: 500;
    color: #5b43d6;
  }

  img.web {
    max-width: 100%;
    max-height: 100px;
    object-fit: cover;
  }

  img.mobile {
    /* width: 80%; */
    max-width: 100%;
  }
`;

export const BottomBannerArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  column-gap: 16px;
`;

export const BtnBanner = styled.button`
  border: none;
  height: 32px;
  width: 44px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    cursor: pointer;
  }

  svg {
    max-width: 100%;
    max-height: 30px;
  }
`;
