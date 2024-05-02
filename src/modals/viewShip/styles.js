import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Modal = styled.section`
  display: ${props => props.visible};
  flex-direction: column;
  border-radius: 8px;
  background: #010f20;
  box-shadow: inset -10px -10px 25px #02183350, inset 10px 10px 25px #00060d50;
  box-shadow: 13px 13px 26px #010a16, -13px -13px 26px #01142a;
  padding: 18px 0;
  width: calc(90%);
  /* margin: 0 5%; */
  position: absolute;
  top: 48px;
  max-height: 600px;

  @media (min-width: 1024px) {
    max-width: 800px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &.padding-horizontal {
    padding-left: ${props => props.paddinghorizontal}px;
    padding-right: ${props => props.paddinghorizontal}px;
  }

  @media (min-width: 1024px) {
    &.max-width {
      max-width: ${props => props.maxwidth}px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 14px;
  color: white;
  font-weight: 700;
  border-bottom: 1px solid #02eddf;
  padding: 0 4px;
  width: fit-content;

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const Btn = styled.button`
  background-color: transparent;
  border: none;
  max-width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 16px;
  }

  &.add-btn {
    transform: rotate(45deg);
  }

  &.trash {
    img {
      max-width: 20px;
      height: 16px;
    }
  }

  @media (min-width: 1024px) {
    cursor: pointer;

    img {
      max-width: 20px;
    }

    &.trash {
      img {
        max-width: 20px;
        height: 20px;
      }
    }
  }
`;
// export const BtnClose = styled.button`
//   background-color: transparent;
//   border: none;
// `;

export const ContentShip = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin-top: 24px;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 1024px) {
    max-height: 400px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 8px;
      padding-left: 10px; /* largura da barra de rolagem */
    }
    &::-webkit-scrollbar-thumb {
      background-color: #2a1b77; /* cor de fundo da trilha de rolagem */
      border-radius: 5px; /* arredondamento das bordas do botão de rolagem */
    }
    &::-webkit-scrollbar-track {
      background-color: #0c1f36; /* cor do botão de rolagem */
    }
  }
`;

export const ShipCard = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 0.5px solid #02eddf88;
  row-gap: 4px;
  padding-bottom: 8px;
`;

export const TextBorderBottom = styled.p`
  border-bottom: 1px solid #02eddf;
  color: #fff;
  width: auto;
  font-size: 12px;
  font-weight: 700px;
  padding-right: 6px;

  @media (min-width: 1024px) {
    font-size: 16px;
    padding-right: 8px;
    padding-left: 2px;
  }
`;

export const BtnPrincipal = styled.button`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  border: none;
  background-color: #02eddf;
  color: #010f20;
  border-radius: 3px;
  padding: 4px 8px;
  font-weight: 600;
  margin-top: 8px;
`;
