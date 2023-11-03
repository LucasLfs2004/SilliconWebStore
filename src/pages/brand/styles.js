import styled from 'styled-components';

export const Container = styled.section`
  margin: 0;
`;

export const TopBrand = styled.div`
  background-color: #010f20;
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const NameBrand = styled.p`
  display: none;
  position: absolute;
  left: 20px;
  color: #fff;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin: 12px 0;
  justify-content: center;
  column-gap: 50px;
  position: relative;
`;

export const BtnFilter = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 100px;
  border: none;
  border-radius: 5px;
  background: #ecf0f3;
  box-shadow: 5px 5px 6px 0px #d1d9e6,
    -5px -5px 6px 0px rgba(255, 255, 255, 0.35);
  column-gap: 10px;

  p {
    color: #010f20;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

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
  box-shadow: 5px 5px 6px 0px #d1d9e6,
    -5px -5px 6px 0px rgba(255, 255, 255, 0.35);
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
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &.open {
    width: 130px;
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

export const ProductArea = styled.section`
  margin: 0;
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  width: 100%;
  align-items: center;
  padding: 30px 0;
`;
