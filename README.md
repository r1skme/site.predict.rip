# PREDICT.RIP — independent CS2 software concept

Distinctive static landing page, rebuilt October 2026 with an editorial/technical design system rather than a generic card-based template.

## Site

- Custom monochrome + acid-green visual identity, original SVG illustrations.
- Responsive layouts for desktop, tablet and mobile.
- Russian/English language switch (RU by default, EN selectable).
- Interactive control panel concept: four categories, switches, numeric sliders and presets.
- Reduced-motion handling, accessible tab controls and navigation.
- SEO and social sharing image, SVG favicon.

> The in-page control panel is **visual demonstration only**. It does not connect to CS2, deliver a client, handle subscriptions or claim anti-cheat protection. Details such as prices and software availability were intentionally not fabricated.

## GitHub Pages deployment

Use **Settings → Pages → Build and deployment → Deploy from a branch**, branch `main`, directory `/(root)`; press **Save**. No build command or custom workflow needed.

Project URL: https://r1skme.github.io/site.predict.rip/

Do not confuse with user site `https://r1skme.github.io/`.

## Local preview

```sh
python -m http.server 8080
```

Open http://localhost:8080.

## Main files

- `index.html` — semantic page layout and content.
- `styles.css` — design system, interactions and breakpoints.
- `main.js` — language switch, product demo, mobile menu and page reveals.
- `assets/` — original SVG marks and illustrations.
- `.nojekyll` — GitHub Pages compatibility.

The site is independent and not affiliated with Valve or Counter-Strike.
