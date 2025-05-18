import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CalendarIcon, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import InterviewCard from "@/components/interview-card"
import { interviews } from "@/data/mock-data"

interface InterviewPageProps {
  params: {
    slug: string
  }
}

export default function InterviewPage({ params }: InterviewPageProps) {
  const interview = interviews.find((interview) => interview.slug === params.slug)

  if (!interview) {
    notFound()
  }

  // Get related interviews (excluding current one)
  const relatedInterviews = interviews.filter((i) => i.role === interview.role && i.id !== interview.id).slice(0, 2)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/interviews" className="text-primary hover:underline flex items-center">
            ← Volver a entrevistas
          </Link>
        </div>

        <article>
          <div className="mb-6">
            <Badge variant="outline" className="mb-4 flex items-center gap-1">
              <User className="h-3 w-3" />
              {interview.person}
            </Badge>
            <h1 className="text-4xl font-bold mb-4">{interview.title}</h1>

            <div className="flex flex-wrap items-center text-muted-foreground gap-4 mb-6">
              <div className="flex items-center">
                <span className="font-medium">{interview.role}</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="h-4 w-4 mr-1" />
                <span>{interview.date}</span>
              </div>
              <div className="flex items-center">
                <span>Entrevistado por {interview.interviewer}</span>
              </div>
            </div>
          </div>

          <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden">
            <Image src={interview.image || "/placeholder.svg"} alt={interview.title} fill className="object-cover" />
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="font-medium text-xl mb-6">{interview.excerpt}</p>

            <p>
              <strong>Entrevistador:</strong> Gracias por concedernos esta entrevista. Para empezar, ¿cómo describiría
              su trayectoria hasta ahora?
            </p>

            <p>
              <strong>{interview.person}:</strong> Ha sido un camino lleno de desafíos y aprendizajes. Desde mis
              inicios, siempre he buscado superarme y aprender de cada experiencia, tanto de los éxitos como de los
              fracasos. Creo que esa mentalidad ha sido fundamental para llegar hasta donde estoy hoy.
            </p>

            <p>
              <strong>Entrevistador:</strong> Hablemos sobre el momento actual. ¿Cuáles son los principales retos a los
              que se enfrenta?
            </p>

            <p>
              <strong>{interview.person}:</strong> Sin duda, el nivel de competencia es cada vez más alto. Todos los
              equipos están mejorando constantemente, incorporando nuevas tecnologías y métodos de entrenamiento.
              Mantenerse en la élite requiere un esfuerzo continuo y una capacidad de adaptación constante.
            </p>

            <p>
              <strong>Entrevistador:</strong> En cuanto a su estilo, ¿cómo lo definiría y qué lo hace diferente de otros
              profesionales?
            </p>

            <p>
              <strong>{interview.person}:</strong> Creo que mi estilo se caracteriza por la combinación de disciplina y
              creatividad. Me gusta estudiar a fondo cada situación, analizar las estadísticas y tendencias, pero
              también confío en mi intuición cuando es necesario. Esta mezcla de análisis riguroso y capacidad para
              improvisar es lo que me distingue.
            </p>

            <p>
              <strong>Entrevistador:</strong> Hablemos del futuro. ¿Cuáles son sus objetivos a corto y largo plazo?
            </p>

            <p>
              <strong>{interview.person}:</strong> A corto plazo, estoy centrado en mejorar aspectos específicos de mi
              rendimiento y contribuir al éxito del equipo en la temporada actual. A largo plazo, aspiro a dejar un
              legado que vaya más allá de los logros deportivos, quizás formando a nuevas generaciones o contribuyendo
              al desarrollo del deporte desde otras facetas.
            </p>

            <p>
              <strong>Entrevistador:</strong> Para finalizar, ¿qué consejo daría a los jóvenes que están comenzando y le
              admiran?
            </p>

            <p>
              <strong>{interview.person}:</strong> Les diría que el talento es importante, pero el trabajo duro y la
              perseverancia son fundamentales. Habrá momentos difíciles, derrotas y decepciones, pero es precisamente en
              esos momentos cuando se forja el carácter. También les aconsejaría que disfruten del proceso, no solo de
              los resultados, porque al final, es el amor por lo que haces lo que te permite superar todos los
              obstáculos.
            </p>
          </div>
        </article>

        {/* Interviewee Info */}
        <Card className="p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden relative shrink-0">
              <Image src="/professional-athlete.png" alt={interview.person} fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{interview.person}</h3>
              <p className="text-muted-foreground mb-2">{interview.role}</p>
              <p className="text-muted-foreground mb-4">
                {interview.bio ||
                  "Profesional con amplia trayectoria en el mundo del deporte, reconocido por su dedicación y logros excepcionales en su campo."}
              </p>
              <Button variant="outline" size="sm">
                Ver perfil completo
              </Button>
            </div>
          </div>
        </Card>

        {/* Related Interviews */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Entrevistas Relacionadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedInterviews.map((relatedInterview) => (
              <InterviewCard key={relatedInterview.id} interview={relatedInterview} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
