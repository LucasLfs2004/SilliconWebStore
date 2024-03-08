import styled from 'styled-components';

export const Container = styled.main`
  margin: 60px 0 0 0;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh);
  align-items: center;
  width: 100%;
  min-height: 100vh;

  &.dark {
    background-color: #010f20;
  }

  @media (min-width: 1024px) {
    margin-top: 80px;
    min-height: calc(100vh - 80px);
    justify-content: space-between;
  }
`;
