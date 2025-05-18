import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Definimos el tipo para la confianza
export type ConfidenceLevel = "Alta" | "Media" | "Baja"

// Definimos la interfaz para las predicciones
export interface Prediction {
  match: string
  date: string
  prediction: string
  odds: string
  confidence: ConfidenceLevel
  expert: string
}

interface PredictionProps {
  prediction: Prediction
}

export default function PredictionCard({ prediction }: PredictionProps) {
  const getConfidenceColor = (confidence: ConfidenceLevel) => {
    switch (confidence) {
      case "Alta":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Media":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Baja":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <Card className="border-2 border-primary/20">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{prediction.match}</CardTitle>
        <p className="text-sm text-muted-foreground">{prediction.date}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium mb-1">Pronóstico del experto:</p>
            <p className="font-bold">{prediction.prediction}</p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium mb-1">Cuota:</p>
              <p className="font-bold text-primary">{prediction.odds}</p>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Confianza:</p>
              <Badge className={getConfidenceColor(prediction.confidence)}>{prediction.confidence}</Badge>
            </div>
          </div>
          <div className="pt-2 border-t">
            <p className="text-sm text-muted-foreground">
              Análisis por: <span className="font-medium">{prediction.expert}</span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
