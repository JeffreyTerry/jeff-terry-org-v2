# JeffTerry.org

My personal site, built with [Astro](https://astro.build) and hosted on GitHub Pages.

## Development

```sh
npm install
npm run dev      # http://localhost:4321
npm test
npm run check    # type-check
npm run build    # outputs to dist/
npm run preview  # serves dist/
```

## Deployment

Pushing to `main` builds the site and deploys it to GitHub Pages
(`.github/workflows/deploy.yml`). The workflow also runs weekly so the
experience stats, which are computed at build time, stay current.
