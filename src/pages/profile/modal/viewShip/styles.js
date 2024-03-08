import styled from 'styled-components';

export const Modal = styled.section`
  display: ${props => props.visible};
  flex-direction: column;
  border-radius: 8px;
  background: #010f20;
  box-shadow: inset -10px -10px 25px #02183350, inset 10px 10px 25px #00060d50;
  box-shadow: 13px 13px 26px #010a16, -13px -13px 26px #01142a;
  padding: 18px 20px;
  width: calc(90% - 40px);
  margin: 0 5%;
  position: absolute;
  top: 48px;
  max-height: 600px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 14px;
  color: white;
  font-weight: 700;
  border-bottom: 1px solid #02eddf;
  padding: 0 4px;
  width: fit-content;
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

  @media (min-width: 1024px) {
    cursor: pointer;
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
