import { styled } from 'styled-components';

export const Container = styled.main`
  margin: 0;
  background-color: #010f20;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
`;

export const Header = styled.header`
  margin: 0;
  background-color: #010f20;
`;

export const Section = styled.section`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ecf0f3;
  max-width: 400px;
  width: 84.61%;
  height: 640px;
  border-radius: 15px;
  box-shadow: 10px 10px 20px 0px #d1d9e6 inset, -10px -10px 20px 0px #fff inset;

  .top {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 7px;
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

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  row-gap: 6px;

  button {
    margin-top: 34px;
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
  }

  input::placeholder {
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
