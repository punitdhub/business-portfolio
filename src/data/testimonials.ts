/**
 * Testimonials. The section renders ONLY when this list has entries,
 * so nothing appears on the site until you add real quotes.
 *
 * Only publish quotes you have permission to use. If the person wants
 * to stay anonymous, leave `name` out and use a descriptive `title`
 * (e.g. 'CISO, Series-C FinTech').
 *
 * `audience` controls where it shows: 'employer' quotes appear on the
 * homepage and /employers, 'candidate' quotes on /candidates.
 */
export interface Testimonial {
  quote: string;
  name?: string;
  title: string;
  company?: string;
  audience: 'employer' | 'candidate';
}

export const testimonials: Testimonial[] = [];
