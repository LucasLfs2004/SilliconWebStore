import styled from 'styled-components';

export const BtnOrder = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 25px; */
  width: 100px;
  border: none;
  border-radius: 5px;
  background: #ecf0f3;
  box-shadow: ${props => props.boxShadow};
  column-gap: 10px;
  transition: all 1s ease-in-out;
  position: relative;

  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    height: 25px;
    z-index: 5;
    background-color: transparent;
    border: none;
  }

  p {
    color: #010f20;
    font-size: 12px;
    font-weight: 400;
  }

  &.open {
    width: 130px;
  }

  @media (min-width: 1024px) {
    width: 150px;

    p {
      font-size: 14px;
    }

    &.open {
      width: 150px;
    }
  }
`;

export const SelectOrder = styled.div`
  /* display: none; */
  width: 100%;
  background: #ecf0f3;
  flex-direction: column;
  border-radius: 5px;
  top: 15px;
  z-index: 2;
  position: absolute;
  max-height: 0;
  /* transition: ${props =>
    props.view
      ? 'opacity 1.5s ease-in-out, max-height 0.3s ease-in-out'
      : 'max-height 2s ease-in-out, opacity 2s ease-in-out, '}; */
  transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out;
  &.view {
    padding: 15px 0;
    max-height: 200px;
    transition: max-height 0.3s ease-in-out, padding 0.2s ease-in-out;
  }
`;

export const OrderOption = styled.button`
  margin: 0;
  width: 90%;
  background-color: transparent;
  border: none;
  color: #010f20;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  height: 0;
  padding: 0;
  margin: 0;
  /* display: none; */
  z-index: 0;
  transition: opacity 0.2s ease-in-out;
  opacity: 0;
  &.view {
    padding-bottom: 2px;
    margin-bottom: 5px;
    z-index: 5;
    height: auto;
    border-bottom: 1px solid rgba(91, 67, 214, 0.45);
    max-height: 200px;
    transition: opacity 1.5s ease-in-out;
    opacity: 1;
  }
`;
