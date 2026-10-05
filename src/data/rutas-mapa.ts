/**
 * Rutas con mapa (estilo Wikiloc): destapadas, carretera, sendero.
 *
 * Base en casa: barrio La Sultana, Dosquebradas, Risaralda.
 *
 * Cómo sumar una salida:
 * 1. Exportá GPX (Wikiloc / Strava) o pasá URL de Google Maps.
 * 2. Archivo en `public/rutas/<slug>.gpx`.
 * 3. Fotos en `public/fotos/rutas/<slug>/…` (opcional lat/lng).
 * 4. Entrada en `rutasMapa` abajo.
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
  /** Link de Google Maps (compartir ruta / lugar) */
  googleMapsUrl?: string;
  distanciaKm?: number;
  desnivelM?: number;
  fotos: FotoEnRuta[];
  /** Centro del mapa si todavía no hay GPX */
  centro?: { lat: number; lng: number; zoom?: number };
  /** Enlace opcional a una visita de bitácora (slug de municipio / entrada) */
  visitaSlug?: string;
};

/** Casa: barrio La Sultana, Dosquebradas, Risaralda */
export const CASA = {
  barrio: "La Sultana",
  municipio: "Dosquebradas",
  departamento: "Risaralda",
  /** Aprox. barrio (parroquia / zona La Sultana) */
  lat: 4.8195984,
  lng: -75.6767607,
  label: "Casa · La Sultana, Dosquebradas",
} as const;

/** Centro por defecto del mapa = alrededor de casa */
export const MAPA_CENTRO_DEFAULT = { lat: CASA.lat, lng: CASA.lng, zoom: 11 };

/**
 * Lista viva de rutas. La primera es la de Viterbo (Hacienda El Jordán)
 * desde casa en La Sultana.
 */
export const rutasMapa: RutaMapa[] = [
  {
    slug: "dosquebradas-viterbo-hacienda-el-jordan",
    titulo: "La Sultana → Viterbo (Hacienda El Jordán)",
    fecha: "Mayo 2026",
    terreno: "carretera",
    extracto:
      "Desde casa en La Sultana (Dosquebradas) hasta Viterbo, Caldas — Hacienda El Jordán. El día de la bitácora: comida, parque, hacienda y atardecer.",
    nota:
      "Punto de partida: barrio La Sultana, Dosquebradas. Destino: Hacienda El Jordán y el casco de Viterbo. El trazo sigue la ruta de Google Maps (carretera ~57 km). Si un día van por destapada, se suma otro GPX.",
    gpx: "/rutas/dosquebradas-la-sultana-viterbo-hacienda-el-jordan.gpx",
    googleMapsUrl:
      "https://www.google.com/maps/place/Hacienda+El+Jord%C3%A1n/@4.9300371,-75.9168729,12z/data=!4m28!1m21!4m20!1m4!2m2!1d-75.6765623!2d4.8178594!4e1!1m6!1m2!1s0x8e47850039f4ef93:0xfee598a4500871ef!2sHacienda+El+Jord%C3%A1n,+Cl.+12+%2311-2+a+11-110,+Viterbo,+Caldas!2m2!1d-75.8715718!2d5.0576528!1m6!1m2!1s0x8e478537250ec0cf:0x15a105e281e5bed2!2sViterbo,+Caldas!2m2!1d-75.872356!2d5.0605779!3e0!3m5!1s0x8e47850039f4ef93:0xfee598a4500871ef!8m2!3d5.057656!4d-75.8715827!16s%2Fg%2F11x7wzbsxt",
    distanciaKm: 56.6,
    visitaSlug: "viterbo",
    fotos: [
      {
        src: "/fotos/viterbo-2026-05/viterbo-01.jpeg",
        alt: "Salida · La Sultana, Dosquebradas",
        lat: CASA.lat,
        lng: CASA.lng,
      },
      {
        src: "/fotos/viterbo-2026-05/viterbo-08.jpeg",
        alt: "Hacienda El Jordán, Viterbo",
        lat: 5.057656,
        lng: -75.8715827,
      },
      {
        src: "/fotos/viterbo-2026-05/viterbo-12.jpeg",
        alt: "Viterbo, Caldas",
        lat: 5.0605779,
        lng: -75.872356,
      },
    ],
  },
];
