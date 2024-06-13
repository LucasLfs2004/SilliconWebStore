import { zodResolver } from '@hookform/resolvers/zod';
import DOMPurify from 'dompurify';
import moment from 'moment';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { z } from 'zod';
import { toastErr, toastSuc } from '../../components/ToastComponent';
import { createAccount } from '../../services/Requests';
import { setUser } from '../../store/actions/userActions';

export const useSignUp = () => {
  const dispatch = useDispatch();

  const [viewPass, setViewPass] = useState();
  const [viewPassConfirm, setViewPassConfirm] = useState();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: zodResolver(CreateAccountZod),
  });

  const handleCreateAccount = async data => {
    try {
      const user = {
        name: data.name,
        cpf: data.cpf,
        phone: data.phone,
        email: data.email,
        birth: moment(data.birth, 'DD/MM/YYYY', true).format('YYYY-MM-DD'),
        password: data.password,
      };
      const data_user = await createAccount(user);
      if (data_user) {
        dispatch(setUser(data_user));
        toastSuc('Conta criada com sucesso');
        setTimeout(() => window.history.back(), 1500);
      } else {
        console.log(data_user);
        toastErr('Não foi possível criar sua conta, tente novamente.');
      }
    } catch (error) {
      console.log(error.response.data);
      toastErr('Não foi possível criar sua conta, tente novamente.');
    }
  };

  return {
    handleCreateAccount,
    errors,
    register,
    handleSubmit,
    viewPass,
    setViewPass,
    viewPassConfirm,
    setViewPassConfirm,
  };
};

export const CreateAccountZod = z
  .object({
    name: z
      .string()
      .min(3, 'O nome deve ter no mínimo 3 caracteres')
      .transform(field => DOMPurify.sanitize(field)),
    cpf: z
      .string()
      .min(14, 'Preencha essa campo com um cpf válido')
      .transform(field => DOMPurify.sanitize(field)),
    phone: z
      .string()
      .min(15)
      .transform(field => DOMPurify.sanitize(field)),
    email: z
      .string()
      .email('Email inválido')
      .transform(field => DOMPurify.sanitize(field)),
    birth: z
      .string()
      .min(10)
      .regex(/[0-9]/, {
        message: 'dd/mm/yyyy',
      })
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

    confirm_password: z
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
  .required()
  .refine(field => field.password === field.confirm_password, {
    message: 'As senhas devem ser iguais',
    path: ['confirm_password'],
  });
