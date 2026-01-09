import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Truck, ShieldCheck, RotateCcw } from "lucide-react"

const plans = [
  {
    name: "1 Frasco",
    description: "Suministro para 1 mes",
    price: "59",
    originalPrice: "79",
    popular: false,
    features: ["30 cápsulas", "Envío gratuito", "Guía de uso incluida", "Soporte por email"],
  },
  {
    name: "3 Frascos",
    description: "Suministro para 3 meses",
    price: "149",
    originalPrice: "237",
    popular: true,
    features: [
      "90 cápsulas (30 x 3)",
      "Envío gratuito prioritario",
      "Guía de uso + eBook",
      "Soporte prioritario",
      "Ahorra 37%",
    ],
  },
  {
    name: "6 Frascos",
    description: "Suministro para 6 meses",
    price: "249",
    originalPrice: "474",
    popular: false,
    features: [
      "180 cápsulas (30 x 6)",
      "Envío gratuito express",
      "Guía completa + eBook + Video",
      "Soporte VIP 24/7",
      "Ahorra 47%",
    ],
  },
]

export function Pricing() {
  return (
    <section id="precios" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Elige tu plan de bienestar
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Invierte en tu salud con nuestras opciones flexibles. Todos los planes incluyen envío gratuito.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-card border-border ${plan.popular ? "ring-2 ring-primary shadow-xl" : ""}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  Más Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl font-bold text-foreground">€{plan.price}</span>
                    <span className="text-lg text-muted-foreground line-through">€{plan.originalPrice}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  Añadir al Carrito
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-border">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Truck className="w-6 h-6 text-primary" />
            <span className="text-sm">Envío Gratuito</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <ShieldCheck className="w-6 h-6 text-primary" />
            <span className="text-sm">Pago Seguro</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <RotateCcw className="w-6 h-6 text-primary" />
            <span className="text-sm">Garantía 30 días</span>
          </div>
        </div>
      </div>
    </section>
  )
}
