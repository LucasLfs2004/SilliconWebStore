import styled from 'styled-components';

export const Container = styled.section`
  background-color: #00000050;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  justify-content: center;
`;

export const Card = styled.div`
  background-color: #010f20;
  width: 100px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Carousel = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  height: 320px;
`;
export const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -${props => props.margintop}px;
  transition: all ease-in-out 0.4s;
`;

export const ItemCard = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 4px;
  margin: ${props => props.marginitem}px 0;

  img {
    width: 100%;
  }
`;

export const UpArrow = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;

  img {
    transform: rotate(180deg);
  }
`;
export const DownArrow = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
`;
