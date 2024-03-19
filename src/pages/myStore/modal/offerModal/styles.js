import styled from 'styled-components';

export const Title = styled.h1`
  color: #5b43d6;
  font-size: 14px;
  line-height: 16px;
  max-height: calc(16px * 2);
  line-height: normal;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  align-items: center;

  &.column {
    flex-direction: column;
    align-items: flex-start;
  }

  &.full {
    width: 100%;
    min-height: 24px;
  }

  &.relative {
    position: relative;
  }

  &.justify-center {
    justify-content: center;
  }
`;

export const NameProduct = styled.p`
  font-size: 14px;
  width: 260px;
  /* max-height: calc(16px * 2); */
  line-height: normal;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;

  @media (min-width: 1024px) {
    font-size: 16;
    font-weight: 400;
    color: #010f20;
    max-width: 400px;
    width: 400px;
  }
`;

export const Price = styled.p`
  color: #5b43d6;
  font-weight: 600;
  font-size: 14px;

  span {
    color: black;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const Form = styled.form`
  padding-top: 12px;
  display: flex;
  width: 100%;
  column-gap: 24px;
  align-items: flex-start;
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
