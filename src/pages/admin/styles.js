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
  max-height: 300px;
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

export const FormInput = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 100%;

  label {
    color: #5b43d6;
    font-size: 10px;
    padding-left: 3px;
    font-weight: 300;
  }

  input,
  textarea {
    background: #ecf0f3;
    box-shadow: 5px 5px 6px 0px #d1d9e6,
      -5px -5px 6px 0px rgba(255, 255, 255, 0.35);
    border-radius: 5px;
    border: none;
    width: calc(100% - 28px);
    height: 30px;
    padding: 0 14px;
    font-size: 12px;
    transition: all 0.5s ease;
    outline: none;
    color: #010f20cc;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
  input[type='number']:hover,
  input[type='number']:focus {
    -moz-appearance: number-input;
  }

  .no-spin {
    -moz-appearance: textfield; /* Firefox */
    appearance: textfield; /* Chrome, Safari, Edge */
  }

  .no-spin::-webkit-inner-spin-button,
  .no-spin::-webkit-outer-spin-button {
    appearance: none;
    margin: 0; /* Pode adicionar um espaço em branco se necessário */
  }

  &.half {
    width: calc(50% - 18px);
  }

  select {
    background-color: #ecf0f3;
    box-shadow: 5px 5px 6px 0px #d1d9e6,
      -5px -5px 6px 0px rgba(255, 255, 255, 0.35);
    border-radius: 5px;
    border: none;
    height: 30px;
    padding: 0 14px;
    font-size: 12px;
    transition: all 0.5s ease;
    color: #c1c5d6;
    width: calc(100%);
    font-weight: 300;
    font-size: 12px;
    outline: none;
  }

  select.selected {
    color: #000;
  }

  textarea {
    height: 120px;
    padding: 10px 14px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: #c1c5d6;
    font-size: 10px;
    font-weight: 275;
  }
  p {
    height: 12px;
    color: #5b43d6;
    font-size: 9px;
    line-height: 12px;
    color: #000;
    padding-left: 3px;
    font-weight: 275;
    margin: 0;
  }

  @media (min-width: 1024px) {
    input,
    select {
      height: 36px;
      border-radius: 10px;
    }

    input::placeholder,
    select::placeholder,
    select,
    input {
      font-size: 14px;
    }

    label {
      font-size: 14px;
      padding-bottom: 2px;
      font-weight: 500;
    }

    p {
      height: 18px;
      padding-top: 8px;
      font-size: 12px;
      font-size: 500;
    }
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 50%;

    &.half {
      width: calc(25% - 18px);
    }

    select {
      width: 100%;
    }

    &.complete-width {
      width: 100%;
    }
  }

  @media (min-width: 1440px) {
    width: 100%;

    &.half {
      width: 157px;
    }

    &.complete-width {
      width: 100%;
    }

    input,
    textarea {
      width: calc(100% - 28px);
    }

    select {
      width: 100%;
    }
  }
`;

export const InputImg = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100%);
  font-weight: 400;
  font-size: 10px;
  row-gap: 4px;

  @media (min-width: 600px) {
    align-items: center;
  }

  p {
    color: #5b43d6;
    padding-left: 3px;
    font-size: 14px;
  }

  input {
    display: none;
  }

  label {
    color: #c1c5d6;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 30px;
    border-radius: 5px;
    background-color: #ecf0f3;
    box-shadow: 5px 5px 6px 0px #d1d9e6,
      -5px -5px 6px 0px rgba(255, 255, 255, 0.35);
    width: 76%;
    column-gap: 16px;
    font-size: 14px;

    img {
      padding-left: 26px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 250px;
    align-items: flex-start;

    label {
      width: 100%;
    }
  }
  @media (min-width: 1440px) {
    width: 100%;
    align-items: flex-start;

    label {
      width: 100%;
    }
  }
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
