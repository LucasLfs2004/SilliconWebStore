import styled from 'styled-components';

export const Background = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: ${props => props.display};
  justify-content: center;
`;

export const PortionsDisplay = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #5b43d620; */
  background-color: #010f20;
  background: linear-gradient(145deg, #d4d8db, #fdffff);
  /* box-shadow: 12px 12px 24px #d4d8db, -12px -12px 24px #ffffff; */
  margin: 32px 0;
  border-radius: 30px;
  border-radius: 25px;
  max-height: 0;
  width: 90%;
  transition: ${props =>
    props.view
      ? 'opacity 1.5s ease-in-out, max-height 1s ease-in-out, margin 1.5s ease-in-out'
      : 'max-height 1s ease-in-out, opacity 0.2s ease-in-out, margin 0.7s ease-in-out'};
  opacity: 0;
  margin: 0;
  background: linear-gradient(96deg, #011022 0%, #010e1d 100%);

  &.view {
    padding: 10px 0;
    max-height: 350px;
    opacity: 1;
    margin: 24px 0;
  }

  h4 {
    color: #ffffff;
    margin-bottom: 18px;
  }

  @media (min-width: 1024px) {
    width: 50%;
    box-shadow: none;
    background: linear-gradient(96deg, #011022 0%, #010e1d 100%);
    /* max-height: 100px; */

    &.view {
      max-height: 340px;
    }
    h4 {
      color: #ffffff;
      font-size: 26px;
      margin-bottom: 18px;
    }
  }
`;

export const Portion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p,
  span {
    color: #010f20;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: #fff;
  }

  span {
    padding-left: 40px;
  }

  @media (min-width: 1024px) {
    p,
    span {
      color: #fff;
      font-size: 14px;
      text-align: end;
    }

    span {
      padding-top: -10px;
    }
  }
`;

export const Display = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  max-height: 280px;
  align-items: center;
  row-gap: 12px;

  @media (min-width: 1024px) {
    max-height: 280px;
    row-gap: 18px;
  }
`;

export const Description = styled.span`
  padding: 15px 20px 0 20px;
  width: calc(100% - 40px);
  font-size: 9px;
  color: #010f2090;
  color: #02eddf;

  @media (min-width: 1024px) {
    color: #fff;
    padding-top: 36px;
    font-size: 10px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #02eddf;
  font-size: 20px;

  right: 16px;
  top: 12px;

  @media (min-width: 1024px) {
    right: 20px;
    top: 16px;
  }
`;
