"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon } from "lucide-react"

// Datos de ejemplo para las noticias breves deportivas
const sportNews = [
    {
        id: "101",
        title: "Campeón Mundial de MMA anuncia su retiro tras 15 años de carrera",
        date: "18 mayo, 2025",
        category: "MMA",
        slug: "campeon-mma-anuncia-retiro",
        content:
            "El legendario luchador de MMA, Alejandro 'El Titán' Martínez, ha anunciado su retiro del deporte tras 15 años de exitosa carrera. Martínez, quien defendió su título mundial en cinco ocasiones, citó lesiones recurrentes como la principal razón de su decisión. 'Ha sido un viaje increíble, pero es momento de dar paso a las nuevas generaciones', declaró emocionado durante una conferencia de prensa.",
    },
    {
        id: "102",
        title: "Sorpresa en el Mundial de Boxeo: Campeón defensor pierde por KO en el segundo asalto",
        date: "17 mayo, 2025",
        category: "Boxeo",
        slug: "sorpresa-mundial-boxeo-campeon-ko",
        content:
            "En una de las mayores sorpresas del boxeo reciente, el campeón mundial de peso pesado, Carlos 'El Rayo' Gómez, perdió su título ante el retador Daniel 'Dinamita' Torres por KO en el segundo asalto. Torres, considerado un outsider con pocas posibilidades, conectó un potente gancho de derecha que dejó al campeón sin posibilidad de recuperarse. Esta victoria marca uno de los mayores upset en la historia reciente del boxeo.",
    },
    {
        id: "103",
        title: "Equipo Cometa presenta su nuevo monoplaza para la próxima temporada de Fórmula Estelar",
        date: "16 mayo, 2025",
        category: "Fórmula Estelar",
        slug: "equipo-cometa-nuevo-monoplaza",
        content:
            "El Equipo Cometa ha presentado hoy su nuevo monoplaza, el C-25, con el que competirá en la próxima temporada de Fórmula Estelar. El vehículo presenta importantes innovaciones aerodinámicas y un sistema de propulsión mejorado que, según los ingenieros del equipo, podría suponer una ganancia de hasta 0.5 segundos por vuelta. Marcos Veloz y Ana Rápida serán los pilotos que conducirán esta nueva máquina en busca del campeonato.",
    },
    {
        id: "104",
        title: "Selección Nacional de Curling clasifica por primera vez a los Juegos Invernales",
        date: "15 mayo, 2025",
        category: "Curling",
        slug: "seleccion-curling-clasifica-juegos",
        content:
            "La Selección Nacional de Curling ha hecho historia al clasificarse por primera vez a los Juegos Invernales. El equipo, liderado por la capitana Elena Hielo, consiguió una victoria decisiva sobre el equipo de Noruega en el torneo clasificatorio. 'Es un sueño hecho realidad para todos nosotros y para el desarrollo de este deporte en nuestro país', declaró Hielo tras la histórica clasificación.",
    },
    {
        id: "105",
        title: "Estrellas Voleibol conquista la Liga Continental tras una final de infarto",
        date: "14 mayo, 2025",
        category: "Voleibol",
        slug: "estrellas-voleibol-campeon-liga",
        content:
            "El equipo Estrellas Voleibol se ha proclamado campeón de la Liga Continental tras derrotar al Meteoros en una final de infarto que se decidió en el quinto set. Con un marcador final de 15-13 en el tie-break, las Estrellas consiguieron su tercer título consecutivo, consolidándose como el equipo dominante de la competición. La jugadora Laura Red fue nombrada MVP de la final tras anotar 24 puntos.",
    },
    {
        id: "106",
        title: "Revelación del bádminton gana su primer torneo internacional con solo 17 años",
        date: "13 mayo, 2025",
        category: "Bádminton",
        slug: "revelacion-badminton-primer-torneo",
        content:
            "La joven promesa del bádminton, Sofía Pluma, de tan solo 17 años, ha ganado su primer torneo internacional al imponerse en la final del Open Estelar. Pluma, quien ya había destacado en categorías juveniles, dio la sorpresa al derrotar a la número 3 del mundo en semifinales y completó su gesta venciendo a la favorita local en la final. Los expertos ya la señalan como una futura estrella de este deporte.",
    },
    {
        id: "107",
        title: "Récord mundial de natación pulverizado en los 200 metros mariposa",
        date: "12 mayo, 2025",
        category: "Natación",
        slug: "record-mundial-natacion-200-mariposa",
        content:
            "El nadador Carlos Aguas ha pulverizado el récord mundial de los 200 metros mariposa durante el Campeonato Mundial de Natación. Con un tiempo de 1:50.22, Aguas mejoró en casi un segundo la anterior plusmarca que databa de 2022. 'He trabajado muy duro para este momento, pero no esperaba bajar tanto el récord', comentó el nadador tras su histórica hazaña.",
    },
    {
        id: "108",
        title: "Equipo nacional de rugby sorprende al mundo con victoria ante potencia mundial",
        date: "11 mayo, 2025",
        category: "Rugby",
        slug: "equipo-rugby-victoria-sorpresa",
        content:
            "En uno de los resultados más sorprendentes de la historia reciente del rugby, la selección nacional ha derrotado a una potencia mundial por 24-21 en un partido correspondiente al Torneo Continental. Esta victoria, considerada casi imposible por los expertos, representa el mayor logro en la historia de este deporte en nuestro país y podría cambiar el panorama del rugby nacional.",
    },
    {
        id: "109",
        title: "Ajedrecista prodigio de 12 años vence a tres grandes maestros en torneo internacional",
        date: "10 mayo, 2025",
        category: "Ajedrez",
        slug: "ajedrecista-prodigio-vence-grandes-maestros",
        content:
            "El joven prodigio del ajedrez, Daniel Torres, de tan solo 12 años, ha sorprendido al mundo del ajedrez al vencer a tres grandes maestros en el prestigioso Torneo Estelar. Torres, quien ya había mostrado un talento excepcional en torneos juveniles, demostró una madurez táctica impropia de su edad. Los expertos lo comparan ya con las grandes leyendas de este deporte.",
    },
    {
        id: "110",
        title: "Nuevo circuito profesional de skateboarding anuncia su calendario para 2026",
        date: "9 mayo, 2025",
        category: "Skateboarding",
        slug: "circuito-skateboarding-calendario-2026",
        content:
            "La Asociación Mundial de Skateboarding ha anunciado el calendario oficial del nuevo circuito profesional para 2026. Con 12 eventos repartidos en 10 países, este circuito representa la mayor apuesta por la profesionalización de este deporte hasta la fecha. El campeón del mundo, Roberto Ruedas, ha celebrado esta iniciativa: 'Es un gran paso para nuestro deporte y para todos los skaters que sueñan con vivir de su pasión'.",
    },
    {
        id: "111",
        title: "Equipo de esgrima femenino consigue histórica medalla de oro en Campeonato Mundial",
        date: "8 mayo, 2025",
        category: "Esgrima",
        slug: "equipo-esgrima-femenino-oro-mundial",
        content:
            "El equipo nacional femenino de esgrima ha conseguido una histórica medalla de oro en la modalidad de florete por equipos en el Campeonato Mundial. Las esgrimistas superaron en la final al potente equipo italiano, vigente campeón olímpico, en un emocionante desenlace que se decidió en el último asalto. Esta es la primera medalla de oro para nuestro país en la historia de los mundiales de esgrima.",
    },
    {
        id: "112",
        title: "Maratoniana bate récord nacional con impresionante marca en Maratón Estelar",
        date: "7 mayo, 2025",
        category: "Atletismo",
        slug: "maratoniana-record-nacional-maraton-estelar",
        content:
            "La atleta Laura Campos ha establecido un nuevo récord nacional en maratón durante la Maratón Estelar, con un tiempo de 2:18:45. Campos, quien mejoró su marca personal en más de tres minutos, terminó en segunda posición en la prueba, solo por detrás de la actual campeona mundial. 'Las condiciones eran perfectas y me sentí muy fuerte durante toda la carrera', declaró la atleta tras su histórica actuación.",
    },
]

export default function SportNewsPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")

    // Obtener categorías únicas
    const categories = ["all", ...Array.from(new Set(sportNews.map((news) => news.category)))]

    // Filtrar noticias
    const filteredNews = sportNews.filter((news) => {
        const matchesSearch =
            news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            news.content.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === "all" || news.category === selectedCategory

        return matchesSearch && matchesCategory
    })

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Noticias Breves del Mundo Deportivo</h1>

                {/* Filtros */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="flex-1">
                        <Input
                            placeholder="Buscar noticias..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="w-full md:w-48">
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                            <SelectTrigger>
                                <SelectValue placeholder="Categoría" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Todas las categorías</SelectItem>
                                {categories
                                    .filter((cat) => cat !== "all")
                                    .map((category) => (
                                        <SelectItem key={category} value={category}>
                                            {category}
                                        </SelectItem>
                                    ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Lista de noticias */}
                {filteredNews.length > 0 ? (
                    <div className="space-y-4">
                        {filteredNews.map((news) => (
                            <Card key={news.id} className="overflow-hidden hover:shadow-md transition-all">
                                <CardContent className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <Badge variant="outline" className="mb-2">
                                            {news.category}
                                        </Badge>
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <CalendarIcon className="mr-1 h-3 w-3" />
                                            {news.date}
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">{news.title}</h3>
                                    <p className="text-muted-foreground">{news.content}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-10">
                        <p className="text-muted-foreground">No se encontraron noticias que coincidan con tu búsqueda.</p>
                        <Button
                            variant="outline"
                            className="mt-4"
                            onClick={() => {
                                setSearchTerm("")
                                setSelectedCategory("all")
                            }}
                        >
                            Limpiar filtros
                        </Button>
                    </div>
                )}

            </div>
        </div>
    )
}
