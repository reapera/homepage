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
og.png                        social preview card (1200×630) for link shares
Faisal-Lumintang-Resume.pdf   served by the "Download résumé" button

if-i-fits-i-sits/             the puzzle game, playable in the browser
  index.html                  Godot 4.6 web export, single-threaded
  index.wasm                  the engine (~37 MB raw, ~9.5 MB gzipped over the wire)
  privacypolicy.html          privacy policy, required for the Google Play listing
```

## Linked projects

| Project | URL |
| --- | --- |
| Health Dashboard | https://health.faisalmerfin.dev |
| OPTCG Tracker | https://optcg.faisalmerfin.dev |
| After School — Visual Novel | https://web-based-vn.faisalmerfin.dev |
| If I Fits, I Sits — puzzle game | https://faisalmerfin.dev/if-i-fits-i-sits/ |

## If I Fits, I Sits

A sliding puzzle where a cat slides until something blocks her and has to come to
**rest** inside a cardboard box. Sliding over the box does not count.

The web export is committed directly rather than built here, because this repo has no
build step and the game lives in its own repo. To update it, re-export from the game
project and replace the folder contents:

```sh
godot --headless --path godot --export-release "Web" "../build/web/index.html"
```

The export preset uses `variant/thread_support=false`. The threaded build needs COOP
and COEP headers that would have to be configured per-host; the single-threaded build
sidesteps that entirely and runs anywhere static files are served.

`privacypolicy.html` is linked from the Google Play listing and must stay reachable at
a stable URL for as long as the app is published — Play rejects listings whose privacy
policy URL 404s. Do not move or rename it without updating the Play Console.

## Run locally

Open `index.html` in a browser, or:

```sh
npx serve .
```

The game needs to be served over HTTP rather than opened from `file://` — the
WebAssembly module will not load otherwise. `npx serve .` covers both.

## Deploy (Vercel)

The other subdomains already run on Vercel, so:

1. [vercel.com/new](https://vercel.com/new) → import `reapera/homepage`
2. Framework preset: **Other** (no build command, output dir = repo root)
3. Project → Settings → Domains → add `faisalmerfin.dev` (and optionally `www.faisalmerfin.dev`)

Every push to `main` redeploys automatically.

## Updating the résumé

Replace `Faisal-Lumintang-Resume.pdf` with a new export (keep the filename) and push.
