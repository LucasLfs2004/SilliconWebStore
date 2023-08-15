import DOMPurify from 'dompurify';
import { z } from 'zod';

export const AddProductZod = z
  .object({
    name: z.string().transform(field => DOMPurify.sanitize(field)),
    brand: z.string().transform(field => DOMPurify.sanitize(field)),
    stock: z
      .number()
      .int()
      .positive()
      .transform(field => DOMPurify.sanitize(field)),

    description: z.string().transform(field => DOMPurify.sanitize(field)),
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
  'Outro',
];

export const brands = [
  'AMD',
  'AOC',
  'Apple',
  'Asus',
  'Samsung',
  'Gigabyte',
  'Nvidia',
  'Intel',
  'Motorola',
  'LG',
  'Pichau',
  'Sharkoon',
  'Ugreen',
  'Xiaomi',
  'Huawei',
  'Logitech',
  'Corsair',
  'Cooler Master',
  'Rise Mode',
  'Outro',
];
