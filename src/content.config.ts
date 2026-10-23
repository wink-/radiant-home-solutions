import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Individual service detail pages (derived from the Hugo services index copy).
const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().default(99),
    excerpt: z.string().optional(),
    icon: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    keywords: z.string().optional(),
  }),
});

// Long-form standalone pages migrated from Hugo (about, small jobs).
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    keywords: z.string().optional(),
  }),
});

export const collections = { services, pages };
