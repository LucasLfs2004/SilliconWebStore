import DOMPurify from 'dompurify';
import { z } from 'zod';

export const ProductZod = z
  .object({
    name: z
      .string()
      .min(5, 'Este campo deve ter no mínimo 5 caracteres')
      .transform(field => DOMPurify.sanitize(field)),
    model: z.string().transform(field => DOMPurify.sanitize(field)),
    brand: z.string().transform(field => DOMPurify.sanitize(field)),
    stock: z
      .number()
      .int()
      .positive()
      .transform(field => DOMPurify.sanitize(field)),

    description: z.string().transform(field => DOMPurify.sanitize(field)),
    category: z
      .string()
      .array()
      .nonempty({ message: 'Selecione uma categoria' })
      .transform(field => DOMPurify.sanitize(field)),
  })
  .required();
