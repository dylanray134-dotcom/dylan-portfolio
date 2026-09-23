# Dylan Womack

Portfolio for Dylan Womack: project write-ups, logos, outbound links, and a privacy policy for every public project.

Catalog Stats is intentionally omitted. It is an owner-only dashboard, not a public product.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm install
npm run build
npm start
```

## Deploy on Vercel (free Hobby tier)

This is a Next.js App Router app. Vercel’s Hobby plan is enough: there is no database and no required environment variable.

1. Push this repository to GitHub.
2. In the [Vercel dashboard](https://vercel.com/new), import the GitHub repository.
3. Set the **Project Name** to `dylan-portfolio`. The default URL is then `https://dylan-portfolio.vercel.app`.
4. Framework preset: **Next.js**. Leave the build command as `npm run build` and the output as the Next.js default. Do not set a static `out` directory.
5. Deploy.

If `dylan-portfolio` is already taken on the account, the other preferred slugs are `dylanwomack` and `dylan-womack`.

Optional: set `NEXT_PUBLIC_SITE_URL` to the live origin, for example `https://dylan-portfolio.vercel.app`. Canonical URLs, the sitemap, and Open Graph URLs use that value. When it is unset, they default to `https://dylan-portfolio.vercel.app`.

## What’s included

- Home page with the project index
- `/projects/[id]` for each public project
- `/privacy/[id]` for each public project, plus `/privacy` for this site
- Web app manifest, icons, theme color, and a service worker so the site can be added to a home screen
- Projects are listed in `data/projects.json`

Latch Lock Sounds also links to the live policy at [latch-lock-dylan.web.app/privacy.html](https://latch-lock-dylan.web.app/privacy.html).

## Stack

Next.js App Router, TypeScript, and Tailwind CSS.
