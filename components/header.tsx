"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-foreground tracking-tight">
                Pisos Laredo
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                Inmobiliaria en Cantabria
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
            <Link
              href="#inicio"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="#propiedades"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Propiedades
            </Link>
            <Link
              href="#contacto"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contacto
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button asChild>
              <a href="#contacto">Contactar</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4" aria-label="Navegación móvil">
              <Link 
                href="#inicio" 
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="#propiedades" 
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Propiedades
              </Link>
              <Link 
                href="#contacto" 
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <Button asChild className="w-full mt-2">
                <a href="#contacto" onClick={() => setIsMenuOpen(false)}>Contactar</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
