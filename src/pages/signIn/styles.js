import { styled } from 'styled-components';

export const Container = styled.main`
  margin: 0;
  background-color: #010f20;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;

  @media (min-width: 1024px) {
    padding: 0;
  }
`;

export const Header = styled.header`
  margin: 0;
  background-color: #010f20;
`;

export const Section = styled.section`
  margin: 0;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ecf0f3;
  width: 84.61%;
  /* height: 407px; */
  border-radius: 15px;
  box-shadow: 10px 10px 20px 0px #d1d9e6 inset, -10px -10px 20px 0px #fff inset;
  padding-bottom: 12px;

  .top {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 7px;
  }

  @media (min-width: 1024px) {
    height: auto;
    padding-bottom: 12px;

    .top img {
      width: 80%;
    }

    &.sign-up {
      max-width: 800px;
    }
  }
`;

export const Title = styled.h1`
  color: #5b43d6;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  margin: 0;

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  row-gap: 24px;
  button {
    margin-top: 7px;
  }

  @media (min-width: 1024px) {
    &.sign-up {
      row-gap: 10px;
    }
  }
`;

export const Message = styled.p`
  color: #010f20;
  font-size: 9px;
  font-weight: 400;
  margin: 15px 0 0 0;

  a {
    color: #51e1e6;
  }

  @media (min-width: 1024px) {
    font-size: 12px;

    a {
      font-weight: 600;
    }
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

  @media (min-width: 1024px) {
    height: 50px;
    a,
    p {
      font-size: 12px;
      font-weight: 600;
    }
  }
`;

export const InputArea = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  row-gap: 45px;
  width: 100%;
  align-items: center;

  &.sign-up {
    row-gap: 16px;
  }

  @media (min-width: 1024px) {
    flex-wrap: wrap;

    &.sign-up {
      height: 370px;
      row-gap: 16px;
    }
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
    font-weight: 300;
  }

  input {
    background: #ecf0f3;
    box-shadow: 5px 5px 6px 0px #d1d9e6,
      -5px -5px 6px 0px rgba(255, 255, 255, 0.35);
    border-radius: 5px;
    border: none;
    width: calc(100% - 28px);
    height: 30px;
    padding: 0 14px;
    font-size: 12px;
    outline: none;
  }

  input::placeholder {
    color: #c1c5d6;
    font-size: 10px;
    font-weight: 300;
  }
  p {
    height: 12px;
    color: #5b43d6;
    font-size: 9px;
    line-height: 12px;
    color: #000;
    padding-left: 3px;
    font-weight: 300;
    margin: 0;
  }

  @media (min-width: 1024px) {
    input {
      font-size: 14px;
    }
    input::placeholder {
      font-size: 14px;
      font-weight: 400;
    }

    label {
      font-size: 12px;
      font-weight: 500;
    }
    p {
      font-size: 11px;
      padding-top: 4px;
      padding-left: 12px;
      line-height: 16px;
      height: 16px;
    }

    &.sign-up {
      min-width: auto;
      width: 300px;
    }
  }
`;

export const InputPassword = styled.div`
  width: calc(100% - 28px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
  background: #ecf0f3;
  box-shadow: 5px 5px 6px 0px #d1d9e6,
    -5px -5px 6px 0px rgba(255, 255, 255, 0.35);
  border-radius: 5px;
  padding: 0 14px;

  input {
    width: 100%;
    background-color: transparent;
    box-shadow: none;
    padding: 0;
  }

  button {
    background-color: transparent;
    border: none;
  }

  @media (min-width: 1024px) {
    button {
      cursor: pointer;
    }
  }
`;
