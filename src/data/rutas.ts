/**
 * Diario de viajes en pareja — lugares, bitácora y fotos propias (public/fotos/).
 */
import { imagenesPcc } from "./imagenesPcc";

export type Visita = {
  slug: string;
  municipio: string;
  departamento?: string;
  fecha?: string;
  /** 1–5: para destacados en portada y estrellas en la ficha */
  calificacion?: 1 | 2 | 3 | 4 | 5;
  extracto?: string;
  nota?: string;
  experiencias?: string[];
  fotos: string[];
  /** slug de `rutasMapa` — muestra el mapa del camino dentro de la bitácora */
  rutaSlug?: string;
};

export type IdeaRuta = {
  municipio: string;
  departamento?: string;
  detalle?: string;
  enfoque?: string;
};

export type PortadaCampana = {
  pre: string;
  palabra: string;
  medio: string;
  cierre: string;
};

export type DeptoTerritorio = {
  nombre: string;
  resumen: string;
};

/** Municipios del ámbito patrimonial PCC según delimitación UNESCO (núcleo inscrito). La zona de influencia institucional menciona 51 municipios en paisajeculturalcafetero.org.co. */
export type MunicipiosPcc = {
  departamento: string;
  municipios: string[];
  /** Mismo departamento: pueblos del cuaderno que no están en el listado UNESCO del núcleo (p. ej. Viterbo en Caldas). */
  municipiosCuaderno?: string[];
};

export type Ilustracion = {
  src: string;
  alt: string;
};

export type RutasData = {
  /** Fotos de paisaje / cultura (sustituir por vuestras en public/fotos/ cuando queráis). */
  ilustraciones: {
    hero: Ilustracion;
    bitacora: Ilustracion;
    introduccion: Ilustracion;
  };
  meta: {
    titulo: string;
    subtitulo?: string;
    selloSerie?: string;
    campana: PortadaCampana;
    epigrafe?: string;
    autores?: string;
    puntoPartida?: string;
    mostrarCintaHoy?: boolean;
    textoCintaHoy?: string;
    heroImage?: string;
    enlaceMapa?: { etiqueta: string; url: string };
    enlacePccOficial?: { etiqueta: string; url: string };
    enlaceUnesco?: { etiqueta: string; url: string };
  };
  guia: {
    /** Hero */
    heroTopper: string;
    heroQuote: string;
    heroTagline: string;
    /** Línea breve bajo el lead (p. ej. punto de partida) */
    heroMeta?: string;
    lema: string;
    taglineLibro: string;
    introUnesco: string;
    introPersonal: string;
    comoLeer: string[];
    /** Texto tipo mini guía turística (planificación, épocas, enlaces). */
    guiaTuristica: string[];
    cocinaTradicional: string;
    territorio: DeptoTerritorio[];
    consejosPracticos: string[];
  };
  /** Listado por departamento del territorio PCC (UNESCO). */
  municipiosPcc: MunicipiosPcc[];
  visitados: Visita[];
  ideas: IdeaRuta[];
};

export const rutas: RutasData = {
  ilustraciones: {
    hero: imagenesPcc.hero,
    bitacora: imagenesPcc.bitacora,
    introduccion: imagenesPcc.introduccion,
  },
  meta: {
    /** Título público del sitio (marca en cabecera, hero y pestaña del navegador) */
    titulo: "Mil rutas un destino",
    subtitulo: "Recuerdos de viaje en pareja",
    selloSerie: "Santiago y Esmeralda",
    campana: {
      pre: "Una página",
      palabra: "nuestra",
      medio: "para lo que vivimos en carretera, finca y pueblo",
      cierre: "sin prisa",
    },
    epigrafe: "Diario de salidas: a dónde fuimos, qué hicimos, qué nos gustó y las fotos del día.",
    /** Crédito (pie de página); el nombre del sitio es `titulo` */
    autores: "Santiago y Esmeralda",
    /** Dónde vivimos — se muestra una sola vez (hero) */
    puntoPartida: "El corazón de nuestro hogar",
    mostrarCintaHoy: false,
    textoCintaHoy: "Hoy una ruta nueva",
    enlaceMapa: {
      etiqueta: "Mapa general de rutas (referencia)",
      url: "https://es.slideshare.net/slideshow/mapa-general-rutas-del-paisaje-cultural-cafetero-de-colombia-mincit-fontur/148455217",
    },
    enlacePccOficial: {
      etiqueta: "Portal Paisaje Cultural Cafetero",
      url: "https://paisajeculturalcafetero.org.co/",
    },
    enlaceUnesco: {
      etiqueta: "Ficha UNESCO",
      url: "https://whc.unesco.org/en/list/1121/",
    },
  },
  guia: {
    heroTopper: "Diario en pareja",
    heroQuote: "Lo que nos pasa en el eje cafetero — y en los otros rincones que vamos conociendo.",
    heroTagline: "",
    /** Línea bajo el lead en el hero */
    heroMeta: "El corazón de nuestro hogar",
    lema: "Memorias anotadas con calma.",
    taglineLibro: "Recuerdos juntos.",
    /** Segundo párrafo corto; sin repetir el barrio */
    introUnesco:
      "Fotos, olores y conversaciones de cada salida. El mapa guarda el camino; la bitácora, el día.",
    introPersonal:
      "Acá va el cajón de lo que vivimos juntos — imperfecciones incluidas. Lo importante es que sea nuestro.",
    comoLeer: [
      "Bitácora: el relato y las fotos de cada salida.",
      "Lugares: el mapa de pueblos; tocás uno para ver la ficha.",
      "Rutas: el trazo en el mapa (cómo llegamos).",
      "Favoritos: lo que más nos gustó (estrellas).",
    ],
    /** Vacío a propósito: las “notas sueltas” de guía no aportaban y confunden */
    guiaTuristica: [],
    cocinaTradicional:
      "Arepas, mogollas, variaciones regionales y mesa cafetera: la cocina del PCC es parte del viaje. Esta sección es nuestro espacio para anotar platos, mercados y restaurantes que querríamos repetir o recomendar.",
    territorio: [
      {
        nombre: "Caldas",
        resumen: "Manizales, Chinchiná, Ruiz, altitud y cafetales volcánicos.",
      },
      {
        nombre: "Quindío",
        resumen: "Salento, Filandia, valle del Cocora — paisaje emblema del eje.",
      },
      {
        nombre: "Risaralda",
        resumen: "Pereira, Santa Rosa, Marsella, Dosquebradas; puente entre valles.",
      },
      {
        nombre: "Valle del Cauca",
        resumen: "El Cairo, Andes y tramos del corredor hacia el suroccidente.",
      },
    ],
    consejosPracticos: [
      "Clima por capas: en un mismo día puede hacer sol abajo y neblina arriba.",
      "Caminatas serias: agua, protección solar, calzado cerrado y prudencia en altura.",
      "Fincas y senderos: permisos, horarios y básura de vuelta siempre.",
      "Pueblos muy turísticos: reservar con antelación en puentes y vacaciones.",
    ],
  },
  municipiosPcc: [
    {
      departamento: "Caldas",
      municipios: [
        "Aguadas",
        "Anserma",
        "Aranzazu",
        "Belalcázar",
        "Chinchiná",
        "Filadelfia",
        "La Merced",
        "Manizales",
        "Neira",
        "Pácora",
        "Palestina",
        "Riosucio",
        "Risaralda",
        "Salamina",
        "San José",
        "Supía",
        "Villamaría",
      ],
      municipiosCuaderno: ["Viterbo"],
    },
    {
      departamento: "Risaralda",
      municipios: [
        "Apía",
        "Balboa",
        "Belén de Umbría",
        "Dosquebradas",
        "Guática",
        "La Celia",
        "Marsella",
        "Pereira",
        "Quinchía",
        "Santa Rosa de Cabal",
        "Santuario",
      ],
    },
    {
      departamento: "Quindío",
      municipios: [
        "Armenia",
        "Buenavista",
        "Calarcá",
        "Circasia",
        "Córdoba",
        "Filandia",
        "Génova",
        "Montenegro",
        "Pijao",
        "Quimbaya",
        "Salento",
      ],
    },
    {
      departamento: "Valle del Cauca",
      municipios: [
        "Alcalá",
        "Ansermanuevo",
        "Argelia",
        "Caicedonia",
        "El Águila",
        "El Cairo",
        "Riofrío",
        "Sevilla",
        "Trujillo",
        "Ulloa",
      ],
    },
  ],
  visitados: [
    {
      slug: "palestina",
      municipio: "Palestina",
      departamento: "Caldas",
      fecha: "Varias veces",
      calificacion: 5,
      rutaSlug: "casa-palestina-caldas",
      extracto:
        "Un segundo hogar: Mencha, Angie, Beto y tanta gente que nos quiere. Cumpleaños 26, boda de Manuelita y Felipe, y muchos momentos lindos.",
      nota:
        "A Palestina hemos ido muchas veces. Ahí conocimos a personas muy bonitas: a Mencha (tía de Esme), a Angie (prima), a Beto (esposo de Mencha) y a mucha gente importante para nosotros. Fuimos una vez a conocer a la familia de Esme —Mencha, Angie y Beto— y terminamos encontrando una familia, un segundo hogar donde nos quieren y nos han ayudado mucho. Es un lugar que recorremos mucho y donde hemos vivido momentos muy bonitos: el cumpleaños 26 de Santi lo celebraron allá; también fuimos a la boda de Manuelita y Felipe (primos de Esmeralda), participamos y Santi se vistió de monja —pasamos una noche espectacular. Palestina se quedó en el corazón.",
      experiencias: [
        "Familia · Mencha, Angie, Beto",
        "Segundo hogar",
        "Cumpleaños 26",
        "Boda Manuelita y Felipe",
        "Santi de monja",
        "Muchas visitas",
      ],
      fotos: Array.from({ length: 24 }, (_, j) => `/fotos/palestina/palestina-${String(j + 1).padStart(2, "0")}.jpeg`),
    },
    {
      slug: "2026-10-04-ruta-sur",
      municipio: "Altagracia · Arabia · Ulloa · Filandia",
      departamento: "Risaralda · Valle · Quindío",
      fecha: "4 oct 2026",
      calificacion: 5,
      rutaSlug: "2026-10-04-altagracia-arabia-ulloa-filandia",
      extracto:
        "Salida larga: mirador en Altagracia, almuerzo en Arabia, nos metimos al río Barbas, destapada hasta La India, descubrimos Ulloa y cerramos con café en Filandia.",
      nota:
        "Apenas salimos fuimos a Altagracia y conocimos el mirador. Después bajamos a Arabia y comimos en un restaurante rico. Bajamos al río Barbas y nos metimos al agua. De ahí a La India por destapada — mera trocha. Llegamos a Ulloa: un pueblo muy bonito, no lo conocíamos, muy lindo; nos tomamos fotos porque había lugares muy turísticos. De Ulloa salimos a Filandia; nos tomamos un cafecito en un pueblo que ya conocíamos. Y de ahí por la principal de regreso a casa.",
      experiencias: [
        "Mirador Altagracia",
        "Almuerzo en Arabia",
        "Río Barbas",
        "Destapada / trocha",
        "La India",
        "Ulloa (primera vez)",
        "Café en Filandia",
      ],
      fotos: [],
    },
    {
      slug: "viterbo",
      municipio: "Viterbo",
      departamento: "Caldas",
      fecha: "Mayo 2026",
      calificacion: 5,
      rutaSlug: "dosquebradas-viterbo-hacienda-el-jordan",
      extracto:
        "Un día que nos encantó: buena comida, un rincón de frases lleno de detalle, parque, hacienda de ensueño, animales, atardecer y dos cafés hablando hasta reír.",
      nota:
        "El plan nos gustó mucho; vimos lugares muy ricos y reaccionamos a todo. Comimos unas hamburguesas deliciosas —una más picante, esa no tanto, pero igual rica—. Hubo un rincón de frases, muy bonito y muy bien decorado, nos encantó. De ahí al parque, y luego a una hacienda preciosa (El Jordán): soñamos en voz alta qué haríamos si fuera nuestra, qué cambiaríamos; nos tomamos un montón de fotos. No alcanzamos la cabalgata y nos dio un poquito de pena; ya sabemos que hay que volver. Vimos y disfrutamos muchos animales hermosos. El atardecer en la hacienda fue un regalo. Volvimos al parque: dos cafés muy ricos, charla, risas y tiempo de calidad; hacía falta. De regreso paramos en la Villa Olímpica porque no queríamos llegar temprano, y saludamos a un amigo de Santi de hace muchos años y nos reímos mucho juntos. Posdata: Esmeralda llegó a dormir, jaja.",
      experiencias: [
        "Gastronomía",
        "Rincón / frases",
        "Parque",
        "Hacienda El Jordán",
        "Animales",
        "Atardecer",
        "Cafés y conversación",
      ],
      fotos: Array.from({ length: 15 }, (_, j) => `/fotos/viterbo-2026-05/viterbo-${String(j + 1).padStart(2, "0")}.jpeg`),
    },
  ],
  ideas: [],
};
