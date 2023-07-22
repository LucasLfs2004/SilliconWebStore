import DOMPurify from 'dompurify';
import { z } from 'zod';

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
      .transform(field => DOMPurify.sanitize(field)),
    password: z
      .string()
      .min(8, 'A senha deve possuir no mínimo 8 caracteres')
      .regex(/[!@#$%^&*(),.?":{}|<>]/, {
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
      .regex(/[!@#$%^&*(),.?":{}|<>]/, {
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
