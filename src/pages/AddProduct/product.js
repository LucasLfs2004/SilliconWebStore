import DOMPurify from 'dompurify';
import { z } from 'zod';

export const LoginZod = z
  .object({
    nome: z.string().transform(field => DOMPurify.sanitize(field)),
    marca: z.string().transform(field => DOMPurify.sanitize(field)),
    preco: z
      .number()
      .positive()
      .transform(field => DOMPurify.sanitize(field)),
    estoque: z
      .number()
      .int()
      .transform(field => DOMPurify.sanitize(field)),

    descricao: z.string().transform(field => DOMPurify.sanitize(field)),
  })
  .required();

export const categorys = [
  'Acessórios',
  'Cabo',
  'Celular',
  'Console',
  'Placa mãe',
  'Placa de vídeo',
  'Gabinete',
  'Processador',
  'Notebook',
  'PC gamer',
  'Outros',
];
