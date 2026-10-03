import { getCollection, type CollectionEntry } from 'astro:content';

export type Insight = CollectionEntry<'insights'>;

/** Published articles, newest first. */
export async function getInsights(): Promise<Insight[]> {
  const all = await getCollection('insights', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

/** Rough reading time at ~220 words per minute. */
export function readingTime(entry: Insight): string {
  const words = (entry.body ?? '').split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
