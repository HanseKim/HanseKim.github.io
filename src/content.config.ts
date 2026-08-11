import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    bgcolor: z.enum(['pink','blue','green','purple','yellow','red','gray','orange','realview']),
    icon: z.string().optional(),
    iconImage: z.string().optional(),
    order: z.number(),
    pinned: z.boolean().default(false),
  }),
});

export const collections = { posts };