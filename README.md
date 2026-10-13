# Predict.rip — CS2 landing page

A fast, responsive, dependency-free landing page for **Predict.rip**, featuring custom illustrated visuals and interactive *concept* previews. It is not a functional CS2 client or a checkout system.

## Preview locally

Open index.html directly in a browser, or run a local server:

    python -m http.server 8080

Then visit http://localhost:8080.

## Deployment

The website is ready for GitHub Pages. A workflow at .github/workflows/pages.yml deploys the repository on pushes to main, subject to the Pages and workflow permissions being enabled.

If automatic enablement does not work, go to **Settings → Pages → Build and deployment → Source → GitHub Actions** and run the workflow again from the Actions tab.

Default project URL: https://r1skme.github.io/site.predict.rip/

A custom domain such as predict.rip also requires DNS configuration and GitHub Pages custom-domain settings.

## Files

- index.html: content, layout, SEO and navigation.
- styles.css: visual identity, responsive layout and motion.
- main.js: mobile navigation, interactive mock settings, showcase tabs and scroll effects.
- assets/: original SVG illustrations.

## Important

This is a *static marketing site*. Settings controls are interactive previews only and do not interact with CS2 or a server. No payment, login or download functionality is implied. Prices and software availability are still to be announced. No anti-cheat immunity or performance guarantees are claimed.

Independent project; not affiliated with Valve or Counter-Strike.
