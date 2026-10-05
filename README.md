# Mil rutas un destino

Sitio estático (Astro): diario de viajes en pareja — bitácora, lugares, rutas en mapa y fotos.

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

La salida queda en `dist/`.

## Netlify

1. Conectá el repositorio de GitHub `ZapataMejia/entre-lomas-y-tazas` (o el nombre que elijas).
2. Netlify detecta `netlify.toml`: comando `npm run build`, carpeta `dist`.
3. **Base directory**: dejá vacío si el repo es solo este proyecto.

Contenido editable en `src/data/rutas.ts` (textos, visitas, fotos bajo `public/`).

## Subir a GitHub (`ZapataMejia`)

1. Iniciá sesión en GitHub como **ZapataMejia** (o con permisos sobre esa cuenta).
2. Creá un repositorio **vacío** llamado `entre-lomas-y-tazas` (sin README ni `.gitignore`).
3. En esta carpeta:

```bash
git remote -v
git push -u origin main
```

Si preferís la CLI y tenés `gh` con la cuenta correcta:

```bash
gh auth login -h github.com
gh repo create ZapataMejia/entre-lomas-y-tazas --public --source=. --remote=origin --push
```

Si el remoto no coincide, configurá la URL:

```bash
git remote set-url origin https://github.com/ZapataMejia/entre-lomas-y-tazas.git
```
