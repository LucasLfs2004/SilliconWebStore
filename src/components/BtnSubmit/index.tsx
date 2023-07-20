import React from 'react';
import { Button } from './styles';
interface FormInputProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const BtnSubmit: React.FC<FormInputProps> = ({ text, onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default BtnSubmit;
