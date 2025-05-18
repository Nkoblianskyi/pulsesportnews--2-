import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">PulseSport News</h1>

        <div className="relative h-80 w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src="/modern-journalism-office.png"
            alt="Oficinas de PulseSport News"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Nuestra Historia</h2>
          <p>
            Fundada en 2018 en Ciudad Estelar, PulseSport News nació con la misión de ofrecer a los aficionados al
            deporte una cobertura informativa de calidad, combinada con análisis expertos para pronósticos deportivos.
          </p>

          <p>
            Lo que comenzó como un pequeño blog deportivo se ha convertido en uno de los portales de referencia para
            noticias deportivas y pronósticos de apuestas, gracias a nuestro compromiso con la información veraz y el
            análisis riguroso.
          </p>

          <h2 className="mt-8">Nuestra Misión</h2>
          <p>
            En EstrellaDeporte News creemos que la información deportiva debe ser accesible, precisa y útil. Nos
            esforzamos por:
          </p>

          <ul>
            <li>Proporcionar cobertura informativa de calidad sobre todos los deportes.</li>
            <li>Ofrecer análisis detallados y pronósticos basados en datos.</li>
            <li>Mantener la independencia editorial y el rigor periodístico.</li>
            <li>Fomentar una comunidad de aficionados informados y responsables.</li>
          </ul>

          <h2 className="mt-8">Nuestro Equipo</h2>
          <p>
            Contamos con un equipo de periodistas deportivos, analistas y ex deportistas que aportan su experiencia y
            conocimiento para ofrecer el mejor contenido posible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 relative">
                <Image src="/hombre-periodista-deportivo.png" alt="Antonio López" fill className="object-cover" />
              </div>
              <h3 className="font-bold text-xl mb-1">Antonio López</h3>
              <p className="text-muted-foreground mb-3">Director Editorial</p>
              <p className="text-sm">
                Ex periodista de PulseSport News con más de 15 años de experiencia en periodismo deportivo.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 relative">
                <Image
                  src="/da91ee855124ff736ea6c718aed65774.jpg"
                  alt="Elena Martínez"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-xl mb-1">Elena Martínez</h3>
              <p className="text-muted-foreground mb-3">Jefa de Análisis</p>
              <p className="text-sm">Matemática especializada en estadística deportiva y análisis predictivo.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 relative">
                <Image
                  src="/a13f8ed9a09eea6e90079a82e69cf4e2.jpg"
                  alt="Roberto García"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-xl mb-1">Roberto García</h3>
              <p className="text-muted-foreground mb-3">Analista de Fútbol</p>
              <p className="text-sm">
                Ex futbolista profesional con experiencia en la Liga Estelar y colaborador habitual en medios
                deportivos.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Contacta con Nosotros</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Información de Contacto</h3>
              <address className="not-italic space-y-2">
                <p className="flex items-center">
                  <span className="font-medium mr-2">Dirección:</span>Avinguda Diagonal, 177, 08018 Barcelona, Spain
                </p>
                <p className="flex items-center">
                  <span className="font-medium mr-2">Teléfono:</span> +34 695 678 12
                </p>
                <p className="flex items-center">
                  <span className="font-medium mr-2">Email:</span> info@pulsesportnews.co
                </p>
              </address>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Horario de Atención</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span>9:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado:</span>
                  <span>10:00 - 14:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo:</span>
                  <span>Cerrado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
