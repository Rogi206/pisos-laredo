import { Home, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Pisos Laredo</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Tu inmobiliaria de confianza en Laredo, Cantabria. 
              Mas de 20 anos ayudandote a encontrar el hogar de tus suenos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#inicio" className="text-white/70 hover:text-white text-sm transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#propiedades" className="text-white/70 hover:text-white text-sm transition-colors">
                  Propiedades
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-white/70 hover:text-white text-sm transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li className="text-white/70 text-sm">Venta de inmuebles</li>
              <li className="text-white/70 text-sm">Alquiler de propiedades</li>
              <li className="text-white/70 text-sm">Valoracion gratuita</li>
              <li className="text-white/70 text-sm">Asesoramiento legal</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Calle Lopez Sena 13 Bajo<br />39770 Laredo, Cantabria</span>
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:+34654108332" className="hover:text-white transition-colors">
                  654 108 332
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:pisoslaredo@gmail.com" className="hover:text-white transition-colors">
                  pisoslaredo@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Pisos Laredo. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Aviso legal
            </Link>
            <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacidad
            </Link>
            <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
