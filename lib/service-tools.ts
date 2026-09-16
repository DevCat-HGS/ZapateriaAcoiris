import type { WhatsAppContext } from "./whatsapp"

/**
 * Datos de los selectores interactivos que pide el documento: elegir material de
 * remonta, elegir el material que se quiere pegar y la evaluación previa al
 * teñido. Los tres comparten el mismo componente (ServicePicker).
 */
export interface PickerOption {
  id: string
  label: string
  emoji?: string
  summary: string
  points?: string[]
  note?: string
}

export interface PickerTool {
  heading: string
  intro: string
  question: string
  options: PickerOption[]
  /** Segundo paso opcional, independiente de la opción elegida en el primero. */
  followUp?: {
    question: string
    options: { id: string; label: string; summary: string }[]
  }
  cta: string
  whatsappContext: WhatsAppContext
}

export type ServiceToolId = "remonta-material" | "adhesivo" | "pre-tenido"

export const serviceTools: Record<ServiceToolId, PickerTool> = {
  "remonta-material": {
    heading: "¿Qué material necesita mi zapato?",
    intro:
      "La elección depende del tipo de calzado, del uso, de la construcción y del resultado que buscas. Elige el tipo de calzado y te mostramos las alternativas con las que trabajamos.",
    question: "¿Qué tipo de calzado es?",
    options: [
      {
        id: "clasico",
        label: "Clásico de cuero",
        emoji: "👞",
        summary:
          "En el calzado clásico buscamos estabilidad y una silueta fina que respete la construcción original.",
        points: [
          "Crupón: estructura densa y resistente, coherente con las construcciones tradicionales.",
          "Neolite: alternativa sintética resistente al desgaste y fácil de perfilar.",
        ],
        note: "El espesor se selecciona de acuerdo con la construcción del zapato, no por defecto.",
      },
      {
        id: "casual",
        label: "Casual y de confort",
        emoji: "🥿",
        summary:
          "Aquí priman la flexibilidad y la absorción, porque el zapato se usa muchas horas al día.",
        points: [
          "Crepé: flexibilidad, confort y absorción; existen diferentes calibres y formulaciones.",
          "Caucho expandido: estructura celular que permite soluciones ligeras y flexibles.",
        ],
      },
      {
        id: "bota",
        label: "Bota",
        emoji: "🥾",
        summary:
          "Las botas reciben más carga y más fricción, así que el material debe sostener la estructura.",
        points: [
          "Crupón cuando la bota tiene construcción tradicional y conviene conservarla.",
          "Neolite cuando se busca resistencia al desgaste con menor peso.",
        ],
      },
      {
        id: "tenis",
        label: "Tenis",
        emoji: "👟",
        summary:
          "Un tenis combina espumas, textiles y cauchos, y cualquier material añadido cambia su peso y su pisada.",
        points: [
          "Caucho expandido para mantener la pieza ligera y flexible.",
          "Crepé cuando se busca recuperar amortiguación.",
        ],
        note: "En tenis evaluamos primero si conviene remontar o intervenir solo la zona desgastada.",
      },
    ],
    cta: "Envíanos fotos de la suela y te decimos qué material recomendamos",
    whatsappContext: "calzado",
  },
  adhesivo: {
    heading: "¿Qué material quieres pegar?",
    intro:
      "No existe un único pegante para todo. Elige el material y te explicamos qué preparación necesita antes de aplicar cualquier adhesivo.",
    question: "¿De qué material es la pieza?",
    options: [
      {
        id: "cuero",
        label: "Cuero",
        emoji: "🐄",
        summary:
          "El cuero es poroso, y esa porosidad es justamente lo que permite una buena adhesión si la superficie se prepara.",
        points: [
          "Limpieza para eliminar grasa, ceras y adhesivos anteriores.",
          "Desbaste o rebajado para abrir el poro y dar textura.",
          "Adhesivo compatible con material poroso y flexible.",
        ],
      },
      {
        id: "caucho",
        label: "Caucho",
        emoji: "⚫",
        summary:
          "El caucho es poco poroso y muchas formulaciones necesitan tratamiento previo para que el adhesivo agarre.",
        points: [
          "Lijado o texturizado mecánico de la superficie.",
          "Primer o activador específico según la formulación del caucho.",
          "Presión y tiempo de curado controlados.",
        ],
      },
      {
        id: "sintetico",
        label: "Sintético",
        emoji: "✨",
        summary:
          "Los sintéticos varían mucho entre sí: dos materiales que se ven iguales pueden responder de forma distinta.",
        points: [
          "Identificación del material antes de elegir el adhesivo.",
          "Preparación suave para no dañar la capa de acabado.",
          "Adhesivo que tolere flexión sin volverse quebradizo.",
        ],
      },
      {
        id: "textil",
        label: "Textil",
        emoji: "🧵",
        summary:
          "En textil el adhesivo puede traspasar la trama y marcar la cara visible, así que la dosificación manda.",
        points: [
          "Control de la cantidad de adhesivo para evitar traspaso.",
          "Refuerzo interno cuando la zona recibe tensión.",
          "En varios casos la costura acompaña al pegado.",
        ],
      },
      {
        id: "espuma",
        label: "Espuma",
        emoji: "🫧",
        summary:
          "Las espumas son sensibles a solventes y a la temperatura: un adhesivo inadecuado las deforma o las endurece.",
        points: [
          "Adhesivo compatible con material celular.",
          "Presión moderada para no colapsar la estructura.",
          "Temperatura de trabajo controlada.",
        ],
      },
      {
        id: "eva",
        label: "EVA",
        emoji: "🧽",
        summary:
          "El EVA suele traer un desmoldante de fábrica que impide la adhesión si no se retira.",
        points: [
          "Limpieza y preparación mecánica de la superficie.",
          "Activador cuando la formulación lo requiere.",
          "Tiempo de evaporación antes de unir las piezas.",
        ],
      },
      {
        id: "combinacion",
        label: "Combinación de materiales",
        emoji: "🔀",
        summary:
          "Cuando en la misma unión hay dos materiales distintos, el adhesivo debe funcionar para ambos y para el esfuerzo que recibe la zona.",
        points: [
          "Diagnóstico de cada cara de la unión por separado.",
          "Preparación diferenciada: cada material puede necesitar la suya.",
          "Selección según flexibilidad, área de contacto y tipo de esfuerzo.",
        ],
        note: "Este es el caso en el que más conviene ver la pieza antes de prometer un resultado.",
      },
    ],
    cta: "Envíanos una foto de la zona despegada y la revisamos",
    whatsappContext: "calzado",
  },
  "pre-tenido": {
    heading: "Antes de teñir, evaluamos",
    intro:
      "El teñido industrial implica calor, agua, química y movimiento mecánico. Antes de aceptar una prenda revisamos qué es y de qué está hecha.",
    question: "¿Qué prenda quieres teñir?",
    options: [
      {
        id: "jean",
        label: "Jean",
        emoji: "👖",
        summary:
          "El jean suele responder bien porque su base es algodón, pero es donde más se notan las variables.",
        points: [
          "Los hilos de costura casi siempre son de otro material y pueden conservar su color.",
          "Los remaches, botones y cierres se evalúan aparte.",
          "Las zonas desgastadas pueden absorber el color de forma distinta.",
        ],
      },
      {
        id: "camiseta",
        label: "Camiseta",
        emoji: "👕",
        summary:
          "En camisetas el punto crítico son los estampados, los bordados y los cuellos con elastano.",
        points: [
          "Los estampados pueden alterarse con el calor y el movimiento.",
          "Puños y cuellos suelen llevar elastano y cambiar de tono.",
          "El tejido de punto es más sensible al encogimiento.",
        ],
      },
      {
        id: "pantalon",
        label: "Pantalón",
        emoji: "👖",
        summary:
          "En pantalones el punto crítico son las costuras, los forros de bolsillo y las entretelas de la cintura.",
        points: [
          "Los forros de bolsillo suelen ser de otro material y tomar otro tono.",
          "Cierres y botones se revisan antes del baño.",
          "La mezclilla y el gabardina pueden encoger de forma distinta.",
        ],
      },
      {
        id: "vestido",
        label: "Vestido",
        emoji: "👗",
        summary:
          "Suelen combinar telas y adornos, por lo que la evaluación previa es más detallada.",
        points: [
          "Encajes, apliques y adornos pueden tomar otro tono.",
          "Las cinturillas elásticas se comportan distinto al algodón.",
          "Conviene definir juntos qué resultado es aceptable.",
        ],
      },
      {
        id: "chaqueta",
        label: "Chaqueta",
        emoji: "🧥",
        summary:
          "Son prendas con más piezas: forros, entretelas, bolsillos y cierres que no siempre son de algodón.",
        points: [
          "Los forros y entretelas pueden reaccionar diferente al baño.",
          "Los accesorios metálicos y plásticos se revisan antes.",
          "La construcción puede marcar diferencias de tono entre paneles.",
        ],
      },
      {
        id: "otra",
        label: "Otra prenda",
        emoji: "🧢",
        summary:
          "Si no es un jean, camiseta, pantalón, chaqueta o vestido, igual empezamos por la etiqueta y por una foto de la prenda.",
        points: [
          "La composición manda más que el tipo de prenda.",
          "Forros, entretelas y adornos se evalúan aparte.",
          "Sin etiqueta, la evaluamos en el taller antes de comprometer un tono.",
        ],
      },
    ],
    followUp: {
      question: "¿Qué dice la etiqueta de composición?",
      options: [
        {
          id: "algodon",
          label: "100% algodón",
          summary:
            "Es el escenario más favorable: el algodón es la fibra con la que trabajamos y la que mejor fija el color.",
        },
        {
          id: "poliester",
          label: "Algodón con poliéster",
          summary:
            "El algodón puede absorber el color de una manera diferente al poliéster, así que es esperable un tono final más claro o desigual.",
        },
        {
          id: "elastano",
          label: "Algodón con elastano",
          summary:
            "El elastano es sensible al calor. Ajustamos las condiciones del proceso, pero puede haber cambios de textura o de elasticidad.",
        },
        {
          id: "sin-etiqueta",
          label: "No sé o no tiene etiqueta",
          summary:
            "Sin etiqueta no podemos anticipar el comportamiento de la prenda. En ese caso evaluamos la tela en el taller y te contamos qué es razonable esperar.",
        },
      ],
    },
    cta: "Envíanos una foto de la prenda y de la etiqueta de composición",
    whatsappContext: "ropa",
  },
}
