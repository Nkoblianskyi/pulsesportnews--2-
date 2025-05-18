import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon } from "lucide-react"

interface SportNewsBriefProps {
  title: string
  date: string
  category: string
  slug: string
}

export default function SportNewsBrief({ title, date, category, slug }: SportNewsBriefProps) {
  return (
    <Link href={`/articles/${slug}`}>
      <Card className="h-full hover:shadow-md transition-all">
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <Badge variant="outline" className="mb-2">
              {category}
            </Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarIcon className="mr-1 h-3 w-3" />
              {date}
            </div>
          </div>
          <h3 className="font-medium line-clamp-2">{title}</h3>
        </CardContent>
      </Card>
    </Link>
  )
}
