import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 py-16">
      <h1 className="text-9xl font-extrabold text-primary">404</h1>
      <h2 className="text-3xl font-bold mt-6 mb-4">Página no encontrada</h2>
      <p className="text-muted-foreground text-center max-w-md mb-8">
        Lo sentimos, la página que estás buscando no existe o ha sido movida a otra ubicación.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild>
          <Link href="/">Volver al inicio</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/articles">Ver noticias</Link>
        </Button>
      </div>
    </div>
  )
}
