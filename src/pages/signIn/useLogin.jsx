import { zodResolver } from '@hookform/resolvers/zod';
import DOMPurify from 'dompurify';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { z } from 'zod';
import { effectLogin } from '../../services/Requests';
import { setUser } from '../../store/actions/userActions';

export const useLogin = () => {
  const dispatch = useDispatch();

  const [viewPass, setViewPass] = useState(false);

  const handleEffectLogin = async data => {
    try {
      const login = {
        email: data.email,
        password: data.password,
      };
      const response = await effectLogin(login);
      if (response.status === 200) {
        dispatch(setUser(response.data));
        window.history.back();
      }
    } catch (error) {
      alert('Erro, não foi possível realizar o login');
    }
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: zodResolver(LoginZod),
  });

  return {
    viewPass,
    setViewPass,
    handleEffectLogin,
    handleSubmit,
    register,
    errors,
  };
};

export const LoginZod = z
  .object({
    email: z
      .string()
      .email('Email inválido')
      .transform(field => DOMPurify.sanitize(field)),
    password: z
      .string()
      .min(8, 'A senha deve possuir no mínimo 8 caracteres')
      .regex(/[!@#$%^&*(),.?":{}|<>-]/, {
        message: 'A senha deve conter pelo menos um caracter especial',
      })
      .regex(/[0-9]/, { message: 'A senha deve conter pelo menos um número' })
      .regex(/[A-Z]/, {
        message: 'A senha deve conter no mínimo uma letra maiúscula',
      })
      .regex(/[a-z]/, {
        message: 'A senha deve conter pelo menos uma letra minúscula',
      })
      .transform(field => DOMPurify.sanitize(field)),
  })
  .required();
