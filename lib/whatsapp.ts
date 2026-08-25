// Único número de WhatsApp para todo el sitio (sede Laureles / canal principal).
export const WHATSAPP_NUMBER = "573116301609"
export const WHATSAPP_DISPLAY = "+57 311 630 1609"

// Mensajes predeterminados por contexto. El cliente puede editarlos antes de enviar.
export const WHATSAPP_MESSAGES = {
  general:
    "Hola Arcoiris, quisiera solicitar información sobre la reparación de un artículo.",
  cotizar:
    "Hola Arcoiris, me gustaría cotizar la reparación de un artículo. Puedo enviar fotografías.",
  recogida:
    "Hola Arcoiris, estoy interesado(a) en solicitar el servicio de recogida y entrega de un artículo.",
  calzado:
    "Hola Arcoiris, quisiera consultar sobre la reparación de un calzado. Puedo enviar fotografías del artículo.",
  bolsos:
    "Hola Arcoiris, quisiera consultar sobre la reparación de un bolso. Puedo enviar fotografías del artículo.",
  cuero:
    "Hola Arcoiris, quisiera consultar sobre la reparación de un artículo de cuero. Puedo enviar fotografías.",
  ropa:
    "Hola Arcoiris, quisiera consultar sobre la reparación de una prenda. Puedo enviar fotografías del artículo.",
  otros:
    "Hola Arcoiris, quisiera consultar sobre la reparación de un artículo. Puedo enviar fotografías.",
  asesor:
    "Hola Arcoiris, quisiera hablar con un asesor sobre la reparación de un artículo.",
} as const

export type WhatsAppContext = keyof typeof WHATSAPP_MESSAGES

/** Construye el enlace de WhatsApp con un mensaje predeterminado. */
export function whatsappLink(context: WhatsAppContext = "general") {
  const message = WHATSAPP_MESSAGES[context] ?? WHATSAPP_MESSAGES.general
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
