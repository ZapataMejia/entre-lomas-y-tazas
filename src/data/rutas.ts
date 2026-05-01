/**
 * Diario PCC — contenido alineado al índice de la guía «Paisaje Cultural Cafetero»
 * (Mil experiencias, un destino). Fotos propias: public/fotos/
 */
export type Visita = {
  slug: string;
  municipio: string;
  departamento?: string;
  fecha?: string;
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
    /** Capítulos 1–4: textos alineados a los ejes del libro */
    capitulos: { titulo: string; cuerpo: string }[];
    cocinaTradicional: string;
    territorio: DeptoTerritorio[];
    consejosPracticos: string[];
  };
  /** Listado por departamento del territorio PCC (UNESCO). */
  municipiosPcc: MunicipiosPcc[];
  visitados: Visita[];
  ideas: IdeaRuta[];
};

/** Imágenes de muestra: Wikimedia Commons, eje cafetero / PCC (sustituir por fotos propias en public/fotos/). */
export const rutas: RutasData = {
  ilustraciones: {
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Colombia_Landscape_Near_Salento_%2840291533535%29.jpg/1600px-Colombia_Landscape_Near_Salento_%2840291533535%29.jpg",
      alt: "Valle y cerros cerca de Salento (Quindío), eje del Paisaje Cultural Cafetero — Pedro Szekely / Wikimedia Commons",
    },
    indiceBanner: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Cafetales%2C_en_Colombia.jpg/1600px-Cafetales%2C_en_Colombia.jpg",
      alt: "Cafetales en el Triángulo del Café, Colombia — Wikimedia Commons",
    },
    introduccion: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Valle_De_Cocora%2C_Salento%2C_Colombia_%2813293061453%29.jpg/1200px-Valle_De_Cocora%2C_Salento%2C_Colombia_%2813293061453%29.jpg",
      alt: "Valle de Cocora, Salento (Quindío) — palmas de cera y verdes del PCC — Travel & Shit / Wikimedia Commons",
    },
    bitacora: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Colombia_Landscape_Near_Salento_%2840291533535%29.jpg/1600px-Colombia_Landscape_Near_Salento_%2840291533535%29.jpg",
      alt: "Paisaje cafetero cerca de Salento — Wikimedia Commons",
    },
    capitulos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Cafetales%2C_en_Colombia.jpg/1200px-Cafetales%2C_en_Colombia.jpg",
        alt: "Cafetales en Colombia — cultura del café en el PCC",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Valle_De_Cocora%2C_Salento%2C_Colombia_%2813293061453%29.jpg/1200px-Valle_De_Cocora%2C_Salento%2C_Colombia_%2813293061453%29.jpg",
        alt: "Valle de Cocora, naturaleza emblema del Quindío",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Colombia_Landscape_Near_Salento_%2840291533535%29.jpg/1200px-Colombia_Landscape_Near_Salento_%2840291533535%29.jpg",
        alt: "Paramillo y verdes cerca de Salento — caminos de altura",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Salento01.jpg/1200px-Salento01.jpg",
        alt: "Casas coloridas en Salento (Quindío) — pueblo patrimonio del eje cafetero",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Colombia_Landscape_Near_Salento_%2840291533535%29.jpg/1200px-Colombia_Landscape_Near_Salento_%2840291533535%29.jpg",
        alt: "Carreteras y lomas del paisaje cafetero",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Salento01.jpg/1200px-Salento01.jpg",
        alt: "Tejados y montaña — municipios del corredor PCC",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Cafetales%2C_en_Colombia.jpg/1200px-Cafetales%2C_en_Colombia.jpg",
        alt: "Paisaje cafetero y territorio PCC — referencia visual",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Valle_De_Cocora%2C_Salento%2C_Colombia_%2813293061453%29.jpg/1200px-Valle_De_Cocora%2C_Salento%2C_Colombia_%2813293061453%29.jpg",
        alt: "Mesa del territorio: café, paisaje y cocina viva en el eje",
      },
    ],
  },
  meta: {
    /** Título público del sitio (marca en cabecera, hero y pestaña del navegador) */
    titulo: "Entre lomas y tazas",
    subtitulo: "Diario en el Paisaje Cultural Cafetero · Patrimonio UNESCO",
    selloSerie: "UNESCO 2011 · Patrimonio de la humanidad",
    campana: {
      pre: "Es el momento de",
      palabra: "Colombia",
      medio: "Conócela, recórrela, disfrútala…",
      cierre: "Seguro te va a encantar",
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
      titulo: "Consejos para viajeros",
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
    heroTopper: "Cuaderno de viaje en pareja",
    heroQuote: "Un solo territorio, mil maneras de quererlo.",
    heroTagline: "Paisaje Cultural Cafetero · Patrimonio mundial",
    heroMeta: "Salimos de Dosquebradas, Risaralda — base del diario",
    lema: "Memorias del eje, anotadas con calma.",
    taglineLibro: "Guía «Mil experiencias, un destino» solo como hilo conductor.",
    introUnesco:
      "El PCC de Colombia es patrimonio vivo de la UNESCO: cafetales en loma, pueblos, arquitectura vernácula y la cultura cafetera del día a día. Entender eso ayuda a mirar cada viaje con más respeto y más curiosidad.",
    introPersonal:
      "Nada de postureal: esta página es el cajón donde vamos soltando fotos, olores y anécdotas mientras recorremos el paísaje cafetero. No tiene que estar perfecta; tiene que ser nuestra.",
    comoLeer: [
      "Empezá por la presentación si querés contexto y tips prácticos.",
      "El bloque «Por dónde navegar» repite el índice de la guía en versión web — saltá directo al capítulo que te pinte.",
      "Municipios: el listado oficial del núcleo PCC; lo que vivimos en carretera lo verás en la bitácora, no en listas frías.",
      "Bitácora: acá irán entradas por cada parada, con fotos y texto cuando las tengamos.",
    ],
    guiaTuristica: [
      "Conviene elegir un eje por noche: cruzar Caldas, Quindío y Risaralda en el mismo día cansa y no deja disfrutar el atardecer en el pueblo.",
      "Para caminatas largas, la franja seca (aprox. dic–feb y jun–ago) suele ser más amable; igual, impermeable en la mochila siempre.",
      "Fincas con recogida o cata conviene reservar con anticipación, sobre todo en puente o feriado.",
      "En pueblos con mucha afluencia, una mitad de jornada para el casco y otra para un mirador o valle suele rendir mejor que apurarse todo.",
      "En reservas y senderos comunitarios, respetar horarios y llevar efectivo en veredas sigue siendo regla de oro.",
    ],
    capitulos: [
      {
        titulo: "Saborear el mejor café suave del mundo",
        cuerpo:
          "Catas, recolección, beneficio y taza: el libro invita a pegarse a la cadena del café en el eje cafetero. Nosotros anotamos fincas, pueblos y mesas donde el aroma manda.",
      },
      {
        titulo: "Disfrutar de la naturaleza y paisajes únicos",
        cuerpo:
          "Bosques de niebla, miradores, aves y valles. Caminatas suaves o jornadas largas según el clima — acá registramos qué senderos valen la pena y cuándo ir.",
      },
      {
        titulo: "Vivir grandes aventuras en parajes privilegiados",
        cuerpo:
          "Paramillos, altitud y rutas exigentes: en la guía técnica aparecen alertas para quien sube alto (por ejemplo cercanía a PNN Los Nevados). Sin prisa, con respeto por el territorio.",
      },
      {
        titulo: "Aprender sobre oficios auténticos",
        cuerpo:
          "Bahareque, teja, tejido, memoria cafetera: cultura material y oficios que dan carácter al PCC. Acá van nuestros encuentros con artesanos y pueblos patrimonio.",
      },
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
  visitados: [],
  ideas: [],
};
