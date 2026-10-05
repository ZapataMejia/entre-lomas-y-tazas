/**
 * Rutas con mapa (estilo Wikiloc): destapadas, carretera, sendero.
 *
 * Cómo sumar una salida:
 * 1. Exportá el GPX desde Wikiloc / Strava / Relive / el GPS del celular.
 * 2. Guardalo en `public/rutas/<slug>.gpx`.
 * 3. Fotos en `public/fotos/rutas/<slug>/…` (opcional: lat/lng por foto para pins).
 * 4. Agregá una entrada en `rutasMapa` abajo.
 */

export type TerrenoRuta = "destapada" | "carretera" | "mixto" | "sendero" | "moto";

export type FotoEnRuta = {
  src: string;
  alt?: string;
  /** Si hay coords, sale pin en el mapa */
  lat?: number;
  lng?: number;
};

export type RutaMapa = {
  slug: string;
  titulo: string;
  fecha?: string;
  terreno?: TerrenoRuta;
  extracto?: string;
  nota?: string;
  /** Ruta bajo public, ej. `/rutas/mi-salida.gpx` */
  gpx?: string;
  /** Si la subieron a Wikiloc, el link queda acá */
  wikilocUrl?: string;
  distanciaKm?: number;
  desnivelM?: number;
  fotos: FotoEnRuta[];
  /** Centro del mapa si todavía no hay GPX */
  centro?: { lat: number; lng: number; zoom?: number };
  /** Enlace opcional a una visita de bitácora (slug de municipio / entrada) */
  visitaSlug?: string;
};

/** Centro por defecto: Dosquebradas / corredor Risaralda */
export const MAPA_CENTRO_DEFAULT = { lat: 4.8394, lng: -75.6724, zoom: 11 };

/**
 * Lista viva de rutas. Empezá vacía a propósito:
 * cuando pases el GPX de la destapada de ayer (y las fotos), la sumamos acá.
 */
export const rutasMapa: RutaMapa[] = [
  /**
   * Plantilla visual (coords inventadas cerca de Dosquebradas).
   * Cuando tengas el GPX real de ayer: copiá el archivo a public/rutas/,
   * cambiá gpx/titulo/fecha/extracto y borra esta entrada de plantilla.
   */
  {
    slug: "ejemplo-plantilla-dosquebradas",
    titulo: "Plantilla · destapada (ejemplo)",
    fecha: "—",
    terreno: "destapada",
    extracto:
      "Trazo de prueba para ver el mapa. La destapada de ayer la subimos cuando pases el GPX y las fotos.",
    nota: "Borrar esta plantilla en cuanto haya una ruta real.",
    gpx: "/rutas/ejemplo-plantilla-dosquebradas.gpx",
    distanciaKm: 12,
    desnivelM: 250,
    fotos: [],
  },
  // Plantilla para copiar:
  // {
  //   slug: "destapada-2026-10-04",
  //   titulo: "Destapada del sábado",
  //   fecha: "4 oct 2026",
  //   terreno: "destapada",
  //   extracto: "Recorrido largo por tierra, muchas fotos, muy bueno.",
  //   gpx: "/rutas/destapada-2026-10-04.gpx",
  //   wikilocUrl: "https://www.wikiloc.com/wikiloc/view.do?id=…",
  //   distanciaKm: 42,
  //   fotos: [
  //     { src: "/fotos/rutas/destapada-2026-10-04/01.jpeg", lat: 4.85, lng: -75.70 },
  //   ],
  // },
];
