import { styled } from 'styled-components';

export const Container = styled.main`
  margin: 0;
  background-color: #010f20;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
`;

export const Section = styled.section`
  margin: 0;
  display: flex;
  flex-direction: column;
  background: #ecf0f3;
  width: 84.61%;
  border-radius: 15px;
  box-shadow: 10px 10px 20px 0px #d1d9e6 inset, -10px -10px 20px 0px #fff inset;

  .top {
    margin-left: 35px;
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
`;

export const Scroll = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  margin-left: -${props => props.marginLeft}px;
  transition: margin-left 0.3s ease;
`;

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${props => props.width}px;
  row-gap: 20px;

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
`;

export const Footer = styled.footer`
  position: fixed;
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
  min-width: 78.78%;

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
`;

export const RadioInput = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: calc(100% - 80px);
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
  width: calc(100% - 80px);
  font-weight: 300;
  font-size: 10px;
  row-gap: 4px;

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
`;
