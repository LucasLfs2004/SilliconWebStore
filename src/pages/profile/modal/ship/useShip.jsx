import DOMPurify from 'dompurify';
import { z } from 'zod';

const useShip = () => {
  const shipZod = z
    .object({
      name: z
        .string()
        .min(3, 'Este campo deve ter no mínimo 3 caracteres')
        .transform(field => DOMPurify.sanitize(field)),
      cep: z
        .string()
        .min(8, 'Preencha um cep válido')
        .regex(/^[0-9]{5}-?[0-9]{3}$/, 'Insira um CEP válido')
        .nonempty('Este campo é obrigatório')
        .transform(field => DOMPurify.sanitize(field)),
      phone_number: z
        .string()
        .regex(
          /^\([0-9]{2}\) 9[0-9]{4}-?[0-9]{4}$/,
          'Insira um número de telefone válido, Ex: (11) 91234-5678',
        )
        .max(15, 'Preencha um número de telefone válido')
        .transform(field => DOMPurify.sanitize(field)),
      number: z
        .number()
        .int()
        .positive()
        .transform(field => DOMPurify.sanitize(field)),
      street: z
        .string()
        .nonempty('Esse campo é obrigatório')
        .transform(field => DOMPurify.sanitize(field)),
      district: z
        .string()
        .nonempty('Esse campo é obrigatório')
        .transform(field => DOMPurify.sanitize(field)),
      state: z
        .string()
        .nonempty('Esse campo é obrigatório')
        .transform(field => DOMPurify.sanitize(field)),
      city: z
        .string()
        .nonempty('Esse campo é obrigatório')
        .transform(field => DOMPurify.sanitize(field)),
      receiver: z
        .string()
        .min(3, 'Insira um nome para o destinatário')
        .nonempty('Esse campo é obrigatório')
        .transform(field => DOMPurify.sanitize(field)),
      complement: z.string().transform(field => DOMPurify.sanitize(field)),
    })
    .required();

  return { shipZod };
};

export default useShip;
