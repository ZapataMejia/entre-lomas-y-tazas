# Entre lomas y tazas

Sitio estático (Astro) con diario del Paisaje Cultural Cafetero: presentación, índice al estilo de la guía oficial, municipios del núcleo UNESCO y bitácora.

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
