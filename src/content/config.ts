import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('SLIT.IO'),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    lang: z.enum(['en', 'pt', 'es', 'fr', 'de', 'ru']).default('en'),
  }),
});

export const collections = {
  blog: blogCollection,
};
