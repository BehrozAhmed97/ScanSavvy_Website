# ScanSavvy — Digital Menu Website

A simple, no-auth B2B landing page / business website for ScanSavvy — a QR-based digital menu platform for food businesses in Pakistan.

## Pages

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Hero, problem/solution, how it works, platform, verticals, testimonials, CTA |
| Solutions | `/solutions/` | All 6 verticals overview |
| Restaurants | `/solutions/restaurants/` | Vertical-specific landing |
| Cafes | `/solutions/cafes/` | Vertical-specific landing |
| Food Trucks | `/solutions/food-trucks/` | Vertical-specific landing |
| Bakeries | `/solutions/bakeries/` | Vertical-specific landing |
| Cafeterias | `/solutions/cafeterias/` | Vertical-specific landing |
| Desserts | `/solutions/desserts/` | Vertical-specific landing |
| Platform | `/platform/` | Tech capabilities for buyers |
| Contact | `/contact/` | Lead form + direct contact |
| Privacy | `/privacy/` | Privacy policy |

## Tech Stack

- **Next.js 14** (App Router, static export)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (icons)
- **Formspree** (contact form)
- **Vercel** / **Cloudflare Pages** (hosting)

## Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Lint
npm run lint

# Format
npm run format
```

Open [http://localhost:3000](http://localhost:3000).

## Production Deploy

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deploys.

### Cloudflare Pages

```bash
npm run build
# Upload `out/` folder to Cloudflare Pages
```

## Configuration

### Contact Form (Formspree)

1. Create a free form at [formspree.io](https://formspree.io)
2. Replace `https://formspree.io/f/your-form-id` in `src/components/sections/ContactForm.tsx`
3. Update the `_next` redirect URL if needed

### Calendly Integration

Replace `https://calendly.com/scansavvy/discovery-call` with your Calendly link in:
- `src/lib/utils.ts` → `getCalendlyUrl()`
- `src/components/layout/Header.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/CTA.tsx`

### WhatsApp Number

Replace `923000000000` with your actual WhatsApp Business number in:
- `src/lib/seo.ts`
- `src/components/layout/Footer.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/CTA.tsx`
- `src/components/sections/ContactForm.tsx`
- `src/app/contact/page.tsx`

### Domain & SEO

1. Buy `scansavvy.pk` and `scansavvy.com`
2. Connect to Vercel
3. Submit `sitemap.xml` to Google Search Console
4. Update `siteConfig.url` in `src/lib/seo.ts`

## Design System

Colors are defined in `tailwind.config.ts`:

| Role | Hex | Usage |
|------|-----|-------|
| Brand Teal | `#0D9488` | Primary buttons, links, logo mark |
| Brand Coral | `#F97316` | Accents, CTAs, highlights |
| Dark | `#1F2937` | Headings, body text |

Fonts:
- **Headings**: Plus Jakarta Sans
- **Body**: Inter

## Logo

The logo SVG is inline in components. To use a professional logo file:

1. Save your logo as `public/logo.svg`
2. Replace inline `<LogoMark />` components with ` src="/logo.svg" alt="ScanSavvy" />`
3. Update favicon: replace `public/icon.svg` with your favicon

## No-Pricing Model

This site follows the competitor model (PayOn, Indolj) — no public pricing. All CTAs funnel to `/contact` for discovery calls. Pricing is discussed on the call based on locations, features, and support level.

## License

MIT