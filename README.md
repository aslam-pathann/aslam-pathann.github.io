# Aslam Pathan — Cybersecurity Portfolio

React + Vite + TypeScript + Tailwind. Source in `src/`, content/copy in
`src/data/content.ts`, photo at `public/assets/profile.png`.

## Local dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
```

## Deploy to GitHub Pages

This repo includes `.github/workflows/deploy.yml`, which builds and deploys
automatically on every push to `main`.

**Required one-time setting:** in the repo, go to **Settings → Pages →
Build and deployment → Source**, and set it to **GitHub Actions** (not
"Deploy from a branch"). If Source is left on "Deploy from a branch", GitHub
serves the raw, unbuilt project instead of the compiled site — that's what
causes a blank page with a `src/main.tsx` module error in the console.

`vite.config.ts` uses `base: "/"`, matching a root user site
(`https://<username>.github.io/`).
