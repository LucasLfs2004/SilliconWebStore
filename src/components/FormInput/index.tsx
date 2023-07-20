import React, { ChangeEvent } from 'react';
import { Container } from './styles';

interface FormInputProps {
  label: string;
  value: string;
  onChange: (value: any) => void;
}

const FormInput: React.FC<FormInputProps> = ({ label, value, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event);
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
