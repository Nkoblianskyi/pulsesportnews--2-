"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
    Trophy,
    MonitorIcon as Running,
    Dumbbell,
    Zap,
    Award,
    Bike,
    FishIcon as Swim,
    Snowflake,
    RatIcon as Racquet,
    Swords,
    Shirt,
    Search,
} from "lucide-react"
import type { ReactNode } from "react" // Importamos ReactNode para corregir el error

// Definimos los tipos para los récords
interface Record {
    id: string
    title: string
    holder: string
    record: string
    year: string
    location?: string
    previousRecord?: string
    description?: string
}

interface SportCategory {
    id: string
    name: string
    icon: ReactNode // Usamos ReactNode en lugar de JSX.Element
    records: Record[]
}

export default function RecordsPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [activeCategory, setActiveCategory] = useState("all")

    // Datos de ejemplo para los récords deportivos
    const sportsCategories: SportCategory[] = [
        {
            id: "atletismo",
            name: "Atletismo",
            icon: <Running className="h-5 w-5" />,
            records: [
                {
                    id: "1",
                    title: "Récord mundial de 100m masculino",
                    holder: "Rayo Veloz",
                    record: "9.58 segundos",
                    year: "2019",
                    location: "Estadio Olímpico Estelar",
                    previousRecord: "9.69 segundos",
                    description:
                        "Rayo Veloz pulverizó el récord mundial de los 100 metros lisos con una marca que muchos consideraban imposible. Su técnica perfecta y potencia explosiva le permitieron alcanzar una velocidad máxima de 44.72 km/h durante la carrera.",
                },
                {
                    id: "2",
                    title: "Récord mundial de salto de longitud masculino",
                    holder: "Saltador Estelar",
                    record: "8.95 metros",
                    year: "2018",
                    location: "Campeonato Mundial de Atletismo",
                    previousRecord: "8.90 metros",
                    description:
                        "Con un salto casi perfecto, Saltador Estelar estableció un nuevo récord mundial que ha resistido varios intentos de superación. Las condiciones ideales y su técnica depurada fueron clave para lograr esta hazaña.",
                },
                {
                    id: "3",
                    title: "Récord mundial de maratón femenino",
                    holder: "Veloz Maratón",
                    record: "2:14:04",
                    year: "2023",
                    location: "Maratón de Ciudad Estelar",
                    previousRecord: "2:15:25",
                    description:
                        "Veloz Maratón rompió el récord mundial femenino de maratón con una estrategia perfecta, manteniendo un ritmo constante durante toda la carrera y acelerando en los últimos 5 kilómetros.",
                },
            ],
        },
        {
            id: "natacion",
            name: "Natación",
            icon: <Swim className="h-5 w-5" />,
            records: [
                {
                    id: "4",
                    title: "Récord mundial de 200m mariposa masculino",
                    holder: "Carlos Aguas",
                    record: "1:50.22",
                    year: "2025",
                    location: "Campeonato Mundial de Natación",
                    previousRecord: "1:51.51",
                    description:
                        "Carlos Aguas pulverizó el récord mundial de los 200 metros mariposa con una técnica impecable y un último largo espectacular, donde recuperó casi un segundo respecto al récord anterior.",
                },
                {
                    id: "5",
                    title: "Récord mundial de 100m libres femenino",
                    holder: "Marina Rápida",
                    record: "51.71 segundos",
                    year: "2024",
                    location: "Juegos Olímpicos Estelares",
                    previousRecord: "52.04 segundos",
                    description:
                        "Marina Rápida estableció un nuevo récord mundial en la final olímpica, con una salida explosiva y un último largo donde nadie pudo seguir su estela.",
                },
                {
                    id: "6",
                    title: "Récord mundial de 1500m libres masculino",
                    holder: "Resistencia Acuática",
                    record: "14:31.02",
                    year: "2022",
                    location: "Copa Mundial de Natación",
                    previousRecord: "14:34.56",
                    description:
                        "Con una estrategia perfecta y un ritmo constante, Resistencia Acuática rebajó en más de 3 segundos el anterior récord mundial en una de las pruebas más exigentes de la natación.",
                },
            ],
        },
        {
            id: "futbol",
            name: "Fútbol",
            icon: <Shirt className="h-5 w-5" />,
            records: [
                {
                    id: "7",
                    title: "Más goles en una temporada de Liga Estelar",
                    holder: "Goleador Estrella",
                    record: "73 goles",
                    year: "2023",
                    location: "Liga Estelar",
                    previousRecord: "67 goles",
                    description:
                        "Goleador Estrella pulverizó todos los récords anotadores en una temporada histórica, donde marcó en 32 de los 38 partidos disputados, incluyendo 7 hat-tricks.",
                },
                {
                    id: "8",
                    title: "Mayor goleada en un Mundial",
                    holder: "Selección de Estrellas",
                    record: "12-0 vs. Selección de Lunas",
                    year: "2022",
                    location: "Mundial Estelar",
                    previousRecord: "10-1",
                    description:
                        "La Selección de Estrellas consiguió la mayor goleada de la historia de los Mundiales en la fase de grupos, con una exhibición ofensiva donde 8 jugadores diferentes anotaron.",
                },
                {
                    id: "9",
                    title: "Más títulos de Liga Estelar consecutivos",
                    holder: "Astros FC",
                    record: "7 títulos consecutivos",
                    year: "2018-2024",
                    location: "Liga Estelar",
                    previousRecord: "5 títulos consecutivos",
                    description:
                        "El Astros FC logró una hazaña sin precedentes al conquistar 7 títulos consecutivos de Liga Estelar, demostrando una hegemonía nunca vista en el fútbol moderno.",
                },
            ],
        },
        {
            id: "baloncesto",
            name: "Baloncesto",
            icon: <Award className="h-5 w-5" />,
            records: [
                {
                    id: "10",
                    title: "Más puntos en un partido de Liga Cósmica",
                    holder: "Canasta Suprema",
                    record: "108 puntos",
                    year: "2022",
                    location: "Liga Cósmica",
                    previousRecord: "100 puntos",
                    description:
                        "En una actuación histórica, Canasta Suprema anotó 108 puntos en un solo partido, con un porcentaje de acierto del 72% en tiros de campo y 15 triples convertidos.",
                },
                {
                    id: "11",
                    title: "Mayor racha de victorias consecutivas",
                    holder: "Estrellas Basket",
                    record: "33 victorias consecutivas",
                    year: "2023-2024",
                    location: "Liga Cósmica",
                    previousRecord: "28 victorias",
                    description:
                        "El equipo Estrellas Basket estableció un nuevo récord de victorias consecutivas en la Liga Cósmica, con una racha que duró casi 4 meses sin conocer la derrota.",
                },
                {
                    id: "12",
                    title: "Más triples en un partido",
                    holder: "Tirador Estelar",
                    record: "17 triples",
                    year: "2025",
                    location: "Playoffs Liga Cósmica",
                    previousRecord: "14 triples",
                    description:
                        "Tirador Estelar estableció un nuevo récord de triples en un partido de playoffs, con un increíble 17/22 desde la línea de tres puntos, siendo decisivo para la victoria de su equipo.",
                },
            ],
        },
        {
            id: "formula-estelar",
            name: "Fórmula Estelar",
            icon: <Zap className="h-5 w-5" />,
            records: [
                {
                    id: "13",
                    title: "Vuelta más rápida en Circuito Estelar",
                    holder: "Marcos Veloz",
                    record: "1:18.887",
                    year: "2024",
                    location: "Gran Premio de Ciudad Estelar",
                    previousRecord: "1:19.119",
                    description:
                        "Marcos Veloz estableció un nuevo récord de vuelta en el mítico Circuito Estelar, con un último sector donde ganó más de 3 décimas respecto al anterior récord.",
                },
                {
                    id: "14",
                    title: "Más títulos mundiales consecutivos",
                    holder: "Marcos Veloz",
                    record: "6 títulos consecutivos",
                    year: "2020-2025",
                    location: "Campeonato Mundial de Fórmula Estelar",
                    previousRecord: "5 títulos consecutivos",
                    description:
                        "Con su sexto título consecutivo, Marcos Veloz superó el récord histórico y se consolidó como el piloto más dominante de la historia de la Fórmula Estelar.",
                },
                {
                    id: "15",
                    title: "Más poles position en una temporada",
                    holder: "Alejandro Rápido",
                    record: "18 poles en 22 carreras",
                    year: "2023",
                    location: "Campeonato Mundial de Fórmula Estelar",
                    previousRecord: "15 poles",
                    description:
                        "Alejandro Rápido demostró una velocidad a una vuelta nunca vista, consiguiendo 18 poles position de 22 posibles, un dominio clasificatorio sin precedentes.",
                },
            ],
        },
        {
            id: "ciclismo",
            name: "Ciclismo",
            icon: <Bike className="h-5 w-5" />,
            records: [
                {
                    id: "16",
                    title: "Más victorias en Vuelta Estelar",
                    holder: "Pedal de Oro",
                    record: "7 victorias",
                    year: "2018-2025",
                    location: "Vuelta Estelar",
                    previousRecord: "5 victorias",
                    description:
                        "Pedal de Oro ha conseguido un récord que parecía imposible, ganando 7 veces la Vuelta Estelar, la última de ellas con 38 años, demostrando una longevidad extraordinaria.",
                },
                {
                    id: "17",
                    title: "Récord de la hora",
                    holder: "Velocista Imparable",
                    record: "56.792 km",
                    year: "2024",
                    location: "Velódromo Estelar",
                    previousRecord: "55.548 km",
                    description:
                        "Velocista Imparable pulverizó el récord de la hora, una de las pruebas más exigentes del ciclismo, recorriendo casi 57 kilómetros en 60 minutos de esfuerzo máximo.",
                },
                {
                    id: "18",
                    title: "Etapas ganadas en Grandes Vueltas",
                    holder: "Sprinter Estelar",
                    record: "45 etapas",
                    year: "2019-2025",
                    location: "Grandes Vueltas",
                    previousRecord: "34 etapas",
                    description:
                        "Con una combinación única de potencia y resistencia, Sprinter Estelar ha conseguido 45 victorias de etapa en las tres Grandes Vueltas, un récord que parece inalcanzable.",
                },
            ],
        },
        {
            id: "tenis",
            name: "Tenis",
            icon: <Racquet className="h-5 w-5" />,
            records: [
                {
                    id: "19",
                    title: "Más títulos de Grand Slam",
                    holder: "Miguel Rivera",
                    record: "25 títulos",
                    year: "2010-2025",
                    location: "Torneos de Grand Slam",
                    previousRecord: "22 títulos",
                    description:
                        "Miguel Rivera ha reescrito la historia del tenis con 25 títulos de Grand Slam, demostrando una consistencia y longevidad sin precedentes en el deporte de la raqueta.",
                },
                {
                    id: "20",
                    title: "Más semanas como número 1",
                    holder: "Carlos Sol",
                    record: "378 semanas",
                    year: "2018-2025",
                    location: "Ranking Mundial",
                    previousRecord: "310 semanas",
                    description:
                        "Carlos Sol ha permanecido en lo más alto del ranking mundial durante 378 semanas, demostrando un dominio absoluto del circuito durante más de 7 años.",
                },
                {
                    id: "21",
                    title: "Racha más larga de victorias consecutivas",
                    holder: "Martín Estrella",
                    record: "93 victorias consecutivas",
                    year: "2022-2023",
                    location: "Circuito ATP",
                    previousRecord: "82 victorias",
                    description:
                        "Martín Estrella logró 93 victorias consecutivas, una racha que duró casi un año completo y que incluyó 12 títulos, entre ellos 3 Grand Slams.",
                },
            ],
        },
        {
            id: "deportes-invierno",
            name: "Deportes de Invierno",
            icon: <Snowflake className="h-5 w-5" />,
            records: [
                {
                    id: "22",
                    title: "Más medallas olímpicas en esquí alpino",
                    holder: "Nieve Veloz",
                    record: "12 medallas olímpicas",
                    year: "2014-2026",
                    location: "Juegos Olímpicos de Invierno",
                    previousRecord: "8 medallas",
                    description:
                        "Nieve Veloz ha conseguido un total de 12 medallas olímpicas (7 oros, 3 platas y 2 bronces) en cuatro participaciones olímpicas, un récord absoluto en esquí alpino.",
                },
                {
                    id: "23",
                    title: "Puntuación más alta en patinaje artístico",
                    holder: "Hielo Artístico",
                    record: "239.82 puntos",
                    year: "2025",
                    location: "Campeonato Mundial de Patinaje",
                    previousRecord: "234.25 puntos",
                    description:
                        "Con una rutina técnicamente perfecta y artísticamente sublime, Hielo Artístico estableció un nuevo récord mundial de puntuación que muchos consideran inalcanzable.",
                },
                {
                    id: "24",
                    title: "Más victorias en Copa del Mundo de Snowboard",
                    holder: "Tabla Extrema",
                    record: "67 victorias",
                    year: "2018-2025",
                    location: "Copa del Mundo de Snowboard",
                    previousRecord: "55 victorias",
                    description:
                        "Tabla Extrema ha dominado el circuito mundial de snowboard durante casi una década, acumulando 67 victorias en diferentes disciplinas y consolidándose como leyenda de este deporte.",
                },
            ],
        },
        {
            id: "halterofilia",
            name: "Halterofilia",
            icon: <Dumbbell className="h-5 w-5" />,
            records: [
                {
                    id: "25",
                    title: "Récord mundial de arrancada masculino (+109kg)",
                    holder: "Fuerza Titán",
                    record: "225 kg",
                    year: "2023",
                    location: "Campeonato Mundial de Halterofilia",
                    previousRecord: "222 kg",
                    description:
                        "Fuerza Titán estableció un nuevo récord mundial en la modalidad de arrancada con un levantamiento perfecto que dejó asombrados a todos los presentes por su técnica y potencia.",
                },
                {
                    id: "26",
                    title: "Récord mundial de dos tiempos masculino (+109kg)",
                    holder: "Fuerza Titán",
                    record: "265 kg",
                    year: "2021",
                    location: "Juegos Olímpicos Estelares",
                    previousRecord: "263 kg",
                    description:
                        "En la final olímpica, Fuerza Titán batió el récord mundial de dos tiempos con un levantamiento histórico que le valió la medalla de oro y la consagración como el halterófilo más fuerte del planeta.",
                },
                {
                    id: "27",
                    title: "Récord mundial de total olímpico femenino (59kg)",
                    holder: "Potencia Estelar",
                    record: "252 kg",
                    year: "2024",
                    location: "Campeonato Continental",
                    previousRecord: "247 kg",
                    description:
                        "Potencia Estelar estableció un nuevo récord mundial en el total olímpico de su categoría, con 112 kg en arrancada y 140 kg en dos tiempos, una marca extraordinaria para su peso corporal.",
                },
            ],
        },
        {
            id: "esgrima",
            name: "Esgrima",
            icon: <Swords className="h-5 w-5" />,
            records: [
                {
                    id: "28",
                    title: "Más medallas olímpicas individuales",
                    holder: "Espada Veloz",
                    record: "6 medallas olímpicas individuales",
                    year: "2012-2028",
                    location: "Juegos Olímpicos",
                    previousRecord: "4 medallas",
                    description:
                        "Espada Veloz ha conseguido un total de 6 medallas olímpicas individuales (3 oros, 2 platas y 1 bronce) en cinco participaciones olímpicas, un récord absoluto en la esgrima moderna.",
                },
                {
                    id: "29",
                    title: "Racha más larga invicto en competiciones internacionales",
                    holder: "Florete Imparable",
                    record: "73 victorias consecutivas",
                    year: "2022-2024",
                    location: "Circuito Mundial de Esgrima",
                    previousRecord: "58 victorias",
                    description:
                        "Florete Imparable mantuvo una racha de 73 victorias consecutivas en competiciones internacionales durante más de dos años, demostrando un dominio absoluto de su disciplina.",
                },
                {
                    id: "30",
                    title: "Más títulos mundiales consecutivos",
                    holder: "Sable Dorado",
                    record: "5 títulos mundiales consecutivos",
                    year: "2021-2025",
                    location: "Campeonatos Mundiales de Esgrima",
                    previousRecord: "3 títulos consecutivos",
                    description:
                        "Sable Dorado ha conseguido un récord histórico al ganar 5 títulos mundiales consecutivos, demostrando una consistencia y superioridad técnica nunca vista en la historia de la esgrima.",
                },
            ],
        },
    ]

    // Filtrar los récords según la búsqueda y la categoría seleccionada
    const filteredCategories = sportsCategories.filter((category) => {
        if (activeCategory !== "all" && category.id !== activeCategory) {
            return false
        }
        return true
    })

    const filteredRecords = filteredCategories.flatMap((category) =>
        category.records.filter(
            (record) =>
                record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                record.holder.toLowerCase().includes(searchTerm.toLowerCase()) ||
                record.record.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
    )

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-4">Récords Mundiales del Deporte</h1>
            <p className="text-lg text-muted-foreground mb-8">
                Explora los récords más impresionantes en diferentes disciplinas deportivas, hazañas que han marcado la historia
                y desafiado los límites humanos.
            </p>

            {/* Buscador */}
            <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                    placeholder="Buscar récords por título, deportista o marca..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar de categorías */}
                <div className="md:w-64 shrink-0">
                    <div className="bg-muted p-4 rounded-lg sticky top-4">
                        <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <Trophy className="h-5 w-5" /> Categorías
                        </h2>
                        <div className="space-y-1">
                            <Button
                                variant={activeCategory === "all" ? "default" : "ghost"}
                                className="w-full justify-start"
                                onClick={() => setActiveCategory("all")}
                            >
                                <Trophy className="h-4 w-4 mr-2" /> Todos los deportes
                            </Button>
                            {sportsCategories.map((category) => (
                                <Button
                                    key={category.id}
                                    variant={activeCategory === category.id ? "default" : "ghost"}
                                    className="w-full justify-start"
                                    onClick={() => setActiveCategory(category.id)}
                                >
                                    <span className="mr-2">{category.icon}</span> {category.name}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contenido principal */}
                <div className="flex-1">
                    {filteredRecords.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground mb-4">No se encontraron récords que coincidan con tu búsqueda.</p>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    setSearchTerm("")
                                    setActiveCategory("all")
                                }}
                            >
                                Limpiar filtros
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {filteredCategories.map(
                                (category) =>
                                    category.records.some(
                                        (record) =>
                                            record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                            record.holder.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                            record.record.toLowerCase().includes(searchTerm.toLowerCase()),
                                    ) && (
                                        <div key={category.id}>
                                            <div className="flex items-center gap-2 mb-4">
                                                <div className="bg-primary/10 p-2 rounded-full text-primary">{category.icon}</div>
                                                <h2 className="text-2xl font-bold">{category.name}</h2>
                                            </div>
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                                {category.records
                                                    .filter(
                                                        (record) =>
                                                            record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                            record.holder.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                            record.record.toLowerCase().includes(searchTerm.toLowerCase()),
                                                    )
                                                    .map((record) => (
                                                        <Card key={record.id} className="overflow-hidden">
                                                            <CardHeader>
                                                                <div className="flex justify-between items-start">
                                                                    <CardTitle className="text-xl">{record.title}</CardTitle>
                                                                    <Badge variant="outline">{record.year}</Badge>
                                                                </div>
                                                            </CardHeader>
                                                            <CardContent>
                                                                <div className="space-y-4">
                                                                    <div>
                                                                        <p className="text-3xl font-bold text-primary">{record.record}</p>
                                                                        <p className="text-lg font-medium">{record.holder}</p>
                                                                        {record.location && (
                                                                            <p className="text-sm text-muted-foreground">{record.location}</p>
                                                                        )}
                                                                    </div>
                                                                    {record.previousRecord && (
                                                                        <div>
                                                                            <p className="text-sm font-medium">Récord anterior:</p>
                                                                            <p className="text-sm text-muted-foreground">{record.previousRecord}</p>
                                                                        </div>
                                                                    )}
                                                                    {record.description && <p className="text-sm">{record.description}</p>}
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    ))}
                                            </div>
                                        </div>
                                    ),
                            )}
                        </div>
                    )}

                    {/* Sección informativa */}
                    <div className="mt-12 bg-muted p-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">Sobre los récords deportivos</h2>
                        <p className="mb-4">
                            Los récords deportivos representan los límites de la capacidad humana y son testimonio del constante
                            avance del deporte. Estas marcas son verificadas y homologadas por las respectivas federaciones
                            internacionales siguiendo estrictos protocolos.
                        </p>
                        <p>
                            En EstrellaDeporte News nos esforzamos por mantener actualizada nuestra base de datos de récords, pero te
                            invitamos a consultar las fuentes oficiales para la información más reciente. Si conoces algún récord que
                            debería estar en nuestra lista, no dudes en contactarnos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
