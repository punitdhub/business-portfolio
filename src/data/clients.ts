/**
 * Client roster for the "Trusted by" logo rail on the homepage.
 *
 * Leave EMPTY until you have written permission to name a client.
 * While empty, the homepage shows the "sectors we hire for" strip instead.
 *
 * `logo` is optional — a path under /public (e.g. '/clients/acme.svg').
 * Without it the client name is rendered as text.
 */
export interface Client {
  name: string;
  logo?: string;
}

export const clients: Client[] = [];

/** Fallback strip shown while `clients` is empty. */
export const sectors = [
  'FinTech & Banking',
  'SaaS & Cloud',
  'Healthcare & Life Sciences',
  'AI Labs & Scale-ups',
  'Security Vendors',
  'Critical Infrastructure',
];
