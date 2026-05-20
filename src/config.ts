/**
 * FORTIUM GROUP — Central Configuration
 *
 * Edit this file to change brand info, form backend, and global behavior.
 * No need to touch component code.
 */

export const site = {
  name: 'Fortium Group',
  tagline: 'Gems, not just resumes.',
  url: 'https://www.fortiumgroup.co',
  base: '',
  description:
    'Direct-hire recruiting for elite Cyber Security and AI Security talent. Founded by industry veterans with 15+ years of pure cyber security domain experience.',
  email: 'punit.ankur@gmail.com',
  linkedin: 'https://www.linkedin.com/company/fortium-group/',
  founder: { name: 'Punit Dwivedi', role: 'Founder' },
  founded: 2024,
} as const;

/**
 * Form backend — Formspree.
 *
 * SETUP (one-time, ~2 minutes):
 *   1. Log in at https://formspree.io  (you already created an account
 *      with punit.ankur@gmail.com).
 *   2. Click "+ New Form". Name it "Fortium Inquiries". Save.
 *   3. Formspree shows your endpoint, e.g.  https://formspree.io/f/xpzgkbra
 *      Copy the ID — the part after  /f/  (e.g.  xpzgkbra).
 *   4. Paste it below as `id`, and change `provider` to 'formspree'.
 *   5. Commit and push — emails will arrive at punit.ankur@gmail.com
 *      every time someone submits any form on the site.
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
 * Tip: keep features that show *competence* (terminal, network graph)
 *      and disable ones that read as noise (threat ticker, matrix rain).
 */
export const features = {
  threatTicker: false,       // Top-of-page CVE marquee — felt aggressive
  matrixStream: false,       // Vertical role-name stream — felt robotic
  scanLine: false,           // Global scan-line overlay
  constellationCursor: true, // Subtle connecting-dot cursor trail
  konamiEasterEgg: true,     // Konami code → rootkit theme
  ambientGlitch: true,       // Random subtle glitch on key headings
  networkGraph: true,        // Animated vetting-network SVG (signature element)
  terminalSection: true,     // Interactive shell section (collapsible)
} as const;

/**
 * Scheduling — kept as form-only (single source of truth: Formspree).
 * Discovery calls happen via the contact form; we reply to schedule.
 */
export const scheduling = {
  provider: 'form' as 'form',
  url: '',
  buttonLabel: 'Book Discovery',
} as const;

export type Theme = 'dark' | 'light';
