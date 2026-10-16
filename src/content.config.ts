
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const animais = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/animais',
  }),
  schema: z.object({
    name: z.string(),
    scientificName: z.string(),
    group: z.string(),
    habitat: z.string(),
    diet: z.string(),
    distribution: z.union([
      z.string(),
      z.array(z.string()),
    ]).default([]),
    size: z.string().optional(),
    weight: z.string().optional(),
    lifespan: z.string().optional(),
    image: z.string().optional(),
    summary: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  animais,
};
