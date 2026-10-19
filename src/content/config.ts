import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const kategorie = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/kategorie' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    icon: z.string().optional(),
    cena_low: z.number().optional(),
    cena_high: z.number().optional(),
  }).passthrough(),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    kategoria: z.string().optional(),
  }).passthrough(),
});

export const collections = { kategorie, blog };
