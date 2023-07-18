import React, { ChangeEvent } from 'react';
import { Container } from './styles';

interface FormInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const FormInput: React.FC<FormInputProps> = ({ label, value, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Container>
      <label htmlFor=''>{label}</label>
      <input
        type='text'
        placeholder={label}
        value={value}
        onChange={handleChange}
      />
    </Container>
  );
};

export default FormInput;
