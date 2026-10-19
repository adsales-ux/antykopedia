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

const oferty = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/oferty' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    kategoria: z.string(),         // meble/zegary/obrazy/srebra/numizmatyka/inne
    cena: z.number(),              // zł
    typ: z.enum(['sprzedam','kupię','zamienię']).default('sprzedam'),
    lokalizacja: z.string(),       // miasto
    kontaktEmail: z.string().optional(),
    kontaktTel: z.string().optional(),
    zdjecie: z.string().optional(), // URL lub /public/oferty/xyz.jpg
    stan: z.enum(['nowy','bardzo-dobry','dobry','do-renowacji']).default('dobry'),
    rok: z.string().optional(),    // np. "XIX w.", "1920-1940"
  }).passthrough(),
});

export const collections = { kategorie, blog, oferty };
