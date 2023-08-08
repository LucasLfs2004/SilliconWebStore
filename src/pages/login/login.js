import DOMPurify from 'dompurify';
import { z } from 'zod';

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
