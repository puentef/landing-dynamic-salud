import { Leaf, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-background text-sm">Félix Puente</p>
                <p className="text-xs text-background/70">Bienestar y Salud Natural</p>
              </div>
            </div>
            <p className="text-background/70 text-sm mb-4">
              Tu socio de confianza en el camino hacia una vida más saludable y llena de energía.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#caracteristicas" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Características
                </a>
              </li>
              <li>
                <a href="#producto" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Producto
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#precios" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Precios
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-background mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Política de Devoluciones
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Aviso Legal
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:info@felixpuente.com"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  info@felixpuente.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+34600000000" className="text-background/70 hover:text-primary transition-colors text-sm">
                  +34 600 000 000
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-background/70 text-sm">España</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Félix Puente | Bienestar y Salud Natural. Todos los derechos reservados.
          </p>
          <p className="text-background/40 text-xs mt-2">
            * Este producto no está destinado a diagnosticar, tratar, curar o prevenir ninguna enfermedad.
          </p>
        </div>
      </div>
    </footer>
  )
}
