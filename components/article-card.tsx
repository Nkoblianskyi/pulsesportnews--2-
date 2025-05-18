import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Clock } from "lucide-react"

interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  image: string
  readTime?: string
  author?: string
  tags?: string[]
}

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/articles/${article.slug}`} className="block h-full">
      <Card className="article-card h-full overflow-hidden transition-all hover:shadow-lg">
        <div className="relative h-48 w-full">
          <Image
            src={article.image || "/placeholder.svg?height=600&width=800&query=deportes"}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader className="p-4">
          <div className="flex justify-between items-center mb-2">
            <Badge variant="secondary">{article.category}</Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarIcon className="mr-1 h-3 w-3" />
              {article.date}
            </div>
          </div>
          <h3 className="font-bold text-lg line-clamp-2">{article.title}</h3>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-muted-foreground line-clamp-3">{article.excerpt}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <span className="text-sm font-medium text-primary">Leer más</span>
          {article.readTime && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="mr-1 h-3 w-3" />
              {article.readTime}
            </div>
          )}
        </CardFooter>
      </Card>
    </Link>
  )
}
