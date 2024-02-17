import styled from 'styled-components';

export const ColumnForm = styled.section`
  display: flex;
  flex-direction: column;

  &.center {
    align-items: center;
  }
`;

export const Form = styled.section`
  display: flex;
  flex: 1;
  overflow: hidden;
  padding: 18px;

  @media (min-width: 1024px) {
    column-gap: 36px;
  }
`;

export const RowBox = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  column-gap: 36px;
`;

export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
