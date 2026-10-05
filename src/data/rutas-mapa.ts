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
 * Lista viva de rutas (más reciente primero).
 */
export const rutasMapa: RutaMapa[] = [
  {
    slug: "casa-palestina-caldas",
    titulo: "Casa → Palestina",
    fecha: "Varias veces",
    terreno: "carretera",
    extracto: "El camino al segundo hogar: familia, cumpleaños, bodas y mucho cariño.",
    nota: "Desde el corazón del hogar hasta Palestina, Caldas (~32 km).",
    gpx: "/rutas/casa-palestina-caldas.gpx",
    googleMapsUrl: "https://www.google.com/maps/dir/4.8195984,-75.6767607/Palestina,+Caldas/@4.92,-75.65,11z",
    distanciaKm: 31.8,
    visitaSlug: "palestina",
    fotos: [
      {
        src: "/fotos/palestina/palestina-01.jpeg",
        alt: "Palestina 1",
        lat: CASA.lat,
        lng: CASA.lng,
      },
      ...Array.from({ length: 23 }, (_, i) => {
        const n = i + 2;
        const nn = String(n).padStart(2, "0");
        const pin =
          n === 12
            ? { lat: 5.0203683, lng: -75.6223394 }
            : {};
        return {
          src: `/fotos/palestina/palestina-${nn}.jpeg`,
          alt: `Palestina ${n}`,
          ...pin,
        };
      }),
    ],
  },
  {
    slug: "2026-10-04-altagracia-arabia-ulloa-filandia",
    titulo: "Altagracia · Arabia · Ulloa · Filandia",
    fecha: "4 oct 2026",
    terreno: "mixto",
    extracto:
      "Mirador en Altagracia, almuerzo en Arabia, río Barbas, destapada a La India, Ulloa (primera vez) y café en Filandia.",
    nota: "Ida y vuelta desde casa. Tramo por trocha entre Arabia / La India. Fotos pendientes de subir.",
    gpx: "/rutas/2026-10-04-altagracia-arabia-ulloa-filandia.gpx",
    googleMapsUrl:
      "https://www.google.com/maps/dir/4.81784,-75.676521/Altagracia,+Pereira,+Risaralda/Arabia,+Pereira,+Risaralda/La+India,+Filandia,+Quindio/Ulloa,+Valle+del+Cauca/Filandia,+Quindio/La+Sultana,+Comuna+Oriente,+Dosquebradas,+Risaralda/@4.749514,-75.7190573,12.69z/data=!4m40!4m39!1m1!4e1!1m5!1m1!1s0x8e388801fc87e2cb:0xeb5ed06c72a01af8!2m2!1d-75.7124114!2d4.7382311!1m5!1m1!1s0x8e38629e6a73f0e9:0x9200ad97e4b47432!2m2!1d-75.716752!2d4.71883!1m5!1m1!1s0x8e38882e9205ccfb:0x82d1a2088f726c41!2m2!1d-75.7077077!2d4.706532!1m5!1m1!1s0x8e3862601e677bd3:0xb7e0ba14526df454!2m2!1d-75.7377371!2d4.7030365!1m5!1m1!1s0x8e388971c140a4ef:0xd79f82f4e2ae9498!2m2!1d-75.6577028!2d4.6746953!1m5!1m1!1s0x8e38872c4541b417:0x8bb6c68d068da7c8!2m2!1d-75.6757184!2d4.8192126!3e0",
    distanciaKm: 86.9,
    visitaSlug: "2026-10-04-ruta-sur",
    fotos: [
      { src: "", alt: "Salida", lat: 4.81784, lng: -75.676521 },
      { src: "", alt: "Altagracia — mirador", lat: 4.7382311, lng: -75.7124114 },
      { src: "", alt: "Arabia — almuerzo", lat: 4.71883, lng: -75.716752 },
      { src: "", alt: "La India (destapada)", lat: 4.706532, lng: -75.7077077 },
      { src: "", alt: "Ulloa", lat: 4.7030365, lng: -75.7377371 },
      { src: "", alt: "Filandia — café", lat: 4.6746953, lng: -75.6577028 },
      { src: "", alt: "Regreso", lat: 4.8192126, lng: -75.6757184 },
    ],
  },
  {
    slug: "dosquebradas-viterbo-hacienda-el-jordan",
    titulo: "Viterbo · Hacienda El Jordán",
    fecha: "Mayo 2026",
    terreno: "carretera",
    extracto: "Camino hasta Viterbo y Hacienda El Jordán. Comida, parque, hacienda y atardecer.",
    nota: "Carretera ~57 km.",
    gpx: "/rutas/dosquebradas-la-sultana-viterbo-hacienda-el-jordan.gpx",
    googleMapsUrl:
      "https://www.google.com/maps/place/Hacienda+El+Jord%C3%A1n/@4.9300371,-75.9168729,12z/data=!4m28!1m21!4m20!1m4!2m2!1d-75.6765623!2d4.8178594!4e1!1m6!1m2!1s0x8e47850039f4ef93:0xfee598a4500871ef!2sHacienda+El+Jord%C3%A1n,+Cl.+12+%2311-2+a+11-110,+Viterbo,+Caldas!2m2!1d-75.8715718!2d5.0576528!1m6!1m2!1s0x8e478537250ec0cf:0x15a105e281e5bed2!2sViterbo,+Caldas!2m2!1d-75.872356!2d5.0605779!3e0!3m5!1s0x8e47850039f4ef93:0xfee598a4500871ef!8m2!3d5.057656!4d-75.8715827!16s%2Fg%2F11x7wzbsxt",
    distanciaKm: 56.6,
    visitaSlug: "viterbo",
    fotos: [
      {
        src: "/fotos/viterbo-2026-05/viterbo-01.jpeg",
        alt: "Viterbo 1",
        lat: CASA.lat,
        lng: CASA.lng,
      },
      ...Array.from({ length: 14 }, (_, i) => {
        const n = i + 2;
        const nn = String(n).padStart(2, "0");
        const pin =
          n === 8
            ? { lat: 5.057656, lng: -75.8715827 }
            : n === 12
              ? { lat: 5.0605779, lng: -75.872356 }
              : {};
        return {
          src: `/fotos/viterbo-2026-05/viterbo-${nn}.jpeg`,
          alt: `Viterbo ${n}`,
          ...pin,
        };
      }),
    ],
  },
];
