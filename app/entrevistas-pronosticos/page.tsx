"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { CalendarIcon, ChevronDown, ChevronUp, Search, User, Tag } from "lucide-react"

// Definimos los tipos para las entrevistas con pronósticos
interface EntrevistaPrediction {
  match: string
  prediction: string
  odds: string
  confidence: "Alta" | "Media" | "Baja"
  explanation: string
}

interface Entrevista {
  id: string
  deportista: string
  rol: string
  equipo: string
  deporte: string
  fecha: string
  imagen: string
  titulo: string
  introduccion: string
  preguntas: {
    pregunta: string
    respuesta: string
  }[]
  predicciones: EntrevistaPrediction[]
  tags: string[]
}

// Datos de ejemplo para las entrevistas
const entrevistas: Entrevista[] = [
  {
    id: "1",
    deportista: "David Luna",
    rol: "Centrocampista",
    equipo: "Astros FC",
    deporte: "Fútbol",
    fecha: "15 mayo, 2025",
    imagen: "/futbolista-entrevista.png",
    titulo: '"El Clásico será decisivo para el título de Liga"',
    introduccion:
      "David Luna, centrocampista del Astros FC, nos habla sobre el próximo Clásico contra el Galaxia CF y comparte sus pronósticos para los próximos partidos de la Liga Estelar.",
    preguntas: [
      {
        pregunta: "¿Cómo afronta el equipo el Clásico de este fin de semana?",
        respuesta:
          "Lo afrontamos con mucha ilusión y responsabilidad. Sabemos que es un partido que puede marcar la temporada, especialmente porque estamos empatados a puntos en la clasificación. El equipo está trabajando muy bien, con intensidad en los entrenamientos y concentración máxima. Estos partidos son diferentes a todos los demás y hay que jugarlos con cabeza, pero también con corazón.",
      },
      {
        pregunta: "¿Qué opinas del momento actual del Galaxia CF?",
        respuesta:
          "Es un gran equipo con jugadores de mucho nivel. Han tenido algunos altibajos esta temporada, pero en los últimos partidos están mostrando un nivel muy alto. Su centro del campo es probablemente su punto fuerte, con jugadores que controlan muy bien el ritmo del partido. Tendremos que estar muy atentos y tratar de imponer nuestro estilo de juego.",
      },
      {
        pregunta: "¿Crees que este Clásico decidirá el título de Liga?",
        respuesta:
          "No decidirá matemáticamente el título porque aún quedarán varios partidos, pero psicológicamente puede ser un golpe importante. Quien gane saldrá muy reforzado para el tramo final. Dicho esto, la Liga Estelar está muy igualada este año y hay otros equipos que también están luchando por el título. Cada partido es una final a estas alturas.",
      },
      {
        pregunta: "¿Qué factores serán clave para ganar el Clásico?",
        respuesta:
          "La concentración será fundamental. No podemos permitirnos desconexiones porque ellos tienen jugadores que te pueden hacer daño en cualquier momento. También será importante el control del centro del campo y aprovechar nuestras ocasiones. En estos partidos tan igualados, la eficacia marca la diferencia. Y por supuesto, el apoyo de nuestra afición, que siempre nos da un plus de energía.",
      },
    ],
    predicciones: [
      {
        match: "Astros FC vs. Galaxia CF",
        prediction: "Victoria del Astros FC (2-1)",
        odds: "2.10",
        confidence: "Alta",
        explanation:
          "Jugamos en casa y el equipo está en un gran momento. Creo que marcaremos primero y aunque ellos probablemente empaten, conseguiremos el gol de la victoria en la segunda parte.",
      },
      {
        match: "Cometas vs. Meteoros FC",
        prediction: "Empate (1-1)",
        odds: "3.25",
        confidence: "Media",
        explanation:
          "Son dos equipos muy parejos y ambos necesitan puntos. Será un partido muy disputado donde ninguno querrá arriesgar demasiado.",
      },
      {
        match: "Estrellas CF vs. Planetas Club",
        prediction: "Victoria del Planetas Club (0-2)",
        odds: "2.75",
        confidence: "Alta",
        explanation:
          "El Planetas está en racha y el Estrellas tiene varias bajas importantes en defensa. Creo que los visitantes aprovecharán esas debilidades.",
      },
    ],
    tags: ["Clásico", "Liga Estelar", "Astros FC", "Galaxia CF"],
  },
  {
    id: "2",
    deportista: "Carlos Sol",
    rol: "Tenista profesional",
    equipo: "Individual",
    deporte: "Tenis",
    fecha: "12 mayo, 2025",
    imagen: "/tennis-player-interview.png",
    titulo: '"El Torneo Lunar será el más competitivo de los últimos años"',
    introduccion:
      "Carlos Sol, actual número 3 del ranking mundial, analiza sus opciones en el próximo Torneo Lunar y comparte sus pronósticos sobre los favoritos para el título.",
    preguntas: [
      {
        pregunta: "¿Cómo te encuentras físicamente de cara al Torneo Lunar?",
        respuesta:
          "Me encuentro en un buen momento físico. He trabajado mucho la resistencia y la potencia en las últimas semanas, adaptándome a las condiciones que encontraremos en el torneo. La tierra batida siempre exige un esfuerzo extra y partidos más largos, pero me siento preparado para afrontarlo.",
      },
      {
        pregunta: "¿Quiénes consideras los principales favoritos para este torneo?",
        respuesta:
          "Obviamente Miguel Rivera siempre es el gran favorito en este torneo, aunque haya tenido algunos problemas físicos recientemente. Luego está Martín Estrella, que viene de ganar dos torneos consecutivos en tierra. Y no podemos olvidar a Javier Luna, que siempre rinde a un nivel altísimo en este tipo de superficie. Yo me incluyo en ese grupo de favoritos, pero sé que tendré que jugar mi mejor tenis para tener opciones.",
      },
      {
        pregunta: "¿Cómo afecta a tu juego la superficie de tierra batida?",
        respuesta:
          "La tierra batida ralentiza el juego y eso me permite construir mejor los puntos, que es algo que me gusta. Mi juego se adapta bien porque tengo buena resistencia física y puedo mantener intercambios largos. He mejorado mucho mi servicio en los últimos meses, lo que me da puntos gratuitos incluso en esta superficie. Creo que mi estilo es versátil y puedo adaptarme a diferentes condiciones.",
      },
      {
        pregunta: "¿Qué opinas del posible cruce con Miguel Rivera en semifinales?",
        respuesta:
          "Primero hay que llegar a semifinales, que no es fácil. Hay muchos partidos antes y todos los rivales son complicados. Pero si nos enfrentamos, será un gran desafío. Nuestros últimos partidos han sido muy igualados y se han decidido en el quinto set. Tengo mucho respeto por él, especialmente en esta superficie donde ha ganado 14 veces, pero también confío en mis posibilidades.",
      },
    ],
    predicciones: [
      {
        match: "Carlos Sol vs. Javier Luna (Posible cuartos de final)",
        prediction: "Victoria de Carlos Sol en 4 sets",
        odds: "1.85",
        confidence: "Media",
        explanation:
          "Javier es un rival muy duro en tierra, pero creo que mi juego actual puede contrarrestar su potencia. Será un partido largo pero creo que puedo imponerme.",
      },
      {
        match: "Miguel Rivera vs. Martín Estrella (Posible semifinal)",
        prediction: "Victoria de Miguel Rivera en 5 sets",
        odds: "2.20",
        confidence: "Media",
        explanation:
          "Será el partido del torneo. Martín está en gran forma, pero la experiencia de Miguel en este torneo es un factor decisivo. Creo que veremos un partido épico que se decidirá en el quinto set.",
      },
      {
        match: "Final del Torneo Lunar",
        prediction: "Victoria del ganador de Rivera/Estrella sobre Carlos Sol en 4 sets",
        odds: "1.95",
        confidence: "Baja",
        explanation:
          "Si llego a la final, será un partido muy duro contra cualquiera de los dos. Ambos son especialistas en tierra batida y tendrán un día más de descanso. Será complicado, pero no imposible.",
      },
    ],
    tags: ["Torneo Lunar", "Tenis", "Grand Slam", "Tierra batida"],
  },
  {
    id: "3",
    deportista: "Elena Cometa",
    rol: "Base",
    equipo: "Estrellas Basket",
    deporte: "Baloncesto",
    fecha: "8 mayo, 2025",
    imagen: "/de67fe845c443332859ff451a5290e05.jpg",
    titulo: '"Podemos ganar la Liga Cósmica si mantenemos este nivel"',
    introduccion:
      "Elena Cometa, base del Estrellas Basket, analiza las opciones de su equipo en los playoffs de la Liga Cósmica y comparte sus pronósticos para las eliminatorias.",
    preguntas: [
      {
        pregunta: "¿Cómo valoras la temporada regular del equipo?",
        respuesta:
          "Ha sido una temporada de menos a más. Empezamos con algunas dudas, adaptándonos al nuevo sistema del entrenador, pero a partir del segundo tercio de la liga encontramos nuestro ritmo y hemos terminado en una gran posición. El segundo puesto nos da ventaja de campo en todas las eliminatorias excepto en una hipotética final contra el Astros Basket, que ha sido el mejor equipo de la fase regular.",
      },
      {
        pregunta: "¿Qué rival preferirías evitar en los playoffs?",
        respuesta:
          "Todos los equipos que han llegado a playoffs son complicados, pero si tuviera que elegir, preferiría evitar al Meteoros en semifinales. Su estilo de juego físico y su gran defensa nos ha creado problemas en los dos partidos de liga. Dicho esto, si queremos ser campeonas tendremos que estar preparadas para ganar a cualquier rival.",
      },
      {
        pregunta: "¿Cuáles son las fortalezas de vuestro equipo de cara a los playoffs?",
        respuesta:
          "Creo que nuestra mayor fortaleza es el juego colectivo. No dependemos de una sola jugadora para anotar, tenemos varias opciones ofensivas y todas las jugadoras saben su rol. También destacaría nuestra defensa, que ha mejorado mucho en los últimos meses, y el factor cancha, ya que nuestros aficionados nos dan un plus de energía en los partidos en casa.",
      },
      {
        pregunta: "A nivel personal, ¿cómo te encuentras para estos playoffs?",
        respuesta:
          "Me siento en un gran momento, tanto física como mentalmente. He trabajado mucho para llegar a este punto de la temporada en mi mejor nivel. Como base, mi objetivo es hacer que el equipo funcione, distribuir el balón y tomar las decisiones correctas en los momentos clave. También he mejorado mi tiro exterior, lo que da más opciones a nuestro ataque.",
      },
    ],
    predicciones: [
      {
        match: "Estrellas Basket vs. Lunas BC (Cuartos de final)",
        prediction: "Victoria de Estrellas Basket (3-1)",
        odds: "1.75",
        confidence: "Alta",
        explanation:
          "Tenemos ventaja de campo y les hemos ganado los dos partidos de liga. Creo que podemos cerrar la serie en 4 partidos, aunque ellas tienen jugadoras muy talentosas que pueden complicarnos algún partido.",
      },
      {
        match: "Astros Basket vs. Órbitas (Cuartos de final)",
        prediction: "Victoria de Astros Basket (3-0)",
        odds: "1.50",
        confidence: "Alta",
        explanation:
          "El Astros ha sido el mejor equipo de la liga y creo que barrerán en primera ronda. Tienen demasiada calidad y profundidad de banquillo para el Órbitas.",
      },
      {
        match: "Final Liga Cósmica (Hipotética)",
        prediction: "Victoria de Estrellas Basket sobre Astros Basket (3-2)",
        odds: "3.50",
        confidence: "Media",
        explanation:
          "Si llegamos a la final contra el Astros, será muy complicado porque ellas tienen ventaja de campo. Sin embargo, creo que nuestro equipo tiene hambre de título y podemos sorprenderlas. Sería una final a 5 partidos muy igualada que podríamos ganar.",
      },
    ],
    tags: ["Liga Cósmica", "Baloncesto", "Playoffs", "Estrellas Basket"],
  },
  {
    id: "4",
    deportista: "Marcos Veloz",
    rol: "Piloto",
    equipo: "Equipo Cometa",
    deporte: "Fórmula Estelar",
    fecha: "5 mayo, 2025",
    imagen: "/formula1-pilot-interview.png",
    titulo: '"El campeonato se decidirá en las últimas carreras"',
    introduccion:
      "Marcos Veloz, actual líder del Mundial de Fórmula Estelar, analiza la temporada hasta el momento y comparte sus pronósticos para las próximas carreras del campeonato.",
    preguntas: [
      {
        pregunta: "Tras seis victorias en nueve carreras, ¿te sientes favorito para revalidar el título?",
        respuesta:
          "Estamos en una buena posición, pero queda mucho campeonato por delante. El Equipo Nebulosa ha mejorado mucho su coche en las últimas carreras y Alejandro Rápido está pilotando a un nivel muy alto. La ventaja de puntos es importante, pero no definitiva. Tenemos que seguir trabajando carrera a carrera, maximizando los resultados y evitando errores.",
      },
      {
        pregunta: "¿Qué circuitos del calendario que quedan crees que se adaptan mejor a vuestro coche?",
        respuesta:
          "Nuestro coche es bastante versátil, pero tradicionalmente rendimos mejor en circuitos rápidos con pocas curvas lentas. El Gran Premio de Ciudad Norte debería ser bueno para nosotros, y también el de Ciudad Oeste. Quizás podamos sufrir más en Ciudad Sur, que tiene muchas curvas lentas y donde el Equipo Nebulosa suele ser muy fuerte. Pero estamos trabajando para mejorar en todo tipo de circuitos.",
      },
      {
        pregunta: "¿Cómo valoras las últimas mejoras introducidas en el coche?",
        respuesta:
          "Las mejoras están funcionando según lo esperado. Hemos ganado tiempo por vuelta y el coche es más predecible en diferentes condiciones. El departamento técnico está haciendo un trabajo excepcional. La clave ahora es seguir desarrollando el coche porque sabemos que nuestros rivales no se quedarán quietos. La carrera por el desarrollo es tan importante como las carreras en pista.",
      },
      {
        pregunta: "¿Qué opinas de la polémica con Alejandro Rápido en la última carrera?",
        respuesta:
          "Son cosas que pasan en las carreras. Ambos estábamos luchando por la victoria y hubo un pequeño contacto. Yo lo considero un incidente de carrera, aunque entiendo que él pueda tener otra opinión. Tengo mucho respeto por Alejandro como piloto, es un gran competidor y siempre corremos limpio. Estoy seguro de que tendremos más batallas en lo que queda de temporada, pero siempre dentro de los límites del reglamento.",
      },
    ],
    predicciones: [
      {
        match: "Gran Premio de Ciudad Norte",
        prediction: "Victoria de Marcos Veloz, segundo Alejandro Rápido",
        odds: "1.90",
        confidence: "Alta",
        explanation:
          "Es un circuito que se adapta muy bien a nuestro coche y donde he ganado los últimos dos años. Creo que podemos conseguir la pole y controlar la carrera desde delante.",
      },
      {
        match: "Gran Premio de Ciudad Sur",
        prediction: "Victoria de Alejandro Rápido, segundo Marcos Veloz",
        odds: "2.25",
        confidence: "Media",
        explanation:
          "Este circuito favorece más al Equipo Nebulosa. Será importante minimizar daños y sumar un buen resultado. Un segundo puesto sería un gran resultado allí.",
      },
      {
        match: "Campeonato de Pilotos",
        prediction: "Campeón Marcos Veloz, segundo Alejandro Rápido",
        odds: "1.65",
        confidence: "Media",
        explanation:
          "Tenemos una buena ventaja de puntos y un coche competitivo. Si mantenemos la consistencia y evitamos abandonos, creo que podemos mantener el liderato hasta el final, aunque será muy ajustado.",
      },
    ],
    tags: ["Fórmula Estelar", "Mundial de Pilotos", "Equipo Cometa", "Automovilismo"],
  },
]

export default function EntrevistasPronosticosPage() {
  const [activeTab, setActiveTab] = useState("todos")
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedInterview, setExpandedInterview] = useState<string | null>(null)

  // Filtrar entrevistas por deporte y término de búsqueda
  const filteredEntrevistas = entrevistas.filter((entrevista) => {
    const matchesTab = activeTab === "todos" || entrevista.deporte.toLowerCase() === activeTab.toLowerCase()
    const matchesSearch =
      searchTerm === "" ||
      entrevista.deportista.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entrevista.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entrevista.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    return matchesTab && matchesSearch
  })

  // Función para alternar la expansión de una entrevista
  const toggleExpand = (id: string) => {
    if (expandedInterview === id) {
      setExpandedInterview(null)
    } else {
      setExpandedInterview(id)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Entrevistas y Pronósticos con Deportistas</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Conversaciones exclusivas con los mejores deportistas que comparten sus análisis y pronósticos para los
          próximos eventos deportivos.
        </p>

        {/* Filtros */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar por deportista, título o tema..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Tabs defaultValue="todos" className="w-full md:w-auto" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full md:w-auto">
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="Fútbol">Fútbol</TabsTrigger>
              <TabsTrigger value="Tenis">Tenis</TabsTrigger>
              <TabsTrigger value="Baloncesto">Baloncesto</TabsTrigger>
              <TabsTrigger value="Fórmula Estelar">F. Estelar</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Resultados */}
        {filteredEntrevistas.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No se encontraron entrevistas que coincidan con tu búsqueda.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setActiveTab("todos")
              }}
            >
              Limpiar filtros
            </Button>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredEntrevistas.map((entrevista) => (
              <Card key={entrevista.id} className="overflow-hidden">
                <CardHeader className="pb-0">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="mb-2">
                      {entrevista.deporte}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CalendarIcon className="mr-1 h-3 w-3" />
                      {entrevista.fecha}
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="relative w-full md:w-32 h-32 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={entrevista.imagen || "/de67fe845c443332859ff451a5290e05.jpg"}
                        alt={entrevista.deportista}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <User className="h-4 w-4 text-primary" />
                        <span className="font-medium">{entrevista.deportista}</span>
                        <span className="text-muted-foreground">
                          • {entrevista.rol} del {entrevista.equipo}
                        </span>
                      </div>
                      <CardTitle className="text-2xl mb-2">{entrevista.titulo}</CardTitle>
                      <CardDescription className="text-base">{entrevista.introduccion}</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className={`pt-6 ${expandedInterview === entrevista.id ? "" : "hidden"}`}>
                  <div className="space-y-6">
                    {/* Preguntas y respuestas */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Entrevista</h3>
                      {entrevista.preguntas.map((qa, index) => (
                        <div key={index} className="space-y-2">
                          <p className="font-bold">P: {qa.pregunta}</p>
                          <p>R: {qa.respuesta}</p>
                        </div>
                      ))}
                    </div>

                    {/* Pronósticos */}
                    <div>
                      <h3 className="text-xl font-bold mb-4">Pronósticos de {entrevista.deportista}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {entrevista.predicciones.map((prediccion, index) => (
                          <Card key={index} className="border-2 border-primary/20">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg">{prediccion.match}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-4">
                                <div>
                                  <p className="text-sm font-medium mb-1">Pronóstico:</p>
                                  <p className="font-bold">{prediccion.prediction}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <div>
                                    <p className="text-sm font-medium mb-1">Cuota:</p>
                                    <p className="font-bold text-primary">{prediccion.odds}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium mb-1">Confianza:</p>
                                    <Badge
                                      className={
                                        prediccion.confidence === "Alta"
                                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                          : prediccion.confidence === "Media"
                                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                                      }
                                    >
                                      {prediccion.confidence}
                                    </Badge>
                                  </div>
                                </div>
                                <div>
                                  <p className="text-sm font-medium mb-1">Explicación:</p>
                                  <p className="text-sm">{prediccion.explanation}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {entrevista.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="flex items-center gap-1">
                          <Tag className="h-3 w-3" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex justify-center py-4">
                  <Button
                    variant="ghost"
                    onClick={() => toggleExpand(entrevista.id)}
                    className="flex items-center gap-2"
                  >
                    {expandedInterview === entrevista.id ? (
                      <>
                        <ChevronUp className="h-4 w-4" />
                        <span>Mostrar menos</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4" />
                        <span>Leer entrevista completa y pronósticos</span>
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {/* Sección informativa */}
        <div className="mt-12 bg-muted p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Sobre nuestras entrevistas con pronósticos</h2>
          <p className="mb-4">
            En EstrellaDeporte News, entrevistamos regularmente a deportistas de élite que, además de compartir sus
            experiencias y opiniones, nos ofrecen sus pronósticos para próximos eventos deportivos.
          </p>
          <p className="mb-4">
            Estos pronósticos están basados en el conocimiento y experiencia de los propios deportistas, que conocen de
            primera mano a sus compañeros y rivales, así como las particularidades de sus respectivos deportes.
          </p>
          <p>
            Recuerda que las apuestas deportivas deben practicarse de manera responsable. Los pronósticos son
            orientativos y no garantizan resultados. Apuesta siempre con moderación y dentro de tus límites.
          </p>
        </div>
      </div>
    </div>
  )
}
