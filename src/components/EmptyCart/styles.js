import styled from 'styled-components';

export const EmptyCart = styled.main`
  background-color: #ecf0f3;
  height: calc(100vh - 304px);
  padding: 44px 6% 0 6%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: #010f20;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  p {
    color: #010f20;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 14px 0 44px 0;
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 30px;
    gap: 12px;
    background-color: #02eddf;
    border-radius: 3px;

    color: #010f20;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    img {
      width: 23px;
    }
  }

  @media (min-width: 1024px) {
    width: 100%;

    h3 {
      font-size: 32px;
      max-width: 640px;
    }

    p {
      font-size: 20px;
    }

    a {
      font-size: 20px;
      height: 45px;
      width: 250px;
      font-weight: 500;
      img {
        width: 28px;
      }
    }
  }
`;
