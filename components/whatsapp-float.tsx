import { whatsappLink } from "@/lib/whatsapp"
import { WhatsAppIcon } from "./whatsapp-icon"

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("general")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-whatsapp px-4 py-3.5 text-whatsapp-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105 focus-visible:ring-4 focus-visible:ring-accent/40 focus-visible:outline-none sm:bottom-7 sm:right-7"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-full bg-whatsapp motion-safe:animate-ping motion-safe:opacity-40"
      />
      <WhatsAppIcon className="size-7" />
      <span className="hidden text-sm font-semibold sm:inline">
        Escríbenos
      </span>
    </a>
  )
}
