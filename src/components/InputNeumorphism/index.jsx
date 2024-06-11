import { useState } from 'react';
import * as C from './styles';

export const InputNeumorphism = ({
  id,
  label,
  placeholder,
  valueInput,
  setValueInput,
  error,
  width,
}) => {
  return (
    <C.InputContainer width={width ? width : '100%'}>
      <C.Label htmlFor={id}>{label}</C.Label>
      <C.Input
        type='text'
        id={id}
        placeholder={placeholder}
        value={valueInput}
        onChange={e => setValueInput(e.target.value)}
      />
      {error && <C.ErrorSpan>{error}</C.ErrorSpan>}
    </C.InputContainer>
  );
};

export const InputNumberNeumorphism = ({
  id,
  label,
  placeholder,
  valueInput,
  setValueInput,
  error,
  width,
}) => {
  return (
    <C.InputContainer width={width ? width : '100%'}>
      <C.Label htmlFor={id}>{label}</C.Label>
      <C.Input
        type='number'
        id={id}
        placeholder={placeholder}
        value={valueInput}
        onChange={e => setValueInput(e.target.value)}
      />
      {error && <C.ErrorSpan>{error}</C.ErrorSpan>}
    </C.InputContainer>
  );
};
export const InputCheckboxNeumorphism = ({
  id,
  label,
  placeholder,
  valueInput,
  setValueInput,
  error,
  width,
}) => {
  return (
    <C.Checkbox width={width ? width : '100%'}>
      <label className='container'>
        {' '}
        <p>{label}</p>
        <input
          id={id}
          type='checkbox'
          checked={valueInput}
          onChange={() => setValueInput(!valueInput)}
        />
        <div className='checkmark'></div>
      </label>
      {error && <C.ErrorSpan>{error}</C.ErrorSpan>}
    </C.Checkbox>
  );
};

export const InputValueNeumorphism = ({
  id,
  label,
  placeholder,
  valueInput,
  setValueInput,
  error,
  width,
  step,
}) => {
  return (
    <C.InputContainer width={width ? width : '100%'}>
      <C.Label htmlFor={id}>{label}</C.Label>
      <C.Input
        type='number'
        step={step ? step : '0.01'}
        id={id}
        placeholder={placeholder}
        value={valueInput}
        onChange={e => setValueInput(e.target.value)}
      />
      {error && <C.ErrorSpan>{error}</C.ErrorSpan>}
    </C.InputContainer>
  );
};

export const InputDateNeumorphism = ({
  id,
  label,
  placeholder,
  valueInput,
  setValueInput,
  error,
  width,
}) => {
  console.log('dataValue', valueInput);
  const [placeholderColor, setPlaceholderColor] = useState(true);

  return (
    <C.InputContainer width={width ? width : '100%'}>
      <C.Label htmlFor={id}>{label}</C.Label>
      <C.Input
        type='datetime-local'
        id={id}
        placeholder={placeholder}
        value={valueInput}
        className='datetime-color'
        onChange={e => {
          setValueInput(e.target.value);
          setPlaceholderColor(false);
        }}
      />
      {error && <C.ErrorSpan>{error}</C.ErrorSpan>}
    </C.InputContainer>
  );
};

export const InputImgNeumorphism = ({
  id,
  label,
  placeholder,
  setValueInput,
  multipleFiles,
}) => {
  return (
    <C.InputImg>
      <C.Label>{label}</C.Label>
      <input
        type='file'
        id={id}
        src=''
        alt=''
        value={''}
        multiple={multipleFiles ? true : false}
        accept='image/png, image/jpeg, .svg'
        onChange={setValueInput}
      />
      <C.LabelImg htmlFor={id}>
        <img src='/assets/icons/vgaIcon.svg' alt='vga' />
        <p>{placeholder}</p>
      </C.LabelImg>
    </C.InputImg>
  );
};

export const TextAreaNeumorphism = ({
  id,
  label,
  placeholder,
  valueInput,
  setValueInput,
  error,
  width,
}) => {
  return (
    <C.InputContainer width={width ? width : '100%'}>
      <C.Label htmlFor={id}>{label}</C.Label>
      <C.TextArea
        type='text'
        id={id}
        placeholder={placeholder}
        value={valueInput}
        onChange={e => setValueInput(e.target.value)}
      />
      {error && <C.ErrorSpan>{error}</C.ErrorSpan>}
    </C.InputContainer>
  );
};
