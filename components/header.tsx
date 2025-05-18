"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">PulseSport</span>
            <span className="text-xl font-semibold">News</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/articles" className="font-medium hover:text-primary transition-colors">
              Noticias
            </Link>
            <Link href="/entrevistas-pronosticos" className="font-medium hover:text-primary transition-colors">
              Entrevistas con Pronósticos
            </Link>
            <Link href="/records" className="font-medium hover:text-primary transition-colors">
              Récords
            </Link>
            <Link href="/about" className="font-medium hover:text-primary transition-colors">
              Sobre Nosotros
            </Link>
            <Link href="/sport-news" className="font-medium hover:text-primary transition-colors">
              Noticias calientes
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button variant="outline" className="hidden md:flex">
              <Link href="/contact" className="font-medium hover:text-primary transition-colors">
                Contacto
              </Link>
            </Button>
            <Button className="md:hidden" variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4">
            <Link href="/" className="font-medium hover:text-primary transition-colors" onClick={toggleMenu}>
              Inicio
            </Link>
            <Link href="/articles" className="font-medium hover:text-primary transition-colors" onClick={toggleMenu}>
              Noticias
            </Link>
            <Link href="/interviews" className="font-medium hover:text-primary transition-colors" onClick={toggleMenu}>
              Entrevistas
            </Link>
            <Link
              href="/entrevistas-pronosticos"
              className="font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Entrevistas con Pronósticos
            </Link>
            <Link href="/about" className="font-medium hover:text-primary transition-colors" onClick={toggleMenu}>
              Sobre Nosotros
            </Link>
            <Link href="/contact" className="font-medium hover:text-primary transition-colors" onClick={toggleMenu}>
              Contacto
            </Link>
            <Button variant="outline" className="w-full">
              Suscribirse
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
