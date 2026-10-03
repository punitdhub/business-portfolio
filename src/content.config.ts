import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Insights articles — one Markdown file per article in src/content/insights/.
 * The file name becomes the URL: my-article.md → /insights/my-article
 */
const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Punit Dwivedi'),
    tags: z.array(z.string()).default([]),
    /** Set true to keep an article out of the site while you work on it. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { insights };
