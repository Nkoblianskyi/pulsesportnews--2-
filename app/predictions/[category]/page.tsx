import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import PredictionCard from "@/components/prediction-card"
import { predictions } from "@/data/mock-data"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // Decodificar la categoría de la URL
  const category = decodeURIComponent(params.category)

  // Categorías disponibles
  const categories = ["Fútbol", "Baloncesto", "Tenis", "Fórmula Estelar"]

  // Verificar si la categoría existe
  if (!categories.includes(category)) {
    notFound()
  }

  // Filtrar predicciones por categoría (en un caso real, esto vendría de la base de datos)
  // Aquí simulamos que todas las predicciones son de la categoría seleccionada
  const categoryPredictions = predictions.map((prediction) => ({
    ...prediction,
    category,
  }))

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link href="/predictions" className="text-primary hover:underline flex items-center">
            ← Volver a todos los pronósticos
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8">Pronósticos de {category}</h1>

        <div className="mb-8">
          <p className="text-lg text-muted-foreground">
            Encuentra los mejores pronósticos de {category} analizados por nuestros expertos. Cada predicción incluye un
            análisis detallado y un nivel de confianza para ayudarte a tomar decisiones informadas.
          </p>
        </div>

        {/* Category Info Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Sobre los pronósticos de {category}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Nuestros expertos en {category} analizan cada evento teniendo en cuenta factores como:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {category === "Fútbol" && (
                <>
                  <li>Forma reciente de los equipos y jugadores clave</li>
                  <li>Historial de enfrentamientos directos</li>
                  <li>Lesiones y sanciones</li>
                  <li>Factores tácticos y estratégicos</li>
                </>
              )}
              {category === "Baloncesto" && (
                <>
                  <li>Estadísticas ofensivas y defensivas de los equipos</li>
                  <li>Rendimiento de los jugadores estrella</li>
                  <li>Factores de cansancio y calendario</li>
                  <li>Ventaja de jugar en casa</li>
                </>
              )}
              {category === "Tenis" && (
                <>
                  <li>Superficie de juego y adaptación de los tenistas</li>
                  <li>Estado físico y mental de los jugadores</li>
                  <li>Historial de enfrentamientos directos</li>
                  <li>Condiciones meteorológicas</li>
                </>
              )}
              {category === "Fórmula Estelar" && (
                <>
                  <li>Características del circuito y adaptación de los pilotos</li>
                  <li>Rendimiento reciente de coches y pilotos</li>
                  <li>Estrategias de equipo y paradas en boxes</li>
                  <li>Condiciones meteorológicas</li>
                </>
              )}
            </ul>
          </CardContent>
        </Card>

        {/* Predictions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categoryPredictions.map((prediction, index) => (
            <PredictionCard key={index} prediction={prediction} />
          ))}
        </div>

        {/* Expert Section */}
        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Nuestros Expertos en {category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                {category === "Fútbol" ? "AL" : category === "Baloncesto" ? "EM" : category === "Tenis" ? "RG" : "JL"}
              </div>
              <div>
                <h3 className="font-bold text-lg">
                  {category === "Fútbol"
                    ? "Antonio López"
                    : category === "Baloncesto"
                      ? "Elena Martínez"
                      : category === "Tenis"
                        ? "Roberto García"
                        : "Jorge Luna"}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">Analista de {category}</p>
                <p className="text-sm">
                  {category === "Fútbol"
                    ? "Ex jugador profesional con más de 15 años de experiencia analizando partidos de fútbol."
                    : category === "Baloncesto"
                      ? "Entrenadora y analista con amplia experiencia en competiciones nacionales e internacionales."
                      : category === "Tenis"
                        ? "Ex tenista profesional y comentarista deportivo especializado en análisis técnico y táctico."
                        : "Ingeniero y analista de datos especializado en Fórmula Estelar con más de 10 años de experiencia."}
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Metodología de análisis</h3>
              <p className="text-sm mb-4">
                Nuestros expertos combinan el análisis estadístico avanzado con su conocimiento profundo del deporte
                para ofrecerte pronósticos precisos y fundamentados.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/about">Conoce a nuestro equipo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
