"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, MonitorIcon, Dumbbell, Timer, Zap, Award } from "lucide-react"
import type { ReactNode } from "react" // Importamos ReactNode para corregir el error

interface SportRecord {
  id: string
  sport: string
  title: string
  holder: string
  record: string
  year: string
  icon: ReactNode // Usamos ReactNode en lugar de JSX.Element
}

export default function SportsRecordsSection() {
  const [animateIcons, setAnimateIcons] = useState(false)

  // Efecto para animar los iconos cada cierto tiempo
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateIcons(true)
      setTimeout(() => setAnimateIcons(false), 1000)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const featuredRecords: SportRecord[] = [
    {
      id: "1",
      sport: "Atletismo",
      title: "Récord mundial de 100m",
      holder: "Rayo Veloz",
      record: "9.58 segundos",
      year: "2019",
      icon: <MonitorIcon className={`h-8 w-8 ${animateIcons ? "animate-bounce" : ""}`} />,
    },
    {
      id: "2",
      sport: "Halterofilia",
      title: "Levantamiento máximo",
      holder: "Fuerza Titán",
      record: "265 kg",
      year: "2021",
      icon: <Dumbbell className={`h-8 w-8 ${animateIcons ? "animate-pulse" : ""}`} />,
    },
    {
      id: "3",
      sport: "Natación",
      title: "200m mariposa",
      holder: "Carlos Aguas",
      record: "1:50.22",
      year: "2025",
      icon: <Timer className={`h-8 w-8 ${animateIcons ? "animate-spin" : ""}`} />,
    },
    {
      id: "4",
      sport: "Fútbol",
      title: "Goles en una temporada",
      holder: "Goleador Estrella",
      record: "73 goles",
      year: "2023",
      icon: <Trophy className={`h-8 w-8 ${animateIcons ? "animate-bounce" : ""}`} />,
    },
    {
      id: "5",
      sport: "Fórmula Estelar",
      title: "Vuelta más rápida",
      holder: "Marcos Veloz",
      record: "1:18.887",
      year: "2024",
      icon: <Zap className={`h-8 w-8 ${animateIcons ? "animate-pulse" : ""}`} />,
    },
    {
      id: "6",
      sport: "Baloncesto",
      title: "Puntos en un partido",
      holder: "Canasta Suprema",
      record: "108 puntos",
      year: "2022",
      icon: <Award className={`h-8 w-8 ${animateIcons ? "animate-spin" : ""}`} />,
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Récords Mundiales del Deporte</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre las hazañas más impresionantes en el mundo del deporte, marcas que han hecho historia y desafiado
            los límites humanos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredRecords.map((record) => (
            <Card key={record.id} className="overflow-hidden hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">{record.icon}</div>
                  <span className="text-sm font-medium text-muted-foreground">{record.sport}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{record.title}</h3>
                <div className="space-y-1">
                  <p className="text-primary font-bold">{record.record}</p>
                  <p className="text-sm text-muted-foreground">
                    {record.holder} ({record.year})
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/records">Ver todos los récords deportivos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
