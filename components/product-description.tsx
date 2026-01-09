import { Check } from "lucide-react"

const benefits = [
  "Fórmula científicamente desarrollada",
  "Ingredientes 100% naturales y de alta biodisponibilidad",
  "Sin aditivos artificiales ni conservantes",
  "Fabricado bajo estrictos estándares de calidad",
  "Resultados visibles desde las primeras semanas",
  "Apto para uso prolongado",
]

export function ProductDescription() {
  return (
    <section id="producto" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/green-supplement-capsules-scattered-natural-ingred.jpg"
              alt="Ingredientes naturales de ACTIVZ GNM-X"
              className="rounded-2xl shadow-xl w-full max-w-md h-auto"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
              La ciencia detrás de tu bienestar
            </h2>

            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              ACTIVZ GNM-X es un suplemento revolucionario diseñado para activar la vía Nrf2, conocida como el
              "interruptor maestro" de la defensa celular. Esta vía controla más de 500 genes relacionados con la
              protección antioxidante y la desintoxicación celular.
            </p>

            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Nuestra fórmula exclusiva combina extractos botánicos cuidadosamente seleccionados que trabajan
              sinérgicamente para potenciar las defensas naturales de tu organismo.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
