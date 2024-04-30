import styled from 'styled-components';

export const Container = styled.section`
  margin: 0;
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  width: 100%;
  align-items: center;
  padding: 30px 0;

  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: calc(100% - 4%);
    margin: auto;
    padding: 30px 2%;
    column-gap: 20px;
    /* column-gap: ${props => props.columnGap}px; */
    margin: 0;
  }
`;
