/**
 * Headline numbers shown in the stat bands and comparison table.
 *
 * Rule of thumb: only publish a number you could back up if a CISO asked
 * for the evidence. Service commitments (targets, guarantees) are safe.
 * Outcome metrics (time-to-offer, acceptance, retention, network size)
 * belong here only once you have real placement data — add them then.
 */
export const stats = [
  { value: '15+', label: 'Years founder domain experience' },
  { value: '7d', label: 'Target to first shortlist' },
  { value: '90d', label: 'Replacement guarantee' },
  { value: '1d', label: 'First reply (business days)' },
] as const;

/** Shown under every stat band so visitors know what the numbers mean. */
export const statsFootnote = 'Figures are service commitments and targets, not historical averages.';

/** Fortium vs. a typical generalist agency — commitments, not benchmarks. */
export const comparisonRows = [
  { metric: 'Who screens candidates', fortium: 'Security practitioner', industry: 'Generalist recruiter' },
  { metric: 'First shortlist (target)', fortium: '7 business days', industry: 'Varies' },
  { metric: 'What you receive', fortium: '3–5 vetted candidates', industry: 'Resume volume' },
  { metric: 'Replacement guarantee', fortium: '90 days', industry: 'Varies' },
] as const;
