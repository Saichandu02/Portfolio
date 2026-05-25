# Sai Chandu AI/ML Portfolio

Static Vite + React portfolio configured for GitHub Pages deployment.

## Local setup

```powershell
npm install
npm run dev
```

## Build locally

```powershell
npm run build
```

## Deploy to GitHub Pages

This project is configured for this GitHub Pages URL:

```text
https://Saichandu02.github.io/Portfolio/
```

Push to `main` and GitHub Actions will deploy the `dist` folder automatically.

```powershell
git add .
git commit -m "Deploy portfolio"
git push
```

Then set GitHub Pages:

```text
Repository → Settings → Pages → Source: GitHub Actions
```

## Important GitHub Pages base path

For the repo `Saichandu02/Portfolio`, the Vite base path must be:

```text
/Portfolio/
```

This is already set in `.github/workflows/deploy.yml`:

```yaml
env:
  VITE_BASE_PATH: /Portfolio/
```

If you use a custom domain, change it to:

```yaml
env:
  VITE_BASE_PATH: /
```

## If push is rejected

If GitHub says `fetch first`, and this repo only contains your portfolio, use:

```powershell
git push --force-with-lease origin main
```

## If build fails with conflict markers

Search and remove merge markers:

```powershell
Get-ChildItem -Recurse -File | Select-String "<<<<<<<|=======|>>>>>>>"
```
