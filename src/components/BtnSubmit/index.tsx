import React from 'react';
import { Button } from './styles';

interface FormInputProps {
  text: string;
}

const BtnSubmit: React.FC<FormInputProps> = ({ text }) => {
  return <Button>{text}</Button>;
};

export default BtnSubmit;
