import { Zap, Heart, Brain, Dna, ShieldCheck, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Dna,
    title: "Activación Nrf2",
    description: "Activa la vía Nrf2, el interruptor maestro de la defensa celular antioxidante de tu cuerpo.",
  },
  {
    icon: Zap,
    title: "Energía Sostenida",
    description: "Experimenta un aumento natural de energía que dura todo el día sin caídas bruscas.",
  },
  {
    icon: Heart,
    title: "Salud Cardiovascular",
    description: "Apoya la función cardiovascular saludable y la circulación óptima.",
  },
  {
    icon: Brain,
    title: "Claridad Mental",
    description: "Mejora el enfoque cognitivo y la claridad mental para un rendimiento óptimo.",
  },
  {
    icon: ShieldCheck,
    title: "Defensa Antioxidante",
    description: "Potencia las defensas naturales de tu cuerpo contra el estrés oxidativo.",
  },
  {
    icon: Sparkles,
    title: "Bienestar General",
    description: "Promueve un estado de bienestar integral para una vida más activa y plena.",
  },
]

export function Features() {
  return (
    <section id="caracteristicas" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            ¿Por qué elegir ACTIVZ GNM-X?
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Descubre los beneficios de activar tu Nrf2 y transformar tu salud celular desde adentro.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
