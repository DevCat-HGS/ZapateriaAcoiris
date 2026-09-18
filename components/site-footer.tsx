import { MapPin, Phone } from "lucide-react"
import { business, footerExtraLinks, locations, navLinks, schedule } from "@/lib/site"
import { WHATSAPP_DISPLAY, whatsappLink } from "@/lib/whatsapp"
import { Logo } from "./logo"
import { InstagramIcon, FacebookIcon } from "./social-icons"
import { WhatsAppIcon } from "./whatsapp-icon"

export function SiteFooter() {
  return (
    <footer className="border-t border-primary-foreground/10 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca + redes */}
          <div className="lg:col-span-1">
            <Logo inverted />
            <p className="mt-5 max-w-xs text-pretty text-sm leading-relaxed text-primary-foreground/70">
              Damos nueva vida a tus favoritos. Reparación y restauración de
              calzado, bolsos, ropa y artículos de cuero en Medellín.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={business.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${business.instagram.handle}`}
                className="flex size-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <InstagramIcon className="size-5" />
              </a>
              <a
                href={business.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Facebook ${business.facebook.handle}`}
                className="flex size-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <FacebookIcon className="size-5" />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <nav aria-label="Enlaces del pie de página">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              Navegación
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {[...navLinks, ...footerExtraLinks].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sedes */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              Sedes
            </h3>
            <ul className="mt-4 space-y-4">
              {locations.map((loc) => (
                <li key={loc.id} className="flex gap-2.5 text-sm">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span className="text-primary-foreground/80">
                    <span className="font-medium text-primary-foreground">
                      {loc.name}
                    </span>
                    <br />
                    {loc.address}, {loc.city}
                    <br />
                    <a
                      href={`https://wa.me/${loc.phone.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 pt-1 text-primary-foreground transition-colors hover:text-accent"
                    >
                      <WhatsAppIcon className="size-4 text-accent" />
                      {loc.phoneDisplay}
                    </a>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto + horario */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              Horario de atención
            </h3>
            <ul className="mt-5 space-y-2 text-sm text-primary-foreground/80">
              {schedule.map((s) => (
                <li key={s.days} className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span>
                    <span className="font-medium text-primary-foreground">
                      {s.days}:
                    </span>{" "}
                    {s.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <p>
              © {new Date().getFullYear()} {business.name}. Todos los derechos
              reservados.
            </p>
            <a
              href="/privacy"
              className="text-primary-foreground/80 transition-colors hover:text-accent"
            >
              Privacidad
            </a>
            <a
              href="/garantia"
              className="text-primary-foreground/80 transition-colors hover:text-accent"
            >
              Garantía
            </a>
            <a
              href="/tenido-riesgos"
              className="text-primary-foreground/80 transition-colors hover:text-accent"
            >
              Teñido y riesgos
            </a>
          </div>
          <p>Medellín, Colombia</p>
        </div>
      </div>
    </footer>
  )
}
