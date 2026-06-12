# faisalmerfin.dev — homepage

Personal homepage for [faisalmerfin.dev](https://faisalmerfin.dev): who I am, what I've built,
and links to everything living on the subdomains.

Plain HTML + CSS + a little vanilla JS. No framework, no build step, nothing to install.

## Structure

```
index.html                    the whole page
styles.css                    dark theme default, light theme via toggle
script.js                     theme toggle, scroll reveal, footer year
favicon.svg                   terminal-prompt favicon
Faisal-Lumintang-Resume.pdf   served by the "Download résumé" button
```

## Linked projects

| Project | URL |
| --- | --- |
| Health Dashboard | https://health.faisalmerfin.dev |
| OPTCG Tracker | https://optcg.faisalmerfin.dev |
| After School — Visual Novel | https://web-based-vn.faisalmerfin.dev |

## Run locally

Open `index.html` in a browser, or:

```sh
npx serve .
```

## Deploy (Vercel)

The other subdomains already run on Vercel, so:

1. [vercel.com/new](https://vercel.com/new) → import `reapera/homepage`
2. Framework preset: **Other** (no build command, output dir = repo root)
3. Project → Settings → Domains → add `faisalmerfin.dev` (and optionally `www.faisalmerfin.dev`)

Every push to `main` redeploys automatically.

## Updating the résumé

Replace `Faisal-Lumintang-Resume.pdf` with a new export (keep the filename) and push.
