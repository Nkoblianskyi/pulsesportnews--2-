"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { CalendarIcon, Clock, User, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import PredictionCard, { type Prediction } from "@/components/prediction-card"
import ArticleCard from "@/components/article-card"
import { articles as mockArticles, predictions as mockPredictions } from "@/data/mock-data"

// Definimos la interfaz para los artículos
interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  date: string
  image: string
  readTime: string
  tags: string[]
}

export default function ArticlePage() {
  const params = useParams()
  const router = useRouter()
  const [article, setArticle] = useState<Article | null>(null)
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([])
  const [prediction, setPrediction] = useState<Prediction | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular tiempo de carga
    const loadingTimeout = setTimeout(() => {
      // Encontrar el artículo actual
      const currentArticle = mockArticles.find((a) => a.slug === params.slug)

      if (!currentArticle) {
        router.push("/404")
        return
      }

      setArticle(currentArticle)

      // Encontrar artículos relacionados
      const related = mockArticles
        .filter((a) => a.category === currentArticle.category && a.id !== currentArticle.id)
        .slice(0, 3)

      setRelatedArticles(related)

      // Seleccionar una predicción (en una app real, esto estaría relacionado con el artículo)
      if (mockPredictions.length > 0) {
        setPrediction(mockPredictions[0])
      }

      setIsLoading(false)
    }, 500) // Simular 500ms de carga

    return () => clearTimeout(loadingTimeout)
  }, [params.slug, router])

  if (isLoading) {
    return <ArticleSkeleton />
  }

  if (!article) {
    return null // Esto no debería ocurrir ya que redirigimos a 404 si no hay artículo
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/articles" className="text-primary hover:underline flex items-center">
            ← Volver a noticias
          </Link>
        </div>

        <article>
          <div className="mb-6">
            <Badge variant="outline" className="mb-4">
              {article.category}
            </Badge>
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

            <div className="flex flex-wrap items-center text-muted-foreground gap-4 mb-6">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>Por {article.author}</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="h-4 w-4 mr-1" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{article.readTime} de lectura</span>
              </div>
            </div>
          </div>

          <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={article.image || "/placeholder.svg?height=600&width=800&query=deportes"}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="font-medium text-xl mb-6">{article.excerpt}</p>
            {article.content.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-12">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="flex items-center gap-1">
                  <Tag className="h-3 w-3" />
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </article>

        {/* Expert Prediction */}
        {prediction && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Pronóstico del Experto</h2>
            <PredictionCard prediction={prediction} />
          </div>
        )}

        {/* Author Info */}
        <Card className="p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden relative shrink-0">
              <Image src="/professional-sports-journalist.png" alt={article.author} fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Sobre el autor: {article.author}</h3>
              <p className="text-muted-foreground mb-4">
                Periodista deportivo con más de 10 años de experiencia cubriendo competiciones nacionales e
                internacionales. Especializado en análisis táctico y pronósticos deportivos.
              </p>
              <Button variant="outline" size="sm">
                <Link href="/articles">Ver todos sus artículos</Link>
              </Button>
            </div>
          </div>
        </Card>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Artículos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard key={relatedArticle.id} article={relatedArticle} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Componente de esqueleto para la carga
function ArticleSkeleton() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Skeleton className="h-6 w-32" />
        </div>

        <div className="mb-6">
          <Skeleton className="h-4 w-20 mb-4" />
          <Skeleton className="h-12 w-full mb-4" />

          <div className="flex flex-wrap gap-4 mb-6">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>

        <Skeleton className="h-96 w-full mb-8 rounded-lg" />

        <div className="space-y-4 mb-12">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>
    </div>
  )
}
