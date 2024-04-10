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
