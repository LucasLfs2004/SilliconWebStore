import styled from 'styled-components';

export const TextArea = styled.div`
  max-width: 90%;
  padding-top: 18px;

  h1 {
    color: #010f20;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 500;
  }

  p {
    color: #010f20;
    margin: 16px 0 12px;
    font-size: 13px;
    font-weight: 500;
    text-align: justify;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
    padding-top: 32px;
    h1 {
      font-size: 26px;
    }

    p {
      font-size: 16px;
    }
  }
`;
