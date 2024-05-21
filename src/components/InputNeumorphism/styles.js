import styled from 'styled-components';

export const InputContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: ${props => props.width};

  input,
  textarea {
    background: #ecf0f3;
    box-shadow: 5px 5px 6px 0px #d1d9e6,
      -5px -5px 6px 0px rgba(255, 255, 255, 0.35);
    border-radius: 5px;
    border: none;
    width: calc(100% - 28px);
    height: 30px;
    padding: 0 14px;
    font-size: 12px;
    transition: all 0.5s ease;
    outline: none;
    color: #010f20cc;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
  input[type='number']:hover,
  input[type='number']:focus {
    -moz-appearance: number-input;
  }

  .no-spin {
    -moz-appearance: textfield; /* Firefox */
    appearance: textfield; /* Chrome, Safari, Edge */
  }

  .no-spin::-webkit-inner-spin-button,
  .no-spin::-webkit-outer-spin-button {
    appearance: none;
    margin: 0; /* Pode adicionar um espaço em branco se necessário */
  }

  &.half {
    width: calc(50% - 18px);
  }

  textarea {
    height: 120px;
    padding: 10px 14px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: #c1c5d6;
    font-size: 10px;
    font-weight: 275;
  }

  @media (min-width: 1024px) {
    input {
      height: 36px;
      border-radius: 10px;
    }

    input::placeholder,
    select::placeholder,
    input {
      font-size: 14px;
    }

    label {
      font-size: 14px;
      padding-bottom: 2px;
      font-weight: 500;
    }
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    /* width: 50%; */

    &.half {
      width: calc(25% - 18px);
    }

    &.complete-width {
      width: 100%;
    }
  }

  @media (min-width: 1440px) {
    width: 100%;

    &.half {
      width: 157px;
    }

    &.complete-width {
      width: 100%;
    }

    input,
    textarea {
      width: calc(100% - 28px);
    }

    select {
      width: 100%;
    }
  }
`;

export const InputImg = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  width: calc(100%);
  font-weight: 400;
  font-size: 10px;
  row-gap: 4px;

  &.center {
    align-items: center;
  }

  @media (min-width: 600px) {
    /* align-items: center; */
  }

  p {
    color: #5b43d6;
    padding-left: 3px;
    font-size: 14px;
  }

  input {
    display: none;
  }
`;

export const LabelImg = styled.label`
  color: #c1c5d6;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 30px;
  border-radius: 5px;
  background-color: #ecf0f3;
  box-shadow: 5px 5px 6px 0px #d1d9e6,
    -5px -5px 6px 0px rgba(255, 255, 255, 0.35);
  width: 76%;
  column-gap: 16px;
  font-size: 14px;

  img {
    padding-left: 26px;
  }
`;

export const Label = styled.label`
  color: #5b43d6;
  font-size: 10px;
  padding-left: 3px;
  font-weight: 300;

  @media (min-width: 1024px) {
    font-size: 14px;
    padding-bottom: 2px;
    font-weight: 500;
  }
`;

export const Input = styled.input`
  width: 100%;
`;

export const ErrorSpan = styled.span`
  height: 12px;
  color: #5b43d6;
  font-size: 9px;
  line-height: 12px;
  color: #000;
  padding-left: 3px;
  font-weight: 275;
  margin: 0;

  @media (min-width: 1024px) {
    height: 18px;
    padding-top: 8px;
    font-size: 12px;
    font-size: 500;
  }
`;

export const Select = styled.select`
  background-color: #ecf0f3;
  box-shadow: 5px 5px 6px 0px #d1d9e6,
    -5px -5px 6px 0px rgba(255, 255, 255, 0.35);
  border-radius: 5px;
  border: none;
  height: 30px;
  padding: 0 14px;
  font-size: 12px;
  transition: all 0.5s ease;
  color: #c1c5d6;
  width: calc(100%);
  font-weight: 300;
  font-size: 12px;
  outline: none;

  &.selected {
    color: #000;
  }

  @media (min-width: 1024px) {
    height: 36px;
    border-radius: 10px;
    font-size: 14px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 100%;
  }

  @media (min-width: 1440px) {
    width: 100%;
  }
`;

export const Checkbox = styled.div`
  width: max-content;
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
    row-gap: 12px;
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
    font-size: 12px;
    font-weight: 600;
    color: #5b43d6;
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
    background-color: #5b43d680;
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
