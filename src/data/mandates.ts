export interface Mandate {
  ref: string;
  title: string;
  company: string;
  location: string;
  comp: string;
  status: 'OPEN' | 'INTERVIEWING' | 'CLOSING';
}

// Anonymized placeholder mandates. Easy to swap; CMS-ready shape.
export const mandates: Mandate[] = [
  {
    ref: 'FG-2026-014',
    title: 'Principal AI Red Teamer',
    company: 'Pre-IPO FinTech · 800 FTE',
    location: 'Remote · United States',
    comp: '$280k–$340k + equity',
    status: 'OPEN',
  },
  {
    ref: 'FG-2026-013',
    title: 'Director of Cloud Detection',
    company: 'Series-C SaaS · 400 FTE',
    location: 'NYC · Hybrid 2 days',
    comp: '$260k base + 25% bonus',
    status: 'INTERVIEWING',
  },
  {
    ref: 'FG-2026-012',
    title: 'CISO (First Hire)',
    company: 'Series-B Health · 180 FTE',
    location: 'Remote · United States',
    comp: '$300k + meaningful equity',
    status: 'OPEN',
  },
];
