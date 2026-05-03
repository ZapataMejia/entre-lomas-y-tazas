/**
 * Contenido amplio por capítulo (folleto «Mil experiencias, un destino»).
 * `fotos`: rutas bajo /public (vacías hasta que suban imágenes propias por capítulo).
 */
export type CapituloSeccion = {
  titulo: string;
  texto?: string[];
  lista?: string[];
};

export type CapituloDetalle = {
  num: number;
  /** Tarjeta resumida en la portada */
  resumen: string;
  /** Entrada de la página del capítulo */
  introduccion: string;
  secciones: CapituloSeccion[];
  enlacesUtiles?: { etiqueta: string; url: string }[];
  fotos: string[];
};

export const capitulosDetalle: CapituloDetalle[] = [
  {
    num: 1,
    resumen:
      "Sabores de taza, finca y barra en el Eje Cafetero: por qué el mundo habla del café suave colombiano, qué hay en los cafés de especialidad del paisaje y pueblos como Apía o el Risaralda donde conviene anotar la mesa.",
    introduccion:
      "El folleto del Paisaje Cultural Cafetero abre con esa invitación casi inevitable: probar “el mejor café suave del mundo”. Nosotros lo leemos con calma: Colombia lleva décadas asociada a un perfil limpio, dulce y versátil en taza, y el eje —Caldas, Quindío, Risaralda, norte del Valle— es donde ese relato se cruza con finca, plaza, laboratorio y barra. Este capítulo es caja de herramientas: aromas y procesos que sí aparecen en cata, qué suele ofrecer un café de especialidad en pueblos como Santa Rosa de Cabal, Salento, Apía o Chinchiná, y pistas de blog para no ir solo de etiqueta hermosa. Nada de inventar nombres de negocio: cuando el cuaderno recomienda, recomienda mapa, tipo de lugar y preguntas que vale la pena hacer.",
    secciones: [
      {
        titulo: "El “mejor café del mundo”: qué hay detrás del dicho",
        texto: [
          "No es una medalla olímpica: es reputación. El visitante oye “café suave colombiano” y piensa en taza limpia, acidez agradable, caramelos y frutos rojos, a veces chocolate o flores según altitud y proceso. En el PCC eso se respira en mesa porque la cadena completa —variedad, sombra, recolección selectiva, beneficio lavado u otros procesos en finca, tueste y extracción— está cerca, no en un folleto lejano.",
          "UNESCO inscribió el paisaje por la relación café–territorio–cultura; beber acá es pegarle al contexto, no solo a la moda de la barra. Por eso este cuaderno privilegia origen (vereda, altitud razonable), proceso en etiqueta y conversación con quien prepara, antes que slogan.",
        ],
      },
      {
        titulo: "Sabores que sí vamos encontrando en el eje",
        lista: [
          "Acidez cítrica o a manzana verde en algunos lotes de mayor altitud; dulzor a panela o miel en otros.",
          "Notas a chocolate con leche, nuez o almendra en tuestes medios y extracciones equilibradas.",
          "Frutas rojas (guayaba, cereza, mora) y florales (jazmín, té) cuando la variedad y el proceso lo permiten —Geisha es el ejemplo famoso, pero no es la única ventana al perfil floral.",
          "Hierbas frescas o té negro en algunos naturales o honey; el “lavado clásico” del eje suele premiar limpieza y dulzor sobre fermentaciones llamativas.",
        ],
      },
      {
        titulo: "De la planta a la bebida (lectura rápida)",
        texto: [
          "En el PCC el cafeto convive con lomas, sombra y clima templado. Floración y cereza marcan el año; la recolección a mano en ladera explica buena parte de la calidad que asociamos al arábigo en Colombia.",
          "El beneficio suele ser lavado (muy presente en la región): despulpado, fermentación controlada, lavado y secado en patio o camas hasta humedad estable. Honey, natural o experimentos en finca cambian el dulzor y la fruta en taza; por eso la etiqueta importa tanto como el país.",
        ],
      },
      {
        titulo: "Qué suele haber hoy en un café del pueblo (o en la finca)",
        lista: [
          "Menú de métodos: espresso, americano, V60, Chemex, AeroPress, a veces cold brew; pedir que te digan por qué eligieron ese filtro para ese lote.",
          "Catas públicas o “cupping” en horario fijo en ciudades puerta (Pereira, Manizales, Armenia) y cada vez más en pueblos; reservar o preguntar en redes oficiales del local.",
          "Bolsa de grano con datos de vereda, altitud y proceso; degustación antes de comprar si ofrecen filtrados de muestra.",
          "Historia corta del productor o cooperativa en pizarra o carta —útil para contrastar con lo que veas en beneficiadero.",
        ],
      },
      {
        titulo: "Dónde anotamos el mapa: municipios y departamentos del mismo cuento",
        texto: [
          "Risaralda concentra Pereira y municipios cafeteros como Apía —arriba, brumoso—, Santa Rosa de Cabal —aguas termales y ida constante al páramo—, Marsella o el encanto colgante de Pueblorrico: son nombres reales para enganchar finca, trayecto y taza sin apurar el día.",
          "En Quindío, Salento y el Valle de Cocora son la postal; Filandia, Pijao y Génova suman mesas tranquilas y miradores. Caldas aporta Manizales, Chinchiná, Neira, Riosucio y, en el cuaderno fuera del núcleo UNESCO anotado en el sitio, Viterbo como base posible hacia el occidente y la coordenada con otros pueblos del libro.",
          "Este cuaderno recomienda: combinar una finca con café de barra en el mismo municipio, comparar dos tuestes del mismo origen y anotar hora y clima (la niebla cambia el paladar cuando venís de otra altitud).",
        ],
      },
      {
        titulo: "Cata y mesa: qué pedir y qué mirar",
        lista: [
          "En cata técnica: tazones, cucharillas, aroma, acidez, cuerpo, equilibrio, retrogusto; en mesa pedí origen, altitud aproximada, variedad y proceso (lavado, natural, honey…).",
          "Si ofrecen dos filtros del mismo grano, probá uno más corto y otro más largo: aprendés extracción sin libro.",
          "Espresso y filtrado no compiten: son lentes distintos; en pueblo suele brillar el filtrado para sentir matices.",
        ],
      },
      {
        titulo: "Visitar finca: ideas prácticas",
        lista: [
          "Reservar con tiempo en feriados; preguntar si el recorrido incluye beneficio húmedo y patio de secado.",
          "Agua, sombrero, bloqueador y zapato para barro; en familia, confirmar accesibilidad del sendero corto.",
          "Preguntar por estación: cosecha viva o florecencia cambia la visita; igual vale la pena, pero distinto.",
        ],
      },
      {
        titulo: "Blog, redes y etiquetas: leer sin marearse",
        texto: [
          "Palabras como catación SCA, microlote, single origin, notas de panela o “sidra” aparecen en blogs y tiendas; sirven si las cruzás con datos de finca o cooperativa y con lo que probás en taza, no si reemplazan la prueba.",
          "Videos de recolección, secado y tueste ayudan a imaginar; la fuente seria sigue siendo el portal del PCC, universidades regionales o productores con trazabilidad clara.",
        ],
      },
    ],
    enlacesUtiles: [
      { etiqueta: "Proceso del café (contexto) — Wikilibros / divulgación", url: "https://es.wikipedia.org/wiki/Caf%C3%A9" },
      { etiqueta: "Paisaje Cultural Cafetero (portal)", url: "https://paisajeculturalcafetero.org.co/" },
    ],
    fotos: [],
  },
  {
    num: 2,
    resumen:
      "Ir, caminar, mirar: ríos y quebradas, bosques de niebla, palmas en Cocora y lomas cafeteras — ideas concretas de qué hacer y a qué valle subir sin perder el respeto por el PCC (y el ancla del viaje: Viterbo, Salento, Risaralda…).",
    introduccion:
      "El capítulo verde del folleto es “disfrutar la naturaleza”: acá lo traducimos a territorio real. El Eje Cafetero no es solo cafetales: es red de quebradas que bajan a ríos, bosques de niebla que enmarcan fincas, páramos al fondo y valles profundos como el del río Quindío bajo las palmas de cera. Si partís de Viterbo, Pereira o Chinchiná, el mapa cambia pero la lógica es la misma: elegir UN buen sendero por día, llevar capas y preguntar en plaza por accesos seguros cuando llueva fuerte. Abajo van acciones tipo “hacé esto, andá allá”, siempre dentro del espíritu patrimonial del PCC.",
    secciones: [
      {
        titulo: "Dónde está la naturaleza (ríos, quebradas, montaña, mesa cafetera)",
        texto: [
          "Los ríos grandes del macroterritorio —Cauca, La Vieja y sus afluentes— recogen agua de innumerables quebradas; en caminata es frecuente oírlas antes de verlas. Entre fincas, el camino serpentea ribera o mata de sombra: es paisaje cafetero UNESCO en estado puro.",
          "La línea alta alterna bosque andino y páramo según municipio; más abajo, el encaje es cafetal + bosque de galería. Esa mezcla es la que el libro promete; nuestra tarea es no degradarla: cerrar portones, no tirar basura y obedecer cierres de sendero.",
        ],
      },
      {
        titulo: "Hoy podés: ideas con nombre y mapa",
        lista: [
          "Valle de Cocora (Salento, Quindío): hacer la caminata clásica por palmas de cera y bosque de niebla; hay circuito largo con subida hacia casas de colibríes (Acaime) y vuelta por bosque, o atajos más cortos si el cuerpo o el tiempo aprietan —consultar en la plaza por estado del barro y la niebla.",
          "Miradores de Filandia, Salento o Pijao: salir al atardecer para ver la cadena cafetera sin sol de frente; anotar en el cuaderno cuál quedó mejor con nubes.",
          "Termales de Santa Rosa de Cabal (Risaralda): combinar agua caliente con vista a montaña si querés día mixto naturaleza–descanso (llevar impermeable aunque no llueva al salir).",
          "Caminos veredales entre Apía, Marsella o Belén de Umbría: preguntar por trochas cortas al río o a miradores informales; en temporada de lluvia el cauce crece y el barro manda.",
          "Desde el occidente caldense (p. ej. Viterbo como base del cuaderno): encadenar un amanecer en pueblo con ruta en chiva o vehículo hacia un mirador seco, sin exigirte en el mismo día el circuito más largo del Quindío.",
        ],
      },
      {
        titulo: "Paisajes que marcan el PCC",
        lista: [
          "Palmas y valle profundo: Cocora sigue siendo el ícono; calzado con tacos, bastón si llueve y agua doble.",
          "Lomas cafeteras: curvas entre Pereira, Apía y Santa Rosa, o entre Armenia y los pueblos del Quindío — cada mirador informal tiene su hora dorada distinta.",
          "Quebradas: cruzar con precaución; si el agua sube, no insistir: repetir otro día es mejor que forzar un vado.",
        ],
      },
      {
        titulo: "Bosques, niebla y biodiversidad",
        texto: [
          "El bosque húmedo montano filtra niebla y da refugio a aves y anfibios; en muchos senderos entrás y salís de propiedad privada —el “cerrar la tranquera” es parte del oficio de caminar acá.",
          "Zonas de páramo o reserva natural tienen reglas duras (basura, fogatas, ruido); investigá antes si hace falta reserva o guía obligatoria.",
        ],
      },
      {
        titulo: "Rutas con más desnivel (sin autoprometerte cumbre a cualquier costo)",
        lista: [
          "Si te tienta subir más que el paseo de Cocora: evaluar clima, niebla y oxigenación; una chaqueta cortaviento y tiempo extra valen más que el récord.",
          "En cordones hacia páramo (algunos accesos en Risaralda o Caldas) confirmar punto de ingreso autorizado; nunca improvisar trocha cerrada.",
          "Bajada: peso en rodillas; bastones o paso corto en lodo salvan trekking.",
        ],
      },
      {
        titulo: "Miradores: check-list corta",
        lista: [
          "Mirar si el camino es jeep, caminata corta o mixto; en feriado el parqueo es noticia aparte —salir temprano.",
          "Capa de abrigo sí o sí; el viento en cresta baja la temperatura diez grados sin avisar.",
          "Amanecer y atardecer: mejor luz y menos contraste; trípode liviano si fotografiás con poca luz.",
        ],
      },
      {
        titulo: "Aves, silencio y ritmo del día",
        lista: [
          "Madrugar: canto y movimiento; binoculares y silencio valen más que playlist; si usás app de cantos, volumen mínimo y lejos de nidos.",
          "Hidratación en valle soleado: llevar más agua de la “lógica” cuando el tramo no tiene sombra.",
          "Plan triple suave: mañana sendero, tarde pueblo o finca, cierre en mirador —así el folleto respira y el cuerpo también.",
        ],
      },
    ],
    enlacesUtiles: [
      { etiqueta: "Categoría PCC en Wikimedia (referencia visual)", url: "https://commons.wikimedia.org/wiki/Category:Paisaje_Cultural_Cafetero" },
    ],
    fotos: [],
  },
  {
    num: 3,
    resumen:
      "Aventura con altitud y reglas claras: Nevado del Ruiz, páramos y rutas duras vistas desde Risaralda o Manizales — qué llevar, dónde consultar antes de salir y por qué en el PCC “paraje privilegiado” también significa respetar cierre y guía cuando toca.",
    introduccion:
      "El folleto promete “grandes aventuras en parajes privilegiados”; en el cuaderno lo traducimos sin romanticismo hueco. En el Eje Cafetero eso suele rimar con vertiente andina — niebla que entra en cinco minutos, sol fuerte cuando bajás a la mesa cafetera y caminos donde el Nevado del Ruiz sigue marcando horizonte y memoria entre Caldas y Risaralda. Si salís desde Pereira o Dosquebradas, igual que si anclás una noche en Manizales o Chinchiná, la clave es la misma: distinguir paseo de valle (capítulo 2) de jornada de altura con parque, frío real y cuerpo que tarda en adaptarse. Abajo van dónde mirar información seria, qué empacar y cuándo preferir la vuelta al auto o al pueblo — sin inventar operadores ni marcas: guías y reservas las cruzás con lo oficial y con lo que recomiende en plaza quien vive el corredor.",
    secciones: [
      {
        titulo: "Qué cuenta como “aventura” acá (y qué no)",
        texto: [
          "Un mirador al atardecer en Filandia o un termal en Santa Rosa son experiencias fuertes emocionalmente, pero no el mismo desafío que subir a zona de páramo o acercarte a ecosistemas de Parques Nacionales Naturales. Este capítulo es para el segundo menú: más frío, más desnivel, más incertidumbre meteorológica.",
          "En el territorio UNESCO el paisaje cafetero convive con cuencas altas; mezclar ambos en un solo día es posible, pero en el blog conviene anotar horas reales y no solo kilómetros — el tráfico entre departamentos o un aguacero en la vía cambian el plan.",
        ],
      },
      {
        titulo: "Altitud, cuerpo y ritmo (sin heroísmo innecesario)",
        lista: [
          "A mayor altitud: menos oxígeno aparente, más cansancio al subir escalones; hidratación constante y paso pausado valen más que apurar el cronómetro.",
          "Capas obligatorias: sudadera o polar bajo cortaviento; guantes livianos y gorro salvan la tarde si la niebla baja la sensación térmica diez grados.",
          "Si venís del nivel del mar, considerá dos o tres días en meseta cafetera (Pereira, Armenia, Manizales) antes de exigirte la salida más dura — el cuerpo nota la diferencia.",
          "Dolor de cabeza fuerte, náuseas o mareo no son “normalidad” que se ignore: bajar, abrigar y evaluar con quien pueda orientarte en el lugar o con servicio médico según gravedad.",
        ],
      },
      {
        titulo: "Nevado del Ruiz y entorno: leer antes de soñar con cumbre",
        texto: [
          "El Ruiz es referencia viva en el paisaje entre Caldas y Risaralda: lo ves en conversaciones, en relatos y en la misma silueta cuando el clima deja. Cualquier visita o travesía asociada al Parque Nacional Natural de los Nevados debe alinearse con regulación vigente, puntos de ingreso autorizados, horarios y —cuando corresponda— servicio de guía o operación autorizada. Improvisar sendero o cruzar cierre no es “aventura”, es riesgo innecesario para vos y para quien te tiene que buscar.",
          "Desde el cuaderno: anotá en bitácora la fecha, la ruta oficial consultada y el teléfono de la oficina o canal que usaste; en temporadas de lluvia o ceniza la respuesta puede cambiar de un día al otro.",
        ],
      },
      {
        titulo: "Paramillos, páramo y bosque alto: dónde y con qué mentalidad",
        lista: [
          "Accesos hacia páramo o bosque alto existen en varios municipios del eje; no todos son “selfie y vuelta”: algunos exigen reserva, guía o tiempo de rodada largo hasta el punto de partida.",
          "Niebla densa reduce visibilidad: conviene ir en grupo conocido, con frontales y referencia GPS offline si la señal falla.",
          "Suelo altoandino suele estar húmedo o afelpado — tacos en el calzado y bastones si tus rodillas no están acostumbradas a bajar largo.",
          "Basura zero: en ecosistemas lentos cada colilla o envoltorio tarda años en “desaparecer”; el PCC se juega también en ese detalle.",
        ],
      },
      {
        titulo: "Qué llevar en mochila (check-list día completo)",
        lista: [
          "Agua en cantidad brutal para el tamaño del grupo; filtros químicos o pastillas si conocés fuente confiable en ruta.",
          "Snacks densos — frutos secos, arepa envuelta, chocolate — sobre todo si el metabolismo acelera con el frío.",
          "Chaqueta impermeable seria, no solo “rompevientos de moda”: en cresta llueve diagonal.",
          "Plástico para mochila/electrónicos y una bolsa para basura propia hasta el siguiente bote.",
          "Dinero efectivo disperso por si ATM falla regresando a pueblo chico desde corredores largos.",
        ],
      },
      {
        titulo: "Desde Viterbo, Pereira o el Quindío: enlazar alto y café abajo",
        texto: [
          "El folleto invita al contraste; nuestra manera favorita es no matar la jornada: una salida pesada por la mañana y café de especialidad en pueblo por la tarde, o día exclusivo de altura y día siguiente tranquilo entre fincas o mercado.",
          "Si combinás Risaralda con Caldas o Quindío, tené presente feriados y puentes sobre el La Vieja o el Cauca: dos horas mapa pueden ser cuatro autopista cuando todos salen igual.",
        ],
      },
      {
        titulo: "Seguridad grupal que sí funciona",
        lista: [
          "Una persona lleva la decisión final del grupo ante clima (“se vuelve”) sin discusión eterna.",
          "Avisá a alguien fuera del sendero la ruta aproximada y la hora de retorno esperada.",
          "Evitá trochas improvisadas vistas en video sin verificar estado y legalidad esa semana.",
          "Si aparece fauna silvestre — aves grandes, mamíferos — distancia silenciosa; no alimentación, no selfies forzadas.",
        ],
      },
      {
        titulo: "Cuando mejor no salir",
        texto: [
          "Inundaciones súbitas, vientos muy fuertes, alertas institucionales o simple sensación colectiva de “esto no pinta”: el cuaderno honra también el día que se aplaza la aventura por un libro en un café del Eje Cafetero o por un recorrido bajo mirador seco.",
        ],
      },
    ],
    enlacesUtiles: [
      { etiqueta: "Parques Nacionales Naturales de Colombia", url: "https://www.parquesnacionales.gov.co/" },
      { etiqueta: "Paisaje Cultural Cafetero (contexto oficial)", url: "https://paisajeculturalcafetero.org.co/" },
    ],
    fotos: [],
  },
  {
    num: 4,
    resumen:
      "Manos que arman el PCC: bahareque, tapia, teja cocida en horno de barro, canastos y tejidos de fibra — dónde pregunta hacerse en plaza de Filandia, Salento o Marsella y cómo armar día de taller tranquilo más café de especialidad cuando el tiempo alcanza.",
    introduccion:
      "Aprender sobre oficios auténticos es bajar la velocidad. El folleto lo resume en pocas páginas; nosotros lo abrimos en cuaderno: el paisaje cultural no es solo vereda vista desde bus, es vivienda con pared que respira tierra y palos, techo de teja que llegó en cargamento familiar y sombrero de trabajo que cambió menos que el modelo de celular del visitante. En Apía, Chinchiná, Quimbaya o Pijao encontrás combinaciones distintas de lo mismo — memoria práctica pasada entre vecinos — y en ciudad puerta mercados grandes donde igual aparecen piezas dispersas entre queso y papa. Nada de nombres de negocio como verdad: ubicación, tipo de oficio y disposición a escuchar bastan para que tu bitácora tenga texto propio después de cada visita.",
    secciones: [
      {
        titulo: "Bahareque, tapia y casas que enseñan sin cartel",
        texto: [
          "Bahareque (entramado de palo relleno y recubierto según zona) y tapia (compactación de tierra en encofrados) aparecen discretas detrás del capó blanco o el color nueva en fachadas de pueblo. En algunas veredas todavía se reparan así; antes de retratar cercas vivas y portadas, preguntá: muchas puertas abren historia y otras derecho privado donde la cámara no invita.",
          "Si el día es de fotografía urbana combiná con horario dorado desde miradores públicos conocidos — Filandia, Salento — y dejá la calle residencial solo para admiración silenciosa a menos que alguien te invite adentro.",
        ],
      },
      {
        titulo: "Teja de barro, hornos y piezas que llevan marca de dedo",
        lista: [
          "En corredores rurales o barrios más viejos a veces se escucha antes el golpe liviano sobre molde que la conversación sobre “artesanía” en redes — acercate con cortesía, comprá si gusta la pieza con imperfección consciente (eso es trabajo humano).",
          "Floreros, comales, pocillos rusticos son recuerdos que no compiten en peso con la lonchera cuando viajás liviano.",
          "Preguntá si el taller aguanta una demostración rápida: muchas personas explican con orgullo proceso de secado y cocción cuando el día no viene apretado.",
        ],
      },
      {
        titulo: "Fique, cestería y fibras entre cafetales",
        texto: [
          "Canastos, esteras y bolsas que ruedan en feria pueden venir del municipio vecino sin que el etiquetado lo grite — por eso pregunamos “¿de acá elaboran?” y anotamos la respuesta antes de llamarlo “tradición de Salento” en el blog si en realidad nació tres pueblos al lado.",
          "El fique tiene presencia montañosa conocida más allá del preciso trazo UNESCO; igual que otros usos locales de fibra, merece foto de proceso si te la muestran, no solo foto de souvenir.",
        ],
      },
      {
        titulo: "Textil casero y agujas lentas",
        lista: [
          "Tejidos en bastidor o crochet en venta plaza chica: tiempo de mujer u hombre en salón o corredor, no tiempo de máquina industrial — el valor discute con paciencia corta pero respeta la conversación sobre puntadas.",
          "Chalinas, ponchos livianos, individuales: llevar efectivo disperso porque el datáfono puede fallar en domingo después de misa cuando la feria está llena.",
        ],
      },
      {
        titulo: "La feria municipal y el mercado grande: mismo cuaderno, dos ritmos",
        lista: [
          "Mercado cubierto Pereira-Manizales-Armenia: llegar temprano para mezcla de plaza de abastos y puestito de manualidades en pasillo donde la luz sirve mejor que flash.",
          "Dominical en plaza de pueblo pequeño: charla prolongada probable; combiná compra corta un día y visita más larga otro día si querés historia completa detrás del objeto.",
          "Iglesia o parque cercano funcionan como ancla antes-después si armás foto documental liviana.",
        ],
      },
      {
        titulo: "Casa de la cultura, biblioteca municipal y muestras esporádicas",
        texto: [
          "En muchos municipios del eje estos espacios anuncian clases cortas — barro, papel, música — cuando hay presupuesto o voluntariados; antes de esperar carteles perfectos revisá páginas oficiales del municipio o la ventanilla de turismo cuando exista.",
          "Fusionar ese bloque mañana con cafés de especialidad plaza de tardes permite descansar manos después de estar en modo “escucha” constante.",
        ],
      },
      {
        titulo: "Oficio + gastronomía: armar día sin burnout",
        lista: [
          "Un taller o recorrido de barro teja + lonchera en sala de plaza o santafereño en panadería cercana recupera pies y tema de conversación fresco.",
          "Evitamos combinar mismo día taller lento más caminata de Cocora completa más ruta lluviosa: la memoria se queda sólo en cansancio, no en oficio.",
        ],
      },
      {
        titulo: "Para la bitácora: qué anotamos tras cada encuentro",
        lista: [
          "Nombre genérico del lugar (sector, vereda si la dieron), técnica explicada con palabras de la persona que enseña, tiempo aproximado de una pieza y precio pagado.",
          "Foto cerrada solo si hubo consentimiento verbal claro.",
          "Pregunta que quedó en el aire para la próxima visita.",
        ],
      },
    ],
    enlacesUtiles: [{ etiqueta: "Paisaje Cultural Cafetero (patrimonio vivo)", url: "https://paisajeculturalcafetero.org.co/" }],
    fotos: [],
  },
  {
    num: 5,
    resumen:
      "Corredores del PCC en práctica: de Dosquebradas a Salento, de Risaralda al Quindío o al occidente caldense desde Viterbo — un eje por día, paradas que lean cafetal y plazuela, más el mapa oficial y nuestra lista viva más abajo en la página.",
    introduccion:
      "“Rutas del Paisaje Cultural Cafetero” en el folleto dibuja el país cafetero como telaraña de líneas sobre relieve; en carretera el relieve manda igual que el peatón improvisado después de puente festivo. Este capítulo es hoja logística con calma: cómo usar el mapa institucional de MinCIT/Fontur junto al GPS cuando la cobertura falta entre Apía y Belén de Umbría, cómo ordenar día para no ver solo línea amarilla, y cómo enlazar ese mapa mental con la lista de pendientes que muestra esta misma página cuando sumamos municipios pendientes en el código del proyecto. Nosotras y nosotros salimos de Dosquebradas: el corredor Risaralda–La Vieja–Quindío lo sentimos tanto en panorama como en atasco cuando Pereira-Armenia se congestiona tras carnaval estudiantil o puente largo.",
    secciones: [
      {
        titulo: "Un eje por día (y tres paradas cortas que valen más que velocidad máxima)",
        texto: [
          "Ejemplo vivo del cuaderno: si el día es Quindío, anclá Valle de Cocora o Filandia o Pijao y dejá el resto como subrayado borroso — el visitante nuevo sobreestima radios y subestima charla plaza + café de especialidad + media hora esperando fotos doradas cuando la niebla quiere protagonismo.",
          "Si venís desde occidente caldense tipo Viterbo hacia centro del PCC, suele tener sentido no cruzarte el mismo día con salida alta montaña pesada salvo equipo experimentado.",
        ],
      },
      {
        titulo: "Leer desde el auto: puente viejo, río grande, bifurcación de cafetal",
        lista: [
          "Pasada la ciudad puerta aparece rápido el patrón cafetal con sombra y bosque de galería; conviene parar sólo donde haya bermas claras o miradores habilitados, no frenar cada curva fotogénica.",
          "Pueblos con casco querido como Salento, Filandia, Marsella o el anillo cercano de Armenia tienen ingresos diferentes según llegues por norte, sur u oriente: eso marca si la primera impresión es plaza, mural o mercado cercano.",
          "Un puente sobre quebrada o afluente del Cauca o La Vieja suele definir la banda sonora del trayecto; si el letrero trae nombre, lo pasamos al cuaderno.",
        ],
      },
      {
        titulo: "Cuatro departamentos, cuatro pulsos dentro del mismo folleto",
        lista: [
          "Risaralda permite anclarse en Pereira o Dosquebradas y subir carretera hacia Apía, Marsella o Santa Rosa cuando queremos menos “kilómetro de ciudad” y más lomo de cafetal antes de cenar.",
          "El Quindío concentra filas cocorinas y plaza estudiantil de Salento pero municipios como Génova, Pijao o Quimbaya pueden devolver un domingo con mesa de plaza menos apretada cuando el centro colapsó.",
          "Caldas aporta Manizales como ciudad-ancla y rutas hacia zonas nevadas vistas; Chinchiná o Neira combinan bien con cafés en plaza y noches menos ruidosas que la capital en sus picos de semestre.",
          "El norte del Valle del Cauca aparece dentro del PCC únicamente en las zonas que el listado oficial delimita: conviene contrastar ese mapa con la ficha UNESCO antes de asumir que cualquier panorama bonito vallecaucano queda igual bajo la etiqueta del libro patrimonial.",
        ],
      },
      {
        titulo: "Mapa general MinCIT/Fontur y apps cuando la antena falta",
        texto: [
          "El proyecto comparte en SlideShare un mapa general de rutas del PCC — descargarlo a la tableta antes de entrar zonas donde el dato celular aparece como “fantasma”; cruzarlo con el folleto impreso cuando todavía lo llevamos en la guantera nos evita debates de sillín sobre qué bifurcación tomaba el diagrama institucional.",
          "Dos apps de navegación a veces proponen ruta menos barrosa en temporada de lluvias: igual corroboramos con quien esa semana vino por la trocha desde una bomba solvente conocida sobre la troncal.",
        ],
      },
      {
        titulo: "Feriados: jeep, camioneta propia u horarios que no compiten con todos",
        lista: [
          "Chivas o jeepeg programadas hacia zonas cercanas Cocora pueden ser día distinto al mismo sendero versus ir en vehículo particular — menos paradas libres, pero menos conductor sólo revisando pendiente desde el celular.",
          "Parqueadero cerca del Valle de Cocora en temporada alta suele definir madrugón o combinación día con lluvia moderada cuando la concurrencia afloja algo; siempre vale anotarlo con fecha porque el tiempo real marca la agenda mejor que cualquier programa escrito en casa.",
          "Efectivo repartido en bolsillo y bolso porque en corredores rurales o festivo todavía lastima llegar sólo digitales cuando el punto de cobro falla.",
        ],
      },
      {
        titulo: "Lista viva debajo del capítulo (pendientes hasta convertirlas en viaje)",
        texto: [
          "Un poco más abajo en esta misma entrada aparece nuestra tabla de municipios pendientes según vivimos actualmente el sitio: tachar uno del código coincide con plaza ya pisada, fotografiada y contada en la bitácora de la portada.",
          "Una lista vacía no ordena apurarnos: es permiso para pensar el próximo domingo con calma; la plantilla de la página espera sin juzgar hasta que aparezca otro municipio que anotar.",
        ],
      },
      {
        titulo: "Bitácora de ruta: qué registrar en corrido PCC",
        lista: [
          "Registrar horas de salida y llegada, qué navegador usamos, tacos de feria, combustible y efectivo antes del siguiente surtidor cómodo rural.",
          "Plato improvisado al borde de carretera (arrechería santafereana, huevos con algo, arepas): el sabor de camino suele sostener el relato igual que foto noche llegada ciudad fría.",
          "Si alguien comparte nombre de camino pero pide discreción con ubicación exacta, ese pacto vale más que etiquetar la foto pixel a pixel.",
        ],
      },
    ],
    enlacesUtiles: [
      { etiqueta: "Mapa general de rutas PCC (Slideshare referencia)", url: "https://es.slideshare.net/slideshow/mapa-general-rutas-del-paisaje-cultural-cafetero-de-colombia-mincit-fontur/148455217" },
      { etiqueta: "Portal Paisaje Cultural Cafetero", url: "https://paisajeculturalcafetero.org.co/" },
    ],
    fotos: [],
  },
  {
    num: 6,
    resumen:
      "Radio oficial del PCC sobre mapas vivos del sitio: cómo usar la sección Municipios, qué distingue el núcleo UNESCO de pueblos vecinos igual fotogénicos — p. ej. Viterbo en nuestro cuaderno — y cómo leer los cuatro departamentos sin tratarlos como tabla de examen.",
    introduccion:
      "El folleto usa «Municipios» para ubicar población y paisaje dentro de los límites del PCC que reconoció UNESCO: casco vivo, plaza, beneficio cercano — no es colección ornamental sino capítulo que permite leer bien el atlas del libro. Nosotras y nosotros lo combinamos desde Dosquebradas con la tabla de fichas que está en la portada del mismo sitio: primero ubicarnos tranquilos ante la pantalla, después salir camino con paraguas, conversación plaza y foto propia cuando el aguacero o el sol dorado marca domingo siguiente.",
    secciones: [
      {
        titulo: "Núcleo UNESCO contra pueblo cercano igual de encantador",
        texto: [
          "El listado institucional traza límites técnicos: hay municipios colindantes igual fotogénicos que no están bajo esa etiqueta oficial y los seguimos amando igual — Viterbo en occidente caldense aparece así en nuestro cuaderno, ancla práctica antes subir otros corredores.",
          "Beneficio práctico: entender esa frontera institucional ordena presupuesto y expectativas; no por eso dejamos de visitar otros pueblos hermosos del eje fuera núcleo, sólo ubicamos mejor qué relato cuenta como «dentro PCC» según oficial.",
        ],
      },
      {
        titulo: "Cuatro departamentos: memorizar menos, ubicarse más",
        lista: [
          "Risaralda: Pereira–Dosquebradas suelen ser entrada ágil desde nuestro mapa habitual hacia Santa Rosa de Cabal, Marsella o Apía — mezcla de vía, lomas y vistas cuando el Ruiz asoma entre nubes.",
          "Quindío: Salento, Valle de Cocora, Filandia, Pijao o Génova según objetivo ese día — repartimos caminatas largas y plazas concurridas en jornadas distintas cuando podemos.",
          "Caldas: Manizales, Chinchiná o Neira con clima fresco y rutas hacia alta montaña; enlazar con noches en occidente caldense usando Viterbo como base del cuaderno aun cuando no figure igual en tabla núcleo UNESCO.",
          "Norte del Valle del Cauca sólo cuenta como PCC donde el atlas oficial dibuja el tramo incluido; conviene chequear ese listado antes de asumir que cada pueblo vallecaucano hermoso queda dentro del libro patrimonial.",
        ],
      },
      {
        titulo: "Viterbo y la etiqueta «Cuaderno»",
        texto: [
          "Hay pueblos donde dormimos antes de pegarle a Risaralda o al Quindío que no están bajo etiqueta PCC en el mismo renglón institucional; Viterbo, en occidente caldense, es el ejemplo recurrente por carretera y clima fresco.",
          "Marcarlos en el cuaderno evita lío con los amigos: la tabla oficial del PCC en pantalla cuenta una historia y el mapa de viaje puede incluir otros anclajes sin contradicción si las nombramos con claridad.",
        ],
      },
      {
        titulo: "Ficha antes de que la plaza te agarre empapado",
        lista: [
          "Ubicar el municipio en la portada, leer el resumen allí y contrastarlo con folleto o mapa MinCIT/Fontur si tenemos el papel abierto sobre la mesa.",
          "Recién después decidir noches cercanas plaza, si el domingo toca mercado o feria, y si el mismo día alcanza finca o café de especialidad sin apilar tres bloques pesados.",
          "Registrar en bitácora el tiempo real ese día — sol, aguacero, niebla, taco al salir — porque la charla plaza confirma o corrige los datos del mapa.",
        ],
      },
      {
        titulo: "UNESCO, portal PCC y folleto: cruzar las tres antes de repetir rumor",
        texto: [
          "La ficha del listado 1121 (UNESCO), el portal oficial del PCC y las páginas de municipios en el libro «Mil experiencias, un destino» trabajan mejor juntas que separadas; leer despacio esa tríada evita convertir cualquier rumor de redes en «verdad PCC».",
          "Esta página del sitio no reemplaza el documento institucional: cuenta cómo atamos ese mapa oficial con nuestra rutina desde Dosquebradas, la misma plaza húmeda y el tinto de la tarde.",
        ],
      },
    ],
    enlacesUtiles: [
      { etiqueta: "Ficha PCC — UNESCO (listado)", url: "https://whc.unesco.org/en/list/1121/" },
      { etiqueta: "Portal Paisaje Cultural Cafetero", url: "https://paisajeculturalcafetero.org.co/" },
    ],
    fotos: [],
  },
  {
    num: 7,
    resumen:
      "Para el clima café–montaña y los corredores entre Pereira, Armenia y Manizales: capas ante aguacero, efectivo cuando el datáfono falla, respeto en fincas que cruzamos y pausa después del taco festivo — mismo ritmo plaza, tinto y bitácora que en los otros capítulos, sin inventar negocios como hechos ciertos.",
    introduccion:
      "El folleto agrupa consejos de viaje; nosotras y nosotros los leemos desde Dosquebradas: el mismo día puede traer sol en el valle, niebla en la cresta, taco después de puente y peajes que hoy leen el datáfono y mañana conviene pagar en efectivo igual. Abajo va checklist de equipo, corredores, fincas y plazas, y ese espacio donde el PCC deja de ser solo asfalto: plaza húmeda, tinto al caer la tarde y conversación que alimenta la bitácora.",
    secciones: [
      {
        titulo: "Ropa por capas: meseta templada y cresta que enfría",
        lista: [
          "Remera liviana, buso, cortaviento o chaqueta que aguante viento húmedo — sirve desde miradores de Filandia hasta la niebla antes de cocorinar o desde Santa Rosa hacia zonas más frías cerca de Apía.",
          "Protector solar aunque el día arranque gris: unos minutos de sol filtrando niebla sobre altitud suficiente quema.",
          "Impermeable plegable y funda para bolso o cámara: entre lluvia en Pereira, barro en Cocora y orvallina en Apía humedece aunque lleves paraguas.",
        ],
      },
      {
        titulo: "Corredor Pereira–Armenia y cuando el taco no negocia",
        lista: [
          "Puentes festivos, carnaval estudiantil o semana larga: el corredor puede congestionarse; salir temprano o plan B sin culpa (plaza y tinto al día siguiente).",
          "Dos apps de navegación a veces proponen variante con menos barro en temporada de lluvias; confirmar con quien hizo el tramo esa semana ayuda más que el mapa solo.",
          "Señal inestable en desfiladeros: mapa offline guardado antes de vereda o tramo largo sin cobertura.",
        ],
      },
      {
        titulo: "Efectivo disperso cuando el mundo digital tropieza",
        lista: [
          "Mercados dominicales, ferias plazuela después de misa o algunos cobros sobre corredores rurales: el datáfono puede fallar aun cuando afiche “todas las tarjetas”.",
          "Mezcla de denominaciones pequeñas facilita peso fresco, taxis cortos o propina rápida sin discutir contra el tiempo cuando la fila dominical ya se enrolló.",
          "Apartar el billete grueso en bolso cerrado porque frente a parqueadero o mostrador muy llenos en temporada alta vale la misma distracción que en ciudad puerta.",
        ],
      },
      {
        titulo: "En plaza, finca y camino cafetero",
        lista: [
          "Pedir permiso antes de fotografiar patio o proceso de beneficio cerrado — portón echado y perros de finca no son foto libre redes.",
          "Respetar cultivo cercado, atravesar sólo donde convidan y cerrar la tranquera con la misma calma porque el día siguiente el vecino igual necesita trabajo en finca.",
          "Reservar catas, noches cercanas al Valle de Cocora o bases con salida madrugadora con semanas sobre ferias estudiantiles o Semana Santa evita madrugadas frustradas y rumor de plaza sin hueco.",
        ],
      },
      {
        titulo: "Hidratación, digestión y farmacia ciudad puerta",
        lista: [
          "Camino largo con niebla en Cocora, loma sobre Apía o sol fuerte antes de llegar mirador Filandia: el valle mismo no avisa cuánto sed trajiste hasta que subís primera cuesta siguiente.",
          "Sancocho abundante tras día entre mesa cafetera o vereda rinde mejor con dormir suficiente antes del madrugón hacia Cocora u otra loma exigente: digestión y rodillas igual agradecen la pausa.",
          "En Pereira, Manizales o Armenia encuentras digestivos rutinarios, antihistamínicos cuando viajas con alergias controladas o antibióticos de ciclo prolongado si la receta viaja física igual; ubicá antes una farmacia cerca del alojamiento y no confíes solo en marca de tu ciudad reproducida redes.",
        ],
      },
      {
        titulo: "Salud y calma PCC",
        texto: [
          "Encadenar salida madrugadora al Valle de Cocora, un almuerzo largo en vereda donde inviten bien y cerrar mirando el horizonte al atardecer en la misma jornada cansa igual rodillas que la voz; repartimos el cuaderno en varios días cuando el tiempo deja, buscando la misma calma que venían delineando los primeros capítulos del folleto y este mismo diario.",
          "Desde Dosquebradas preservamos ese respiro: plaza después del aguacero, tinto cerquita del atardecer y charlas con quien llega igual fincas vecinas porque allí mismo nació la bitácora con ese tono cálido de los primeros capítulos, sin hacer pasar rumor de marca inventada como dato cerrado.",
        ],
      },
    ],
    enlacesUtiles: [{ etiqueta: "Portal Paisaje Cultural Cafetero", url: "https://paisajeculturalcafetero.org.co/" }],
    fotos: [],
  },
  {
    num: 8,
    resumen:
      "Mercados de domingo, desayunos de plaza antes del sendero Cocora–Apía, loncheras al borde carretera y platos hogareños del eje Cafetero — mismo cuaderno que capítulos 1–2: nombres de municipios sí, rumor de marca famosa jamás como si fuera dato oficial.",
    introduccion:
      "Cierra «Mil experiencias» con la cocina tradicional nosotras y nosotros la tratamos igual que ese regreso a Dosquebradas: pan recién dorado, arrechería o santafereño caliente, mogolla, huevos con todo lo que pusieron en la sala, chocolatada espesa o chocolate de mesa cuando hace falta, tinto madrugón en plaza después del agua o finca con la misma conversación cercana; arroz, frijoles, sopas hogareñas, mondongo algunos fines de semana. Acá recomendamos sólo tipologías —mercado cubierto, feria de domingo, cafetería genérica, cafés de especialidad del pueblo— jamás nombres de negocio imaginados como verdades de guía.",
    secciones: [
      {
        titulo: "Mercados cerrados y plaza dominical (Pereira–Armenia–Chinchiná y pueblos chicos)",
        lista: [
          "Llegá temprano a los cubiertos grandes de ciudad puerta: el olor a queso campesino, cilantro y fruta de vereda vale más que cualquier lista influencer sin mapa.",
          "En Salento, Filandia, Marsella o plaza de Apía el domingo también se mezcla vestido de misa y lonchera improvisada; combiná compra corta con foto documental sin apurar al vendedor.",
        ],
      },
      {
        titulo: "Desayuno fuerte antes del barro o la niebla",
        lista: [
          "Arepa rellena huevo carne, calentao con arroz y fríjol, o chocolate con pan dulce rinden bien cuando el sendero Cocora o trocha Apía mojan el calzado.",
          "Un vaso de jugo natural en feria sirve de electrolitos baratos antes de subir; el cuerpo en altitud agradece calorías reales, no sólo snack industrial.",
        ],
      },
      {
        titulo: "Sopas, mondongo y mesa larga en finca o salón de pueblo",
        texto: [
          "Sancocho de gallina o pollo, mondongo con arroz y aguacate, fríjoles con chicharrón o hogao y ensalada — platos que repiten en Risaralda, Quindío y Caldas con matices domésticos. La clave del cuaderno es preguntar qué cortes usan hoy y si el caldo lleva papa criolla o yuca según lo que hubo en mercado.",
        ],
      },
      {
        titulo: "Lonchera borde carretera y arrecheros improvisados",
        lista: [
          "Entre Dosquebradas y el Quindío o hacia occidente caldense aparecen puestos honestos de huevos pericos, empanadas o arrecheras; detené el carro donde haya sombra y manos limpias antes que por estética de redes.",
          "Llevá servilletas y agua embotellada porque el condimento rinde y el dedo mancha logo del folleto igual que la camiseta.",
        ],
      },
      {
        titulo: "Dulces y confites de vitrina (sin caer en marcas inventadas)",
        lista: [
          "Arequipe, manjar blanco regional, jaleas de guayaba o mortiño en frascos de plaza — ideales para maleta si el vuelo permite peso dulce.",
          "Preguntá si el dulce fue hecho en casa o traído de cooperativa vecina; esa respuesta es mejor etiqueta que slogan colorido.",
        ],
      },
      {
        titulo: "Tinto, chocolate y después un filtrado en cafés de especialidad",
        texto: [
          "Cerramos con tinto amargo de termo o chocolatada espesa como cierran muchas familias de la región; cuando el cuerpo ya no pide más dulzor, un café de especialidad donde el barista quiera conversar cuenta la historia de origen lavado con el mismo celo que recomendamos en el capítulo 1 — sólo aquí aplicamos ese ojo gastronómico, sin etiquetar ningún establecimiento concreto que no hayamos vivido nosotras y nosotros.",
        ],
      },
      {
        titulo: "Qué registrar en la bitácora gastronómica",
        lista: [
          "Tipo de lugar (mercado cubierto, feria dominical, salón sobre la plaza o mesa larga en finca), cuál fue el plato protagonista y si la porción alcanzó después de caminar bajo lluvia o sol fuerte.",
          "Si algún cocinero menciona nombre de tienda escribilo tal cual él o ella lo dijo; jamás pegamos rumores de redes como si fueran carteles municipales verificados.",
        ],
      },
    ],
    enlacesUtiles: [
      {
        etiqueta: "Gastronomía de Colombia — contexto (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Gastronom%C3%ADa_de_Colombia",
      },
    ],
    fotos: [],
  },
];
