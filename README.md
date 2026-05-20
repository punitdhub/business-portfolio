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
│   ├── TerminalType.astro    # Terminal-typing effect (optional)
│   └── SEO.astro             # Per-page meta + JSON-LD
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro           # Homepage
│   ├── about.astro
│   ├── employers.astro
│   ├── candidates.astro
│   └── contact.astro
└── styles/
    └── global.css            # Design tokens, themes, components
```

---

## 🚀 Local Development

```bash
npm install
npm run dev      # http://localhost:4321/business-portfolio
npm run build    # production build → ./dist
npm run preview  # preview production build
```

---

## 🌐 Deploying to GitHub Pages

A GitHub Actions workflow (`.github/workflows/deploy.yml`) auto-deploys on every push to `main`.

### One-time setup

1. Push this repo to `https://github.com/punitdhub/business-portfolio`.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Push to `main` (or merge the feature branch). The workflow builds and publishes.
5. Site goes live at **https://punitdhub.github.io/business-portfolio/**.

The `astro.config.mjs` is pre-configured with:

```js
site: 'https://punitdhub.github.io',
base: '/business-portfolio',
```

If you rename the repo, update `base` to match.

---

## 🔧 Things to Replace Before Launch

These are clearly-marked placeholders. Use find-and-replace to update once you have real assets.

| Placeholder | Where | What to do |
|---|---|---|
| `PLACEHOLDER_FORMSPREE_ID` | `src/components/InquiryForm.astro` | Sign up at [formspree.io](https://formspree.io), get a form ID, paste it in. Free tier covers 50 submissions/month. |
| `hello@fortiumgroup.com` | Footer, Contact page | Replace with real inbox. |
| LinkedIn `#` links | Footer, About, Contact | Replace with real LinkedIn URLs. |
| `CLIENT.01` … `CLIENT.05` | `src/pages/index.astro` logo rail | Replace with real client logos (SVGs in `/public/clients/`). |
| Stat band figures (1200+, 21d, 94%, 98%) | Homepage, About, Employers | Replace with audited internal metrics. |
| Mandates on Candidates page | `src/pages/candidates.astro` | Refresh with real anonymized open mandates. |
| Founder bio | `src/pages/about.astro` | Expand Punit's bio with specific experience, prior companies, certifications. |

---

## 🌍 Connecting a Custom Domain (Future)

When you're ready to put the site behind a domain like `fortiumgroup.com`:

1. **Buy the domain** (Namecheap, Cloudflare Registrar, Google Domains, etc.).
2. **In your DNS provider**, create these records pointing to GitHub Pages:
   ```
   Type    Host    Value
   A       @       185.199.108.153
   A       @       185.199.109.153
   A       @       185.199.110.153
   A       @       185.199.111.153
   CNAME   www     punitdhub.github.io
   ```
3. **Add a `CNAME` file** to `/public/` containing just your domain:
   ```bash
   echo "fortiumgroup.com" > public/CNAME
   git commit -am "add CNAME for custom domain"
   git push
   ```
4. **In GitHub repo → Settings → Pages**, enter `fortiumgroup.com` as Custom Domain, and check **Enforce HTTPS** once the certificate is issued (5–10 minutes).
5. **Update `astro.config.mjs`**:
   ```js
   site: 'https://fortiumgroup.com',
   base: '/',
   ```
6. Re-deploy. Done.

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
