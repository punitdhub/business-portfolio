# Fortium Group — Business Portfolio Website

A premium, hyper-modern marketing site for **Fortium Group**, a direct-hire recruiting agency specializing in Cyber Security and AI Security talent placement.

> **Tagline:** Gems, not just resumes.
> **Founder:** Punit Dwivedi · 15+ years of Cyber Security domain experience.

---

## ⚡ Stack

- **[Astro](https://astro.build/)** — zero-JS-by-default for top SEO/AEO/GEO performance.
- **Pure CSS** with a custom design-token system (no Tailwind dependency).
- **Vanilla JS** for animations (IntersectionObserver, terminal-typing, theme toggle, matrix-glyph counters).
- **GitHub Actions → GitHub Pages** for automated deploys.

---

## 🗂 Project Structure

```
src/
├── components/
│   ├── Logo.astro            # SVG shield + gem lockup, theme-aware
│   ├── Header.astro          # Sticky nav with theme toggle
│   ├── Footer.astro
│   ├── ThemeToggle.astro     # Dark/light, persisted to localStorage
│   ├── HeroOrb.astro         # Slow-rotating cryptographic sphere
│   ├── InquiryForm.astro     # Formspree-ready static form
│   ├── StatCounter.astro     # Matrix-glyph animated counter
│   ├── ScrollReveal.astro    # Global IO-based reveal observer
│   └── SEO.astro             # Per-page meta + JSON-LD
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro           # Homepage
│   ├── about.astro
│   ├── employers.astro
│   ├── candidates.astro
│   ├── contact.astro
│   ├── salary-benchmark.astro # Free salary benchmark request form
│   ├── privacy.astro / terms.astro
│   ├── roles/                # /roles index + /roles/<slug> hiring guides
│   ├── insights/             # /insights index + /insights/<slug> articles
│   └── rss.xml.ts            # RSS feed of Insights
├── content/insights/         # Insights articles (Markdown)
├── data/                     # Editable site data (see below)
└── styles/
    └── global.css            # Design tokens, themes, components
```

## ✏️ Editing Content (no code changes needed)

| What | Where |
| --- | --- |
| Publish an article | Add a `.md` file to `src/content/insights/` (copy an existing one for the front-matter fields). Set `draft: true` to hide it. |
| Add / edit a role hiring guide | `src/data/rolePages.ts` — salary ranges, sources, questions, FAQs |
| Headline stats | `src/data/stats.ts` — only publish numbers you can substantiate |
| Client logos | `src/data/clients.ts` — leave empty until you have permission |
| Testimonials | `src/data/testimonials.ts` — section stays hidden while empty |
| Open roles on /candidates | `src/data/mandates.ts`, then set `features.showMandates = true` in `src/config.ts` |
| Legal page settings | `legal` in `src/config.ts` |

Links inside articles use root-relative paths (`/salary-benchmark/`, `/roles/...`); they resolve correctly on the live custom domain.

---

## 🚀 Local Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build → ./dist
npm run preview  # preview production build
```

---

## 🌐 Deploying to GitHub Pages

A GitHub Actions workflow (`.github/workflows/deploy.yml`) auto-deploys on every push to `main`.

### Setup (already done — recorded for the next person)

1. Repo pushed to `https://github.com/punitdhub/business-portfolio`.
2. In the repo: **Settings → Pages → Build and deployment → Source** = **GitHub Actions**.
3. Push to `main`; the workflow builds and publishes.
4. Site serves at **https://www.fortiumgroup.co**.

`astro.config.mjs` is configured for the custom domain:

```js
site: 'https://www.fortiumgroup.co',
// no `base` — site is served at the root of the domain
```

The repo's **Settings → Pages → Custom domain** stores `www.fortiumgroup.co` and GitHub enforces HTTPS automatically. Because deploys use the `upload-pages-artifact` + `deploy-pages` Actions pair, GitHub remembers the custom domain in Pages settings; **no `public/CNAME` file is needed**. Do not add one — it will cause the deploy to fight with the Pages-settings value.

---

## 🔧 Remaining Items to Personalise

| Item | Where | What to do |
|---|---|---|
| Client logos | `src/data/clients.ts` | Add clients once you have written permission to name them. |
| Testimonials | `src/data/testimonials.ts` | Add real quotes (section stays hidden while empty). |
| Open roles | `src/data/mandates.ts` + `features.showMandates` | Add real anonymized roles, then switch the flag on. |
| Outcome metrics | `src/data/stats.ts` | Add placement metrics only once you can substantiate them. |
| Founder bio | `src/pages/about.astro` | Expand with specific experience, prior companies, certifications. |
| `security.txt` expiry | `public/.well-known/security.txt` | Renew the `Expires` date before it lapses (at least yearly). |

Contact email (`info@fortiumgroup.co`) and the Formspree form ID are already live in `src/config.ts`.

---

## 🌍 Custom Domain — www.fortiumgroup.co

The site is live at **https://www.fortiumgroup.co**. For reference, the DNS and repo settings behind that:

1. **DNS at the registrar** — four A records on the apex pointing at GitHub Pages, plus a CNAME on `www` pointing at `punitdhub.github.io`:
   ```
   Type    Host    Value
   A       @       185.199.108.153
   A       @       185.199.109.153
   A       @       185.199.110.153
   A       @       185.199.111.153
   CNAME   www     punitdhub.github.io
   ```
2. **GitHub repo** — **Settings → Pages → Custom domain** is set to `www.fortiumgroup.co`; **Enforce HTTPS** is on.
3. **Repo code** — `astro.config.mjs` has `site: 'https://www.fortiumgroup.co'` with **no** `base`; `src/config.ts` matches (`site.url = 'https://www.fortiumgroup.co'`, `site.base = ''`); there is no `public/CNAME` file (the Pages setting holds the domain, and committing a CNAME file would conflict with the Actions deploy).

### Moving to a different domain later

1. Update DNS at the new registrar to the same A + CNAME shape above.
2. In **Settings → Pages**, change the Custom domain to the new host.
3. In the repo, change `site` in `astro.config.mjs` and `site.url` in `src/config.ts` to the new origin, then push to `main`.

---

## 📐 Design System Reference

| Token | Dark | Light |
|---|---|---|
| `--bg` | `#0B0F19` | `#FFFFFF` |
| `--accent` | `#00E5FF` | `#0891B2` |
| `--accent-2` | `#00FF66` | `#059669` |
| `--text` | `#E6EAF2` | `#0B1220` |

Type scale uses `clamp()` for fluid responsiveness. All motion respects `prefers-reduced-motion`.

---

## 🤖 SEO / AEO / GEO Architecture

- **SEO**: Semantic HTML5, fluid heading hierarchy, per-page meta + Open Graph, auto-generated `sitemap.xml` and `robots.txt`.
- **AEO**: Definition-style "answer blocks" target Google snippets — e.g. *"What is a Most Placeable Candidate?"* and *"How does Fortium Group vet Cyber Security candidates?"*
- **GEO**: Rich entity coverage (LLM Security, Zero Trust, AI Red Team, CISO placement, etc.) plus JSON-LD `Organization`, `Service`, and `FAQPage` schemas so generative search tools (Perplexity, ChatGPT Search, Gemini) cite Fortium as the authoritative source for Cyber/AI Security recruiting.

---

## 📝 License

© Fortium Group. All rights reserved.
