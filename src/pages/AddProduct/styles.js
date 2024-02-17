import { styled } from 'styled-components';

export const Container = styled.main`
  margin: 0;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;

  input:focus,
  textarea:focus {
    outline: none;
  }
`;

export const Body = styled.section`
  background-color: #010f20;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 36px;
  min-height: calc(100vh - 90px);
  height: auto;
  padding-bottom: 36px;
`;

export const Section = styled.form`
  background-color: #010f20;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ecf0f3;
  width: 84.61%;
  border-radius: 15px;
  box-shadow: 10px 10px 20px 0px #d1d9e6 inset, -10px -10px 20px 0px #fff inset;

  .top {
    /* margin-left: 35px; */
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    row-gap: 7px;
    column-gap: 8px;
  }
`;

export const Title = styled.h1`
  color: #5b43d6;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  margin: 0;
`;

export const Area = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  padding: 18px;

  @media (min-width: 1024px) {
    column-gap: 36px;
  }
`;

export const Form = styled.section`
  display: flex;
  flex: 1;
  overflow: hidden;
  padding: 10%;
  flex-direction: column;

  width: calc(100% - 20%);

  @media (min-width: 1024px) {
    flex-direction: row;
    column-gap: 36px;
    padding: 18px;
    width: auto;
  }
`;

export const DivWrap = styled.section`
  /* margin-top: 20px; */
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  width: 48%;

  @media (max-width: 520px) {
    width: ${props => props.width}px;
  }

  button {
    margin-top: 8px;
  }
`;

export const Message = styled.p`
  color: #010f20;
  font-size: 9px;
  font-weight: 400;
  margin: 15px 0 0 0;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  a {
    color: #51e1e6;
  }

  @media (min-width: 1024px) {
    font-size: 12px;
    font-weight: 600;
  }
`;

export const Footer = styled.footer`
  /* position: fixed; */
  bottom: 0;
  background-color: #5b43d6;
  height: 30px;
  width: 100%;
  font-size: 6px;
  font-weight: 400;
  color: #010f20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    color: #010f20;
  }
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
    font-weight: 275;
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
    width: 350px;

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

export const RowInput = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  column-gap: ${props => (props.view ? '18px' : '0')};

  select {
    width: ${props => (props.view ? 'calc(45% - 28px)' : '100%')};
  }
`;

export const InputVisible = styled.input`
  transition: all 0.5s ease;
  opacity: ${props => (props.view ? 1 : 0)};
  width: ${props => !props.view && '0 !important'};
  padding: ${props => !props.view && '0 !important'};
`;

export const RadioInput = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 78.78%;
  column-gap: 24px;

  p {
    color: #5b43d6;
    font-size: 10px;
    font-weight: 275;
  }

  .optionLancamento {
    height: 25px;
    width: 100px;
    background-color: #ecf0f3;
    box-shadow: 5px 5px 6px 0px #d1d9e6,
      -5px -5px 6px 0px rgba(255, 255, 255, 0.35);
    display: flex;
    flex-direction: row;
    border-radius: 5px;

    input {
      display: none;
    }

    label {
      text-align: center;
      align-items: center;
      display: flex;
      justify-content: center;
      width: 50px;
      transition: all 500ms ease;
      font-weight: 275;
      font-size: 10px;
    }

    input[type='radio']:checked + label:nth-of-type(1) {
      box-shadow: 5px 5px 6px 0px #d1d9e6,
        -5px -5px 6px 0px rgba(255, 255, 255, 0.35);
      color: #5ce1e6;
      border-radius: 5px;
    }
    input[type='radio']:checked + label:nth-of-type(2) {
      box-shadow: -5px 5px 6px 0px #d1d9e6,
        -5px -5px 6px 0px rgba(255, 255, 255, 0.35);
      color: #5ce1e6;
      border-radius: 5px;
    }
  }
`;

export const InputImg = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100%);
  font-weight: 300;
  font-size: 10px;
  row-gap: 4px;

  @media (min-width: 600px) {
    align-items: center;
  }

  p {
    color: #5b43d6;
    padding-left: 3px;
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
    width: 300px;
    align-items: flex-start;

    label {
      width: 100%;
    }
  }
`;

export const Carousel = styled.section`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  max-width: 280px;
  width: 100%;
  z-index: 1;

  .carousel-image-product {
    width: 100%;
  }

  .slick-prev::before,
  .slick-next::before {
    color: #5ce1e6;
    opacity: 0.75;
  }

  .slick-dots li button::before {
    color: #fff;
    opacity: 1;
  }

  .slick-dots li.slick-active button::before {
    color: #5ce1e6;
    opacity: 1;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    max-width: 200px;
  }

  @media (min-width: 1440px) {
    max-width: 280px;
  }
`;

export const ItemDiv = styled.div`
  margin: 0;
  max-width: 400px;

  img {
    width: 100%;
  }
`;

export const BackButton = styled.button`
  margin: 0;
`;

export const BtnNavigation = styled.button`
  display: none;
  background-color: #5b43d6;
  color: #fff;
  border-radius: 5px;
  width: 45.5%;
  height: 30px;
  align-items: center;
  justify-content: center;
  border: none;

  @media (max-width: 500px) {
    display: flex;
  }
`;

export const BtnSubmit = styled.button`
  display: flex;
  background-color: #5b43d6;
  color: #fff;
  border-radius: 5px;
  width: 45.5%;
  height: 30px;
  align-items: center;
  justify-content: center;
  border: none;

  @media (min-width: 1024px) {
    width: 150px;
    font-weight: 500;
    cursor: pointer;
  }
`;

export const ColumnForm = styled.section`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 100%;
  }

  &.center {
    align-items: center;
  }
`;

export const Box = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
    column-gap: 36px;
  }
`;

export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
