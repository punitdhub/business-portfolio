import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Insights articles — one Markdown file per article in src/content/insights/.
 * The file name becomes the URL: my-article.md → /insights/my-article
 *
 * Three kinds share this collection:
 * - guide         Long-form hiring guides (the default, so older files need no change).
 * - threat-brief  Hawk's Threat Briefs. Listed at /insights/threat-briefs/.
 * - insight       Hawk's Industry Insights. Listed in the main Insights list.
 *
 * Threat briefs and insights get a "based on public sources as of" notice and a
 * Sources list rendered from `sources`, so the article body must not repeat them.
 */
const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default('Punit Dwivedi'),
      tags: z.array(z.string()).default([]),
      kind: z.enum(['guide', 'threat-brief', 'insight']).default('guide'),
      /** false shows an "Unconfirmed" notice on the article and a label in lists. */
      confirmed: z.boolean().default(true),
      /** Set true to keep an article out of the production build (still visible in `npm run dev`). */
      draft: z.boolean().default(false),
      sources: z
        .array(
          z.object({
            title: z.string().min(1),
            url: z.url(),
          }),
        )
        .default([]),
    })
    .refine((d) => d.kind === 'guide' || d.sources.length > 0, {
      message: 'Threat briefs and insights must list at least one source in `sources`.',
      path: ['sources'],
    }),
});

export const collections = { insights };
