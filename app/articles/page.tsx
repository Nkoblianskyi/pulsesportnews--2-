"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ArticleCard from "@/components/article-card"
import { articles as mockArticles } from "@/data/mock-data"

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

export default function ArticlesPage() {
  const [articles] = useState<Article[]>(mockArticles)
  const [filteredArticles, setFilteredArticles] = useState<Article[]>(mockArticles)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortOrder, setSortOrder] = useState("recent")

  // Filtrar y ordenar artículos cuando cambian los filtros
  useEffect(() => {
    let result = [...articles]

    // Filtrar por término de búsqueda
    if (searchTerm) {
      result = result.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (article.tags && article.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))),
      )
    }

    // Filtrar por categoría
    if (selectedCategory !== "all") {
      result = result.filter((article) => article.category.toLowerCase() === selectedCategory.toLowerCase())
    }

    // Ordenar artículos
    if (sortOrder === "recent") {
      // Asumimos que las fechas más recientes están primero en el JSON
      // En una app real, habría que parsear las fechas y ordenarlas
    } else if (sortOrder === "popular") {
      // En una app real, esto podría ordenar por número de vistas
      // Aquí simplemente invertimos el orden como ejemplo
      result = [...result].reverse()
    }

    setFilteredArticles(result)
  }, [articles, searchTerm, selectedCategory, sortOrder])

  // Obtener categorías únicas para el filtro
  const categories = ["all", ...new Set(articles.map((article) => article.category.toLowerCase()))]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Noticias Deportivas</h1>

        {/* Filters */}
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
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-full md:w-48">
            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger>
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Más recientes</SelectItem>
                <SelectItem value="popular">Más populares</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-muted-foreground">No se encontraron artículos que coincidan con tu búsqueda.</p>
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
