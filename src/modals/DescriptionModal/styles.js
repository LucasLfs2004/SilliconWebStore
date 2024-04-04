import styled from 'styled-components';

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  height: max-content;
  width: 100%;
  height: 600px;
  align-items: center;
`;

export const Title = styled.h1`
  color: #5b43d6;
  font-size: 16px;

  @media (min-width: 1024px) {
    font-size: 32px;
    line-height: 48px;
  }
`;

export const EditorArea = styled.div`
  background: #ecf0f3;
  width: 85%;
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
  padding: 16px 0;
  border-radius: 15px;
  box-shadow: 10px 10px 20px 0px #d1d9e6 inset, -10px -10px 20px 0px #fff inset;
`;

export const BtnClose = styled.button`
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
  position: absolute;
  right: 0;

  &:hover {
    box-shadow: 5px 5px 6px 0px #d1d9e6,
      -5px -5px 6px 0px rgba(255, 255, 255, 0.35);
    cursor: pointer;
    /* background-color: #5b43d6; */
    /* color: #ecf0f3; */
  }
`;

export const Box = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EditorCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 460px; */
  height: 400px;

  .ql-container {
    height: 330px;
  }

  @media (min-width: 1024px) {
    .ql-container {
      height: 360px;
    }
  }
`;

export const InfoProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 12px 0 12px 0;
  row-gap: 8px;

  @media (min-width: 1024px) {
    flex-direction: row;
    column-gap: 32px;
    margin-bottom: 16px;
    align-items: flex-start;
  }
`;

export const ImageProduct = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  width: 100px;
  height: 100px;

  img {
    width: 90px;
    padding: 0 5px;
  }
`;

export const NameProduct = styled.p`
  color: #010f20;
  font-size: 16px;
  text-align: justify;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 4;
`;

export const BtnConfirmArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;

export const BtnConfirm = styled.button`
  display: flex;
  margin-top: 16px;
  align-items: center;
  justify-content: center;
  background: #ecf0f3;
  box-shadow: 5px 5px 6px 0px #d1d9e6,
    -5px -5px 6px 0px rgba(255, 255, 255, 0.35);
  border-radius: 5px;
  border: none;
  height: 30px;
  color: #5b43d6;
  font-weight: 500;
  transition: all 0.4s ease;

  &:hover {
    background-color: #5b43d6;
    color: #ecf0f3;
  }

  &.red:hover {
    background-color: #f00;
    color: #fff;
  }

  @media (min-width: 1024px) {
    cursor: pointer;
  }
`;
