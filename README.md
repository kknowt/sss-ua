# Благодійний фонд «Стабілізейшен суппорт сервісез»

Modern remake of [sss-ua.org](https://sss-ua.org/). Live demo: https://kknowt.github.io/sss-ua/

## GitHub Pages

The site is a Vite app, so GitHub must serve the **built files**, not the repository source. A blank white page means Pages is publishing the project root (`index.html` that points at `/src/main.tsx`).

Use one of these settings:

1. **Folder `/docs`** on this branch (fastest with the current “Deploy from a branch” setup)
2. **Source: GitHub Actions** (uses `.github/workflows/deploy-pages.yml`)
3. **Branch `gh-pages`**, folder `/ (root)` (the workflow also publishes that branch)

Then open https://kknowt.github.io/sss-ua/

## Run locally

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

Ukrainian is the default language. Use **EN / UA** in the header to switch.
