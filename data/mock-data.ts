import type { Prediction, ConfidenceLevel } from "@/components/prediction-card"

// Artículos
export const articles = [
  {
    id: "1",
    slug: "astros-victoria-clasico",
    title: "El Astros FC se impone en un Clásico vibrante y recupera el liderato",
    excerpt:
      "Un doblete de Rodríguez y un gol de Martín dieron la victoria al equipo azul en un partido lleno de emoción y alternativas.",
    content:
      "El Astros FC se impuso por 3-2 al Galaxia CF en un Clásico vibrante disputado en el Estadio Estrella, recuperando así el liderato de la Liga Estelar. El partido, que no defraudó las expectativas, estuvo marcado por las alternativas en el marcador y el gran nivel mostrado por ambos equipos.\n\nEl conjunto azul comenzó dominando el encuentro y se adelantó con un gol tempranero de Rodríguez tras una gran jugada colectiva. Sin embargo, el Galaxia CF reaccionó y logró empatar antes del descanso gracias a un potente disparo de Torres desde fuera del área.\n\nEn la segunda mitad, el partido se convirtió en un intercambio de golpes. Rodríguez volvió a adelantar al Astros con un remate de cabeza, pero Gómez igualó de nuevo el marcador desde el punto de penalti. Cuando parecía que el empate sería el resultado definitivo, Martín apareció en el minuto 87 para marcar el gol de la victoria con un disparo ajustado al palo.",
    category: "Fútbol",
    author: "Antonio López",
    date: "15 mayo, 2025",
    image: "/a9ed135f0ec651e1d84e1b144162e511.jpg",
    readTime: "5 min",
    tags: ["Astros FC", "Galaxia CF", "Liga Estelar", "Clásico"],
  },
  {
    id: "2",
    slug: "rivera-anuncia-retirada",
    title: "Rivera anuncia su retirada tras el Torneo Lunar: 'Es el momento de decir adiós'",
    excerpt:
      "El tenista, ganador de 22 Grand Slams, ha confirmado que el torneo lunar será el último de su carrera profesional.",
    content:
      "Miguel Rivera ha anunciado este jueves que se retirará del tenis profesional tras el próximo Torneo Lunar, competición que ha ganado en 14 ocasiones y que se disputará entre mayo y junio. El tenista, de 38 años, ha explicado en una rueda de prensa que 'es el momento de decir adiós' tras una carrera plagada de éxitos y también de lesiones.",
    category: "Tenis",
    author: "Elena Martínez",
    date: "12 mayo, 2025",
    image: "/tennis-player-clay-court.png",
    readTime: "4 min",
    tags: ["Miguel Rivera", "Torneo Lunar", "Tenis", "Retirada"],
  },
  {
    id: "3",
    slug: "veloz-victoria-ciudad-estelar",
    title: "Veloz domina en Ciudad Estelar y amplía su ventaja en el Mundial",
    excerpt: "El piloto logró su sexta victoria de la temporada en el Circuito Estelar, por delante de Rápido y Velóz.",
    content:
      "Marcos Veloz (Equipo Cometa) se impuso con autoridad en el Gran Premio de Ciudad Estelar de Fórmula Estelar, disputado en el Circuito Estelar, logrando así su sexta victoria de la temporada y ampliando su ventaja al frente del Mundial de pilotos.",
    category: "Fórmula Estelar",
    author: "Roberto García",
    date: "10 mayo, 2025",
    image: "/f1-verstappen-redbull-barcelona.png",
    readTime: "3 min",
    tags: ["Fórmula Estelar", "Marcos Veloz", "Equipo Cometa", "GP Ciudad Estelar"],
  },
  {
    id: "4",
    slug: "estrellas-convocatoria-copa",
    title: "Del Monte anuncia la lista de Estrellas para la Copa Continental con varias sorpresas",
    excerpt:
      "El seleccionador ha dado a conocer los 26 jugadores que disputarán el torneo continental, con la inclusión de varios jóvenes talentos.",
    content:
      "Pablo Del Monte, seleccionador de Estrellas, ha anunciado este viernes la lista de 26 jugadores que representarán a Estrellas en la próxima Copa Continental. La convocatoria incluye varias sorpresas, como la presencia de jóvenes talentos que han destacado esta temporada en sus respectivos equipos.",
    category: "Fútbol",
    author: "Antonio López",
    date: "8 mayo, 2025",
    image: "/9c9829bb8f02431befdf951f058ca6d5.jpg",
    readTime: "4 min",
    tags: ["Selección Estrellas", "Copa Continental", "Pablo Del Monte", "Fútbol"],
  },
  {
    id: "5",
    slug: "galaxia-fichaje-estrella",
    title: "El Galaxia CF cierra el fichaje de la estrella norteña por 120 millones",
    excerpt:
      "El club blanco ha llegado a un acuerdo con el Cometas para el traspaso del delantero, que firmará por cinco temporadas.",
    content:
      "El Galaxia CF ha cerrado el fichaje de la estrella norteña del Cometas por 120 millones de euros, según han confirmado fuentes cercanas a la negociación. El delantero, que quedará libre el próximo 30 de junio, firmará un contrato por cinco temporadas con el club blanco.",
    category: "Fútbol",
    author: "Antonio López",
    date: "5 mayo, 2025",
    image: "/903d13835e63a2cf10fa2d92744b3742.jpg",
    readTime: "3 min",
    tags: ["Galaxia CF", "Fichajes", "Cometas", "Liga Estelar"],
  },
  {
    id: "6",
    slug: "astros-basket-campeon-liga-cosmica",
    title: "El Astros Basket conquista la Liga Cósmica tras una final épica ante el Meteoros",
    excerpt:
      "El equipo azul logró su tercera corona continental tras imponerse por 82-80 en un partido que se decidió en los últimos segundos.",
    content:
      "El Astros Basket se proclamó campeón de la Liga Cósmica de baloncesto tras derrotar al Meteoros por 82-80 en una final épica disputada en Ciudad Estelar. El equipo azul, dirigido por Juan Estrella, logró así su tercera corona continental tras un partido que se decidió en los últimos segundos.",
    category: "Baloncesto",
    author: "Elena Martínez",
    date: "2 mayo, 2025",
    image: "/951255e2af8f3e866b21dd0977d17b43.jpg",
    readTime: "5 min",
    tags: ["Baloncesto", "Astros Basket", "Liga Cósmica", "Meteoros"],
  },
]

// Entrevistas
export const interviews = [
  {
    id: "1",
    slug: "entrevista-luna-astros",
    title: "Luna: 'Quiero ganar la Copa Estelar con el Astros, es mi gran sueño'",
    excerpt:
      "El centrocampista repasa su trayectoria, habla de sus objetivos y analiza el presente y futuro del Astros FC en una entrevista exclusiva.",
    person: "David Luna",
    role: "Centrocampista del Astros FC",
    interviewer: "Antonio López",
    date: "14 mayo, 2025",
    image: "/futbolista-entrevista.png",
    bio: "David Luna (Ciudad Norte, 2002) es uno de los centrocampistas más talentosos de su generación. Formado en el Cometas del Norte, llegó al Astros FC en 2020 y rápidamente se convirtió en una pieza clave del equipo. Internacional con Estrellas, ha sido reconocido con el premio Joven Estrella y el Trofeo Promesa.",
  },
  {
    id: "2",
    slug: "entrevista-estrella-entrenador",
    title: "Juan Estrella: 'Estamos construyendo un proyecto ganador a largo plazo'",
    excerpt:
      "El entrenador del Astros FC analiza la temporada, habla de la evolución del equipo y desvela las claves de su método de trabajo.",
    person: "Juan Estrella",
    role: "Entrenador del Astros FC",
    interviewer: "Elena Martínez",
    date: "10 mayo, 2025",
    image: "/futbol-entrenador.png",
    bio: "Juan Estrella (Ciudad Sur, 1980) es uno de los centrocampistas más laureados de la historia del fútbol. Tras una exitosa carrera como jugador en el Astros FC y el Estrellas del Norte, inició su trayectoria como entrenador en el club norteño antes de regresar al Astros para dirigir al primer equipo en 2021.",
  },
  {
    id: "3",
    slug: "entrevista-sol-tenista",
    title: "Carlos Sol: 'Mi objetivo es ser el número uno durante muchos años'",
    excerpt:
      "El tenista habla de sus ambiciones, su preparación y cómo gestiona la presión de ser una de las grandes estrellas del circuito.",
    person: "Carlos Sol",
    role: "Tenista profesional",
    interviewer: "Roberto García",
    date: "8 mayo, 2025",
    image: "/tennis-player-interview.png",
    bio: "Carlos Sol (Ciudad Este, 2003) es uno de los tenistas más prometedores de la actualidad. A su corta edad, ya ha conquistado varios títulos de Grand Slam y ha alcanzado el número uno del ranking mundial, convirtiéndose en el jugador más joven de la historia en lograrlo.",
  },
  {
    id: "4",
    slug: "entrevista-del-monte-seleccionador",
    title: "Pablo Del Monte: 'Tenemos una generación de futbolistas extraordinaria'",
    excerpt:
      "El seleccionador de Estrellas analiza las opciones en la Copa Continental y habla del proceso de renovación que ha llevado a cabo desde su llegada al cargo.",
    person: "Pablo Del Monte",
    role: "Seleccionador de Estrellas",
    interviewer: "Antonio López",
    date: "5 mayo, 2025",
    image: "/218bacb27d66e1894061c52a21f84190.jpg",
    bio: "Pablo Del Monte (Ciudad Oeste, 1961) es el actual seleccionador de la selección de Estrellas de fútbol. Tras una dilatada carrera como jugador y entrenador, asumió el cargo en 2022 tras el Mundial Estelar, después de haber dirigido con éxito a las categorías inferiores de la selección.",
  },
]

// Predicciones
export const predictions: Prediction[] = [
  {
    match: "Astros FC vs. Galaxia CF",
    date: "20 mayo, 2025",
    prediction: "Victoria del Astros FC (2-1)",
    odds: "2.10",
    confidence: "Alta" as ConfidenceLevel,
    expert: "Antonio López",
  },
  {
    match: "Cometas vs. Meteoros FC",
    date: "21 mayo, 2025",
    prediction: "Empate (1-1)",
    odds: "3.25",
    confidence: "Media" as ConfidenceLevel,
    expert: "Elena Martínez",
  },
  {
    match: "Estrellas CF vs. Planetas Club",
    date: "22 mayo, 2025",
    prediction: "Victoria del Planetas Club (0-2)",
    odds: "2.75",
    confidence: "Alta" as ConfidenceLevel,
    expert: "Roberto García",
  },
  {
    match: "Nebulosa FC vs. Satélites CF",
    date: "23 mayo, 2025",
    prediction: "Ambos equipos marcan",
    odds: "1.85",
    confidence: "Alta" as ConfidenceLevel,
    expert: "Antonio López",
  },
  {
    match: "Órbita FC vs. Lunas CF",
    date: "24 mayo, 2025",
    prediction: "Más de 2.5 goles",
    odds: "1.95",
    confidence: "Media" as ConfidenceLevel,
    expert: "Elena Martínez",
  },
]

// Titulares de noticias
export const newsHeadlines = [
  "ÚLTIMA HORA: El Astros FC se impone en un Clásico vibrante y recupera el liderato",
  "Rivera anuncia su retirada tras el Torneo Lunar: 'Es el momento de decir adiós'",
  "Veloz domina en Ciudad Estelar y amplía su ventaja en el Mundial",
  "Del Monte anuncia la lista de Estrellas para la Copa Continental con varias sorpresas",
  "El Galaxia CF cierra el fichaje de la estrella norteña por 120 millones",
  "El Astros Basket conquista la Liga Cósmica tras una final épica ante el Meteoros",
  "Sol se corona en Ciudad Lunar y llega al Torneo Estelar como favorito",
  "El Cometas renueva a su capitán hasta 2027",
  "La selección de Estrellas de baloncesto anuncia la prelista para los Juegos Estelares",
  "El Nebulosa hace historia y se clasifica para la Copa Estelar",
]
