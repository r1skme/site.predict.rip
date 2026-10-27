# Predict.rip

The public product and community hub for Predict (Counter-Strike 2).

A lightweight, dependency-free website, built for GitHub Pages and static hosting. The visual direction uses the typography, dark navy surfaces, thin glass borders and soft lighting from [R1SK's portfolio](https://github.com/r1skme/site.readme), with the pink brand accent from the supplied Predict.rip wordmark.

## Sections

- **Home:** Product introduction, interface artwork and ecosystem navigation.
- **Product:** Ragebot, Anti-Aim, Movement, Visuals, Misc and Configs modules.
- **Updates:** The supplied upcoming 45-item changelog across five areas, plus a roadmap. Entries are upcoming work, not falsely presented as shipped downloads.
- **Community:** A public, read-only forum with category filters, local search and five substantial editorial discussion pages based on the project update. Visitors can read without signing in.
- **Plans:** Selectable 1-, 3- and 12-month durations. No invented prices or payment collection.
- **Downloads:** Release center with an unavailable button until an official loader is attached.
- **Help:** FAQ and project information.

All navigation, filters, plan selection, locale switching (English/Russian), mobile menu and accordions work entirely in the browser.

## Run locally

No build step or package installation is needed.

Serve the repository root using any static HTTP server:

~~~sh
python3 -m http.server 8080
~~~

Then open http://localhost:8080.

## Publish

To host on GitHub Pages, configure **Settings → Pages → Build and deployment → Deploy from a branch → main / (root)**. The repository includes a .nojekyll marker. For a custom domain, configure the domain only after its DNS and intended hostname are confirmed.

The site uses hash routes such as #/community so internal pages work on static hosting without server rewrites.

## Content

- index.html — semantic page structure and visible copy.
- styles.css — responsive design system, interface artwork and components.
- app.js — routing, RU/EN localization, forum search/filtering, topic content, plan selection and mobile interactions.
- predict-logo.png — original transparent logo supplied by the project owner.
- favicon.svg — compact brand mark.
- 404.html — static-hosting fallback for direct clean-path requests.

### Future backend work

Authentication (including GitHub OAuth), accounts, real forum posting and replies, moderation, subscription pricing/checkout and protected loader delivery are **not implemented** in this phase. Those features need a server, data storage, access controls and appropriate payment/download workflows.

Do not upload paid loaders to this public repository or rely on client-side hiding for access control. Subscription entitlements and download authorization must be enforced server-side.
