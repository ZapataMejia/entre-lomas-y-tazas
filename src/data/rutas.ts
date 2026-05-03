/**
 * Diario PCC — contenido alineado al índice de la guía «Paisaje Cultural Cafetero»
 * (Mil experiencias, un destino). Fotos propias: public/fotos/
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

/** Entrada del índice como en el folleto (color + ancla). */
export type EntradaIndice = {
  tipo: "intro" | "capitulo";
  num?: number;
  anchor: string;
  titulo: string;
  /** Color de la pestaña tipo guía (capítulos 1–8) */
  color?: string;
  /** Referencia al libro, solo visual */
  paginaLibro?: number;
};

export type Ilustracion = {
  src: string;
  alt: string;
};

export type RutasData = {
  /** Fotos de paisaje / cultura (sustituir por vuestras en public/fotos/ cuando queráis). */
  ilustraciones: {
    hero: Ilustracion;
    /** Banda tipo panorámica sobre el índice (como en el libro impreso) */
    indiceBanner: Ilustracion;
    bitacora: Ilustracion;
    introduccion: Ilustracion;
    /** Una imagen por capítulo del 1 al 8, en orden */
    capitulos: Ilustracion[];
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
  /** Índice de contenido del folleto (orden y títulos oficiales). */
  indiceLibro: EntradaIndice[];
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
    indiceBanner: imagenesPcc.indiceBanner,
    bitacora: imagenesPcc.bitacora,
    introduccion: imagenesPcc.introduccion,
    capitulos: [...imagenesPcc.capitulos],
  },
  meta: {
    /** Título público del sitio (marca en cabecera, hero y pestaña del navegador) */
    titulo: "Antes de que se nos olvide",
    subtitulo: "Diario en el Paisaje Cultural Cafetero (UNESCO)",
    selloSerie: "UNESCO 2011 · Patrimonio de la humanidad",
    campana: {
      pre: "Una página",
      palabra: "nuestra",
      medio: "para lo que vivimos en carretera, finca y pueblo",
      cierre: "sin prisa",
    },
    epigrafe:
      "Este espacio es nuestro diario íntimo del PCC: tomamos la guía oficial como mapa y la contamos en clave de pareja, con el mismo espíritu de un blog de viajes.",
    /** Crédito (pie de página); el nombre del sitio es `titulo` */
    autores: "Santiago y Esmeralda",
    puntoPartida: "Salimos de Dosquebradas, Risaralda",
    mostrarCintaHoy: false,
    textoCintaHoy: "Hoy una ruta nueva",
    enlaceMapa: {
      etiqueta: "Mapa general de rutas (referencia oficial)",
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
  indiceLibro: [
    { tipo: "intro", anchor: "introduccion", titulo: "Introducción", paginaLibro: 11 },
    {
      tipo: "capitulo",
      num: 1,
      anchor: "cap-1",
      titulo: "Saborear el mejor café suave del mundo",
      color: "#c9182c",
      paginaLibro: 27,
    },
    {
      tipo: "capitulo",
      num: 2,
      anchor: "cap-2",
      titulo: "Disfrutar de la naturaleza y paisajes únicos",
      color: "#7cb518",
      paginaLibro: 45,
    },
    {
      tipo: "capitulo",
      num: 3,
      anchor: "cap-3",
      titulo: "Vivir grandes aventuras en parajes privilegiados",
      color: "#0f6b5c",
      paginaLibro: 65,
    },
    {
      tipo: "capitulo",
      num: 4,
      anchor: "cap-4",
      titulo: "Aprender sobre oficios auténticos",
      color: "#e8750f",
      paginaLibro: 81,
    },
    {
      tipo: "capitulo",
      num: 5,
      anchor: "cap-5",
      titulo: "Rutas del Paisaje Cultural Cafetero",
      color: "#6b4a2e",
      paginaLibro: 89,
    },
    {
      tipo: "capitulo",
      num: 6,
      anchor: "cap-6",
      titulo: "Municipios",
      color: "#7a3e9d",
      paginaLibro: 117,
    },
    {
      tipo: "capitulo",
      num: 7,
      anchor: "cap-7",
      titulo: "Antes de que se nos olvide",
      color: "#5a6b3a",
      paginaLibro: 171,
    },
    {
      tipo: "capitulo",
      num: 8,
      anchor: "cap-8",
      titulo: "Cocina tradicional",
      color: "#2a5ba8",
      paginaLibro: 181,
    },
  ],
  guia: {
    heroTopper: "Diario en pareja",
    heroQuote: "Lo que nos pasa en el eje cafetero — el diario de nuestras salidas, finca y pueblo.",
    heroTagline: "",
    heroMeta: "Desde Dosquebradas, Risaralda",
    lema: "Memorias del eje, anotadas con calma.",
    taglineLibro: "Guía «Mil experiencias, un destino» solo como hilo conductor.",
    introUnesco:
      "El PCC es patrimonio vivo: cafetales en loma, pueblos y cultura cafetera cotidiana. Para nosotros es la excusa perfecta para mirar cada salida con respeto y curiosidad, no para presumir de saberlo todo.",
    introPersonal:
      "Acá va el cajón de fotos, olores y conversaciones — imperfecciones incluidas. Lo importante es que sea nuestro.",
    comoLeer: [
      "La bitácora abajo es el corazón: cada visita con fecha y relato.",
      "Cada capítulo del folleto tiene página propia (capítulo 1 al 8) con texto largo, enlaces y sección para fotos.",
      "«Por dónde navegar» enlaza la intro en portada y cada capítulo en su vista completa.",
      "Municipios: fichas guía; lo que todavía no está en libro va con etiqueta Cuaderno.",
    ],
    guiaTuristica: [
      "Mejor un eje por día que cruzar tres departamentos sin atardecer en ningún pueblo.",
      "Impermeable en la mochila siempre; franja seca ayuda en caminatas largas, no la garantiza.",
      "Catas y fincas con reserva — más en puente.",
    ],
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
      slug: "viterbo",
      municipio: "Viterbo",
      departamento: "Caldas",
      fecha: "Mayo 2026",
      calificacion: 5,
      extracto:
        "Un día que nos encantó: buena comida, un rincón de frases lleno de detalle, parque, hacienda de ensueño, animales, atardecer y dos cafés hablando hasta reír.",
      nota:
        "El plan nos gustó mucho; vimos lugares muy ricos y reaccionamos a todo. Comimos unas hamburguesas deliciosas —una más picante, esa no tanto, pero igual rica—. Hubo un rincón de frases, muy bonito y muy bien decorado, nos encantó. De ahí al parque, y luego a una hacienda preciosa: soñamos en voz alta qué haríamos si fuera nuestra, qué cambiaríamos; nos tomamos un montón de fotos. No alcanzamos la cabalgata y nos dio un poquito de pena; ya sabemos que hay que volver. Vimos y disfrutamos muchos animales hermosos. El atardecer en la hacienda fue un regalo. Volvimos al parque: dos cafés muy ricos, charla, risas y tiempo de calidad; hacía falta. Nos fue muy bien de retorno a la casa; paramos en la Villa Olímpica porque no queríamos llegar temprano a la casa, y saludamos a un amigo de Santi de hace muchos años y nos reímos mucho juntos. Posdata: Esmeralda llegó a dormir, jaja.",
      experiencias: [
        "Gastronomía",
        "Rincón / frases",
        "Parque",
        "Hacienda",
        "Animales",
        "Atardecer",
        "Cafés y conversación",
        "Regreso a Pereira",
      ],
      fotos: Array.from({ length: 15 }, (_, j) => `/fotos/viterbo-2026-05/viterbo-${String(j + 1).padStart(2, "0")}.jpeg`),
    },
  ],
  ideas: [],
};
