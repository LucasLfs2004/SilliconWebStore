import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 18px 24px 18px;

  @media (min-width: 1024px) {
    padding: 0 48px 32px 48px;
    max-width: 1440px;
  }
`;

export const Title = styled.h1`
  color: #5b43d6;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const DescriptionArea = styled.div`
  h1,
  h2,
  h3,
  h4,
  strong,
  p,
  li,
  ul {
    color: #010f20;
  }

  li,
  p {
    text-align: justify;
  }

  li::marker {
    color: #5b43d6;
  }

  h1 {
    font-weight: 600;
  }

  @media (max-width: 1024px) {
    ul {
      margin-left: -16px;
    }

    li {
      margin-bottom: 6px;
    }
  }
`;
