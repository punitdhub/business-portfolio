/**
 * Role hiring guides — one page per entry at /roles/<slug>.
 *
 * To add a role, copy an entry and edit it. Salary figures are indicative
 * US base-salary ranges compiled from the public sources listed on each
 * entry; re-check them at least once a year and update `salaryAsOf`.
 */

export interface Source { label: string; url: string }

export interface RolePage {
  slug: string;
  title: string;
  /** Short name for links and pills. */
  short: string;
  /** Role names in src/data/roles.ts that should link to this page. */
  matches: string[];
  practice: 'Cyber Security' | 'AI Security';
  summary: string;
  overview: string[];
  responsibilities: string[];
  skills: string[];
  certifications: { note: string; list: string[] };
  salary: {
    levels: { level: string; range: string }[];
    note: string;
    sources: Source[];
  };
  interviewQuestions: string[];
  redFlags: string[];
  related: string[];
  faqs: { q: string; a: string }[];
}

export const salaryAsOf = 'October 2026';

const SRC = {
  bls: { label: 'U.S. Bureau of Labor Statistics — Information Security Analysts', url: 'https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm' },
  kore1Soc: { label: 'KORE1 — SOC Analyst Salary Guide 2026', url: 'https://www.kore1.com/soc-analyst-salary-guide/' },
  zipT1: { label: 'ZipRecruiter — Tier 1 SOC Analyst Salary', url: 'https://www.ziprecruiter.com/Salaries/Tier-1-Soc-Analyst-Salary' },
  zipT3: { label: 'ZipRecruiter — Tier 3 SOC Analyst Salary', url: 'https://www.ziprecruiter.com/Salaries/Tier-3-Soc-Analyst-Salary' },
  aiRedSalary: { label: 'infosec.qa — AI Red Teamer Salary 2026', url: 'https://infosec.qa/blog/ai-red-teamer-salary-2026/' },
  aiRoles: { label: 'Practical DevSecOps — Emerging AI Security Roles 2026', url: 'https://www.practical-devsecops.com/emerging-ai-security-roles/' },
  aiSecHire: { label: 'infosec.qa — AI Security Engineer Salary 2026', url: 'https://infosec.qa/blog/hire-ai-security-engineer-2026/' },
  gdCloud: { label: 'Glassdoor — Cloud Security Engineer Salary', url: 'https://www.glassdoor.com/Salaries/cloud-security-engineer-salary-SRCH_KO0,23.htm' },
  biCloud: { label: 'Built In — Cloud Security Engineer Salary', url: 'https://builtin.com/salaries/us/cloud-security-engineer' },
  zipCloud: { label: 'ZipRecruiter — Cloud Security Engineer Salary', url: 'https://www.ziprecruiter.com/Salaries/Cloud-Security-Engineer-Salary' },
  gdAppsec: { label: 'Glassdoor — Application Security Engineer Salary', url: 'https://www.glassdoor.com/Salaries/application-security-engineer-salary-SRCH_KO0,29.htm' },
  zipAppsec: { label: 'ZipRecruiter — Application Security Engineer Salary', url: 'https://www.ziprecruiter.com/Salaries/Application-Security-Engineer-Salary' },
  levelsAppsec: { label: 'Levels.fyi — AppSec Engineer', url: 'https://www.levels.fyi/t/software-engineer/title/appsec-engineer' },
  gdGrc: { label: 'Glassdoor — GRC Manager Salary', url: 'https://www.glassdoor.com/Salaries/grc-manager-salary-SRCH_KO0,11.htm' },
  grcGuide: { label: 'Infosec Conferences — GRC Salary Guide 2026', url: 'https://infosec-conferences.com/security-domains/grc/salary/' },
} satisfies Record<string, Source>;

export const rolePages: RolePage[] = [
  {
    slug: 'soc-analyst-lead',
    title: 'SOC Analyst & SOC Lead',
    short: 'SOC Analyst & Lead',
    matches: ['SOC Manager', 'Detection & Response Lead', 'Incident Responder'],
    practice: 'Cyber Security',
    summary:
      'How to hire SOC analysts (Tier 1–3) and the SOC lead who runs them — skills, certifications, 2026 salary ranges, interview questions, and red flags.',
    overview: [
      'The Security Operations Center is where alerts become decisions. SOC analysts triage, investigate, and escalate; the SOC lead owns the people, the playbooks, the detection backlog, and the metrics that tell leadership whether the program is working.',
      'The hardest part of SOC hiring is telling apart analysts who close tickets from analysts who actually investigate. Strong candidates explain why an alert fired, what else they checked, and what they would tune so it fires better next time.',
    ],
    responsibilities: [
      'Triage and investigate alerts across SIEM, EDR, identity, email, and cloud telemetry',
      'Run incident response playbooks and escalate with clear, written timelines',
      'Tune noisy detections and propose new ones from investigation findings',
      'Hunt proactively for threats that did not trigger an alert (Tier 3)',
      'Lead shift handovers, on-call rotations, and analyst coaching (Lead)',
      'Report MTTD / MTTR, alert quality, and coverage gaps to security leadership (Lead)',
    ],
    skills: [
      'SIEM query languages (Splunk SPL, Microsoft KQL, or similar)',
      'EDR investigation (CrowdStrike, Microsoft Defender, SentinelOne)',
      'Windows, Linux, and Active Directory / Entra ID attack patterns',
      'Network fundamentals and packet / log analysis',
      'MITRE ATT&CK mapping of observed activity',
      'Scripting for enrichment and automation (Python, PowerShell)',
      'SOAR playbook design (Lead / Tier 3)',
      'Clear incident writing for technical and executive readers',
    ],
    certifications: {
      note: 'Useful signals at Tier 1–2; at Tier 3 and lead level, demonstrated investigations matter far more than certificates.',
      list: ['CompTIA Security+ / CySA+', 'GIAC GCIH (Incident Handler)', 'GIAC GCIA (Intrusion Analyst)', 'Microsoft SC-200', 'Splunk Core Certified Power User', 'Blue Team Level 1 / 2'],
    },
    salary: {
      levels: [
        { level: 'Tier 1 Analyst', range: '$70k – $85k' },
        { level: 'Tier 2 Analyst', range: '$80k – $130k' },
        { level: 'Tier 3 / Senior Analyst', range: '$140k – $175k' },
        { level: 'SOC Lead / Manager', range: '$130k – $175k ($150k – $210k in high-cost metros)' },
      ],
      note: 'For reference, the U.S. BLS median for information security analysts was $129,180 (May 2025). Shift premiums and on-call pay are common on top of base.',
      sources: [SRC.kore1Soc, SRC.zipT1, SRC.zipT3, SRC.bls],
    },
    interviewQuestions: [
      'Walk me through the last real alert you investigated end to end. What did you check after the obvious first step?',
      'An impossible-travel alert fires for an executive. What do you look at, in what order, and when do you escalate?',
      'Write (or describe) a query to find a single host beaconing at a regular interval to a rare external domain.',
      'Tell me about a detection you made less noisy. How did you prove you did not lose true positives?',
      'For leads: how do you keep Tier 1 analysts from burning out, and which metric would you stop reporting?',
    ],
    redFlags: [
      'Describes investigations only as “I followed the playbook and escalated”',
      'Cannot explain what a detection is actually looking for',
      'No curiosity about root cause once a ticket is closed',
      'Lead candidates who measure success only by ticket volume',
    ],
    related: ['cloud-security-engineer', 'appsec-engineer', 'grc-lead'],
    faqs: [
      { q: 'What is the difference between a Tier 1 and a Tier 3 SOC analyst?', a: 'Tier 1 analysts triage alerts and follow playbooks. Tier 2 analysts run deeper investigations and incident response. Tier 3 analysts hunt for threats that never triggered an alert, reverse-engineer attacker behavior, and build new detections.' },
      { q: 'How long does it take to hire a SOC lead?', a: 'Our target is a vetted shortlist within 7 business days of intake. Overall time-to-offer depends mainly on the speed of your interview loop.' },
      { q: 'Should a SOC lead still be hands-on?', a: 'In SOCs under roughly ten analysts, yes — the lead should be able to take an escalation themselves. In larger SOCs the role shifts toward detection strategy, metrics, and people leadership.' },
    ],
  },
  {
    slug: 'ai-red-teamer',
    title: 'AI Red Teamer',
    short: 'AI Red Teamer',
    matches: ['AI Red Teamer', 'Prompt Injection Analyst', 'Adversarial ML Engineer'],
    practice: 'AI Security',
    summary:
      'How to hire an AI Red Teamer — the skills that matter, realistic 2026 compensation, interview exercises, and the red flags that separate real practitioners from prompt hobbyists.',
    overview: [
      'AI red teamers attack machine-learning systems the way a real adversary would: prompt injection, jailbreaks, data exfiltration through tools and agents, training-data poisoning, and model extraction. Their findings drive guardrails, evaluations, and launch decisions.',
      'The best candidates combine two rare skill sets — offensive security tradecraft and a working understanding of how models and LLM applications are built. Most strong hires come from either a pentesting background that moved into ML, or an ML background with a security mindset.',
    ],
    responsibilities: [
      'Design and run adversarial tests against models, LLM applications, and AI agents',
      'Probe for prompt injection, jailbreaks, sensitive-data leakage, and tool / plugin abuse',
      'Build repeatable attack libraries and automated evaluation harnesses',
      'Map findings to frameworks such as the OWASP Top 10 for LLM Applications and MITRE ATLAS',
      'Write clear findings with severity, reproduction steps, and recommended mitigations',
      'Partner with ML and product teams to verify fixes before launch',
    ],
    skills: [
      'Offensive security fundamentals (web, API, and cloud attack techniques)',
      'Hands-on experience with LLM APIs, RAG pipelines, and agent frameworks',
      'Python for building attack tooling and evaluation harnesses',
      'Understanding of model training, fine-tuning, and inference basics',
      'Threat modeling for AI systems (OWASP LLM Top 10, MITRE ATLAS, NIST AI RMF)',
      'Precise technical writing — findings must be reproducible',
    ],
    certifications: {
      note: 'There is no dominant AI red-team certification yet. Weigh published research, CTF results (e.g. AI-focused villages and competitions), and AI bug-bounty findings more heavily than credentials.',
      list: ['OSCP / OSEP (offensive fundamentals)', 'GIAC GPEN or GWAPT', 'Vendor or university courses in adversarial ML'],
    },
    salary: {
      levels: [
        { level: 'Junior', range: '$80k – $120k total comp' },
        { level: 'Mid-level', range: '$120k – $170k total comp' },
        { level: 'Senior', range: '$170k – $220k total comp' },
        { level: 'Staff / Principal', range: '$220k – $350k+ total comp' },
      ],
      note: 'Frontier AI labs and well-funded AI scale-ups often pay well above these bands, largely through equity.',
      sources: [SRC.aiRedSalary, SRC.aiRoles],
    },
    interviewQuestions: [
      'Here is a customer-support agent with access to an order-lookup tool. Walk me through how you would attack it in the first hour.',
      'Explain indirect prompt injection to a product manager, then explain how you would test for it.',
      'Tell me about a finding you reported that the team pushed back on. How did you prove impact?',
      'How would you turn a one-off jailbreak into a regression test that runs before every model release?',
      'Where do traditional pentest skills transfer to AI systems, and where do they not?',
    ],
    redFlags: [
      'Experience limited to collecting jailbreak prompts, with no methodology',
      'Cannot explain how the target application is wired (retrieval, tools, permissions)',
      'Findings with no severity reasoning or reproduction steps',
      'No interest in what happens after the bug is reported',
    ],
    related: ['llm-security-engineer', 'appsec-engineer', 'cloud-security-engineer'],
    faqs: [
      { q: 'Is an AI red teamer the same as a penetration tester?', a: 'They overlap. Both think like attackers, but AI red teamers also target model behavior — jailbreaks, prompt injection, data leakage, and unsafe agent actions — which needs an understanding of how models and LLM applications work.' },
      { q: 'Should we hire one AI red teamer or build a team?', a: 'Most organizations start with one senior hire who builds methodology and tooling, then add specialists once AI products ship regularly. See our guide on building an AI red team.' },
      { q: 'Can our existing red team cover AI systems?', a: 'Partly. Experienced red teamers can pick up LLM application attacks quickly, but model-level testing and evaluation design usually need someone with ML experience.' },
    ],
  },
  {
    slug: 'llm-security-engineer',
    title: 'LLM Security Engineer',
    short: 'LLM Security Engineer',
    matches: ['LLM Security Engineer', 'ML SecOps', 'Model Supply-Chain Security'],
    practice: 'AI Security',
    summary:
      'How to hire an LLM Security Engineer — the builder who secures applications on top of large language models. Skills, 2026 salary ranges, interview questions, and red flags.',
    overview: [
      'Where an AI red teamer breaks LLM systems, an LLM security engineer builds the defenses: input and output filtering, prompt-injection mitigations, permission boundaries for agents and tools, secure retrieval, and the monitoring that catches abuse in production.',
      'The role sits between application security and ML engineering. Strong candidates write production code, understand LLM application architecture, and can explain security trade-offs to product teams that want to ship fast.',
    ],
    responsibilities: [
      'Threat-model LLM features, RAG pipelines, and AI agents before launch',
      'Design guardrails: input validation, output filtering, and content policies',
      'Enforce least-privilege for agent tools, plugins, and data access',
      'Secure the model supply chain — model provenance, dependencies, and weights',
      'Instrument logging and detection for prompt injection and abuse in production',
      'Set secure-by-default patterns and review AI features with engineering teams',
    ],
    skills: [
      'Production software engineering (Python, TypeScript, or Go)',
      'LLM application architecture: RAG, embeddings, function calling, agents',
      'Application security fundamentals (authN/Z, input handling, secrets)',
      'OWASP Top 10 for LLM Applications and MITRE ATLAS',
      'Cloud security for AI workloads (IAM, network isolation, key management)',
      'Detection and monitoring for AI-specific abuse patterns',
    ],
    certifications: {
      note: 'No certification dominates this field yet. A strong AppSec or cloud-security foundation plus shipped AI security work is the best signal.',
      list: ['CSSLP or GIAC GWEB (AppSec foundation)', 'Cloud security certs (AWS Security Specialty, CCSP)', 'Courses in AI / ML security'],
    },
    salary: {
      levels: [
        { level: 'Mid-level', range: '$150k – $180k' },
        { level: 'Senior', range: '$180k – $230k' },
        { level: 'Staff / Principal', range: '$230k+ (equity-heavy at AI-native companies)' },
      ],
      note: 'Published 2026 ranges for LLM / generative-AI security engineers cluster around $150k–$230k base.',
      sources: [SRC.aiRoles, SRC.aiSecHire],
    },
    interviewQuestions: [
      'Design the security architecture for a RAG assistant that can read internal documents with mixed access levels.',
      'An agent can send email on a user’s behalf. What controls do you put around that tool, and why?',
      'How do you defend against indirect prompt injection when you cannot fully trust retrieved content?',
      'What would you log for an LLM feature, and what would you deliberately not log?',
      'Tell me about a time you made an AI feature safer without blocking its launch.',
    ],
    redFlags: [
      'Treats a system prompt as a security boundary',
      'Relies entirely on one filtering vendor without understanding its limits',
      'Cannot write or review production code',
      'Ignores data access control in retrieval pipelines',
    ],
    related: ['ai-red-teamer', 'appsec-engineer', 'cloud-security-engineer'],
    faqs: [
      { q: 'What is the difference between an LLM security engineer and an AI red teamer?', a: 'The red teamer attacks AI systems to find weaknesses; the LLM security engineer designs and builds the defenses. Mature teams have both, working in a loop.' },
      { q: 'Can a strong AppSec engineer grow into this role?', a: 'Often, yes. AppSec engineers who have built or reviewed LLM features already have most of the foundation and can learn the AI-specific attack patterns quickly.' },
      { q: 'Do we need this role if we only use third-party models?', a: 'Usually yes. Most LLM risk sits in how your application connects models to data and tools, not in the model itself.' },
    ],
  },
  {
    slug: 'cloud-security-engineer',
    title: 'Cloud Security Engineer',
    short: 'Cloud Security Engineer',
    matches: ['Cloud Security Engineer', 'DevSecOps Lead', 'Zero Trust Architect', 'IAM Architect'],
    practice: 'Cyber Security',
    summary:
      'How to hire a Cloud Security Engineer — AWS, Azure, and GCP skills that matter, certifications, 2026 salary ranges, interview questions, and red flags.',
    overview: [
      'Cloud security engineers secure the infrastructure your product runs on: identity and access, network boundaries, workload hardening, secrets, logging, and the guardrails that stop misconfigurations before they reach production.',
      'The best hires think in code. They secure environments through infrastructure-as-code, policy-as-code, and automation rather than tickets and spreadsheets — and they work alongside platform teams rather than gatekeeping them.',
    ],
    responsibilities: [
      'Design and enforce IAM, network, and encryption baselines across cloud accounts',
      'Build guardrails with policy-as-code (SCPs, Azure Policy, OPA) and secure IaC modules',
      'Secure containers and Kubernetes workloads',
      'Run cloud security posture management and fix findings at the source',
      'Build cloud detections and support incident response in cloud environments',
      'Partner with platform and DevOps teams on secure-by-default pipelines',
    ],
    skills: [
      'Deep knowledge of at least one major cloud (AWS, Azure, or GCP)',
      'Cloud IAM design and privilege-escalation paths',
      'Terraform or other infrastructure-as-code',
      'Kubernetes and container security',
      'Python or Go for automation',
      'Cloud logging and detection (CloudTrail, Azure Monitor, GCP audit logs)',
    ],
    certifications: {
      note: 'Cloud certifications are a reasonable baseline filter; hands-on IaC and incident stories are the real differentiator.',
      list: ['AWS Certified Security – Specialty', 'Microsoft AZ-500', 'Google Professional Cloud Security Engineer', 'ISC2 CCSP', 'Certified Kubernetes Security Specialist (CKS)'],
    },
    salary: {
      levels: [
        { level: 'Typical range', range: '$130k – $185k' },
        { level: '25th – 75th percentile', range: '$135k – $215k' },
        { level: 'Senior', range: '~$180k average' },
      ],
      note: 'Published 2026 averages range from about $153k (ZipRecruiter) to about $170k (Built In), depending on methodology.',
      sources: [SRC.gdCloud, SRC.biCloud, SRC.zipCloud],
    },
    interviewQuestions: [
      'You inherit 40 AWS accounts with no guardrails. What do you do in the first 30 days?',
      'Explain a realistic IAM privilege-escalation path in your cloud of choice, and how you would detect it.',
      'How would you stop a public storage bucket from ever reaching production?',
      'Walk me through investigating a leaked access key that was used from an unknown IP.',
      'Tell me about a time you got a platform team to adopt a security control willingly.',
    ],
    redFlags: [
      'Knows the console but not infrastructure-as-code',
      'Security approach is mostly “raise a ticket and wait”',
      'Cannot explain how cloud IAM policies are evaluated',
      'Treats CSPM dashboards as the goal instead of a signal',
    ],
    related: ['appsec-engineer', 'soc-analyst-lead', 'llm-security-engineer'],
    faqs: [
      { q: 'Should we hire for AWS, Azure, or GCP specifically?', a: 'Hire for depth in your primary cloud. Strong engineers transfer concepts between clouds, but the first 90 days go much faster when they already know your provider’s IAM and logging model.' },
      { q: 'Is cloud security the same as DevSecOps?', a: 'They overlap heavily. Cloud security focuses on the infrastructure and its guardrails; DevSecOps focuses on securing the delivery pipeline. Many roles cover both.' },
      { q: 'How senior should our first cloud security hire be?', a: 'Senior. Your first hire sets the guardrails everyone else builds on, so they need to design systems, not just fix findings.' },
    ],
  },
  {
    slug: 'appsec-engineer',
    title: 'Application Security Engineer',
    short: 'AppSec Engineer',
    matches: ['AppSec Engineer', 'Security Architect', 'Security Engineering Manager'],
    practice: 'Cyber Security',
    summary:
      'How to hire an Application Security (AppSec) Engineer — skills, certifications, 2026 salary ranges, interview questions, and red flags.',
    overview: [
      'AppSec engineers make the software you ship harder to break. They threat-model new features, review code, run and tune security testing in CI/CD, and — most importantly — help developers fix issues without slowing delivery to a crawl.',
      'Great AppSec engineers are developers first. They can read and write code in your stack, and they earn credibility with engineering teams by shipping fixes and paved-road libraries, not just filing findings.',
    ],
    responsibilities: [
      'Threat-model new features and architecture changes',
      'Perform secure code reviews and manual testing of high-risk changes',
      'Own SAST, DAST, SCA, and secrets scanning in CI/CD — and tune out the noise',
      'Build secure-by-default libraries and paved-road patterns',
      'Triage bug-bounty and pentest findings with engineering teams',
      'Run developer security training that engineers actually find useful',
    ],
    skills: [
      'Fluency in at least one of your production languages',
      'Web and API vulnerability classes (OWASP Top 10, OWASP API Top 10)',
      'Authentication, authorization, and session design (OAuth, OIDC)',
      'CI/CD security tooling and pipeline integration',
      'Threat modeling methods (STRIDE or similar)',
      'Communicating risk to developers and product managers',
    ],
    certifications: {
      note: 'Hands-on certifications are meaningful here; still, a portfolio of real findings or open-source work outweighs any certificate.',
      list: ['OffSec OSWE', 'GIAC GWAPT / GWEB', 'ISC2 CSSLP', 'Burp Suite Certified Practitioner'],
    },
    salary: {
      levels: [
        { level: 'Typical average', range: '$138k – $168k' },
        { level: '25th – 75th percentile', range: '$141k – $203k' },
        { level: 'Senior / Staff', range: 'Above $200k at product companies' },
      ],
      note: 'Averages vary by source and methodology; product-led tech companies typically pay at the top of these ranges.',
      sources: [SRC.gdAppsec, SRC.zipAppsec, SRC.levelsAppsec],
    },
    interviewQuestions: [
      'Here is a pull request that adds a file-upload endpoint. Review it out loud.',
      'Our SAST tool produces 2,000 findings. What do you do in week one?',
      'Design authorization for a multi-tenant API so one customer can never read another’s data.',
      'Tell me about a vulnerability you found that the developers initially disagreed with.',
      'How do you decide what blocks a release and what becomes a ticket?',
    ],
    redFlags: [
      'Cannot read or write code in your stack',
      'Measures success by number of findings filed',
      'Wants to block every release over medium-severity issues',
      'No examples of fixing anything themselves',
    ],
    related: ['llm-security-engineer', 'cloud-security-engineer', 'ai-red-teamer'],
    faqs: [
      { q: 'When should a startup hire its first AppSec engineer?', a: 'Commonly when engineering grows past roughly 30–50 developers, or earlier if you handle sensitive data or sell to security-conscious enterprises.' },
      { q: 'What ratio of AppSec engineers to developers is typical?', a: 'Ratios vary widely by industry and risk. Mature programs extend coverage with security champions inside engineering teams rather than relying on headcount alone.' },
      { q: 'Should AppSec report to engineering or security?', a: 'Either can work. What matters is that AppSec has a strong working relationship with engineering leadership and a clear escalation path to the security leader.' },
    ],
  },
  {
    slug: 'grc-lead',
    title: 'GRC Lead',
    short: 'GRC Lead',
    matches: ['GRC Director', 'AI Governance Lead', 'AI Policy & Risk'],
    practice: 'Cyber Security',
    summary:
      'How to hire a Governance, Risk & Compliance (GRC) Lead — frameworks, certifications, 2026 salary ranges, interview questions, and red flags.',
    overview: [
      'A GRC lead turns security into something the business, auditors, and customers can trust. They run the risk register, own frameworks like SOC 2 and ISO 27001, answer customer security questionnaires, and increasingly cover AI governance and regulation.',
      'The best GRC leads are engineers at heart. They automate evidence collection, understand the controls they are auditing, and tie compliance work to real risk reduction rather than checkbox exercises.',
    ],
    responsibilities: [
      'Own the security risk register and risk-acceptance process',
      'Lead SOC 2, ISO 27001, PCI DSS, HIPAA, or similar programs and audits',
      'Write and maintain policies people actually follow',
      'Run third-party / vendor risk management',
      'Manage customer security questionnaires and trust-center content',
      'Track emerging requirements, including AI governance (e.g. ISO/IEC 42001, EU AI Act)',
    ],
    skills: [
      'Hands-on experience with SOC 2, ISO 27001, NIST CSF, or similar frameworks',
      'Risk assessment and quantification',
      'Control design that engineers can implement',
      'Compliance automation platforms and evidence automation',
      'Audit management and auditor relationships',
      'Clear writing for executives, auditors, and customers',
    ],
    certifications: {
      note: 'Certifications carry real weight in GRC, especially with auditors and regulated customers.',
      list: ['ISACA CISA / CRISC / CISM', 'ISC2 CISSP or CGRC', 'ISO 27001 Lead Implementer / Lead Auditor', 'ISO/IEC 42001 (AI management systems)'],
    },
    salary: {
      levels: [
        { level: 'Typical average', range: '$145k – $153k' },
        { level: '25th – 75th percentile', range: '$108k – $202k' },
        { level: 'Senior / Director', range: '$209k+ in specialized or regulated roles' },
      ],
      note: 'Regulated industries (financial services, healthcare) and AI-governance specialists typically pay at the upper end.',
      sources: [SRC.gdGrc, SRC.grcGuide],
    },
    interviewQuestions: [
      'We need SOC 2 Type II within nine months. Walk me through your plan.',
      'How do you decide whether a risk is accepted, mitigated, or transferred — and who signs off?',
      'Tell me about a control you redesigned so engineers stopped working around it.',
      'How would you answer a 300-question customer security questionnaire in two days?',
      'What does a sensible AI governance policy look like for a company shipping its first AI feature?',
    ],
    redFlags: [
      'Cannot explain how the controls they audit actually work',
      'Policy documents nobody reads are the main deliverable',
      'Treats compliance as the same thing as security',
      'No experience automating evidence collection',
    ],
    related: ['soc-analyst-lead', 'cloud-security-engineer', 'llm-security-engineer'],
    faqs: [
      { q: 'Does a startup need a full-time GRC lead?', a: 'Usually once you are selling to enterprises that ask for SOC 2 or ISO 27001, or operating in a regulated industry. Before that, compliance tooling plus part of a security engineer’s time is often enough.' },
      { q: 'Is AI governance part of GRC?', a: 'Increasingly, yes. Many organizations are extending their GRC function to cover AI risk, model inventories, and new regulations rather than creating a separate team.' },
      { q: 'GRC lead vs. CISO — what is the difference?', a: 'The GRC lead owns risk, compliance, and assurance. The CISO owns the entire security program, including security engineering and operations, and reports to the executive team or board.' },
    ],
  },
];

export const rolePageBySlug = Object.fromEntries(rolePages.map((r) => [r.slug, r]));

/** "a" or "an" for a role title, by pronunciation ("an AI…", "an LLM…"). */
export const article = (title: string) => (/^([AEIO]|LLM)/.test(title) ? 'an' : 'a');

/** Maps a role name from src/data/roles.ts to its guide page slug, if any. */
export const roleLink = (name: string) => rolePages.find((r) => r.matches.includes(name))?.slug;
