import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import PredictionCard from "@/components/prediction-card"
import { predictions } from "@/data/mock-data"

export default function PredictionsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Pronósticos Deportivos</h1>

        <div className="mb-8">
          <p className="text-lg text-muted-foreground">
            Nuestros expertos analizan los próximos eventos deportivos y te ofrecen los mejores pronósticos para tus
            apuestas. Cada predicción incluye un análisis detallado y un nivel de confianza para ayudarte a tomar
            decisiones informadas.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <Input placeholder="Buscar pronósticos..." />
          </div>
          <div className="w-full md:w-48">
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Confianza" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los niveles</SelectItem>
                <SelectItem value="alta">Alta</SelectItem>
                <SelectItem value="media">Media</SelectItem>
                <SelectItem value="baja">Baja</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full md:w-48">
            <Select defaultValue="date">
              <SelectTrigger>
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Fecha más próxima</SelectItem>
                <SelectItem value="odds">Cuota más alta</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Predictions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {predictions.map((prediction, index) => (
            <PredictionCard key={index} prediction={prediction} />
          ))}
        </div>

        {/* Expert Analysis Section */}
        <div className="bg-muted p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Análisis de Nuestros Expertos</h2>
          <p className="mb-4">
            Nuestro equipo de analistas deportivos cuenta con años de experiencia en el mundo de las apuestas y un
            profundo conocimiento de los diferentes deportes. Cada pronóstico es el resultado de un análisis exhaustivo
            que tiene en cuenta:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Estadísticas actuales e históricas de los equipos y jugadores</li>
            <li>Condiciones específicas del evento (clima, lesiones, sanciones, etc.)</li>
            <li>Tendencias recientes y factores psicológicos</li>
            <li>Análisis de valor en las cuotas ofrecidas por las casas de apuestas</li>
          </ul>
          <p>
            Recuerda que las apuestas deportivas deben practicarse de manera responsable. Nuestros pronósticos son
            orientativos y no garantizan resultados. Apuesta siempre con moderación y dentro de tus límites.
          </p>
        </div>

        {/* Newsletter Section */}
        <div className="bg-primary text-primary-foreground p-8 rounded-lg">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Recibe Nuestros Pronósticos</h2>
            <p>Suscríbete a nuestro boletín y recibe los mejores pronósticos directamente en tu correo.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input placeholder="Tu email" className="bg-white/10 border-white/20" />
            <Button variant="secondary">Suscribirse</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
