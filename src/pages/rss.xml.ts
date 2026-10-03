import type { APIRoute } from 'astro';
import { getInsights } from '../data/insights';
import { site } from '../config';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** RSS 2.0 feed of Insights articles, built at compile time. */
export const GET: APIRoute = async () => {
  const posts = await getInsights();
  const items = posts
    .map((p) => {
      const url = `${site.url}/insights/${p.id}`;
      return `    <item>
      <title>${esc(p.data.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${esc(p.data.description)}</description>
      <pubDate>${p.data.pubDate.toUTCString()}</pubDate>
      <author>${esc(`${site.email} (${p.data.author})`)}</author>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(site.name)} Insights</title>
    <link>${site.url}/insights</link>
    <atom:link href="${site.url}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Practitioner-written guides on hiring Cyber and AI Security talent.</description>
    <language>en-us</language>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
