import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ArticleCard from "@/components/article-card"
import InterviewCard from "@/components/interview-card"
import PredictionCard from "@/components/prediction-card"
import SportNewsBrief from "@/components/sport-news-brief"
import { articles, interviews, predictions } from "@/data/mock-data"
import SportsRecordsSection from "@/components/sports-records-section"

// Datos de ejemplo para las noticias breves deportivas
const sportBriefNews = [
  {
    id: "101",
    title: "Campeón Mundial de MMA anuncia su retiro tras 15 años de carrera",
    date: "18 mayo, 2025",
    category: "MMA",
    slug: "campeon-mma-anuncia-retiro",
  },
  {
    id: "102",
    title: "Sorpresa en el Mundial de Boxeo: Campeón defensor pierde por KO en el segundo asalto",
    date: "17 mayo, 2025",
    category: "Boxeo",
    slug: "sorpresa-mundial-boxeo-campeon-ko",
  },
  {
    id: "103",
    title: "Equipo Cometa presenta su nuevo monoplaza para la próxima temporada de Fórmula Estelar",
    date: "16 mayo, 2025",
    category: "Fórmula Estelar",
    slug: "equipo-cometa-nuevo-monoplaza",
  },
  {
    id: "104",
    title: "Selección Nacional de Curling clasifica por primera vez a los Juegos Invernales",
    date: "15 mayo, 2025",
    category: "Curling",
    slug: "seleccion-curling-clasifica-juegos",
  },
  {
    id: "105",
    title: "Estrellas Voleibol conquista la Liga Continental tras una final de infarto",
    date: "14 mayo, 2025",
    category: "Voleibol",
    slug: "estrellas-voleibol-campeon-liga",
  },
  {
    id: "106",
    title: "Revelación del bádminton gana su primer torneo internacional con solo 17 años",
    date: "13 mayo, 2025",
    category: "Bádminton",
    slug: "revelacion-badminton-primer-torneo",
  },
]

export default function Home() {
  // Get featured articles and interviews
  const featuredArticles = articles.slice(0, 3)
  const featuredInterviews = interviews.slice(0, 2)
  const featuredPredictions = predictions.slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Noticias deportivas y pronósticos de expertos
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Mantente al día con las últimas noticias deportivas y obtén los mejores pronósticos para tus apuestas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/articles">Ver noticias</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10" asChild>
                  <Link href="/entrevistas-pronosticos">Entrevistas</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
              <Image src="/futbol-estadio-multitud.png" alt="Deportes" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Sport Brief News Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Noticias Breves del Mundo Deportivo</h2>
            <Button variant="outline" asChild>
              <Link href="/articles">Ver todas</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sportBriefNews.map((news) => (
              <SportNewsBrief
                key={news.id}
                title={news.title}
                date={news.date}
                category={news.category}
                slug={news.slug}
              />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button size="lg" asChild>
              <Link href="/sport-news">Más noticias deportivas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Últimas Noticias</h2>
            <Button variant="outline" asChild>
              <Link href="/articles">Ver todas</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Predictions Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pronósticos de Expertos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nuestros analistas deportivos te ofrecen los mejores pronósticos para tus apuestas, basados en análisis
              detallados y estadísticas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPredictions.map((prediction, index) => (
              <PredictionCard key={index} prediction={prediction} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/articles">Ver más pronósticos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Interviews Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Entrevistas Destacadas</h2>
            <Button variant="outline" asChild>
              <Link href="/entrevistas-pronosticos">Ver todas</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredInterviews.map((interview) => (
              <InterviewCard key={interview.id} interview={interview} />
            ))}
          </div>
        </div>
      </section>

      <SportsRecordsSection />

      {/* Newsletter Section */}
      {/* <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">Suscríbete a nuestro boletín</h2>
                  <p className="text-muted-foreground mb-6">
                    Recibe las últimas noticias deportivas y pronósticos directamente en tu bandeja de entrada.
                  </p>
                </div>
                <div>
                  <form className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Tu email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    />
                    <Button type="submit" className="shrink-0">
                      Suscribirse
                    </Button>
                  </form>
                  <p className="text-xs text-muted-foreground mt-2">
                    Al suscribirte, aceptas nuestra{" "}
                    <Link href="/privacy" className="underline">
                      Política de Privacidad
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}
    </div>
  )
}
