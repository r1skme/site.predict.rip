# Predict.rip — CS2 landing page

A responsive, dependency-free landing page for **Predict.rip** with custom illustrated visuals and interactive *concept* previews. This is a static marketing website, not a functional CS2 client, checkout, or account system.

## Publish on GitHub Pages (one-time repository setting)

This site has a ready-to-publish `index.html` in the root of the `main` branch. **No custom GitHub Actions workflow or build step is required.**

1. While signed in as the repository owner, open **[Settings → Pages](https://github.com/r1skme/site.predict.rip/settings/pages)**.
2. In **Build and deployment → Source**, select **Deploy from a branch**.
3. In **Branch**, select `main` and `/(root)`, then click **Save**.
4. Check the repository's **Actions** tab for the automatic **pages build and deployment** job. When it succeeds, visit:
   **https://r1skme.github.io/site.predict.rip/**

> **Important:** https://r1skme.github.io/ is a *different* user-level Pages site. It can show 404 even when this project's site works.

The previous custom workflow attempted to create the Pages site with the restricted `GITHUB_TOKEN` and failed with `Resource not accessible by integration`. It was removed so that GitHub's built-in branch publisher can handle deployment. An administrator must enable Pages in the repository settings once; the GitHub App connection cannot change that setting.

### If the project URL still shows 404

- Verify **Settings → Pages** shows `Deploy from a branch`, `main`, `/(root)`.
- Verify a successful **pages build and deployment** run in **Actions**.
- Check the *project* URL, which includes `/site.predict.rip/` (not the username root URL).
- Ensure GitHub Pages has not been disabled and that the repository is still public.

## Preview locally

Open `index.html` directly, or from the repository directory run:

```bash
python -m http.server 8080
```

Open http://localhost:8080.

## Files

- `index.html` — layout, sections, SEO, navigation.
- `styles.css` — styling, responsive design and animations.
- `main.js` — mobile navigation, interactive mock controls, tabs and scroll effects.
- `assets/` — original SVG artwork.
- `.nojekyll` — publish the static files unchanged.

## Custom domain

The GitHub Pages project address is not the same as a custom domain. Connecting `predict.rip` requires adding a custom domain under **Settings → Pages** and configuring DNS at your registrar. Do not add a CNAME file until the domain is actually being configured.

## Notes

The site uses concept previews; the controls do not interact with CS2 or a backend. Prices, release dates, downloads and payment processing are not implemented. No anti-cheat immunity or performance guarantees are claimed.

Independent project, not affiliated with Valve or Counter-Strike.
