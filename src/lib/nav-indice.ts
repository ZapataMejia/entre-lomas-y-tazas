import type { EntradaIndice } from "../data/rutas";
import { withBase } from "./base";

/** Enlaza la intro al ancla en portada; cada capítulo a su página propia. */
export function hrefEntradaIndice(e: EntradaIndice): string {
  if (e.tipo === "intro") return withBase(`/#${e.anchor}`);
  if (e.num != null) return withBase(`/capitulo/${e.num}`);
  return withBase("/");
}

export function navIndiceDesdeLibro(indiceLibro: EntradaIndice[]) {
  return indiceLibro.map((e) => ({
    href: hrefEntradaIndice(e),
    label: e.tipo === "intro" ? "Intro" : `Cap. ${e.num}`,
  }));
}
