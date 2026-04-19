# LearnLitecoin Site Build

A Vite + React + Tailwind starter build for LearnLitecoin.

## What is included

- Homepage with approved sections:
  - Hero
  - Why Litecoin
  - Get Started
  - Merchant Solutions
  - Learn / Guides
  - Maps preview
  - Tools preview
- Separate pages for:
  - Tools
  - Litecoin ATM Map
  - Merchants Near You
  - Spend Litecoin
  - Guides
- Placeholder links for:
  - Nexus affiliate link
  - Cake affiliate link
  - BitPay affiliate link
  - merchant contact and map data sources

## Important notes

This build uses Litecoin-oriented visuals only through a custom `Ł` icon treatment and avoids mixed crypto branding.

Several places still use placeholder links such as:

- `#nexus-affiliate-link`
- `#cake-affiliate-link`
- `#bitpay-affiliate-link`
- `#atm-data-source-link`
- `#litecoin-spend-link`
- `#bitpay-directory-link`
- `#contact`
- `#video-link`

Replace those with your real URLs.

## Run locally

1. Open a terminal in this project folder.
2. Install dependencies:

```bash
npm install
```

3. Start the dev server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## Suggested next edits

- Replace placeholder affiliate links.
- Add your real contact form.
- Add your real logo asset if desired.
- Add live map integrations.
- Expand the guides into full tutorial pages.
- Add real wallet screenshots that show Litecoin only.

## Deploy options

This project can be pushed to GitHub and deployed with services such as Vercel, Netlify, or another static host.
