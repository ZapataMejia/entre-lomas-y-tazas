/**
 * Prefijo de base de Astro (`import.meta.env.BASE_URL`).
 * En GitHub Pages el sitio vive en `/entre-lomas-y-tazas/`; en local con ese base igual.
 * Siempre normalizamos barra final para no pegar path (`…tazas` + `fotos` → `…tazasfotos`).
 */
export function withBase(path = ""): string {
  let base = import.meta.env.BASE_URL || "/";
  if (!base.endsWith("/")) base = `${base}/`;

  if (!path || path === "/") return base;
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("mailto:")
  ) {
    return path;
  }
  // Anclas en home: "/#bitacora" o "#bitacora"
  if (path.startsWith("/#")) {
    return base.replace(/\/$/, "") + path;
  }
  if (path.startsWith("#")) {
    return base + path;
  }
  return base + path.replace(/^\//, "");
}
