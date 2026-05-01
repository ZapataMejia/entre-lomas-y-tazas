/**
 * Ilustraciones del sitio — Paisaje Cultural Cafetero y municipios del núcleo UNESCO.
 *
 * Usamos URLs **directas** de `upload.wikimedia.org` (sin `/thumb/…`): las rutas escaladas
 * devolvían 400 y las imágenes se veían rotas.
 *
 * Licencias: Wikimedia Commons (crédito en cada ficha). Podéis sustituir por fotos en `public/fotos/`.
 */

type Img = { src: string; alt: string };

const img = (src: string, alt: string): Img => ({ src, alt });

const commons = (path: string) => `https://upload.wikimedia.org/wikipedia/commons/${path}`;

export const imagenesPcc = {
  /** Portada — vista amplia del eje cafetero (Salento, Quindío) */
  hero: img(
    commons("c/ca/Colombia_Landscape_Near_Salento_%2840291533535%29.jpg"),
    "Lomas y cumbres cerca de Salento, Quindío — paisaje típico del PCC. Pedro Szekely / Wikimedia Commons.",
  ),

  /** Banda del índice — cultivo en ladera / cultura cafetera */
  indiceBanner: img(
    commons("4/41/Cafetales%2C_en_Colombia.jpg"),
    "Cafetales en ladera en el Triángulo del Café, Colombia — Wikimedia Commons.",
  ),

  /** Presentación — patrimonio natural emblemático (palmas de cera, valle del Cocora) */
  introduccion: img(
    commons("9/98/Valle_De_Cocora%2C_Salento%2C_Colombia_%2813293061453%29.jpg"),
    "Valle de Cocora con palmas de cera, Salento (Quindío), símbolo del patrimonio natural del PCC. Wikimedia Commons.",
  ),

  /** Bitácora — calle y vida de pueblo (diario de viaje) */
  bitacora: img(
    commons("9/96/Calle_7%2C_Filandia_02.jpg"),
    "Calle típica de Filandia, Quindío — casas bajas de colores en el PCC. Wikimedia Commons.",
  ),

  /**
   * Una imagen por capítulo del folleto (1–8), alineada al tema del texto.
   * 1 café · 2 naturaleza · 3 altura-aventura · 4 oficios · 5 rutas-pueblo · 6 municipios · 7 viaje · 8 cocina
   */
  capitulos: [
    img(
      commons("4/41/Cafetales%2C_en_Colombia.jpg"),
      "Cafetales en las laderas — eje de la cadena del café en el PCC. Wikimedia Commons.",
    ),
    img(
      commons("9/98/Valle_De_Cocora%2C_Salento%2C_Colombia_%2813293061453%29.jpg"),
      "Naturaleza y paisajes del Quindío: valle del Cocora, PCC. Wikimedia Commons.",
    ),
    img(
      commons("3/32/Paisaje_Manizales_-_Aeropuerto%2C_Nevado_del_Ruiz_y_Olleta_-_Flickr_-_Alejandro_Bayer.jpg"),
      "Nevado del Ruiz visto desde Manizales, Caldas — altura y aventura en el entorno del PCC. Alejandro Bayer / Wikimedia Commons.",
    ),
    img(
      commons("8/83/Crafts_Colombia%2C_Filandia.jpg"),
      "Artesanías en Filandia, Quindío — oficios y cultura material del territorio cafetero. Wikimedia Commons.",
    ),
    img(
      commons("5/59/Church_at_Marsella_-_Risaralda_-_Colombia_-_panoramio.jpg"),
      "Iglesia y paisaje en Marsella, Risaralda — pueblo del corredor cafetero sobre la ruta. Wikimedia Commons.",
    ),
    img(
      commons("4/4e/Parque_de_Pijao%2C_Quind%C3%ADo.jpg"),
      "Parque principal de Pijao, Quindío — municipio patrimonio dentro del núcleo PCC. Wikimedia Commons.",
    ),
    img(
      commons("7/79/Salento01.jpg"),
      "Arquitectura colorida en Salento, Quindío — consejos de pueblo y caminatas en el PCC. Wikimedia Commons.",
    ),
    img(
      commons("e/e3/Cerdo%2C_calentado_y_arepa.jpg"),
      "Desayuno andino: calentado, arepa y cerdo — mesa tradicional colombiana del eje. Wikimedia Commons.",
    ),
  ],
} as const;
