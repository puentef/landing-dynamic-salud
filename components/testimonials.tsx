import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "María García",
    role: "Empresaria, 45 años",
    content:
      "Después de 3 semanas usando ACTIVZ GNM-X, mi nivel de energía ha mejorado increíblemente. Ya no necesito esas tazas extra de café para pasar el día.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Deportista, 38 años",
    content:
      "Como atleta, busco productos naturales que apoyen mi rendimiento. Este suplemento ha marcado una diferencia real en mi recuperación y vitalidad.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Profesora, 52 años",
    content:
      "Estaba escéptica al principio, pero los resultados hablan por sí solos. Me siento con más claridad mental y energía para disfrutar con mi familia.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Miles de personas ya están experimentando los beneficios de ACTIVZ GNM-X.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 lg:p-8">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-foreground mb-6 text-pretty">"{testimonial.content}"</p>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
