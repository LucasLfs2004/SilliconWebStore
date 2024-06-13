import styled from 'styled-components';

export const ContentPage = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const Section = styled.form`
  background-color: #010f20;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ecf0f3;
  border-radius: 15px;
  box-shadow: 10px 10px 20px 0px #d1d9e6 inset, -10px -10px 20px 0px #fff inset;
  padding: 24px 0;
  max-width: 90%;
  margin-top: 24px;

  @media (min-width: 1024px) {
    width: auto;
    margin-top: 0;
  }
`;

export const ProductArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 90%;
  padding-top: 24px;
  column-gap: 4px;
  justify-content: center;
  column-gap: 8px;

  .img {
    background-color: #fff;
    width: 70px;
    height: 70px;
  }

  img {
    width: 95%;
  }
  h1 {
    color: #5b43d6;
    font-weight: 500;
    font-size: 14px;
    width: 180px;
  }

  @media (min-width: 1024px) {
    justify-content: space-between;
    column-gap: 0;
    .img {
      width: 130px;
      height: 130px;
    }
    img {
      width: 90%;
    }
    h1 {
      padding-top: 6px;
      font-size: 18px;
      width: 350px;
    }
  }
`;

export const Title = styled.h1`
  color: #5b43d6;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  padding-top: 8px;
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
  padding: 16px 10%;
  flex-direction: column;

  width: calc(100% - 20%);

  @media (min-width: 1024px) {
    flex-direction: column;
    column-gap: 36px;
    row-gap: 26px;
    padding: 18px;
    width: 500px;
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
    font-size: 14px;
    font-weight: 600;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;
