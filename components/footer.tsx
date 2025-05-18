import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">PulseSport News</h3>
            <p className="text-muted-foreground">Tu portal líder en noticias deportivas y pronósticos de apuestas.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-muted-foreground hover:text-primary transition-colors">
                  Noticias
                </Link>
              </li>
              <li>
                <Link href="/interviews" className="text-muted-foreground hover:text-primary transition-colors">
                  Entrevistas
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <address className="not-italic text-muted-foreground">
              <p>Avinguda Diagonal, 177</p>
              <p>08018 Barcelona, Spain</p>
              <p className="mt-2">+34 695 678 12</p>
              <p>info@pulsesportnews.co</p>
            </address>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PulseSport News. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
