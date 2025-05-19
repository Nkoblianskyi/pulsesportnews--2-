import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, User } from "lucide-react"

interface InterviewCardProps {
  interview: {
    id: string
    slug: string
    title: string
    excerpt: string
    person: string
    role: string
    date: string
    image: string
    interviewer?: string
    bio?: string
  }
}

export default function InterviewCard({ interview }: InterviewCardProps) {
  return (
    <Link href="entrevistas-pronosticos" className="block h-full">
      <Card className="article-card h-full overflow-hidden transition-all hover:shadow-lg">
        <div className="relative h-48 w-full">
          <Image
            src={interview.image || "/placeholder.svg?height=600&width=800&query=entrevista+deportiva"}
            alt={interview.title}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader className="p-4">
          <div className="flex justify-between items-center mb-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <User className="h-3 w-3" />
              {interview.person}
            </Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarIcon className="mr-1 h-3 w-3" />
              {interview.date}
            </div>
          </div>
          <h3 className="font-bold text-lg line-clamp-2">{interview.title}</h3>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-muted-foreground line-clamp-3">{interview.excerpt}</p>
          <p className="text-sm mt-2 font-medium">{interview.role}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <span className="text-sm font-medium text-primary">Leer entrevista</span>
        </CardFooter>
      </Card>
    </Link>
  )
}
