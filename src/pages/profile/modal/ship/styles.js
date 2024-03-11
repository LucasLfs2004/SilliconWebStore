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
  padding: 18px 20px;
  width: calc(90% - 40px);
  position: absolute;
  top: 48px;

  @media (min-width: 1024px) {
    max-width: 800px;
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
    flex-direction: row;
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

  input {
    color: #fff;
  }

  input {
    padding: 11px 10px;
    font-size: 0.75rem;
    border: 2px #818cf8 solid;
    border-radius: 5px;
    background-color: #010f20;
    /* background: #e8e8e8; */
    border: 1px solid #02eddf;
  }

  input:focus {
    outline: none;
  }

  p {
    height: 16px;
    font-size: 10px;
    font-weight: 600;
  }
`;

export const Checkbox = styled.div`
  /* Hide the default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    border-radius: 5px;
  }

  .container {
    display: flex;
    flex-direction: row;
    column-gap: 12px;
    align-items: center;
    position: relative;
    cursor: pointer;
    font-size: 20px;
    user-select: none;
    border-radius: 5px;
    color: #fff;
  }

  .container p {
    font-size: 16px;
    font-weight: 600;
  }
  @media (max-width: 1024px) {
    .container {
      font-size: 16px;
    }
    .container p {
      font-size: 12px;
    }
  }

  /* Create a custom checkbox */
  .checkmark {
    position: relative;
    top: 0;
    left: 0;
    height: 1.3em;
    width: 1.3em;
    background-color: #ccc;
    border-radius: 5px;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    box-shadow: 3px 3px 0px rgb(183, 183, 183);
    transition: all 0.2s;
    opacity: 1;
    background-image: linear-gradient(
      45deg,
      rgb(2, 237, 223) 0%,
      rgb(91, 67, 214) 100%
    );
  }

  .container input ~ .checkmark {
    transition: all 0.2s;
    opacity: 1;
    box-shadow: 1px 1px 0px rgb(183, 183, 183);
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: '';
    position: absolute;
    opacity: 0;
    transition: all 0.2s;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    opacity: 1;
    transition: all 0.2s;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 0.45em;
    top: 0.25em;
    width: 0.25em;
    height: 0.5em;
    border: solid white;
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(45deg);
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
