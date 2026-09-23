# Dylan Womack

Portfolio for Dylan Womack: project write-ups, logos, outbound links, and a privacy policy for every public project.

Catalog Stats, Catastrophe / AI Cat Videos, and Agent Zero are not part of this public site.

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
```

The build is a fully static export. HTML, assets, the web manifest, and the service worker are written to `out/`. Preview that folder with any static file server, for example `npx serve out`.

## Deploy on Vercel (free Hobby tier)

This is a Next.js App Router app with `output: 'export'`. Vercel’s Hobby plan is enough: there is no database and no required environment variable.

Git deploys need a GitHub login connection on the Vercel account. If the deployment fails with `git_info_fail` (“GitHub Login Connection missing”), use Firebase Hosting below instead.

1. Push this repository to GitHub.
2. In the [Vercel dashboard](https://vercel.com/new), import the GitHub repository.
3. Set the **Project Name** to `dylan-portfolio`. The default URL is then `https://dylan-portfolio.vercel.app`.
4. Framework preset: **Next.js**. Leave the build command as `npm run build`. Vercel detects the static export and publishes `out`. Do not point the output setting at a different directory.
5. Deploy.

If `dylan-portfolio` is already taken on the account, the other preferred slug is `dylanwomack`.

Optional: set `NEXT_PUBLIC_SITE_URL` before `npm run build` if the live origin is not `https://dylan-womack-portfolio.web.app`. Canonical URLs, the sitemap, and Open Graph URLs use that value.

## Deploy on Firebase Hosting (free Spark plan)

The Firebase project and Hosting site are both `dylan-womack-portfolio`. The public URL is `https://dylan-womack-portfolio.web.app`. `.firebaserc` selects that project, and `firebase.json` publishes `out` to that Hosting site only.

Next.js static export writes each route as an HTML file (`out/projects/polaris.html`). Firebase `cleanUrls` serves that file at `/projects/polaris`. The service worker is copied to `out/sw.js` and still registers in production.

```bash
npm ci && npm run build
firebase deploy --only hosting --project dylan-womack-portfolio
```

Sign in first with `firebase login` if the CLI is not already authenticated. This command does not deploy any other Firebase project.

## What’s included

- Home page with the project index
- `/projects/[id]` for each public project
- `/privacy/[id]` for each public project, plus `/privacy` for this site
- Web app manifest, icons, theme color, and a service worker so the site can be added to a home screen
- Projects are listed in `data/projects.json`

Latch Lock Sounds also links to the live policy at [latch-lock-dylan.web.app/privacy](https://latch-lock-dylan.web.app/privacy).

## Stack

Next.js App Router, TypeScript, and Tailwind CSS.
