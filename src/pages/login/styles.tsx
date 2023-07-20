import { styled } from 'styled-components';

export const Container = styled.main`
  margin: 0;
  background-color: #010f20;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 84.61%;
  height: 407px;
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
  row-gap: 45px;
  button {
    margin-top: 7px;
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
