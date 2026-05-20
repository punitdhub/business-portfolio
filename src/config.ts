/**
 * FORTIUM GROUP — Central Configuration
 *
 * Edit this file to change brand info, scheduling provider, and global
 * site behavior. No need to touch component code.
 */

export const site = {
  name: 'Fortium Group',
  tagline: 'Gems, not just resumes.',
  url: 'https://punitdhub.github.io',
  base: '/business-portfolio',
  description:
    'Direct-hire recruiting for elite Cyber Security and AI Security talent. Founded by industry veterans with 15+ years of pure cyber security domain experience.',
  email: 'hello@fortiumgroup.com',
  linkedin: 'https://www.linkedin.com/company/fortium-group/',
  founder: { name: 'Punit Dwivedi', role: 'Founder' },
  // Used by JSON-LD and structured data
  founded: 2024,
} as const;

/**
 * Scheduling provider configuration.
 *
 * `provider` switches the entire site's "Book Discovery" experience.
 * Just change this value and (optionally) the URL — no component edits needed.
 *
 * Supported: 'calendly' | 'cal' | 'savvycal' | 'tidycal' | 'mailto' | 'form'
 */
export const scheduling = {
  provider: 'form' as 'calendly' | 'cal' | 'savvycal' | 'tidycal' | 'mailto' | 'form',
  // Examples (uncomment your provider and paste your URL):
  // url: 'https://calendly.com/fortium-group/discovery',
  // url: 'https://cal.com/fortium-group/15min',
  // url: 'https://savvycal.com/fortium-group/discovery',
  // url: 'https://tidycal.com/fortium-group/discovery',
  url: '',
  buttonLabel: 'Book Discovery',
  inlineHeight: 700,
} as const;

/**
 * Form backend — currently Formspree. Replace `id` with your real form ID.
 * Set provider: 'demo' to use the local-only fallback (good for staging).
 */
export const forms = {
  provider: 'demo' as 'formspree' | 'demo',
  id: 'PLACEHOLDER_FORMSPREE_ID',
} as const;

/**
 * Feature flags — toggle uniqueness modules.
 */
export const features = {
  matrixStream: true,        // Vertical role-name stream behind hero
  threatTicker: true,        // Top-of-page CVE-style marquee
  constellationCursor: true, // Connecting-dot cursor trail (subtle)
  scanLine: true,            // Travelling scan line overlay
  konamiEasterEgg: true,     // Konami code → rootkit mode
  ambientGlitch: true,       // Random subtle glitch on H1
} as const;

export type Theme = 'dark' | 'light';
