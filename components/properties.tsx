import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bed, Bath, Maximize, MapPin, ArrowRight } from "lucide-react"

const properties = [
  {
    id: 1,
    title: "Piso en venta en calle Quintana",
    location: "Colindres",
    price: 239999,
    size: 84,
    bedrooms: 2,
    bathrooms: 2,
    description: "Exclusiva vivienda en venta en Colindres, se vende tal y como se ve en las fotos. Listo para entrar a vivir.",
    image: "https://fotoshs.imghs.net/3xlwm//515274/60923521434.515274/515274_60923521434_c3807c78-33b7-43fd-bc83-19c34003f31f.jpg",
    type: "Piso",
  },
  {
    id: 2,
    title: "Chalet unifamiliar",
    location: "Laredo",
    price: 550000,
    size: 240,
    bedrooms: 3,
    bathrooms: 3,
    description: "Exclusivo chalet individual en Laredo con amplia parcela de 500 metros.",
    image: "https://fotoshs.imghs.net/3xlwm//515274/63353883797.515274/515274_63353883797_40425bfc-3d12-4e3d-ba95-5e0d80b4790c.jpg",
    type: "Chalet",
  },
]

function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(price)
}

export function Properties() {
  return (
    <section id="propiedades" className="py-20 sm:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Nuestras propiedades
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Encuentra tu proximo hogar
          </h2>
          <p className="text-muted-foreground text-lg">
            Seleccion de propiedades exclusivas en Laredo y alrededores, 
            perfectas para disfrutar de la costa cantabrica.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {properties.map((property) => (
            <Card 
              key={property.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-primary text-primary-foreground font-medium">
                    {property.type}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/95 text-foreground font-bold text-lg px-3 py-1">
                    {formatPrice(property.price)}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-6">
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{property.location}</span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-1">
                  {property.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {property.description}
                </p>

                {/* Features */}
                <div className="flex items-center gap-4 pb-4 border-b border-border mb-4">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Bed className="w-4 h-4" />
                    <span className="text-sm">{property.bedrooms} hab.</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Bath className="w-4 h-4" />
                    <span className="text-sm">{property.bathrooms} banos</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Maximize className="w-4 h-4" />
                    <span className="text-sm">{property.size} m&sup2;</span>
                  </div>
                </div>

                {/* CTA */}
                <Button className="w-full" asChild>
                  <a href="#contacto">
                    Solicitar informacion
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
