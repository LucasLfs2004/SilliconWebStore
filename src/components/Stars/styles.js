import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  width: 60px;
  width: calc(${props => props.height} * 5);

  height: 15px;
  height: ${props => props.height};

  img {
    width: 15px;
    height: 15px;
    width: ${props => props.height};
    height: ${props => props.height};
  }

  @media (min-width: 1024px) {
    width: auto;
    height: 23px;
    column-gap: 5px;

    img {
      width: 23px;
      height: 23px;
    }
  }
`;
