/**
 * Fichas por municipio — tono de cuaderno personal, no guía turística.
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
  /** Párrafo inicial (corto, personal) */
  introduccion?: string;
  /** Solo datos útiles para nosotros (p. ej. km desde casa) */
  datos?: DatoFicha[];
  cuerpo?: string[];
  atractivosUrbanos?: string[];
  experienciasGuia?: string[];
  planTrabajo?: string[];
  fuente?: string;
};

export const fichasMunicipios: MunicipioFicha[] = [
  {
    slug: "palestina",
    nombre: "Palestina",
    departamento: "Caldas",
    nucleoPcc: true,
    introduccion:
      "Un segundo hogar. Acá están Mencha, Angie, Beto y tanta gente que nos quiere y nos ha ayudado. Vamos seguido.",
    datos: [
      { label: "Desde casa", value: "≈ 32 km" },
      { label: "Para nosotros", value: "Familia · segundo hogar" },
      { label: "Recuerdos", value: "Cumpleaños 26 · boda Manuelita y Felipe" },
    ],
    planTrabajo: ["Seguir yendo.", "Seguir sumando fotos y anécdotas."],
    fuente: "Nuestra bitácora.",
  },
  {
    slug: "viterbo",
    nombre: "Viterbo",
    departamento: "Caldas",
    nucleoPcc: false,
    introduccion:
      "Un pueblo del valle del Risaralda al que fuimos un día entero: comida, parque, Hacienda El Jordán y mucho rato juntos.",
    datos: [
      { label: "Desde casa", value: "≈ 57 km" },
      { label: "Cuándo fuimos", value: "Mayo 2026" },
      { label: "Lo pendiente", value: "La cabalgata (hay que volver)" },
    ],
    planTrabajo: ["Volver con tiempo para la cabalgata.", "Repetir un café en el parque."],
    fuente: "Nuestra bitácora.",
  },
];

export const fichaPorSlug = new Map(fichasMunicipios.map((f) => [f.slug, f]));

export function todosSlugsMunicipios(municipiosPcc: MunicipiosPcc[]): string[] {
  const slugs = new Set<string>();
  for (const bloque of municipiosPcc) {
    for (const nombre of bloque.municipios) {
      slugs.add(slugMunicipio(nombre));
    }
    if (bloque.municipiosCuaderno) {
      for (const nombre of bloque.municipiosCuaderno) {
        slugs.add(slugMunicipio(nombre));
      }
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
    if (bloque.municipiosCuaderno) {
      for (const nombre of bloque.municipiosCuaderno) {
        if (slugMunicipio(nombre) === slug) {
          return {
            slug,
            nombre,
            departamento: bloque.departamento,
            nucleoPcc: false,
            ficha: null,
          };
        }
      }
    }
  }
  return null;
}
