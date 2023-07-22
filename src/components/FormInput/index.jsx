import InputMask from 'react-input-mask';
import { Container } from './styles';

const FormInput = ({ label, value, mask, onChange }) => {
  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <Container>
      <label htmlFor=''>{label}</label>
      {mask === 'none' ? (
        <input
          type='text'
          placeholder={label}
          value={value}
          onChange={handleChange}
        />
      ) : (
        <InputMask
          mask={mask}
          type='text'
          placeholder={label}
          value={value}
          onChange={handleChange}
        ></InputMask>
      )}
    </Container>
  );
};

export default FormInput;
