"use client"

import { useActionState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"
import { submitContact } from "@/app/actions"

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, {})

  return (
    <section id="contacto" className="py-20 sm:py-28 bg-background" aria-label="Contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Contacto
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Hablemos de tu proximo hogar
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos aqui para ayudarte. Contactanos y te asesoraremos
            de forma personalizada y sin compromiso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Direccion</h3>
                    <p className="text-muted-foreground">
                      Calle Lopez Sena 13 Bajo<br />
                      39770 Laredo, Cantabria
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telefono</h3>
                    <a href="tel:+34654108332" className="text-muted-foreground hover:text-primary transition-colors">
                      654 108 332
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:pisoslaredo@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      pisoslaredo@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Horario</h3>
                    <p className="text-muted-foreground">
                      Lunes a Viernes: 10:00 - 13:30 y 16:00 - 19:30<br />
                      Sabados: 10:30 - 13:30<br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 sm:p-8">
              {state.success ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Mensaje enviado
                  </h3>
                  <p className="text-muted-foreground">
                    Gracias por contactarnos. Te responderemos lo antes posible.
                  </p>
                </div>
              ) : (
                <form action={formAction} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Tu nombre"
                        aria-describedby={state.errors?.name ? "name-error" : undefined}
                      />
                      {state.errors?.name && (
                        <p id="name-error" className="text-sm text-red-500">{state.errors.name}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefono *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+34 600 000 000"
                        aria-describedby={state.errors?.phone ? "phone-error" : undefined}
                      />
                      {state.errors?.phone && (
                        <p id="phone-error" className="text-sm text-red-500">{state.errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      aria-describedby={state.errors?.email ? "email-error" : undefined}
                    />
                    {state.errors?.email && (
                      <p id="email-error" className="text-sm text-red-500">{state.errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="¿En que podemos ayudarte?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Cuentanos que estas buscando..."
                      rows={4}
                      aria-describedby={state.errors?.message ? "message-error" : undefined}
                    />
                    {state.errors?.message && (
                      <p id="message-error" className="text-sm text-red-500">{state.errors.message}</p>
                    )}
                  </div>

                  {state.errors?._form && (
                    <p className="text-sm text-red-500">{state.errors._form}</p>
                  )}

                  <Button type="submit" className="w-full" size="lg" disabled={isPending}>
                    {isPending ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar mensaje
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Al enviar este formulario, aceptas nuestra politica de privacidad.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
