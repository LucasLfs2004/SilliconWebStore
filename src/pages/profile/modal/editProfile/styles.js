import styled from 'styled-components';

export const Container = styled.section`
  display: ${props => props.visible};
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: #010f20;
  box-shadow: inset -10px -10px 25px #02183350, inset 10px 10px 25px #00060d50;
  box-shadow: 13px 13px 26px #010a16, -13px -13px 26px #01142a;
  padding: 18px 20px;
  width: calc(90% - 40px);
  position: absolute;
  top: 48px;

  @media (min-width: 1024px) {
    max-width: 500px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  &.row {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    flex-direction: column;
    column-gap: 32px;
  }
`;

export const FormInput = styled.div`
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: static;
  /* max-width: 240px; */
  color: #e8e8e8;

  &.width {
    width: ${props => props.widthP}%;
  }

  @media (min-width: 1024px) {
    &.web-width {
      width: ${props => props.widthw}px;
    }
  }

  label {
    font-size: 0.75rem;
    color: #02eddf;
    font-weight: 700;
    position: relative;
    top: 0.5rem;
    margin: 0 0 0 7px;
    padding: 0 3px;
    background: #010f20;
    width: fit-content;
  }

  input,
  select {
    color: #fff;
    padding: 11px 10px;
    font-size: 0.75rem;
    border: 2px #818cf8 solid;
    border-radius: 5px;
    background-color: #010f20;
    border: 1px solid #02eddf;
  }

  input::placeholder {
    color: #d1d9e6;
  }

  input:focus,
  select:focus {
    outline: none;
  }

  select {
    color: #d1d9e6;
  }

  select.selected {
    color: #fff;
  }

  p {
    height: 16px;
    font-size: 10px;
    font-weight: 600;
  }

  @media (min-width: 1024px) {
    label {
      font-size: 14px;
    }

    input {
      font-size: 14px;
    }
  }
`;

export const InputBlocked = styled.div`
  display: flex;
  flex-direction: row;

  border: 1px solid #02eddf;
  border-radius: 5px;

  input {
    border: none;
    width: 100%;
    color: #d1d9e6;
  }
  img {
    width: 16px;
    padding-right: 12px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
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

  @media (min-width: 1024px) {
    cursor: pointer;
  }
`;

export const BtnSubmit = styled.button`
  background-color: #02eddf;
  border-radius: 4px;
  font-weight: 700;
  font-size: 18px;
  color: #010f20;
  width: 50%;
  border: none;
  margin-top: 24px;
  height: 36px;
`;
