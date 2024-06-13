import styled from 'styled-components';

export const ContentPage = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 4%);
  padding: 12px 2%;
  row-gap: 18px;

  @media (min-width: 1024px) {
    width: calc(100% - 10%);
    padding: 48px 5%;
    row-gap: 48px;
  }
`;

export const Empty = styled.div`
  width: 100%;
  text-align: center;
  color: #fff;
  font-weight: 600;
  font-size: 36px;
  padding-top: 108px;

  a {
    color: #02efdf;
  }
`;
