import { Button } from "@/components/ui/button"
import { MapPin, Phone, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm mb-6">
            <MapPin className="w-4 h-4" />
            <span>Laredo, Cantabria</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
            Tu hogar ideal en la costa de Cantabria
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Encuentra pisos, chalets y apartamentos en Laredo y alrededores. 
            Mas de 20 anos de experiencia ayudandote a encontrar la propiedad perfecta.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold"
              asChild
            >
              <a href="#propiedades">
                Ver propiedades
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white bg-white/10 hover:bg-white/20"
              asChild
            >
              <a href="tel:+34654108332">
                <Phone className="w-4 h-4 mr-2" />
                Llamar ahora
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white">20+</p>
              <p className="text-sm text-white/70 mt-1">Anos de experiencia</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white">500+</p>
              <p className="text-sm text-white/70 mt-1">Familias felices</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white">100%</p>
              <p className="text-sm text-white/70 mt-1">Compromiso</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
