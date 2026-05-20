/**
 * Threat ticker data — flavor text only, not live CVEs.
 *
 * If you want real data, replace this array at build time with output from
 * the CISA KEV feed: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
 */
export const threats = [
  { code: 'CVE-2025-XXXXX', tag: 'KEV', label: 'Prompt-injection in widely-deployed LLM agent', severity: 'HIGH' },
  { code: 'INTEL-AI-014', tag: 'AI-RED', label: 'Novel jailbreak class against multimodal models', severity: 'MEDIUM' },
  { code: 'CVE-2025-XXXXX', tag: 'CLOUD', label: 'IAM privilege escalation via misconfigured trust policy', severity: 'HIGH' },
  { code: 'INTEL-SUP', tag: 'SUPPLY', label: 'Compromised package observed in ML pipeline ecosystem', severity: 'CRITICAL' },
  { code: 'CVE-2025-XXXXX', tag: 'KEV', label: 'Authentication bypass in identity provider', severity: 'HIGH' },
  { code: 'INTEL-OT', tag: 'OT/ICS', label: 'Ransomware affiliate targeting manufacturing OT', severity: 'HIGH' },
  { code: 'TREND', tag: 'HIRE', label: 'AI Red Team comp ↑ 18% QoQ across FAANG-adjacent', severity: 'INFO' },
  { code: 'TREND', tag: 'HIRE', label: 'First-CISO mandates at Series-B startups ↑ 34% YoY', severity: 'INFO' },
] as const;
