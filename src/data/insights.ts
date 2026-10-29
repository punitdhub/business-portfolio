import { getCollection, type CollectionEntry } from 'astro:content';

export type Insight = CollectionEntry<'insights'>;
export type InsightKind = Insight['data']['kind'];

/** Paths under /insights/ that are listing pages, so no article may use them as a slug. */
const RESERVED_SLUGS = new Set(['threat-briefs', 'security-news', 'guides']);

/**
 * Published articles of every kind, newest first.
 * Drafts are left out of production builds; `npm run dev` shows them so they can be previewed.
 */
export async function getAllInsights(): Promise<Insight[]> {
  const showDrafts = import.meta.env.DEV;
  const all = await getCollection('insights', ({ data }) => showDrafts || !data.draft);
  for (const p of all) {
    if (RESERVED_SLUGS.has(p.id)) {
      throw new Error(`Insights article "${p.id}" uses a reserved slug; rename the file.`);
    }
  }
  return all.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

/** Hiring guides (kind: guide), the main grid on /insights/. */
export async function getGuides(): Promise<Insight[]> {
  return (await getAllInsights()).filter((p) => p.data.kind === 'guide');
}

/** Hawk's industry insights (kind: insight), shown as "Security news". */
export async function getSecurityNews(): Promise<Insight[]> {
  return (await getAllInsights()).filter((p) => p.data.kind === 'insight');
}

/** Threat briefs only, newest first. */
export async function getThreatBriefs(): Promise<Insight[]> {
  return (await getAllInsights()).filter((p) => p.data.kind === 'threat-brief');
}

export const kindLabel: Record<InsightKind, string> = {
  guide: 'Guide',
  'threat-brief': 'Threat brief',
  insight: 'Security news',
};

/** Rough reading time at ~220 words per minute. */
export function readingTime(entry: Insight): string {
  const words = (entry.body ?? '').split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

/** Listing page for each kind, used for breadcrumbs and section links. */
export const kindSection: Record<InsightKind, { name: string; path: string }> = {
  guide: { name: 'Insights', path: '/insights' },
  'threat-brief': { name: 'Threat briefs', path: '/insights/threat-briefs' },
  insight: { name: 'Security news', path: '/insights/security-news' },
};
