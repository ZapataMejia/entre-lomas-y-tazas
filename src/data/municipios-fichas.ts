/**
 * Fichas enriquecidas por municipio (texto guía + datos propios).
 * Pueden existir aunque el pueblo no esté en el listado UNESCO del núcleo PCC.
 */
import type { MunicipiosPcc } from "./rutas";
import { slugMunicipio } from "../lib/slug-municipio";

export type DatoFicha = { label: string; value: string };

export type MunicipioFicha = {
  slug: string;
  nombre: string;
  departamento: string;
  /** true = municipio del listado oficial del núcleo inscrito UNESCO */
  nucleoPcc: boolean;
  /** Párrafo inicial (contexto o aviso si está fuera del núcleo) */
  introduccion?: string;
  datos?: DatoFicha[];
  /** Párrafos desarrollados (paisaje, economía, clima…) */
  cuerpo?: string[];
  atractivosUrbanos?: string[];
  experienciasGuia?: string[];
  /** Ideas para próximas visitas */
  planTrabajo?: string[];
  fuente?: string;
};

export const fichasMunicipios: MunicipioFicha[] = [
  {
    slug: "viterbo",
    nombre: "Viterbo",
    departamento: "Caldas",
    nucleoPcc: false,
    introduccion:
      "Viterbo no aparece en el listado del núcleo urbano-rural del Paisaje Cultural Cafetero (UNESCO), pero pertenece al mismo eje de vida del café y al valle medio del río Risaralda — por eso lo incluimos en nuestro cuaderno además del mapa oficial.",
    datos: [
      { label: "Distancia a Manizales", value: "≈ 74 km" },
      { label: "Distancia a Pereira", value: "≈ 45 km" },
      { label: "Altitud", value: "998 m s.n.m." },
      { label: "Río / valle", value: "Valle del río Risaralda" },
      { label: "Clima", value: "Cálido; temperatura media cercana a 28 °C" },
    ],
    cuerpo: [
      "El municipio se asienta en un valle de geografías relativamente planas, con buen acceso para quien busca paisajes naturales sin las pendientes extremas de otras zonas del eje.",
      "En el ámbito rural predomina el trabajo en cultivos tropicales y de transición: caña de azúcar, café, frutas tropicales, además de piscicultura (cachama y mojarra), actividades que marcan el ritmo económico local.",
    ],
    atractivosUrbanos: [
      "Templo de la Inmaculada Concepción",
      "Casa de la Cultura",
      "Plaza Restrepo",
    ],
    experienciasGuia: ["Cultura cafetera", "Cafés especiales", "Cabalgatas"],
    planTrabajo: [
      "Completar esta ficha con fotos propias del casco y del valle.",
      "Anotar fincas o mesas donde probaron cafés especiales.",
      "Si hacen cabalgata: fecha, recorrido y contacto de la finca o guía.",
      "Sumar en la bitácora olores, platos y una frase para el recuerdo.",
    ],
    fuente: "Contenido adaptado de la guía «Mil experiencias, un destino» y notas del viaje.",
  },
];

export const fichaPorSlug = new Map(fichasMunicipios.map((f) => [f.slug, f]));

export function todosSlugsMunicipios(municipiosPcc: MunicipiosPcc[]): string[] {
  const slugs = new Set<string>();
  for (const bloque of municipiosPcc) {
    for (const nombre of bloque.municipios) {
      slugs.add(slugMunicipio(nombre));
    }
  }
  for (const f of fichasMunicipios) {
    slugs.add(f.slug);
  }
  return [...slugs].sort();
}

export type MunicipioResuelto = {
  slug: string;
  nombre: string;
  departamento: string;
  nucleoPcc: boolean;
  ficha: MunicipioFicha | null;
};

export function resolverMunicipioPorSlug(slug: string, municipiosPcc: MunicipiosPcc[]): MunicipioResuelto | null {
  const directa = fichaPorSlug.get(slug);
  if (directa) {
    return {
      slug: directa.slug,
      nombre: directa.nombre,
      departamento: directa.departamento,
      nucleoPcc: directa.nucleoPcc,
      ficha: directa,
    };
  }
  for (const bloque of municipiosPcc) {
    for (const nombre of bloque.municipios) {
      if (slugMunicipio(nombre) === slug) {
        return {
          slug,
          nombre,
          departamento: bloque.departamento,
          nucleoPcc: true,
          ficha: null,
        };
      }
    }
  }
  return null;
}
