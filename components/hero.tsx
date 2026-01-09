import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Truck, Shield, Award } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <Badge className="mb-4 bg-accent text-accent-foreground hover:bg-accent">
              <Truck className="w-3 h-3 mr-1" />
              Envío Gratuito
            </Badge>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight text-balance mb-6">
              Activa tu energía celular con <span className="text-primary">ACTIVZ GNM-X</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground mb-8 text-pretty">
              Suplemento Activador de Nrf2. Potencia tu vitalidad, protege tus células y recupera el bienestar que
              mereces con la ciencia de la naturaleza.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" asChild className="text-base">
                <a href="#precios">Comenzar Ahora</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base bg-transparent">
                <a href="#producto">Conocer Más</a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span>100% Natural</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="w-5 h-5 text-primary" />
                <span>Calidad Premium</span>
              </div>
            </div>
          </div>

          {/* Product Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-accent/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <img
                src="/supplement-bottle-green-capsules-premium-packaging.jpg"
                alt="ACTIVZ GNM-X - 30 Cápsulas"
                className="relative z-10 w-64 lg:w-80 h-auto drop-shadow-2xl"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card shadow-lg rounded-full px-6 py-2 z-20">
                <p className="text-sm font-semibold text-foreground">30 Cápsulas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
