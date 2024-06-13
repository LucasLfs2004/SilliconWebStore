import styled from 'styled-components';

export const Container = styled.main`
  margin: 60px 0 0 0;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh);
  align-items: center;
  width: 100%;
  min-height: 100vh;
  position: relative;

  &.dark {
    background-color: #010f20;
  }

  @media (min-width: 1024px) {
    margin-top: 80px;
    min-height: calc(100vh - 80px);
    justify-content: space-between;
  }
`;

export const ContainerModal = styled.section`
  position: fixed;
  /* overflow-y: hidden; */
  display: ${props => props.visible};
  justify-content: center;
  background-color: #00000030;
  width: 100%;
  height: 100%;
  padding-top: ${props => props.pt};
  z-index: 100;
`;

export const ModalWhite = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ecf0f3;
  max-height: calc(100vh - 260px);
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding};
  border-radius: 15px;
  box-shadow: 10px 10px 20px 0px #d1d9e6 inset, -10px -10px 20px 0px #fff inset;

  &.scroll-y {
    overflow-y: scroll;
  }

  @media (max-width: 1024px) {
    max-width: calc(90% - 32px);
    padding: 20px 16px;
  }
`;

export const FormInput = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 100%;

  &.flex {
    width: 50%;
  }

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

export const BtnCloseTop = styled.button`
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
