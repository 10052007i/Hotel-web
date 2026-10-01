import { defineCollection, z } from 'astro:content';

const hospedajesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publicado: z.boolean().default(true),
    fechaActualizacion: z.date(),
    permisoTestimonio: z.boolean().default(false)
  })
});

export const collections = {
  'hospedajes': hospedajesCollection
};
