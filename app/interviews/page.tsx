import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import InterviewCard from "@/components/interview-card"
import { interviews } from "@/data/mock-data"

export default function InterviewsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Entrevistas</h1>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <Input placeholder="Buscar entrevistas..." />
          </div>
          <div className="w-full md:w-48">
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Rol" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los roles</SelectItem>
                <SelectItem value="jugador">Jugadores</SelectItem>
                <SelectItem value="entrenador">Entrenadores</SelectItem>
                <SelectItem value="directivo">Directivos</SelectItem>
                <SelectItem value="experto">Expertos</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full md:w-48">
            <Select defaultValue="recent">
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

        {/* Interviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {interviews.map((interview) => (
            <InterviewCard key={interview.id} interview={interview} />
          ))}
        </div>

      </div>
    </div>
  )
}
