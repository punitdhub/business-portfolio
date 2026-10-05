/**
 * FORTIUM GROUP — Central Configuration
 *
 * Edit this file to change brand info, form backend, and global behavior.
 * No need to touch component code.
 */

export const site = {
  name: 'Fortium Group',
  tagline: 'Gems, not just resumes.',
  url: 'https://punitdhub.github.io/business-portfolio',
  base: '/business-portfolio',
  description:
    'Direct-hire recruiting for elite Cyber Security and AI Security talent. Founded by Punit Dwivedi, a Cyber Security veteran with 15+ years of domain experience.',
  email: 'hello@fortiumgroup.com',
  linkedin: 'https://www.linkedin.com/company/fortium-group/',
  founder: { name: 'Punit Dwivedi', role: 'Founder' },
  founded: 2024,
} as const;

/**
 * Legal pages (/privacy, /terms). Review these values — and the pages
 * themselves — with a lawyer in your jurisdiction before relying on them.
 */
export const legal = {
  lastUpdated: 'October 3, 2026',
  /** How long candidate profiles are kept after last contact. */
  candidateRetentionMonths: 24,
  /** e.g. 'the State of Delaware, USA' — leave empty to use generic wording. */
  governingLaw: '',
} as const;

/**
 * Form backend — Formspree.
 *
 * SETUP (one-time, ~2 minutes):
 *   1. Log in at https://formspree.io.
 *   2. Click "+ New Form". Name it "Fortium Inquiries". Save.
 *   3. Formspree shows your endpoint, e.g.  https://formspree.io/f/xpzgkbra
 *      Copy the ID — the part after  /f/  (e.g.  xpzgkbra).
 *   4. Paste it below as `id`, and change `provider` to 'formspree'.
 *   5. Commit and push — submissions are emailed to the address on your
 *      Formspree account.
 *
 * Until you add the ID, the form stays in safe "demo" mode that captures
 * the submission visually but doesn't email anyone.
 */
export const forms = {
  provider: 'formspree' as 'formspree' | 'demo',
  id: 'mqejewen',
} as const;

/**
 * Feature flags — toggle high-impact modules.
 *
 * Tip: keep features that show *competence* (terminal) and disable ones
 *      that read as noise (threat ticker).
 */
export const features = {
  threatTicker: false,
  constellationCursor: false,
  konamiEasterEgg: false,
  terminalSection: true,
  /** Open-role cards on /candidates. Turn on once src/data/mandates.ts holds real roles. */
  showMandates: false,
} as const;

/**
 * Scheduling — kept as form-only (single source of truth: Formspree).
 * Discovery calls happen via the contact form; we reply to schedule.
 */
export const scheduling = {
  provider: 'form' as 'form' | 'mailto' | 'calendly' | 'cal' | 'savvycal' | 'tidycal',
  url: '',
  buttonLabel: 'Book Discovery',
} as const;

export type Theme = 'dark' | 'light';
